import { NextResponse } from 'next/server';

export function middleware(request) {
  let cookie = request.cookies.get('my_token')?.value;
  let reg = request.cookies.get('reg')?.value;

  const isAuthenticated = cookie || false;
  const signUpRoute = '/sign-up';
  const signInRoute = '/sign-in';
  const homeRoute = '/';

  if (isAuthenticated) {
    if ([signUpRoute, signInRoute].includes(request.url.pathname)) {
      return NextResponse.redirect(new URL(homeRoute, request.url));
    } else {
      // Pass "reg" as a query parameter
      const url = new URL(request.url);
      url.searchParams.set('reg', reg);
      return NextResponse.rewrite(url);
    }
  }

  if (![homeRoute, signUpRoute, signInRoute].includes(request.url.pathname)) {
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  return null;
}

export const config = {
  matcher: ['/students/:path*'],
};
