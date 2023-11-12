"use client";
import { useState } from "react";
import { HiMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";

import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import Logo from "../ui/Logo";

import SubMenu from "../ui/SubMenu";
import SearchBar from "../ui/SearchBar";

import { getTotalCartQuantity } from "../redux/cartSlice";
import { useSelector } from "react-redux";

import ClientOnly from "./ClientOnly";
import SheetComponent from "./SheetComponent";
import HoverCardComponent from "./HoverCardComponent";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [query, setQuery] = useState("");

  const items = useSelector((state) => state.cart.cart);

  const totalCartItems = useSelector(getTotalCartQuantity);
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
    <>
      {/* desktop menu */}
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="flex items-center gap-2  ">
          <div className="hidden sm:block">
            <SearchBar />
          </div>
          {/* the hover component displays a menu that indicates, there are any items in the cart */}
          {totalCartItems === 0 && <HoverCardComponent />}
          {/* displaying a pop over menu containing the cart items */}
          {totalCartItems > 0 && <SheetComponent items={items} />}
        </div>
      </nav>
      <div className="mx-auto max-w-2xl">
        <SubMenu />
      </div>

      {/* mobile menu */}
      <nav className="sm:hidden">
        {isOpenSearch && (
          <div className="flex justify-between bg-white px-2 py-1">
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
              <ClientOnly>
                <div onClick={() => navigate("/cart")} className="relative">
                  <AiOutlineShoppingCart size={22} />
                  {totalCartItems > 0 && (
                    <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
                      <div className="-mt-[1px] flex items-center justify-center">
                        {totalCartItems}
                      </div>
                    </div>
                  )}
                </div>
              </ClientOnly>
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
              legacyBehavior
              href={`${link?.link}`}
              key={i}
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              <a className="font-bold">{link?.name}</a>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
