"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getProductDetails } from "@/services/apiProducts";

import Button from "@/app/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItems, getCurrentQuantityById } from "@/app/redux/cartSlice";
import DeleteItem from "@/app/ui/DeleteItem";
import UpdateItemQuantity from "@/app/ui/UpdateItemQuantity";
import ShippingInfoCard from "@/app/components/ShippingInfoCard";

export default function ProductPage({ params: { id } }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const {
    data: productDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  if (isLoading) {
    <p>Loading...</p>;
  }
  if (!productDetails) {
    return <p>Product details not available</p>;
  }
  if (error) return <p>Error:{error.message}</p>; // show an error message if no sneaker

  const isInCart = currentQuantity > 0;
  const { name, image, price, usage, ingredients, description } =
    productDetails;
  console.log({ name, image, price });
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
              src="/images/tags/Warka_Water_Logo.avif"
              alt="digestive icon"
              height={100}
              width={150}
            />
            <Image
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
