import Image from "next/image";

import { formatCurrency } from "@/lib/utilities/helpers";
import useCart from "../../_hooks/useCart";
import { checkout } from "@/app/_stripe/checkout";
import { createOrder } from "@/app/_services/apiOrder";
import { useUser } from "../authentication/useUser";

export default function OrderSummary() {
  const { user } = useUser();
  const userId = user?.id;
  const {
    totalQuantity: itemQuantity,
    cart: items,
    totalPrice,
    clearAllCart: clearCart,
  } = useCart();
  const lineItems = items.map((item, _) => ({
    price: item.stripe_id,
    quantity: item.quantity,
  }));

  const handleCheckout = async () => {
    checkout({ lineItems });

    clearCart();
    // Create new order data
    const newOrder = {
      stripe_id: items[0].stripe_id, // replace with actual stripe_id
      total_price: totalPrice,
      quantity: itemQuantity,
      user_id: userId, // replace with actual user_id
      order_id: Date.now(),
      cart: items,
      status: "pending",
    };

    // Call createOrder function
    try {
      await createOrder(newOrder);
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  return (
    <div className=" mt-4 flex h-[350px] flex-col gap-4 rounded-md bg-stone-200 p-4 sm:mt-0 sm:w-[350px]">
      <div className="mb-6 flex justify-between  border-b border-stone-400 p-2 font-bold">
        <h2>Order Summary</h2>
        <p>{itemQuantity}</p>
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
          className="h-7"
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mpesa-logo.webp?t=2023-08-11T07%3A18%3A12.926Z"
          alt=" mpesa logo"
          height={50}
          width={50}
        />
        <Image
          className="h-7"
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/airtel-logo.png?t=2023-08-11T07%3A18%3A38.948Z"
          alt="airtel logo"
          height={50}
          width={50}
        />
        <Image
          className="h-7"
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/visa-logo.jpg?t=2023-08-11T07%3A18%3A59.656Z"
          alt="visa logo"
          height={50}
          width={50}
        />
        <Image
          className="h-7"
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mastercard-logo.png?t=2023-08-11T07%3A19%3A16.965Z"
          alt="mastercard logo"
          height={50}
          width={50}
        />
      </div>
      <div className=" flex justify-between border-t-2 border-dotted border-stone-400 p-2 font-bold">
        <p>Total</p>
        <span>${totalPrice}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="inline-block rounded-md  bg-green-500 px-4 py-3 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
