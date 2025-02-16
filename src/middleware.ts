import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: Request) {
  const token = (await cookies()).get("jwtToken")?.value;
  const { pathname } = new URL(req.url);

// Root path: if user is logged in, go to dashboard; otherwise, go to login
if (pathname === "/") {
  if (token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
  // If user is login and trying to access /login page, redirect to /dashboard
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If user is not login and trying to access protected routes (e.g., /dashboard)
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login","/"],
};
