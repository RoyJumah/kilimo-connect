"use client";

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function SearchOrder() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const totalCartItems = 0;

  return (
    <>
      <div className=" hidden items-center gap-2 py-2 sm:flex">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-28 rounded-full border-2 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          ></input>
        </form>
        <div className="relative ">
          <AiOutlineShoppingCart size={22} />

          <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-[#9da452] text-[10px] text-white">
            <div className="-mt-[1px] flex items-center justify-center">
              {totalCartItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchOrder;
