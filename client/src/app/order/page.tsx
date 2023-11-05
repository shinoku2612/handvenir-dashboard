import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Order",
};

export default function Order(): React.ReactElement {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header
                category="Page"
                title="Orders"
            />
        </div>
    );
}
