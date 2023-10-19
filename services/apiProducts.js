import supabase from "./supabase";

export async function getProducts() {
  const { data: Products, error } = await supabase.from("Products").select("*");
  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return Products;
}

export async function getProductDetails(id) {
  const { data: Product, error } = await supabase
    .from("Products")
    .select("*")
    .eq("product_id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return Product;
}

export async function getProductByName(name) {
  const { data: Product, error } = await supabase
    .from("Products")
    .select("*")
    .ilike("name", `%${name}%`);

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return Product;
}
