import { NextResponse } from 'next/server';

export function middleware(req) {
    const isAuthenticated = req.cookies.get('next-auth.session-token');

    if (!isAuthenticated && req.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/shopping-cart', '/wishlist', '/user-settings/:path*', '/payment-success'],
};