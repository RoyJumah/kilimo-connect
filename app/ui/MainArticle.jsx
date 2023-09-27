import Image from "next/image";
import React from "react";

export default function MainArticle() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
        <Image
          src="/images/articles/climate-change.jpg"
          alt="header image"
          width={1200}
          height={600}
          objectPosition="center"
          className="z-1" // Set z-index to place the image above the background
          layout="responsive"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
          <span className="text-md inline-block max-w-max rounded-sm bg-[#9da452] px-[4px] py-[1px] font-semibold uppercase">
            Climate Change
          </span>
          <h2 className="text-md mt-2 text-lg font-extrabold">
            Climate Change Action: Simple Steps for a Greener Future
          </h2>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span>2022-01-12</span>
            <p>• Jerry Spencer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
