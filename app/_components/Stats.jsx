import { Separator } from "@/components/ui/separator";
import { CiTrophy } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSunDim } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Image from "next/image";

export default function Stats() {
  const bottomImage =
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/hero-images/bg-top.png?t=2023-11-15T12%3A00%3A28.353Z";
  const stats = [
    { icon: <CiTrophy />, title: "Awards", number: 10 },
    { icon: <BiHomeAlt2 />, title: "Products", number: "2k" },
    { icon: <LuSunDim />, title: "Happy Clients", number: 580 },
    { icon: <HiOutlineUserGroup />, title: "Farmers", number: 20 },
  ];
  return (
    <div className="mt-4  sm:mt-8 sm:overflow-hidden md:mt-12">
      <div className="sm:md-[400px] relative h-[500px] md:h-[300px]">
        <div className="absolute h-full w-full bg-black opacity-60"></div>
        <Image
          alt="bg-parallax-2"
          height={300}
          width={1000}
          layout="responsive"
          src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/about-us/bg-parallax-2.jpg?t=2023-11-16T07%3A30%3A27.059Z"
        />
        <div className="absolute inset-0 mx-auto grid max-w-6xl grid-cols-1  space-x-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <li className="relative z-10 list-none text-white">
                <div className="flex flex-col items-center">
                  <div className="flex items-center ">
                    <p className="text-[42px] font-light sm:text-[56px] md:text-[70px]">
                      {stat.number}
                    </p>
                    <span className="text-[56px] text-[#eda407]">
                      {stat.icon}
                    </span>
                  </div>
                  <p className="text-[12px] font-light sm:text-[16px] md:text-[20px]">
                    {stat.title}
                  </p>
                </div>
              </li>
              {index !== stats.length - 1 && (
                <div className="h-[60px] sm:h-[80px] md:h-[100px] ">
                  <Separator orientation="vertical" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Image
          src={bottomImage}
          height={26}
          width={1100}
          alt="header bottom border"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </div>
  );
}
