"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/hero-images/slider-2-1920x729.jpg?t=2023-11-15T11%3A33%3A40.440Z",
    title: "Quality Control",
    description:
      "We control the process of farming at Herber to deliver the best organic products to our customers throughout the state",
  },
  {
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/hero-images/slider-1-1920x729.jpg",
    title: "Organic Food",
    description:
      "Herber provides local citizens and guests of our town with quality organic fruits, vegetables, and other products.",
  },

  {
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/hero-images/slider-3-1920x729.jpg?t=2023-11-15T11%3A33%3A54.175Z",
    title: "Eco-Friendly",
    description:
      "As the leading organic farm, we maintain an eco-friendly policy of growing and selling healthy food without any additives.",
  },
];
const ImageCarousel = () => {
  const bottomImage =
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/hero-images/bg-top.png?t=2023-11-15T12%3A00%3A28.353Z";

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Carousel
      className="relative"
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      autoPlay={true}
      transitionTime={0}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <div
            className="arrow-container"
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              zIndex: "2",
            }}
          >
            <button
              className="ml-[40px] cursor-pointer border-none bg-[#e9ecef] p-3 text-2xl text-white sm:ml-[60px] md:ml-[80px]"
              type="button"
              onClick={onClickHandler}
              title={label}
            >
              {/* Your icon here */}
              <FaArrowLeft size={16} color="#000" />
            </button>
          </div>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <div
            className="arrow-container"
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              zIndex: "2",
            }}
          >
            <button
              className="mr-[40px] cursor-pointer border-none bg-[#e9ecef] p-3 text-2xl text-white sm:mr-[60px] md:mr-[80px]"
              type="button"
              onClick={onClickHandler}
              title={label}
            >
              {/* Your icon here */}
              <FaArrowRight size={16} color="#000" />
            </button>
          </div>
        )
      }
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="fade-carousel-item"
        >
          <div>
            <Image
              src={item.image}
              alt={`Image ${index}`}
              className="h-auto w-full"
              width={1000}
              height={400}
              layout="responsive"
            />
            <motion.div
              className="absolute inset-0 z-10 ml-[80px] flex h-auto max-w-[600px] flex-col items-start justify-center gap-2 p-4 text-white sm:ml-[160px] sm:gap-4 md:ml-[220px] md:gap-6"
              style={{ color: index < 2 ? "white" : "black" }}
            >
              <motion.h2
                className="font-mangaba text-[40px] font-extrabold tracking-wider sm:text-[80px] md:text-[120px]"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-start text-sm"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              >
                {item.description}
              </motion.p>
              <motion.button
                className="bg-[#3c6a36] px-[32px] py-[16px] text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-in-out hover:bg-[#151515]"
                onClick={() => console.log("clicked")}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              >
                READ MORE
              </motion.button>
            </motion.div>
            <Image
              src={bottomImage}
              height={26}
              width={1100}
              alt="header bottom border"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
        </motion.div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
