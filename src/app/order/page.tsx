import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Metadata } from "next";
import React from "react";
import OrderRow from "../_private/OrderRow";
import { Order } from "@/models/entity.model";

export const metadata: Metadata = {
    title: "Order",
};

export default async function Order(): Promise<React.ReactElement> {
    const response = await fetch(`${process.env.APP_DOMAIN}/api/order/`, {
        cache: "no-store",
    });
    const orders: Array<Order> = await response.json();
    console.log(orders)
    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header
                category="Page"
                title="Orders"
            />
            <SearchBar />

            <div className="mt-4">
                {/* <DataTable
                    headers={[
                        "User",
                        "Receiver",
                        "Method",
                        "Shipping address",
                        "Total",
                        "Status",
                        "Action",
                    ]}
                    renderData={orders}
                    RowItem={OrderRow}
                /> */}
            </div>
        </div>
    );
}
