"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HiOutlineClock, HiOutlineRefresh } from "react-icons/hi";
import { formatCurrency } from "@/lib/utilities/helpers";

import Image from "next/image";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

function SuperFoodsPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProductsData = async () => {
    const products = await fetch("/api/products", {
      next: {
        revalidate: 60,
      },
    });
    const data = await products.json();
    setProducts(data.slice(0, 8));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  function handleAddToCart() {
    //add to cart

    const newItem = {
      id,
      image,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItems(newItem));
  }
  return (
    <ul className="grid grid-cols-2 gap-2">
      {products.map((product) => (
        <Dialog key={product.product_id}>
          <li>
            <div className="relative">
              <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
              <DialogTrigger>
                <Image
                  src={product.image}
                  alt="cacao image"
                  width={360}
                  height={360}
                  className="z-1"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <h2 className="mt-2 text-lg font-extrabold sm:text-2xl">
                    {product.name.split(" ").slice(0, 2).join(" ")}
                  </h2>
                </div>
              </DialogTrigger>
              <DialogContent>
                <div className="flex gap-4 py-2">
                  <Image
                    src={product.image}
                    alt={product.image + "product image"}
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[18px] font-bold">{product.name}</h2>
                    <p className="text-2xl text-[#55d187]">
                      {formatCurrency(product.price)}
                    </p>
                    <p>{product.ingredients}</p>
                    <div className=" mt-4 bg-gray-200 p-2">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center  gap-1">
                          <HiOutlineClock size={24} />
                          <p className="text-xs">
                            Delivery: 1 to 3 Business days
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiOutlineRefresh size={24} />
                          <p className="text-xs">
                            Returns: Accepted within 48hrs of order
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto ">
                      <button
                        onClick={handleAddToCart}
                        className="w-full rounded-md bg-[#55d187] py-1 text-xl text-white"
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </div>
          </li>
        </Dialog>
      ))}
    </ul>
  );
}

export default SuperFoodsPage;
