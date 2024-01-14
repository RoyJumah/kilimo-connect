import { useQuery } from "react-query";

export function useBookings() {
  const fetchBookings = async () => {
    const res = await fetch(`${API_BASE_URL}/api/bookings`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  const { data, error, isLoading, isError } = useQuery(
    "bookings",
    fetchBookings,
  );

  return { data, error, isLoading, isError };
}
