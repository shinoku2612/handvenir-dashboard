import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Handvenir Dashboard",
        template: "%s | Handvenir Dashboard"
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
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                    <div
                        className={
                            true
                                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full"
                                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                        }
                    >
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
