import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "./SearchBar";

function TopMenu() {
  const totalCartItems = 0;

  return (
    <>
      <div className=" hidden items-center gap-2 py-2 sm:flex">
        <SearchBar />
        <div className="relative sm:rounded-full sm:border sm:border-stone-400 sm:p-2">
          <AiOutlineShoppingCart size={22} />

          <div className="absolute -left-[5px] -top-[2px] h-[18px] w-[18px] rounded-full bg-[#9da452] text-[10px] text-white">
            <div className=" flex items-center justify-center">
              {totalCartItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
