import Image from "next/image";
import React from "react";

export default function Gallery() {
  const images = [
    { url: "/images/gallery/image-01.jpeg" },
    { url: "/images/gallery/image-02.jpeg" },
    { url: "/images/gallery/image-03.jpeg" },
    { url: "/images/gallery/image-04.jpeg" },
    { url: "/images/gallery/image-05.jpeg" },
    { url: "/images/gallery/image-06.jpeg" },
    { url: "/images/gallery/image-07.jpeg" },
    { url: "/images/gallery/image-08.jpeg" },
    { url: "/images/gallery/image-09.jpeg" },
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
