"use client";

import LinkButton from "../ui/LinkButton";

import OrderSummary from "../ui/OrderSummary";

import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { getCart } from "../redux/cartSlice";
import EmptyCart from "../components/EmpyCart";

export default function CartPage() {
  const items = useSelector(getCart);

  if (!items.length) return <EmptyCart />;

  return (
    <div className=" px-4 py-3">
      <LinkButton to="/">&larr; Back to menu</LinkButton>
      <div className="gap-6 sm:flex sm:justify-between">
        <div>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {items?.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
          </ul>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
