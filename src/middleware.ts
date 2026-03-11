import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "findyourpace.app";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") ?? url.hostname;

  // Redirecionar www.findyourpace.app para findyourpace.app (canónico)
  if (host === "www.findyourpace.app") {
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Redirecionar HTTP para HTTPS (em produção; Vercel já faz na edge, isto é fallback)
  if (url.protocol === "http:" && host === CANONICAL_HOST) {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Aplica a todos os pathnames exceto:
     * - _next/static
     * - _next/image
     * - favicon, etc.
     */
    "/((?!_next/static|_next/image|favicon\\.svg|og\\.png|ads\\.txt).*)",
  ],
};
