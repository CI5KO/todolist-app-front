import { NextResponse, type NextRequest } from "next/server";

let locales: string[] = ["en", "es"];

const getLocale = (request: NextRequest): string =>
  request.nextUrl.locale || "en";

export function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;

  if (pathname.includes(".") || pathname.includes("/~"))
    return NextResponse.next();

  const pathnameIsMissingLocale: boolean = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale: string = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
