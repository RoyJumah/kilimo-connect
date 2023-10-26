"use client";

import { getProducts } from "@/services/apiProducts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function SuperFoodsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.slice(0, 8)));
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-2">
      {products.map((product) => (
        <Link href={`/products/${product.product_id}`} key={product.product_id}>
          <div className="relative">
            <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
            <Image
              src={product.image}
              alt="cacao image"
              width={480}
              height={480}
              objectPosition="center"
              className="z-1" // Set z-index to place the image above the background
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
              <h2 className="mt-2 text-lg font-extrabold sm:text-2xl">
                {product.name.split(" ").slice(0, 2).join(" ")}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default SuperFoodsPage;
