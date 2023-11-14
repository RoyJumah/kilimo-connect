"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [products, setProducts] = useState([]);
  const testimonials = [
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/ben.jpg?t=2023-11-14T15%3A20%3A44.994Z",
      name: "Ben Hadley",
      testimonial:
        "The farm tour opened my eyes to sustainable farming practices, offering a taste of the freshest produce. A must-try for any food enthusiast!",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/dave.jpg?t=2023-11-14T15%3A20%3A56.133Z",
      name: "Dave Bryson",
      testimonial:
        "Exploring the farm with knowledgeable guides was amazing. The connection between farmers and the land is inspiring, and the hands-on activities made it a fun and educational day!",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/steve.jpg?t=2023-11-14T15%3A21%3A07.277Z",
      name: "Steve Miller",
      testimonial:
        "As a foodie, the farm tour was a dream come true! Meeting farmers, witnessing organic practices, and tasting freshly harvested goodies made for an unforgettable experience. Highly recommend!",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/hannah.jpg?t=2023-11-14T15%3A21%3A18.031Z",
      name: "Hannah Smith",
      testimonial:
        "The farm tour transformed me into a huge advocate for organic produce. I didn't know much about sustainable farming before, but now I'm excited to share my experience with others!",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setProducts(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-12 bg-[#e5e7d0] p-8 md:flex-row">
      {/* Testimonials Section */}
      <div className=" p-0 md:w-1/2 md:p-[96px]">
        <span className="font-medium uppercase text-gray-600">
          Testimonials
        </span>
        <h2 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
          Harvesting Memories: A Culinary Adventure Like No Other
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div key={i} className=" p-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  width={80}
                  height={80}
                  alt={`${testimonial.name}'s avatar`}
                />
              </div>
              <p className="mb-2 text-sm text-gray-600">
                {testimonial.testimonial}
              </p>
              <p className="font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-4 gap-2 p-2 sm:grid-cols-3 sm:gap-4 sm:p-[16px] md:w-1/2">
        {products.map((product, i) => (
          <div key={i} className="overflow-hidden">
            <Image
              src={product.image}
              width={250}
              height={250}
              alt={product.name + "image"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
