import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  if (
    !data?.session &&
    (req.nextUrl.pathname.startsWith("/bookings") ||
      req.nextUrl.pathname.startsWith("/orders") ||
      req.nextUrl.pathname.startsWith("/profile") ||
      req.nextUrl.pathname.startsWith("/cart"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}
