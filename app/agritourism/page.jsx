import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialSection from "../_ui/TestimonialSection";
import FAQ from "../_ui/FAQ";

const fetchFarmsData = async () => {
  const farms = await fetch("http://localhost:3000/api/farms", {
    next: {
      revalidate: 60,
    },
  });
  if (!farms.ok) throw new Error("Failed to fetch farms");
  await new Promise((resolve) => setTimeout(resolve, 600));
  const data = await farms.json();
  return data;
};

export default async function Agitourism() {
  const farms = await fetchFarmsData();

  return (
    <div className="mt-4 sm:mt-6 md:mt-12">
      <h1 className="mb-2 text-center text-xl sm:mb-4 sm:text-3xl">
        Discover Local Farms
      </h1>
      <div className="mx-auto mb-2 max-w-6xl p-6 sm:mb-4 md:mb-6">
        <h2 className="mb-1  text-lg font-bold sm:mb-2 sm:text-xl">
          Featured Farms
        </h2>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {farms.map((farm, i) => (
            <li key={i} className="group relative overflow-hidden">
              <Link legacyBehavior href={`/agritourism/${farm.id}`}>
                <Image
                  src={farm.gallery[0]}
                  alt={farm.name}
                  height={400}
                  width={400}
                  className="relative top-0 transform cursor-pointer transition-transform duration-300 group-hover:-translate-y-6 "
                />
              </Link>
              <div className="z-3 absolute bottom-0 left-0 right-0 flex translate-y-full transform flex-col items-start justify-end bg-[#9da452] px-[20px] py-[15px] text-slate-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-semibold">{farm.name}</h3>
                <p>{farm.description.split(" ").slice(0, 10).join(" ")}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <TestimonialSection />
      <div className="mx-auto max-w-6xl p-6">
        <h2 className="mt-4 pb-2 text-lg sm:mt-8 sm:text-2xl md:mt-12 md:text-3xl">
          Planning Your Visit: Answers to Common Questions
        </h2>
        <FAQ />
      </div>
    </div>
  );
}
