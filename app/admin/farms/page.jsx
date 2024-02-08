"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Heading from "@/app/_ui/Heading";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const fetchFarms = async () => {
  const farms = await fetch(`${API_BASE_URL}/api/farms`, {
    next: {
      revalidate: 60,
    },
  });
  if (!farms.ok) throw new Error("Failed to fetch farms.");

  let data = await farms.json();

  return data;
};
export default function FarmsPage() {
  const {
    data,
    error,
    isLoading: LoadingFarms,
  } = useQuery({
    queryKey: ["farms"],
    queryFn: fetchFarms,
  });
  if (LoadingFarms) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Heading>Farms</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Farm</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Visit Duration</TableHead>
            <TableHead>Nearby restaurants</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((farm, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Image
                    src={farm.gallery[0]}
                    alt="farm image"
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell className="font-medium">{farm.id}</TableCell>
                <TableCell className="font-medium">{farm.name}</TableCell>
                <TableCell className="font-medium">{farm.location}</TableCell>
                <TableCell>{farm.duration}</TableCell>
                <TableCell>
                  {farm.restaurants_nearby && farm.restaurants_nearby.length > 0
                    ? farm.restaurants_nearby.map((restaurant, index) => (
                        <div key={index}>{restaurant}</div>
                      ))
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
