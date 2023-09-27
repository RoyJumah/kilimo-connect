import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroHeader() {
  return (
    <div className="relative cursor-pointer sm:mx-auto">
      <div className="relative">
        {/* Add a div with a semi-transparent background */}
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

        <Image
          src="/images/hero-img/fresh-produce.jpg"
          alt="header image"
          width={1200}
          height={600}
          objectPosition="center"
          className="z-1" // Set z-index to place the image above the background
          layout="responsive"
        />
        <div className="z-2 absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 py-3">
          <h1 className="text-lg font-bold text-white sm:text-4xl">
            Welcome to Kilimo Connect
          </h1>
          <div>
            <Link
              href="/products"
              className="bg rounded-2xl bg-[#9da452] px-2 py-1 text-[12px] font-bold uppercase text-white sm:px-4 sm:py-2 sm:text-xl"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
