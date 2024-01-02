
import Image from "next/image";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Locality({ location, restaurants }) {
  // Assume `images` is passed as a prop
  const images = [
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/restaurant_images/alex-haney-CAhjZmVk5H4-unsplash.jpg?t=2023-11-14T13%3A51%3A52.611Z",
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/restaurant_images/jason-leung-poI7DelFiVA-unsplash.jpg?t=2023-11-14T13%3A52%3A05.069Z",
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/restaurant_images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg?t=2023-11-14T13%3A52%3A20.167Z",
  ];

  const restaurantNumber = restaurants.length;

  return (
    <div>
      <h2 className="text-xl sm:text-xl md:text-2xl">The area</h2>
      <div className="flex flex-col gap-2">
        <p>{location}</p>
        <p className="font-semibold">Reach out directly</p>
        <ul className="flex items-center gap-2 underline">
          <li className="flex items-center">
            <p>Visit Website</p>
            <span className="inline-block">
              <RiArrowRightUpLine />
            </span>
          </li>
          <li>Call</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6">
        <h3 className="font-semibold">Best nearby</h3>
        <p>Restaurants</p>
        <span>{restaurantNumber} within 3 miles</span>

        {restaurants.map((restaurant, i) => (
          <div key={i} className="mt-2 flex items-center gap-2 sm:mt-4 md:mt-6">
            {images[i] && (
              <div className="h-24 w-24">
                <Image
                  src={images[i]}
                  alt={`Image of ${restaurant}`}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            )}
            <p className="self-start text-sm font-semibold">{restaurant}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
