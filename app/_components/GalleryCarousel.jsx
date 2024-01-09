import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image"; // Import the Image component

export default function GalleryCarousel({ gallery }) {
  return (
    <Carousel>
      <CarouselContent>
        {gallery.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image} // Replace with the actual image source property
              alt="farm image" // Replace with the actual image alt property
              width={600} // Replace with the actual image width
              height={600} // Replace with the actual image height
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
