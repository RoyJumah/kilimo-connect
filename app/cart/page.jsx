"use client";
import useCart from "../_hooks/useCart";
import EmptyCart from "../_features/cart/EmpyCart";
import LinkButton from "../_ui/LinkButton";
import CartItem from "../_features/cart/CartItem";
import OrderSummary from "../_features/cart/OrderSummary";

function Cart() {
  const { cart } = useCart();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className=" px-4 py-3">
      <LinkButton to="/">&larr; Back to menu</LinkButton>
      <div className="mx-auto max-w-6xl p-6 sm:flex sm:justify-between ">
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart?.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
        </ul>

        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
