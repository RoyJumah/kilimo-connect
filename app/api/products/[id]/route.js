import supabase from "@/services/supabase";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { id } = context.params;
    console.log({ id });
    const { data: product, error } = await supabase
      .from("Products")
      .select("*")
      .eq("product_id", id)
      .single();

    if (error) {
      console.error(error);
      throw new Error("Product could not be loaded");
    }
    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return new NextResponse("Product could not be loaded", { status: 500 });
  }
}
