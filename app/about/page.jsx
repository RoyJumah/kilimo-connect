"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CompanyInfo from "../_components/CompanyInfo";

import Partners from "../_components/Partners";

export default function AboutPage() {
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
            About Our Farms
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
                      pathname === "/about"
                        ? "pointer-events-none text-activeLink "
                        : "text-white"
                    }
                  >
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <CompanyInfo />

      <Partners />
    </>
  );
}
