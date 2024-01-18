import { getBookings } from "@/app/_services/apiBooking";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";

export function useBookings() {
  const { user } = useUser();
  const id = user?.id;
  console.log("id", id);
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookings(id),
    // Only run the query if `id` is defined
    enabled: !!id,
  });

  return { isLoading, bookings, error };
}
