import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaLocationArrow, FaTwitter } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSquarePinterest,
} from "react-icons/fa6";

export default function SheetComponent() {
  return (
    <Sheet className="relative ">
      <SheetTrigger>
        <CiMenuBurger size={24} className="inline-block cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="z-[100]">
        <SheetHeader>
          <SheetTitle className="mb-[20px] text-xl font-thin sm:mb-[30px] sm:text-2xl md:mb-[40px] md:text-3xl">
            Get in Touch
          </SheetTitle>
        </SheetHeader>
        <p>
          We are always ready to provide you with fresh organic products for
          your home or office. Contact us to find out how we can help you.
        </p>
        <h3 className="pb-[8px] pt-[10px] text-sm text-[#3c6a36] sm:pb-[12px] sm:pt-[15px] sm:text-lg md:pb-[16px] md:pt-[20px] md:text-xl">
          Our Contacts
        </h3>

        <div>
          <Image
            src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/sheet-component/sheet-image.jpg?t=2023-12-15T12%3A49%3A41.478Z"
            alt="Sheet Image"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-4 pt-[15px] sm:pt-[20px] md:pt-[25px]">
          <p className="flex items-center gap-2">
            <FaPhoneAlt size={20} color="#eda407" />
            <span>+1 234 567 89 00</span>
          </p>
          <p className="flex items-center gap-2">
            <FaLocationArrow size={20} color="#eda407" />
            <span className="text-sm">123 Street, City, Country</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMailSharp size={20} color="#eda407" />
            <span className="text-sm">mail@kilimo-connect.org</span>
          </p>
        </div>
        <div className="  pt-[20px] sm:pt-[30px] md:pt-[40px]">
          <div className="border"></div>
        </div>
        <div>
          <div className="flex gap-4 pt-2  sm:pt-4 md:pt-6">
            <FaFacebookF
              size={24}
              className="text-[#9b9b9b] transition-all duration-200 hover:text-[#eda407]"
            />
            <FaInstagram
              size={24}
              className="text-[#9b9b9b] transition-all duration-200 hover:text-[#eda407]"
            />
            <FaTiktok
              size={24}
              className="text-[#9b9b9b] transition-all duration-200 hover:text-[#eda407]"
            />
            <FaSquarePinterest
              size={24}
              className="text-[#9b9b9b] transition-all duration-200 hover:text-[#eda407]"
            />
            <FaTwitter
              size={24}
              className="text-[#9b9b9b] transition-all duration-200 hover:text-[#eda407]"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
