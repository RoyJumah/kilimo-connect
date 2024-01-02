import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useGallery } from "../hooks/useGallery"; // Adjust the import path as needed

const ImageCarousel = ({ imagesPerSlide = 4 }) => {
  const { carouselImages: originalImages } = useGallery();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = originalImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [totalImages]);

  const getSlideImages = (index) => {
    let slideImages = [];
    for (let i = 0; i < imagesPerSlide; i++) {
      slideImages.push(originalImages[(index + i) % totalImages]);
    }
    return slideImages;
  };

  return (
    <div className="mt-4 w-full overflow-hidden p-6 sm:mt-6 md:mt-12">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * (100 / imagesPerSlide)}%)`,
        }}
      >
        {Array.from({ length: totalImages + imagesPerSlide }).map((_, index) =>
          getSlideImages(index % totalImages).map((image, imgIndex) => (
            <div key={`${index}-${imgIndex}`} className="w-1/4 flex-none">
              <Image
                height={420}
                width={308}
                src={image.url}
                alt={`Slide ${index}`}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
