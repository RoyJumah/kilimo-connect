import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsLoader() {
  return (
    <div className="sm:w-[1200px]">
      <div className="mx-auto my-8 grid grid-cols-[1fr-auto] gap-4 md:grid-cols-[auto_1fr_auto] md:gap-4">
        <Skeleton className="h-[500px] w-[400px]" />
        <div className="flex flex-col items-start justify-start gap-3">
          <Skeleton className="w-[100px]" />

          <Skeleton className="h-[50px] w-[100px]" />
        </div>
        <Skeleton className="h-[300px] w-[300px]" />
      </div>

      <div className="mt-6 flex flex-col gap-2 ">
        <div className="sm:flex-start grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {[...new Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-[75] w-[75]" />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Skeleton className="w-[100px]" />

            <Skeleton className="h-[100px] w-[1200px]" />
          </div>
          <div>
            <Skeleton className="w-[100px]" />

            <Skeleton className="h-[200px] w-[1200px]" />
          </div>
          <div>
            <Skeleton className="w-[100px]" />

            <Skeleton className="h-[50px] w-[100px]" />
          </div>
          <div>
            <Skeleton className="w-[100px]" />

            <Skeleton className="h-[100px] w-[1200px]" />
          </div>
          <div className="flex gap-2">
            {[...new Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-[75] w-[75]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
