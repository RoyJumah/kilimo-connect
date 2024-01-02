"use client";
import { useQuery } from "@tanstack/react-query";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { IoIosPaw } from "react-icons/io";
import { CiCircleInfo, CiLink, CiHeart } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";

import Carousel from "@/app/_components/Carousel";
import TextExpander from "@/lib/utilities/textExpander";
import Locality from "@/app/_ui/Locality";
import MapComponent from "@/app/_components/Map";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
export default function FarmDetails({ params: { id } }) {
  const fetchFarmDetails = async () => {
    const farmDetails = await fetch(`${API_BASE_URL}/api/farms/${id}`);
    if (!farmDetails.ok) throw new Error("Failed to fetch farm details");
    await new Promise((resolve) => setTimeout(resolve, 600));
    const data = await farmDetails.json();
    return data;
  };

  const {
    data: farmDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["farmDetails", id],
    queryFn: fetchFarmDetails,
  });

  if (isLoading) return <p>Loading...</p>;
  const { gallery, description, name, duration, location, restaurants_nearby } =
    farmDetails;

  return (
    <>
      <div className="mx-auto max-w-6xl p-2 sm:p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="md:text-33xl p-2 text-lg sm:p-4 sm:text-2xl sm:font-semibold md:p-6 md:font-bold">
            {name}
          </h1>
          <div className="space-x-2">
            <CiLink size={24} className="inline-block cursor-pointer" />
            <CiHeart size={24} className="inline-block cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center  sm:gap-2">
          <p className="underline">#{location}</p>
          <span className="inline-block">• Farms</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 p-2 sm:p-4 md:flex-row md:p-6 ">
        <div className="rounded-md p-4 shadow-md md:h-full  md:w-1/3">
          <h2 className="my-1 text-lg sm:my-2 sm:text-xl md:my-4 md:text-2xl">
            About
          </h2>
          <TextExpander
            collapsedNumWords={30}
            expandButtonText="Read more"
            collapseButtonText="Read less"
            text={description}
            className={"text-sm sm:text-base"}
          ></TextExpander>
          <div className="my-auto mt-2 flex flex-col gap-2 sm:mt-3 md:mt-6">
            <div className="space-x-1">
              <PiClockCounterClockwiseLight className="inline-block" />
              <span className="text-sm"> Duration: {duration}</span>
            </div>
            <div className="space-x-1">
              <IoIosPaw className="inline-block" />
              <span className="text-sm"> Meet animal welfare guidelines</span>
              <CiCircleInfo className="inline-block cursor-pointer" />
            </div>
            <div className="space-x-1">
              <LuPencil className="inline-block" />
              <span className="text-sm">
                Suggest edits to improve what we show.
              </span>
            </div>

            <span className="ml-7 cursor-pointer font-semibold underline">
              Improve this listing
            </span>
          </div>
        </div>
        <div className="h-[500px] md:w-2/3">
          <Carousel gallery={gallery} />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 sm:flex-row sm:justify-between">
        <Locality
          images={gallery}
          location={location}
          restaurants={restaurants_nearby}
        />
        <MapComponent name={name} />
      </div>
    </>
  );
}
