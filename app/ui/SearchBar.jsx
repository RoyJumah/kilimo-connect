"use client";

import { useState } from "react";
import { debounce } from "debounce";
import { getProductByName } from "@/services/apiProducts";
import { formatCurrency } from "@/lib/utilities/helpers";
import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function SearchBar() {
  const [products, setProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleSearchName = debounce(async (event) => {
    const searchTerm = event.target.value.trim(); // Trim leading/trailing spaces

    if (searchTerm === "") {
      setProducts([]);
      setIsDropdownVisible(false);
      return;
    }

    setIsSearching(true);

    try {
      const response = await getProductByName(searchTerm);

      if (response) {
        setProducts(response);
        setIsSearching(false);
        setIsDropdownVisible(true);
      } else {
        setProducts([]);
        setIsSearching(false);
        setIsDropdownVisible(false);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 500);

  return (
    <div className="border-b">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="flex w-full items-center">
          <div className="mx-auto flex w-full max-w-[1150px] justify-between gap-10 px-3 py-5 lg:justify-start">
            <div className="w-full">
              <div className="relative">
                <div className="flex items-center">
                  <div className="relative flex w-full items-center border-2 border-gray-900 p-2">
                    <button className="flex items-center">
                      <AiOutlineSearch size={22} />
                    </button>

                    <input
                      className="
                                            w-full
                                            pl-3
                                            text-sm
                                            placeholder-gray-400
                                            focus:outline-none
                                        "
                      onChange={handleSearchName}
                      placeholder="Search for anything"
                      type="text"
                    />

                    {isSearching ? (
                      <BiLoaderCircle className="mr-2 animate-spin" size={22} />
                    ) : null}

                    {isDropdownVisible && products.length > 0 ? (
                      <div className="absolute left-0 top-12 z-20 h-auto w-full max-w-[910px] border bg-white p-1">
                        {products.map((product) => (
                          <div className="p-1" key={product.product_id}>
                            <Link
                              href={`/products/${product.product_id}`}
                              onClick={() => setIsDropdownVisible(false)}
                              className="flex w-full cursor-pointer items-center justify-between p-1 px-2 hover:bg-gray-200"
                            >
                              <div className="flex items-center">
                                <Image
                                  className="rounded-md"
                                  width={40}
                                  height={40}
                                  src={product.image}
                                  alt={product.name + " image"}
                                />
                                <div className="ml-2 truncate">
                                  {product.name}
                                </div>
                              </div>
                              <div className="truncate">
                                {formatCurrency(product?.price)}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
