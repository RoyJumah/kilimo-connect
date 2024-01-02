import { formatCurrency } from "@/lib/utilities/helpers";
import Image from "next/image";
import React from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const fetchProductsData = async () => {
  const products = await fetch(`${API_BASE_URL}/api/products`, {
    next: {
      revalidate: 60,
    },
  });
  if (!products.ok) throw new Error("Failed to fetch products");
  await new Promise((resolve) => setTimeout(resolve, 600));
  const data = await products.json();
  return data.slice(0, 4);
};
export default async function Products() {
  const data = await fetchProductsData();
  return (
    <div className="mx-auto mt-4 max-w-6xl p-6 sm:mt-8 md:mt-12">
      <div className="flex justify-center gap-4 ">
        <div className="relative h-[715px] w-[570px]">
          <Image
            src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/products/home-banner-1-570x715.jpg?t=2023-11-15T16%3A18%3A45.106Z"
            width={800}
            height={500}
            alt="product image"
            layout="responsive"
          />
          <div className="absolute inset-0 flex h-auto w-full items-center justify-center">
            <Image
              src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/products/bg-brush.png?t=2023-11-15T17%3A35%3A18.360Z"
              width={300}
              height={100}
              alt="brush image"
            />
            <div className="absolute z-10 space-y-8 font-mangaba text-2xl font-bold text-stone-800 ">
              <p className="text-center text-[24px] tracking-wider text-[#927f4c] sm:text-[36px] md:text-[48px]">
                Organic
              </p>
              <p className="text-[48px] text-[#3c6a36] sm:text-[56px] md:text-[72px]">
                Vegetables
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {data.map((product, i) => (
            <div key={i}>
              <Image
                src={product.image}
                width={250}
                height={250}
                alt="product image"
                className=" h-[300px] w-[270px]"
              />
              <h2
                className="mt-2 text-center font-semibold
              "
              >
                {product.name
                  .split(" ") // Split the string into an array of words
                  .slice(-2) // Get the last two words from the array
                  .join(" ")}{" "}
                {/* Join the last two words back into a string */}
              </h2>
              <p className="text-center text-sm font-medium  text-[#3c6a36]">
                {formatCurrency(product.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
