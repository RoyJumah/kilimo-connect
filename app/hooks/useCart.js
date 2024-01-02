import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  deleteItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  getCart,
  getTotalCartQuantity,
  getTotalCartPrice,
  // getCurrentQuantityById,
} from "../redux/cartSlice";
const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  const addItem = (item) => {
    dispatch(addItems(item));
  };

  const deleteItem = (itemId) => {
    dispatch(deleteItems(itemId));
  };

  const increaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const decreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  // const getQuantityById = (itemId) => {
  //   return useSelector((state) => getCurrentQuantityById(itemId)(state));
  // };

  // Additional functionalities related to the cart can be added here

  return {
    cart,
    addItem,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    clearAllCart,
    totalQuantity,
    totalPrice,
    // getQuantityById,
  };
};

export default useCart;
