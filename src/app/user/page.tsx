import Header from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "User",
};

export default function User(): React.ReactElement {
    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header
                category="Page"
                title="Users"
            />
        </div>
    );
}
