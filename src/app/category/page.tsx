import ClientLink from "@/components/ClientLink";
import Header from "@/components/Header";
import { Category } from "@/models/entity.model";
import { getAllCategories } from "@/services/category.service";
import { classNames } from "@/utils/helper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Category",
};

export default async function Category({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
    const categoryId = searchParams.category || "";
    const categories: Array<Category> = await getAllCategories();
    return (
        <div className="border-r-1 col-start-1 col-end-2">
            <Header
                category="Page"
                title="Categories"
            />
            <div className="max-h-[50vh] overflow-auto scroll-sm">
                {categories.map((category) => (
                    <ClientLink
                        key={category._id}
                        href={`/category?category=${category._id}`}
                        className={classNames({
                            "active-link": category._id === categoryId,
                            "normal-link": category._id !== categoryId,
                        })}
                        active={category._id === categoryId}
                    >
                        {category.name}
                    </ClientLink>
                ))}
            </div>
        </div>
    );
}
