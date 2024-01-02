import { useDispatch } from "react-redux";

import Button from "./Button";
import { deleteItems } from "../_redux/cartSlice";
import toast from "react-hot-toast";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItems(productId));
    toast.info("Item deleted from cart", { autoClose: 2000 });
  }

  return (
    //this is a faster way of dispatching an action from the store without having the need to create a handler fxn
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
