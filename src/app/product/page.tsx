import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { Product } from "@/models/entity.model";
import React from "react";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import ProductRow from "@/app/_private/ProductRow";
import ConfirmModal from "@/components/ConfirmModal";
import { getAllProducts } from "@/services/product.service";

export default async function Product({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
    const deleteId = searchParams.delete;
    const products: Array<Product> = await getAllProducts();

    return (
        <div className="m-2 mt-16 md:m-10 md:mt-7 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            {deleteId ? (
                <ConfirmModal
                    message="Are you sure you want to delete this product?"
                    originUrl="/product"
                    requestUrl={`${process.env.APP_DOMAIN}/api/product/${deleteId}`}
                    redirectUrl="/product"
                    options={{ method: "DELETE" }}
                />
            ) : null}
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
