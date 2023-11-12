import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[300px] w-[1200px]" />
      <div className="flex items-center gap-2">
        <Skeleton className="sm: h-auto w-[600px]" />
        <Skeleton className="h-[300px] w-[600px]" />
      </div>
      <Skeleton className="h-[300px] w-[1200px]" />
    </div>
  );
}
