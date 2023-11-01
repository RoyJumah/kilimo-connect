"use client";

import Image from "next/image";

import Button from "@/app/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItems, getCurrentQuantityById } from "@/app/redux/cartSlice";
import DeleteItem from "@/app/ui/DeleteItem";
import UpdateItemQuantity from "@/app/ui/UpdateItemQuantity";
import ShippingInfoCard from "@/app/components/ShippingInfoCard";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsLoader from "./ProductDetailsLoader";

const fetchProductDetails = async (id) => {
  const productDetails = await fetch(`/api/products/${id}`);
  if (!productDetails.ok) throw new Error("Failed to fetch product details");
  await new Promise((resolve) => setTimeout(resolve, 1200));
  const data = await productDetails.json();
  return data;
};

export default function ProductPage({ params: { id } }) {
  const fetchProductDetails = async () => {
    const productDetails = await fetch(`/api/products/${id}`);
    if (!productDetails.ok) throw new Error("Failed to fetch product details");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const data = await productDetails.json();
    return data;
  };
  const {
    data: productDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: fetchProductDetails,
  });

  console.log({ productDetails });

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  if (isLoading) return <ProductDetailsLoader />;
  const isInCart = currentQuantity > 0;
  const { name, image, price, usage, ingredients, description } =
    productDetails;

  function handleAddToCart() {
    //add to cart

    const newItem = {
      id,
      image,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItems(newItem));
  }

  return (
    <div className="sm:w-[1200px]">
      <div className="mx-auto my-8 grid grid-cols-[1fr-auto] gap-4 md:grid-cols-[auto_1fr_auto] md:gap-4">
        <Image
          src={image}
          width={300}
          height={300}
          alt={name || "product image"}
          priority
          className="h-auto w-auto"
        />
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="text-xl font-bold">{name}</h1>
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </div>
          )}
          {!isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
        <ShippingInfoCard />
      </div>

      <div className="mt-6 flex flex-col gap-2 ">
        <div className="sm:flex-start grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          <Image
            src="/images/tags/vegan.avif"
            alt="vegan icon"
            height={75}
            width={75}
          />
          <Image
            src="/images/tags/organic.avif"
            alt="organic icon"
            height={75}
            width={75}
          />
          <Image
            src="/images/tags/pure.avif"
            alt="pure icon"
            height={75}
            width={75}
          />
          <Image
            src="/images/tags/gluten.avif"
            alt="gluten icon"
            height={75}
            width={75}
          />
          <Image
            src="/images/tags/digestive.avif"
            alt="digestive icon"
            height={75}
            width={75}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold">{name}</h2>
            <p>{description}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Ingredients</h2>
            <p>{ingredients}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">How To Use</h2>
            <p>{usage}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Why Rainforest Foods </h2>
            <p>
              Rainforest Foods will fund one square metre of cloud forest in the
              Ecuadorian Neblina Reserve for every pack sold. We protect
              biodiversity and preserve rainforests with our Social Partner
              Rainforest Concern, and we support Warka Water to bring safe water
              to rural communities in Cameroon, Togo and Haiti.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="h-auto w-auto"
              src="/images/tags/Warka_Water_Logo.avif"
              alt="digestive icon"
              height={100}
              width={150}
            />
            <Image
              className="h-auto w-auto"
              src="/images/tags/Rainforest_Concern_Logo.avif"
              alt="digestive icon"
              height={75}
              width={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
