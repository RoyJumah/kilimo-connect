import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className=" justify-between sm:flex  sm:w-[800px]">
      <p className="mt-7 font-semibold">Your shopping cart is empty!</p>
      <Button type="secondary" to="/" className="self-end">
        Continue Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
