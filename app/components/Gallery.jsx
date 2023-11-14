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
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-07.jpeg?t=2023-11-14T14%3A49%3A01.524Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-08.jpeg?t=2023-11-14T14%3A49%3A11.908Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-09.jpeg?t=2023-11-14T14%3A49%3A22.048Z",
    },
  ];
  return (
    <div className="mt-4 text-center sm:mt-6 md:mt-10">
      <h2 className="mx-auto mb-2 inline-block border-b border-b-stone-600 pb-2 text-xl font-extrabold capitalize text-stone-800 sm:text-2xl md:mb-4 md:text-4xl">
        Instagram
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
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
