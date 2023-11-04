import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./app-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Handvenir Dashboard",
        template: "%s | Handvenir Dashboard",
    },
    description: "The management tool for Handvenir store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
