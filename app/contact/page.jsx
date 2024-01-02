"use client";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ContactForm from "../_components/ContactForm";

const icons = [
  {
    icon: <MdOutlinePhoneIphone />,

    link: "+254 700 000 000",
    link2: "+254 700 000 000",
  },
  {
    icon: <RiHome2Line />,
    link: "123 Main St Flushing,",
    link2: "New York 11354, USA",
  },
  {
    icon: <LuMessagesSquare />,
    link: "email@example.com",
    link2: "email01@example.com",
  },
];
export default function ContactPage() {
  const pathname = usePathname();
  return (
    <>
      <div className="relative">
        <div className="absolute h-full w-full bg-black opacity-30"></div>
        <div>
          <Image
            src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/about-us/about-us-header.jpg"
            width={400}
            height={1000}
            alt="About Us Header"
            className="h-auto w-full"
            layout="responsive"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-mangaba text-[40px] text-white sm:text-[60px] md:text-[80px]">
            Contact Us
          </h2>
          {/* Breadcrumb */}
          <nav className="text-xl tracking-wide ">
            <ul className="flex gap-2">
              <li>
                <Link href="/" legacyBehavior>
                  <a
                    className={
                      pathname === "/" ? "text-activeLink" : "text-white"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="text-activeLink">/</li>
              <li>
                <Link href="/" legacyBehavior>
                  <a
                    className={
                      pathname === "/contact"
                        ? "pointer-events-none text-activeLink "
                        : "text-white"
                    }
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-6xl p-6 sm:mt-8 md:mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex min-h-[310px] w-[300px]  flex-col items-center justify-center gap-4 border border-[#d7d7d7] shadow-sm "
            >
              <span className=" inline-block text-[60px] text-[#3c6a36]">
                {icon.icon}
              </span>
              <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out hover:text-[#eda407]">
                <Link href={icon.link} legacyBehavior>
                  <a className="inline-block text-[18px] text-primary">
                    {icon.link}
                  </a>
                </Link>
                <Link href={icon.link2} legacyBehavior>
                  <a className="inline-block text-[18px] text-primary">
                    {icon.link2}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </>
  );
}
