"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function CompanyInfo() {
  const [activeTab, setActiveTab] = useState("tabs-4-1");

  const handleTabClick = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };
  return (
    <div className="mx-auto mt-4 max-w-6xl p-6 sm:mt-8 md:mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8">
        <div className="md:w-1/2">
          <Image
            src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/about-us/about-1-519x446.jpg?t=2023-11-17T02%3A47%3A41.336Z"
            alt="image of tractor harvesting"
            width={519}
            height={446}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2">
          <div id="tabs-4">
            <ul className="flex border-b-[3px] border-[#f1efeb] text-[20px]">
              <li className="flex-1">
                <a
                  href="#tabs-4-1"
                  onClick={(e) => handleTabClick("tabs-4-1", e)}
                  className={`text-20 font-200 block p-2 text-center text-[#9b9b9b] ${
                    activeTab === "tabs-4-1"
                      ? "border-b-3 border-[#3c6a36]"
                      : ""
                  }`}
                >
                  Our Goals
                </a>
              </li>
              <li className="flex-1">
                <a
                  href="#tabs-4-2"
                  onClick={(e) => handleTabClick("tabs-4-2", e)}
                  className={`text-20 font-200 block p-2 text-center text-[#9b9b9b] ${
                    activeTab === "tabs-4-2"
                      ? "border-b-3 border-[#3c6a36]"
                      : ""
                  }`}
                >
                  Our Values
                </a>
              </li>
              <li className="flex-1">
                <a
                  href="#tabs-4-3"
                  onClick={(e) => handleTabClick("tabs-4-3", e)}
                  className={`text-20 font-200 block p-2 text-center text-[#9b9b9b] ${
                    activeTab === "tabs-4-3"
                      ? "border-b-3 border-[#3c6a36]"
                      : ""
                  }`}
                >
                  Our Mission
                </a>
              </li>
            </ul>

            <div>
              <div
                id="tabs-4-1"
                className={`p-4 ${
                  activeTab === "tabs-4-1" ? "animate-fadeIn block " : "hidden"
                }`}
              >
                {/* Content for Our Goals tab */}
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <ul className="mt-2 grid grid-cols-3 gap-4 text-[14px] sm:mt-4 md:mt-6">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Minim veniam</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Nostrud exercitation</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Eiusmod tempor</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Dolore magna</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Laboris nisi</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Officia deserunt</p>
                  </li>
                </ul>
                <div className="mt-12 flex w-full   gap-4 ">
                  <button className="min-w-[200px] bg-[#3c6a36] px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-[1.05] hover:border-2 hover:border-[#151515] hover:bg-transparent hover:text-[#151515]">
                    Read More
                  </button>
                  <button className="min-w-[200px] border-2 border-[#151515] bg-white px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-black transition-all duration-300 ease-out hover:scale-[1.05] hover:border-[#3c6a36] hover:text-[#3c6a36]">
                    Contact Us
                  </button>
                </div>
              </div>
              <div
                id="tabs-4-2"
                className={`p-4 ${
                  activeTab === "tabs-4-2" ? "animate-fadeIn block" : "hidden"
                }`}
              >
                {/* Content for Our Values tab */}
                <p className="text-[14px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <ul className="mt-2 grid grid-cols-3 gap-4 text-[14px] sm:mt-4 md:mt-6">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Minim veniam</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Nostrud exercitation</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Eiusmod tempor</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Dolore magna</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Laboris nisi</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Officia deserunt</p>
                  </li>
                </ul>
                <div className="mt-12 flex w-full   gap-4 ">
                  <button className="min-w-[200px] bg-[#3c6a36] px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-[1.05] hover:border-2 hover:border-[#151515] hover:bg-transparent hover:text-[#151515]">
                    Read More
                  </button>
                  <button className="min-w-[200px] border-2 border-[#151515] bg-white px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-black transition-all duration-300 ease-out hover:scale-[1.05] hover:border-[#3c6a36] hover:text-[#3c6a36]">
                    Contact Us
                  </button>
                </div>
              </div>
              <div
                id="tabs-4-3"
                className={`p-4 ${
                  activeTab === "tabs-4-3" ? "animate-fadeIn block" : "hidden"
                }`}
              >
                {/* Content for Our Mission tab */}
                <p className="text-[14px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <ul className="mt-2 grid grid-cols-3 gap-4 text-[14px] sm:mt-4 md:mt-6">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Minim veniam</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Nostrud exercitation</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Eiusmod tempor</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Dolore magna</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Laboris nisi</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#eda407]">•</span>
                    <p>Officia deserunt</p>
                  </li>
                </ul>
                <div className="mt-12 flex w-full   gap-4 ">
                  <button className="min-w-[200px] bg-[#3c6a36] px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-[1.05] hover:border-2 hover:border-[#151515] hover:bg-transparent hover:text-[#151515]">
                    Read More
                  </button>
                  <button className="min-w-[200px] border-2 border-[#151515] bg-white px-[32px] pb-[19px] pt-[19px] text-sm font-[500] uppercase tracking-wide text-black transition-all duration-300 ease-out hover:scale-[1.05] hover:border-[#3c6a36] hover:text-[#3c6a36]">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
