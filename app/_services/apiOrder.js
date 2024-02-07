import moment from "moment";
import supabase from "./supabase";

// passing the newOrder as as an array will work since the field in the form are the same as the ones on the table
export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("Order").insert([newOrder]);

  if (error) {
    console.error(error);
    throw new Error("Order could not be created");
  }
  return data;
}

export async function getOrder(userId) {
  const { data, error } = await supabase
    .from("Order")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching order:", error);
    throw new Error("Order could not be retrieved");
  }

  return data;
}

// delete orders by user_id and where status is approved

export async function deleteOrder(userId) {
  const { data, error } = await supabase
    .from("Order")
    .delete()
    .eq("user_id", userId)
    .eq("status", "approved");

  if (error) {
    console.error("Error deleting order:", error);
    throw new Error("Order could not be deleted");
  }

  return data;
}

export async function getAllOrders() {
  const { data, error } = await supabase.from("Order").select("*");

  if (error) {
    console.error("Error fetching orders:", error);
    return [];
  }

  return data;
}
