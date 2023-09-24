import Image from "next/image";
import React from "react";

function HeroHeader() {
  return (
    <div className="relative cursor-pointer">
      <div className="relative">
        <Image
          src="/images/hero-img/header.jpg"
          alt="header image"
          height={1000}
          width={800}
          className="z-0 h-auto w-full"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="z-1 absolute bottom-0 w-full bg-gray-500/50 px-4 py-3">
          <div className="space-x-2">
            <span className="rounded-sm bg-red-600 p-1 text-xs font-semibold uppercase text-white">
              only here
            </span>
            <span className="rounded-sm bg-green-600 p-1 text-xs font-semibold uppercase text-white">
              facts
            </span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-white transition-all duration-150 hover:text-green-600">
              Today is the last day of the Agro Show! What else can you see?
              LIVE
            </h1>
          </div>
          <div className="space-x-2 text-xs text-white">
            <span>Today, 8:41</span>
            <span className="font-bold">• Joselle Rivera</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
