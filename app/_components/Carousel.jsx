import * as React from "react";
import { useGallery } from "../_hooks/useGallery";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export function ImageCarousel() {
  const { carouselImages: originalImages } = useGallery();
  const descriptions = [
    "Farm establishment",
    "New partners",
    "Opening our online store",
    "Farm innovations",
    "Farming industry leader",
    // Add more descriptions if you have more images
  ];
  const years = [1999, 2003, 2008, 2014, 2019]; // Add the years
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="mt-4  w-full p-6 sm:mt-8 md:mt-12 "
    >
      <h2 className="text-center font-mangaba text-[40px] sm:text-[60px] md:text-[80px]">
        Our History
      </h2>
      <CarouselContent className="-ml-1">
        {originalImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <CarouselItem className=" mb-4  pl-1 md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Image
                  height={380}
                  width={420}
                  src={image.url}
                  alt={image.alt || `Carousel image ${index + 1}`}
                />
                <p className="cursor-pointer pt-4 text-center text-[20px] capitalize hover:text-[#3c6a36]">
                  {descriptions[index]}
                </p>
              </div>
            </CarouselItem>
            <div className="carousel-line"></div>
            <div className="carousel-dot"></div>
            <div className="mt-[10px] text-center text-[20px] text-[#3c6a36]">
              {years[index]}
            </div>
          </div>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
