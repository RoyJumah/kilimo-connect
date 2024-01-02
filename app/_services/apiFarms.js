import supabase from "./supabase";

export async function getFarms() {
  const { data: farms, error } = await supabase.from("Farms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Farms could not be loaded");
  }

  return farms;
}

export async function getFarmDetails(id) {
  const { data, error } = await supabase
    .from("Farms")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Farm Details could not be loaded");
  }
  return data;
}
