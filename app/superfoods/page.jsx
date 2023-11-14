"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HiOutlineClock, HiOutlineRefresh } from "react-icons/hi";
import { formatCurrency } from "@/lib/utilities/helpers";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";

const fetchProductsData = async () => {
  const products = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 60,
    },
  });
  if (!products.ok) throw new Error("Failed to fetch products");
  await new Promise((resolve) => setTimeout(resolve, 600));
  const data = await products.json();
  return data.slice(0, 8);
};

function SuperFoodsPage() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
  });

  if (isLoading) return <Loading />;

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
    <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-2 p-6">
      {data.map((product, i) => (
        <Dialog key={i}>
          <li>
            <div className="relative">
              <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
              <DialogTrigger>
                <Image
                  src={product.image}
                  alt="cacao image"
                  width={300}
                  height={300}
                  className="z-1"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
                  <h2 className="mt-2 text-lg font-extrabold sm:text-xl">
                    {product.name}
                  </h2>
                </div>
              </DialogTrigger>
              <DialogContent>
                <div className="flex gap-4 py-2">
                  <Image
                    src={product.image}
                    alt={product.image + "product image"}
                    width={175}
                    height={175}
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
