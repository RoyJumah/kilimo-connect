import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {[...new Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-[360px] w-[360px] " />
      ))}
    </ul>
  );
}
