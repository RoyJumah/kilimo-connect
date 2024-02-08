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
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error deleting booking:", error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}

export async function getBookingDetails(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking details could not be loaded");
  }
  return data;
}

export async function updateBooking({ id, ...booking }) {
  const { data, error } = await supabase
    .from("bookings")
    .update(booking)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

export async function getAllBookings() {
  const { data, error } = await supabase.from("bookings").select("*");
  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("Bookings could not be located");
  }
  return data;
}
