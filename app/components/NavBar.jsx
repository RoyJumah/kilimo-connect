"use client";
import { useState } from "react";
import { HiMenu, HiOutlineUser, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "../ui/Logo";
import TopMenu from "../ui/TopMenu";
import SubMenu from "../ui/SubMenu";
import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import { clearCart, getTotalCartQuantity } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "@/lib/utilities/helpers";
import UpdateItemQuantity from "../ui/UpdateItemQuantity";
import DeleteItem from "../ui/DeleteItem";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cart);

  const totalCartItems = useSelector(getTotalCartQuantity);
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleIsOpenSearch() {
    setIsOpenSearch(!isOpenSearch);
  }

  function handleClearCart() {
    dispatch(clearCart());
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
        <div className="flex items-center gap-2  ">
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          {totalCartItems === 0 && (
            <HoverCard>
              {/* used the hover component from shadcn ui to display the menu indicating no items are in the cart */}
              <HoverCardTrigger>
                <TopMenu />
              </HoverCardTrigger>
              <HoverCardContent className="text-xs">
                No products in the cart
              </HoverCardContent>
            </HoverCard>
          )}
          {/* displaying a pop over menu containing the cart items */}
          {totalCartItems > 0 && (
            <Sheet className="relative">
              <SheetTrigger>
                <TopMenu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <ul className="flex  grow flex-col divide-stone-200 pt-0.5">
                  {items.map((item, i) => (
                    <li className="flex gap-4 py-2" key={item.product_id}>
                      <Image
                        src={item.image}
                        alt={item.name + "product image"}
                        width={50}
                        height={50}
                      />
                      <div className="flex  grow flex-col pt-0.5">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm font-bold">
                            {formatCurrency(item.price)}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between ">
                          <p className="text-sm">Qty: {item.quantity}</p>

                          <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity productId={item.id} />
                            <DeleteItem productId={item.id} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className=" absolute bottom-0 border-gray-300 pb-4">
                    {/* Subtotal */}
                    <p className="flex justify-between text-base font-bold">
                      <p>Subtotal:</p>
                      <span className="inline-block">
                        {formatCurrency(
                          items.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0,
                          ),
                        )}
                      </span>
                    </p>
                    {/* Shipping and taxes message */}
                    <div className="flex flex-col gap-2">
                      <p className="mt-1 text-xs text-stone-600">
                        Shipping and taxes will be calculated at checkout.
                      </p>
                      {/* Checkout button */}

                      <button
                        to="/checkout"
                        type="small"
                        className="mt-4 inline-block rounded-md bg-[#0ca678] p-2 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed "
                      >
                        Checkout
                      </button>

                      {/* Continue shopping link */}
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xs">or</p>
                        <Link
                          href="/products"
                          className=" inline-block text-xs text-[#087f5b] underline"
                        >
                          Continue Shopping
                        </Link>
                        <span className="text-[#087f5b]">&#x2192;</span>
                      </div>
                    </div>
                  </div>
                </ul>
              </SheetContent>
            </Sheet>
          )}
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
                {totalCartItems > 0 && (
                  <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
                    <div className="-mt-[1px] flex items-center justify-center">
                      {totalCartItems}
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
