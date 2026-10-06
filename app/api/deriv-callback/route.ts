import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const token1 = req.nextUrl.searchParams.get("token1");
  if(!token1) return NextResponse.redirect(new URL("/", req.url));
  const res = NextResponse.redirect(new URL("/dashboard", req.url));
  res.cookies.set("deriv_token", token1, {maxAge: 86400});
  return res;
}