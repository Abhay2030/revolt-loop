import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const role = (req.auth?.user as any)?.role

  const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth')
  const isPublicRoute = nextUrl.pathname === '/' || 
                        nextUrl.pathname.startsWith('/login') || 
                        nextUrl.pathname.startsWith('/about') || 
                        nextUrl.pathname.startsWith('/how-it-works') || 
                        nextUrl.pathname.startsWith('/verify-certificate')

  if (isApiAuthRoute) return NextResponse.next()

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', nextUrl))
  }

  if (isLoggedIn) {
    // RBAC Enforcements
    if (nextUrl.pathname.startsWith('/admin') && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }

    if (nextUrl.pathname.startsWith('/driver') && role !== 'DRIVER') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }

    if (nextUrl.pathname.startsWith('/enterprise') && role !== 'ENTERPRISE_ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }
  }

  return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
