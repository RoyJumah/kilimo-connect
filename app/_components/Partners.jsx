import Image from "next/image";
import React from "react";

export default function Partners() {
  const images = [
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/partners/clients-1-270x145.png",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/partners/clients-2-270x145.png?t=2023-11-17T16%3A07%3A00.816Z",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/partners/clients-3-270x145.png?t=2023-11-17T16%3A07%3A16.070Z",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/partners/clients-4-270x145.png?t=2023-11-17T16%3A07%3A41.678Z",
    },
  ];
  return (
    <div className="mt-4  sm:mt-8 md:mt-12">
      <div className="mx-auto max-w-6xl p-6">
        <h2 className="mb-2 text-center font-mangaba text-[40px] sm:mb-4 sm:text-[60px] md:mb-6 md:text-[80px]">
          Our Partners
        </h2>
        <div className="flex gap-4 filter">
          {images.map((image, index) => (
            <div
              key={index}
              className="  border border-[#d7d7d7] bg-[#ffffff] transition-all ease-in-out "
            >
              <Image
                src={image.image}
                width={270}
                height={145}
                alt="Partners"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
