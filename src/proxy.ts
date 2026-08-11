import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req: any) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth
  const isAuthRoute = nextUrl.pathname === '/login' || nextUrl.pathname === '/register'
  
  if (isAuthRoute) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }
    return
  }

  // Protect internal routes
  if (nextUrl.pathname.startsWith('/app') || nextUrl.pathname.startsWith('/admin') || nextUrl.pathname.startsWith('/driver') || nextUrl.pathname.startsWith('/enterprise') || nextUrl.pathname.startsWith('/partner')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl))
    }

    const role = req.auth?.user?.role

    if (nextUrl.pathname.startsWith('/admin') && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }
    
    if (nextUrl.pathname.startsWith('/driver') && role !== 'DRIVER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }
    
    if (nextUrl.pathname.startsWith('/enterprise') && role !== 'ENTERPRISE_ADMIN' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }

    if (nextUrl.pathname.startsWith('/partner') && role !== 'PARTNER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/app', nextUrl))
    }
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
