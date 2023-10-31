import supabase from "@/services/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data: Products, error } = await supabase
      .from("Products")
      .select("*");
    if (error) {
      console.error(error);
      throw new Error("Products could not be loaded");
    }
    return NextResponse.json(Products);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
