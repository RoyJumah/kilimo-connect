"use client";
import { getProductsInStock } from "@/data/dummy-stock";

import { motion } from "framer-motion";
import Image from "next/image";
export default function page() {
  const products = getProductsInStock();

  return (
    <>
      <div className="flex justify-between border-b border-b-slate-200 p-4 sm:mb-4">
        <h2 className="text-lg">Products</h2>

        <select name="pets" id="pet-select" className="outline-none">
          <option value="dog">Sort By</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>

      <ul className="mt-2  grid gap-2  sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-2">
        {products.map((product, i) => (
          <motion.li
            key={i}
            className="overflow-hidden"
            // style={{ width: `${imageSize.width}px` }} prevents the layout shift when the image loads
            // this is achieved by setting the width of the image container to the desired width

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              width={200}
              height={200}
              alt={product.name}
              layout="responsive"
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
}
