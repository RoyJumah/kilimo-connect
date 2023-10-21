"use client";
import { useState } from "react";
import { HiMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Logo from "../ui/Logo";
import TopMenu from "../ui/TopMenu";
import SubMenu from "../ui/SubMenu";
import { useCart } from "../context/cart";
import SearchBar from "../ui/SearchBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const cart = useCart();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleIsOpenSearch() {
    setIsOpenSearch(!isOpenSearch);
  }

  const mobileLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Discover",
      link: "/discover",
    },
    {
      name: "Superfoods",
      link: "/superfoods",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];
  return (
    <div>
      {/* desktop menu */}
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <SearchBar />
          <HoverCard>
            {/* used the hover component from shadcn ui to display the menu indicating no items are in the cart */}
            <HoverCardTrigger>
              <TopMenu />
            </HoverCardTrigger>
            {cart.cartCount() === 0 && (
              <HoverCardContent className="text-xs">
                No products in the cart
              </HoverCardContent>
            )}
          </HoverCard>
        </div>
      </nav>
      <div className="mx-auto max-w-2xl">
        <SubMenu />
      </div>

      {/* mobile menu */}
      <nav className="sm:hidden">
        {isOpenSearch && (
          <div className="flex justify-between bg-white p-3">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              {isOpen ? <HiOutlineX size={24} /> : <HiMenu size={24} />}
            </div>

            <div className="flex gap-4 ">
              <AiOutlineSearch
                size={24}
                onClick={handleIsOpenSearch}
                className="cursor-pointer"
              />
              <HiOutlineUser size={24} />
              <div onClick={() => navigate("/cart")} className="relative">
                <AiOutlineShoppingCart size={22} />
                {cart.cartCount() > 0 && (
                  <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
                    <div className="-mt-[1px] flex items-center justify-center">
                      {cart.cartCount()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {!isOpenSearch && (
          <form
            onSubmit={handleSubmit}
            className=" flex w-full items-center border-b-2  p-1 "
          >
            <input
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full   px-4 py-2 text-sm transition-all duration-300 placeholder:text-xs placeholder:text-stone-400 focus:outline-none  "
            />
            <button className="flex items-center" onClick={handleIsOpenSearch}>
              <HiOutlineX size={22} />
            </button>
          </form>
        )}

        <ul
          className={`fixed left-0 right-0 top-12 z-[999] flex flex-col items-center gap-2 bg-white pb-2 transition-all duration-500 ease-in ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {mobileLinks.map((link, i) => (
            <Link
              href={`${link?.link}`}
              // href="/"
              key={i}
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              <p className="font-bold">{link?.name}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
