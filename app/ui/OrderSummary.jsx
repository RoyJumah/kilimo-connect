import { formatCurrency } from "../../lib/utilities/helpers";
import Image from "next/image";

import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "../redux/cartSlice";
import { useState } from "react";
import axios from "axios";

export default function OrderSummary() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  // const [redirecting, setRedirecting] = useState(false);

  const cartDetails = useSelector((state) => state.cart.cart);
  console.log({ cartDetails });

  // const redirectToCheckout = async () => {
  //   // Create Stripe checkout
  //   const {
  //     data: { id },
  //   } = await axios.post("/api/checkout_sessions", {
  //     items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
  //       price: id,
  //       quantity,
  //     })),
  //   });

  //   // Redirect to checkout
  //   const stripe = await getStripe();
  //   await stripe.redirectToCheckout({ sessionId: id });
  // };

  return (
    <div className=" mt-4 flex h-[350px] flex-col gap-4 rounded-md bg-stone-200 p-4 sm:mt-0 sm:w-[350px]">
      <div className="mb-6 flex justify-between  border-b border-stone-400 p-2 font-bold">
        <h2>Order Summary</h2>
        <p>{totalQuantity}</p>
      </div>
      <div className="flex justify-between text-sm font-bold">
        <p>items total</p>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div className="flex justify-between text-sm font-bold">
        <p>Shipping</p>
        <span className="tracking-wide">TBC</span>
      </div>

      <div className="flex justify-center gap-2">
        <Image
          width={24}
          height={24}
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mpesa-logo.webp?t=2023-08-11T07%3A18%3A12.926Z"
          alt=" mpesa logo"
        />
        <Image
          width={24}
          height={24}
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/airtel-logo.png?t=2023-08-11T07%3A18%3A38.948Z"
          alt="airtel logo"
        />
        <Image
          width={24}
          height={24}
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/visa-logo.jpg?t=2023-08-11T07%3A18%3A59.656Z"
          alt="visa logo"
        />
        <Image
          width={24}
          height={24}
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mastercard-logo.png?t=2023-08-11T07%3A19%3A16.965Z"
          alt="mastercard logo"
        />
      </div>
      <div className=" flex justify-between border-t-2 border-dotted border-stone-400 p-2 font-bold">
        <p>Total</p>
        <span>${totalPrice}</span>
      </div>
      <button
        onClick={console.log("clicked")}
        className="inline-block rounded-md bg-[#9da452] px-4 py-3 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
      >
        Checkout
      </button>
    </div>
  );
}
