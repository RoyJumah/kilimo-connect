import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductsLoader() {
  return (
    <div className="mx-auto my-6 max-w-[200px] sm:my-12 sm:max-w-[1000px]">
      <div className="mb-4 flex gap-4 p-4 text-[14px] sm:justify-center sm:text-[20px]">
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
      </div>
      <div className="grid grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="mb-4 h-[220px] w-[220px]" />
        ))}
      </div>
    </div>
  );
}
