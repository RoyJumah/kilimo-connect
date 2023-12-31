import Image from "next/image";
import React from "react";

import { formatCurrency } from "@/lib/utilities/helpers";

import useCart from "@/app/_hooks/useCart";
import UpdateItemQuantity from "@/app/_ui/UpdateItemQuantity";
import DeleteItem from "@/app/_ui/DeleteItem";

export default function CartItem({ item }) {
  const { id, name, quantity, image, price } = item;
  const { getQuantityById } = useCart();
  const currentQuantity = getQuantityById(id);
  return (
    <li className="flex flex-col gap-2 py-3 sm:flex-row  sm:items-center sm:justify-between sm:gap-12 ">
      <div>
        <Image
          width={40}
          height={40}
          className="w-10"
          src={image}
          alt="product name"
        />
      </div>
      <p className="mb-1  text-sm sm:mb-0 sm:text-base">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between text-sm font-bold sm:gap-6">
        <p>{formatCurrency(price)}</p>
        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />
        <DeleteItem productId={id} />
      </div>
    </li>
  );
}
