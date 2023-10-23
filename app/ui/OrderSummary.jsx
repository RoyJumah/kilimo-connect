import { useRouter } from "next/navigation";
import { formatCurrency } from "../../utils/helpers";
import Image from "next/image";
import { useCart } from "../context/cart";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "../redux/cartSlice";

export default function OrderSummary() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  const router = useRouter();
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
        data-set="proceed-to-confirm-order"
        onClick={() => router("/checkout")}
        className="inline-block rounded-md bg-[#9da452] px-4 py-3 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}