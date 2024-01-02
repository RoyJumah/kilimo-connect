import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel({ gallery }) {
  return (
    <>
      <div className="my-2 sm:my-4">
        <Carousel
          showArrows={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
        >
          {gallery.map((image, index) => (
            <div key={index} className="h-auto w-full">
              <Image
                src={image}
                width={500}
                height={500}
                alt={`farm image ${index}`}
                className="rounded-md"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
