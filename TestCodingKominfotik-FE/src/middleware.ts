// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const landingPagePath = '/dashboard/data/pasien/daftar';

  const token = await getToken({ req: request });
  const authCookie = request.cookies.get('next-auth.session-token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/(unauthenticated)');
  const isPublicPage = ['/login', '/register', '/forgot-password'].includes(request.nextUrl.pathname);

  if (isPublicPage) {
    if (token || authCookie) {
      return NextResponse.redirect(new URL(landingPagePath, request.url));
    }
    return NextResponse.next();
  }

  if (!token && !authCookie && !isPublicPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|bpsdm-images|favicon.ico).*)'],
};