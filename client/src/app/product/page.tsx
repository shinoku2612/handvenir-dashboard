import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { Product } from "@/models/entity.model";
import { Metadata } from "next";
import React from "react";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import ProductRow from "@/app/_private/ProductRow";

export const metadata: Metadata = {
    title: "Product",
};

export default async function Product(): Promise<React.ReactElement> {
    const response = await fetch(`${process.env.APP_DOMAIN}/api/product/`, {
        cache: "no-store",
    });
    const products: Array<Product> = await response.json();
    return (
        <div className="m-2 mt-16 md:m-10 md:mt-7 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <div className="flex items-center justify-between">
                <Header
                    category="Page"
                    title="Products"
                />
                <Link
                    href="/product/new"
                    className="dark:text-white text-xl p-3 bg-white dark:bg-gray-700 drop-shadow-md rounded-lg"
                >
                    <AiOutlinePlus />
                </Link>
            </div>
            <SearchBar />

            <div className="mt-4">
                <DataTable
                    headers={[
                        "",
                        "Product",
                        "Descriptions",
                        "Categories",
                        "Rating",
                        "Price",
                        "Actions",
                    ]}
                    renderData={products}
                    RowItem={ProductRow}
                />
            </div>
        </div>
    );
}
