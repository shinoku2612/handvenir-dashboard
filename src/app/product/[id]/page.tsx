import React from "react";
import Header from "@/components/Header";
import { Category, Product } from "@/models/entity.model";
import ImagePreview from "@/components/ImagePreview";
import Loader from "@/components/Loader";
import { redirect } from "next/navigation";

const getCategories = async (url: string): Promise<Category[]> => {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return data;
};
const getProduct = async (url: string): Promise<Product> => {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return data;
};

export default async function SingleProduct({
    params,
}: {
    params: { id: string };
}): Promise<React.ReactElement> {
    const productId = params.id;

    const [product, categories]: [Product, Array<Category>] = await Promise.all(
        [
            getProduct(`${process.env.APP_DOMAIN}/api/product/${productId}`),
            await getCategories(`${process.env.APP_DOMAIN}/api/category`),
        ],
    );

    async function handleUpdateProduct(formData: FormData) {
        "use server";

        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/product/${productId}`,
            {
                method: "PUT",
                body: formData,
            },
        );
        if (response.ok) redirect("/product");
    }

    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <div className="flex items-center justify-between">
                <Header
                    category="Page"
                    title="Update product"
                />
            </div>
            <form action={handleUpdateProduct}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="productName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Product name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            name="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Product name"
                            required
                            defaultValue={product.title}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="99.99"
                            step="any"
                            required
                            defaultValue={product.price}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Descriptions
                    </label>
                    <textarea
                        id="message"
                        name="description"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write some descriptions for this product..."
                        defaultValue={product.description}
                    ></textarea>
                </div>
                <div>
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Categories
                    </p>
                    <ul className="grid grid-cols-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:grid-cols-4 lg:grid-cols-6 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {categories?.map((category) => (
                            <li key={category._id}>
                                <div className="flex items-center pl-3">
                                    <input
                                        id={category.slug}
                                        name="categories"
                                        value={category.slug}
                                        multiple
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        defaultChecked={product.categories.includes(
                                            category.slug,
                                        )}
                                    />
                                    <label
                                        htmlFor={category.slug}
                                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {category.name}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* {previewImage ? <ImagePreview source={previewImage} /> : null} */}
                <div className="flex items-center justify-center w-full mt-6">
                    <label
                        htmlFor="dropzoneFile"
                        className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Click to upload
                                </span>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF
                            </p>
                        </div>
                        <input
                            id="dropzoneFile"
                            type="file"
                            name="image"
                            className="hidden"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    className="mt-6 form-btn"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
