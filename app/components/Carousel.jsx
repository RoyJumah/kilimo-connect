import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel({ gallery }) {
  if (!gallery || gallery.length === 0) {
    // Render a placeholder or loading message when gallery data is not available
    return <p>No images available</p>;
  }

  return (
    <div className="my-2 sm:my-4">
      <Carousel
        showArrows={true}
        autoPlay={false}
        interval={3000}
        infiniteLoop={true}
        showThumbs={true}
        // Set the width of the carousel
        height="500px" // Set the height of the carousel
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
  );
}
