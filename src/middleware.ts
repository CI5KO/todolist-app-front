'use server'

import { NextResponse, type NextRequest } from 'next/server'

const locales: string[] = ['en', 'es']

const getLocale = (request: NextRequest): string =>
  request.nextUrl.locale || 'en'

export function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname
  const jwt = request.cookies.get('jwt')

  if (pathname.includes('.') || pathname.includes('/~')) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale: boolean = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale: string = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  if (pathname === '/en' || pathname === '/es') {
    if (jwt) {
      const url = request.nextUrl.clone()
      url.pathname += '/home'
      return NextResponse.redirect(url)
    } else {
      return NextResponse.next()
    }
  }

  if (jwt) return NextResponse.next()

  if (!pathname.endsWith('/en') || !pathname.endsWith('/es')) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
