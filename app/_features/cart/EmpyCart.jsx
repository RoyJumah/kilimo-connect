import Button from "../../_ui/Button";

function EmptyCart() {
  return (
    <div className=" mx-auto max-w-6xl  justify-between p-6 sm:flex">
      <p className="mt-7 font-semibold">Your shopping cart is empty!</p>
      <Button type="secondary" to="/" className="self-end">
        Continue Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
