import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Product",
};

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return <>{children}</>;
}
