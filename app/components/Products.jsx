"use client";
import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  getBestSellingProducts,
  getFeaturedProducts,
} from "@/data/dummy-products";
import Image from "next/image";


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
      <AnimatePresence mode="wait">
        {activeList === "bestSellingProducts" && (
          <motion.ul
            key="bestSelling"
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {bestSellingProducts.map((product) => (
              <motion.li
                key={product.id}
                className="overflow-hidden"
                style={{ height: `${imageSize.height}px` }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  width={imageSize.width}
                  height={imageSize.height}
                  alt={product.name}
                  layout="responsive"
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
        {activeList === "featuredProducts" && (
          <motion.ul
            key="featured"
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {featuredProducts.map((product) => (
              <motion.li
                key={product.id}
                className="overflow-hidden"
                // style={{ width: `${imageSize.width}px` }} prevents the layout shift when the image loads
                // this is achieved by setting the width of the image container to the desired width
                style={{ height: `${imageSize.height}px` }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  width={imageSize.width}
                  height={imageSize.height}
                  alt={product.name}
                  layout="responsive"
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Products;
