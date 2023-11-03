"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TopMenu from "../ui/TopMenu";
import Image from "next/image";
import UpdateItemQuantity from "../ui/UpdateItemQuantity";
import DeleteItem from "../ui/DeleteItem";
import { formatCurrency } from "@/lib/utilities/helpers";
import Link from "next/link";
import ClientOnly from "./ClientOnly";
import { checkout } from "../stripe/checkout";

export default function SheetComponent({ items }) {
  const lineItems = items.map((item, i) => ({
    price: item.stripe_id,
    quantity: item.quantity,
  }));
  return (
    <ClientOnly>
      <Sheet className="relative">
        <SheetTrigger>
          <TopMenu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <ul className="flex  grow flex-col divide-stone-200 pt-0.5">
            {items.map((item, i) => (
              <li className="flex gap-4 py-2" key={i}>
                <Image
                  src={item.image}
                  alt={item.name + "product image"}
                  width={50}
                  height={50}
                />
                <div className="flex  grow flex-col pt-0.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm font-bold">
                      {formatCurrency(item.price)}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between ">
                    <p className="text-sm">Qty: {item.quantity}</p>

                    <div className="flex items-center gap-3 sm:gap-8">
                      <UpdateItemQuantity productId={item.id} />
                      <DeleteItem productId={item.id} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <div className=" absolute bottom-0 border-gray-300 pb-4">
              {/* Subtotal */}
              <div className="flex justify-between text-base font-bold">
                <p>Subtotal:</p>
                <span className="inline-block">
                  {formatCurrency(
                    items.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0,
                    ),
                  )}
                </span>
              </div>
              {/* Shipping and taxes message */}
              <div className="flex flex-col gap-2">
                <p className="mt-1 text-xs text-stone-600">
                  Shipping and taxes will be calculated at checkout.
                </p>
                {/* Checkout button */}

                <button
                  onClick={() => {
                    checkout({
                      lineItems,
                    });
                  }}
                  type="small"
                  className="mt-4 inline-block rounded-md bg-[#0ca678] p-2 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed "
                >
                  Checkout
                </button>

                {/* Continue shopping link */}
                <div className="flex items-center justify-center gap-2">
                  <p className="text-xs">or</p>
                  <Link
                    href="/products"
                    className=" inline-block text-xs text-[#087f5b] underline"
                  >
                    Continue Shopping
                  </Link>
                  <span className="text-[#087f5b]">&#x2192;</span>
                </div>
              </div>
            </div>
          </ul>
        </SheetContent>
      </Sheet>
    </ClientOnly>
  );
}
