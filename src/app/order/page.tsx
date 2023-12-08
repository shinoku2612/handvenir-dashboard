import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Metadata } from "next";
import React from "react";
import OrderRow from "../_private/OrderRow";
import { Order } from "@/models/entity.model";
import ConfirmModal from "@/components/ConfirmModal";
import { getAllOrders } from "@/services/order.service";

export const metadata: Metadata = {
    title: "Order",
};

export default async function Order({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
    const boostId = searchParams.boost;
    const orders: Array<Order> = await getAllOrders();
    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header
                category="Page"
                title="Orders"
            />
            <SearchBar />

            <div className="mt-4">
                <DataTable
                    headers={[
                        "User",
                        "Receiver",
                        "Method",
                        "Shipping address",
                        "Total",
                        "Status",
                        "Boost",
                    ]}
                    renderData={orders}
                    RowItem={OrderRow}
                />
            </div>
            {boostId ? (
                <ConfirmModal
                    message="Are you sure to boost this order status?"
                    originUrl="/order"
                    requestUrl={`${process.env.APP_DOMAIN}/api/order?boost=${boostId}`}
                    redirectUrl="/order"
                    options={{
                        method: "PATCH",
                        cache: "no-store",
                    }}
                />
            ) : null}
        </div>
    );
}
