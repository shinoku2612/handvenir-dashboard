import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(requets: NextRequest) {
    return NextResponse.redirect(new URL("/", requets.url));
}
export const config = {
    matcher: "/ecommerce",
};
