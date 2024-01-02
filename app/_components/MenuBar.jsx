import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { formatCurrency } from "@/lib/utilities/helpers";
import { checkout } from "../_stripe/checkout";

import useCart from "../_hooks/useCart";
import UpdateItemQuantity from "../_ui/UpdateItemQuantity";
import { AiOutlineShoppingCart } from "react-icons/ai";

function MenuBar() {
  const router = useRouter();
  const { totalQuantity: itemQuantity, cart: items, totalPrice } = useCart();
  const lineItems = items.map((item, _) => ({
    price: item.stripe_id,
    quantity: item.quantity,
  }));

  const handleCart = () => {
    router.push("/cart");
  };
  if (itemQuantity <= 0) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <AiOutlineShoppingCart size={22} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Cart is empty</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else {
    return (
      <>
        {items.map((item, i) => (
          <DropdownMenu key={i}>
            <DropdownMenuTrigger>
              <AiOutlineShoppingCart size={22} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex flex-col gap-4 py-2">
                  <div>
                    <p className="text-sm sm:text-[15px] ">
                      In Cart: {itemQuantity} Products
                    </p>
                    <p className="sm:text-[15px text-sm">
                      Total Price: {formatCurrency(totalPrice)}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src={item.image}
                      alt={item.name + "product image"}
                      width={70}
                      height={70}
                    />

                    <div className="flex flex-col items-start justify-center gap-2 ">
                      <p className="text-[16px] font-medium">
                        {item.name.split(" ").slice(0, 3).join(" ")}
                      </p>

                      <div className="flex items-center gap-4">
                        <UpdateItemQuantity productId={item.id} />
                        <p className="text-[16px]">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="mt-4 inline-block border-2  border-black bg-[#fff] px-4 py-2 text-[15px] font-semibold uppercase  tracking-wide text-stone-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-offset-2 disabled:cursor-not-allowed"
                      onClick={handleCart}
                    >
                      Go to Cart
                    </button>
                    <button
                      onClick={() => {
                        checkout({
                          lineItems,
                        });
                      }}
                      type="primary"
                      className="mt-4 inline-block bg-[#0ca678]  px-4 py-2 text-[15px] font-semibold uppercase  tracking-wide text-slate-50 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed "
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </>
    );
  }
}
export default MenuBar;
