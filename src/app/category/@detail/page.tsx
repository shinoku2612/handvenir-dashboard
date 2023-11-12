import CategoryControl from "@/app/_private/CategoryControl";
import ConfirmModal from "@/components/ConfirmModal";
import Header from "@/components/Header";
import { Category } from "@/models/entity.model";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function CategoryDetail({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
    const categoryId = searchParams.category;
    const isDelete = searchParams.delete;
    const response = await fetch(
        `${process.env.APP_DOMAIN}/api/category/${categoryId}`,
    );
    const category: Category = await response.json();

    async function handleSubmitForm(formData: FormData) {
        "use server";
        if (categoryId) {
            const updateResponse = await fetch(
                `${process.env.APP_DOMAIN}/api/category/${categoryId}`,
                { method: "PUT", body: formData },
            );
            if (updateResponse.ok) redirect(`/category?category=${categoryId}`);
        } else {
            const addResponse = await fetch(
                `${process.env.APP_DOMAIN}/api/category`,
                { method: "POST", body: formData },
            );
            const newCategory: Category = await addResponse.json();
            if (addResponse.ok)
                redirect(`/category?category=${newCategory._id}`);
        }
    }
    return (
        <div className="col-start-2 col-end-[-1] px-4">
            <Header
                category="Category"
                title={categoryId ? category.name : "Untitled"}
            />
            <form action={handleSubmitForm}>
                <CategoryControl
                    name={categoryId ? category.name : ""}
                    slug={categoryId ? category.slug : ""}
                />
                <button
                    type="submit"
                    className="form-btn"
                >
                    {categoryId ? "Update" : "Add"}
                </button>
                {categoryId ? (
                    <Link
                        href={`/category?category=${category._id}&delete=true`}
                        className="ml-2 border border-red-300 dark:border-red-500 inline-block focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </Link>
                ) : null}
            </form>
            {isDelete ? (
                <ConfirmModal
                    message="Are you sure you want to delete this category?"
                    originUrl={`/category?category=${category._id}`}
                    requestUrl={`${process.env.APP_DOMAIN}/api/category/${categoryId}`}
                    redirectUrl="/category"
                    options={{
                        method: "DELETE",
                    }}
                />
            ) : null}
        </div>
    );
}
