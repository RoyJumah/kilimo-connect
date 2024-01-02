import supabase from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("Products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return products;
}

export async function getProductDetails(id) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("product_id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product details could not be loaded");
  }
  return data;
}
