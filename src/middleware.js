import { NextResponse } from 'next/server';

export function middleware(req) {
 
  const session = req.cookies.get('session-id')?.value;

  // Protect both /dashboard and /Dashboard
  const protectedPaths = ['/dashboard', '/Dashboard'];

  const currentPath = new URL(req.url).pathname;
  console.log("session in middle",session)
  if (protectedPaths.includes(currentPath)) {
    if (!session ) {//add anouther condition for more security later
      return NextResponse.redirect(new URL('/Login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/Dashboard'],  // Explicitly mention both
};
