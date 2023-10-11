import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroHeader() {
  return (
    <>
      <div className="relative cursor-pointer sm:mx-auto">
        <div className="relative">
          {/* Add a div with a semi-transparent background */}
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

          <Image
            src="/images/hero-img/header-img.jpg"
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
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative ">
          <div className="relative ">
            <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
            <Image
              src="/images/hero-img/grapes.jpg"
              alt="header image"
              width={1200}
              height={600}
              objectPosition="center"
              className="h-full w-full"
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-end  p-2 text-white sm:p-4 ">
              <h2 className="mt-2 text-end text-base font-extrabold sm:text-2xl">
                Why Eat <br /> Superfoods
              </h2>
              <div className="sm:mt-2">
                <Link
                  href="/"
                  className="bg rounded-2xl bg-[#9da452] px-1 py-[2px] text-[8px] font-bold uppercase text-white sm:px-4 sm:py-2 sm:text-base"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="relative ">
            <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
            <Image
              src="/images/hero-img/mountain.jpg"
              alt="header image"
              width={1200}
              height={600}
              objectPosition="center"
              className="h-full w-full"
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-end  p-2 text-white sm:p-4 ">
              <h2 className="mt-2 text-end text-base font-extrabold sm:text-2xl">
                Our <br /> Philosophy
              </h2>
              <div className="sm:mt-2">
                <Link
                  href="/"
                  className="bg rounded-2xl bg-[#9da452] px-1 py-[2px] text-[8px] font-bold uppercase text-white sm:px-4 sm:py-2 sm:text-base"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="relative ">
          <div className="relative ">
            <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
            <Image
              src="/images/hero-img/human-nature.jpg"
              alt="header image"
              width={1200}
              height={600}
              objectPosition="center"
              className="h-full w-full"
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col  items-center justify-center p-2 text-white">
              <h2 className="mt-2 text-base font-extrabold sm:text-2xl">
                Man & Nature Relationship
              </h2>
              <div className="sm:mt-4">
                <Link
                  href="/"
                  className="bg rounded-2xl bg-[#9da452] px-1 py-[2px] text-[8px] font-bold uppercase text-white sm:px-4 sm:py-2 sm:text-base"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroHeader;
