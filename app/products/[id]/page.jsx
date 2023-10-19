"use client";

import { getProductDetails } from "@/services/apiProducts";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductPage({ params: { id } }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // fetch product details by id

    getProductDetails(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="sm:w-[1200px]">
      <div className="mb-20 flex flex-col gap-6 md:flex-row ">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.name}
        />
        <h1 className="text-xl font-bold">{product.name}</h1>
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
            <h2 className="text-base font-semibold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Ingredients</h2>
            <p>{product.ingredients}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">How To Use</h2>
            <p>{product.usage}</p>
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
