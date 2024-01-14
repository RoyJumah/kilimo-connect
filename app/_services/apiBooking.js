import supabase from "./supabase";

export async function getBookings(userId) {
  if (typeof userId !== "string" || !userId) {
    throw new Error("Invalid user ID");
  }

  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be located");
  }

  return bookings;
}

export async function createBooking(booking) {
  const { data, error } = await supabase.from("bookings").insert([booking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

export async function deleteBooking(userId) {
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("user_id", userId)
    .eq("status", "approved");

  if (error) {
    console.error("Error deleting booking:", error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}
