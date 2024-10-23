import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isAuth = false;

export function middleware(request: NextRequest) {
  if (isAuth) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/dashboards/:path*',
};
