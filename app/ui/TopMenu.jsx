import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/cart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../redux/cartSlice";

function TopMenu() {
  const cart = useCart();
  const totalCartItems = useSelector(getTotalCartQuantity);

  return (
    <div className="hidden items-center gap-2 py-2 sm:flex">
      <div className="relative sm:rounded-full sm:border sm:border-stone-400 sm:p-2">
        <AiOutlineShoppingCart size={22} />
        {totalCartItems > 0 && (
          <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
            <div className="-mt-[1px] flex items-center justify-center">
              {totalCartItems}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopMenu;
