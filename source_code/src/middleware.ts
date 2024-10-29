import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PUBLIC_URL } from '@/constants/urls';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname === PUBLIC_URL.HOME) {
    return NextResponse.redirect(new URL(PUBLIC_URL.LOGIN, request.url));
  }
  if (token && request.nextUrl.pathname === PUBLIC_URL.LOGIN) {
    return NextResponse.redirect(new URL(PUBLIC_URL.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [PUBLIC_URL.LOGIN, '/:path*'],
};
