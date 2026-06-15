import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "portfolio-admin-token";

async function expectedToken(): Promise<string> {
  const pass = process.env.ADMIN_PASSWORD ?? "admin123";
  const encoded = new TextEncoder().encode(`portfolio-admin:${pass}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const expected = await expectedToken();
    if (token !== expected) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
