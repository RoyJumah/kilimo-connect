"use client";
import {
  getBestSellingProducts,
  getFeaturedProducts,
} from "@/data/dummy-products";
import Image from "next/image";
import { useState } from "react";

function Products() {
  const bestSellingProducts = getBestSellingProducts();
  const featuredProducts = getFeaturedProducts();
  const [activeList, setActiveList] = useState("bestSellingProducts");

  function handleShowBestSellingProducts() {
    setActiveList("bestSellingProducts");
  }

  function handleShowFeaturedProducts() {
    setActiveList("featuredProducts");
  }

  // Define the desired image size
  const imageSize = {
    width: 200, // Adjust the width to your desired size
    height: 200, // Adjust the height to your desired size
  };

  return (
    <div className="mx-auto my-6 max-w-[200px] sm:my-12 sm:max-w-[1000px]">
      <div className="mb-4 flex gap-4 p-4 text-[14px] sm:justify-center sm:text-[20px]">
        <button
          onClick={handleShowBestSellingProducts}
          className={`${
            activeList === "bestSellingProducts"
              ? "border-b-2 border-stone-600 text-stone-700"
              : "text-stone-500  hover:text-stone-700"
          }`}
        >
          Best Sellers
        </button>
        <button
          onClick={handleShowFeaturedProducts}
          className={`${
            activeList === "featuredProducts"
              ? "border-b-2 border-stone-600 text-stone-700"
              : "text-stone-500  hover:text-stone-700"
          }`}
        >
          Featured Products
        </button>
      </div>
      {activeList === "bestSellingProducts" && (
        <ul className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {bestSellingProducts.map((product) => (
            <li key={product.id}>
              <Image
                src={product.image}
                width={imageSize.width}
                height={imageSize.height}
                alt={product.name}
                layout="responsive"
              />
            </li>
          ))}
        </ul>
      )}
      {activeList === "featuredProducts" && (
        <ul className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {featuredProducts.map((product) => (
            <li key={product.id}>
              <Image
                src={product.image}
                width={imageSize.width}
                height={imageSize.height}
                alt={product.name}
                layout="responsive"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
