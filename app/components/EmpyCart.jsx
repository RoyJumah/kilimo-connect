import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className=" flex justify-between">
      <p className="mt-7 font-semibold">Your cart is empty!</p>
      <Button className="self-end" to="/">
        &larr; Back to menu
      </Button>
    </div>
  );
}

export default EmptyCart;
