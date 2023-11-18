import Image from "next/image";
import React from "react";

export default function Gallery() {
  const images = [
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-01.jpeg?t=2023-11-14T14%3A47%3A49.591Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-02.jpeg?t=2023-11-14T14%3A48%3A02.368Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-03.jpeg",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-04.jpeg?t=2023-11-14T14%3A48%3A29.819Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-05.jpeg?t=2023-11-14T14%3A48%3A40.823Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-06.jpeg?t=2023-11-14T14%3A48%3A50.677Z",
    },
  ];
  return (
    <div className="mx-auto mt-4 max-w-6xl p-6 text-center sm:mt-6 md:mt-10">
      <h2 className="mx-auto mb-2 inline-block  pb-2 font-mangaba text-[40px] font-thin capitalize sm:text-[60px] md:mb-4 md:text-[80px]">
        Our Gallery
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 md:gap-4 lg:gap-6">
        {images.map((image, i) => (
          <div key={i}>
            <Image
              src={image.url}
              alt="gallery image"
              width={1200}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
