import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex justify-between border-b border-b-slate-200 p-4 sm:mb-4">
        <Skeleton className="w-[100px]" />

        <select name="pets" id="pet-select" className="outline-none">
          <option value="dog">Sort By</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>

      <ul className="mt-2  grid gap-2  sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-2">
        {[...new Array(31)].map((_, i) => (
          <Skeleton key={i} className="h-[240px] w-[180px] " />
        ))}
      </ul>
    </>
  );
}
