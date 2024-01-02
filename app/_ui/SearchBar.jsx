"use client";

import { useEffect, useRef, useState } from "react";
import { debounce } from "debounce";

import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";

import Link from "next/link";

import ClientOnly from "../_components/ClientOnly";

export default function SearchBar() {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(null);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const dropdownRef = useRef(null);

  const handleSearchName = debounce(async (event) => {
    //we are going to trim the search term for any leading white spaces
    const searchTerm = event.target.value.trim();
    if (searchTerm == "") {
      setItems([]);
      return;
    }
    console.log({ searchTerm });

    setIsSearching(true);

    try {
      const response = await fetch(
        `http://localhost:3000/api/product/search-by-name/${searchTerm}`,
      );
      const result = await response.json();

      if (result) {
        setItems(result);
        setIsDropDownVisible(true);
        setIsSearching(false);
        return;
      }
      setItems([]);
      setIsSearching(false);
      setIsDropDownVisible(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 500);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <ClientOnly>
      <div className="relative flex w-28 rounded-full border border-[#b6bc79] bg-inherit px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-[#bfc48a] focus:ring-opacity-50 sm:w-64 sm:focus:w-72">
        <input
          type="text"
          placeholder="Search product #"
          onChange={handleSearchName}
          className="w-full outline-none"
          ref={dropdownRef}
        />

        {isSearching ? (
          <BiLoaderCircle className="mr-2 animate-spin" size={22} />
        ) : null}

        {isDropDownVisible && items.length > 0 ? (
          <div className="absolute left-0 top-12 z-20 h-auto w-full max-w-[910px] border bg-white p-1">
            {items.map((item, i) => (
              <div className="p-1" key={i}>
                <Link
                  href={`/products/${item.product_id}`}
                  className="flex w-full cursor-pointer items-center justify-between p-1 px-2 hover:bg-gray-200"
                  onClick={() => setIsDropDownVisible(false)}
                >
                  <div className="flex items-center">
                    <Image
                      className="rounded-md"
                      width={20}
                      height={20}
                      alt="product image"
                      src={item?.image}
                    />
                    <div className="ml-2 truncate text-xs">{item?.name}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </ClientOnly>
  );
}
