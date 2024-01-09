"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/ben.jpg?t=2023-11-14T15%3A20%3A44.994Z",
      name: "Ben Hadley",
      testimonial:
        "The farm tour opened my eyes to sustainable farming practices, offering a taste of the freshest produce. A must-try for any food enthusiast!",
      role: "Regular Client",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/dave.jpg?t=2023-11-14T15%3A20%3A56.133Z",
      name: "Dave Bryson",
      testimonial:
        "Exploring the farm with knowledgeable guides was amazing. The connection between farmers and the land is inspiring, and the hands-on activities made it a fun and educational day!",
      role: "Regular Client",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/steve.jpg?t=2023-11-14T15%3A21%3A07.277Z",
      name: "Steve Miller",
      testimonial:
        "As a foodie, the farm tour was a dream come true! Meeting farmers, witnessing organic practices, and tasting freshly harvested goodies made for an unforgettable experience. Highly recommend!",
      role: "Regular Client",
    },
    {
      image:
        "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/hannah.jpg?t=2023-11-14T15%3A21%3A18.031Z",
      name: "Hannah Smith",
      testimonial:
        "The farm tour transformed me into a huge advocate for organic produce. I didn't know much about sustainable farming before, but now I'm excited to share my experience with others!",
      role: "Regular Client",
    },
  ];

  //display the active card

  return (
    <div
      className="relative mt-4 flex h-[600px] w-full items-center justify-center bg-cover bg-center p-6 sm:mt-8 md:mt-12"
      style={{
        backgroundImage: `url(https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/about-us/bg-parallax-2.jpg?t=2023-11-16T07%3A30%3A27.059Z)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50">
        <h2 className="text-center font-mangaba text-[40px] text-[#fff] sm:text-[60px] md:text-[80px]">
          What People Say
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-100 mb-4 flex flex-col items-center"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
