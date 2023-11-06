"use client";
import React, { FormEvent, useRef, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { Category } from "@/models/entity.model";
import ImagePreview from "@/components/ImagePreview";
import { usePersistStore } from "@/stores";

const getCategories = async (url: string) => {
    const response = await fetch(url, { next: { revalidate: 30 } });
    const data = await response.json();
    return data;
};

export default function NewProductPage(): React.ReactElement {
    const themeColor = usePersistStore((state) => state.themeColor);
    const { replace } = useRouter();
    const { data, isLoading } = useSWR<Category[]>(
        "/api/category",
        getCategories,
    );

    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const [previewImage, setPreviewImage] = useState<File | Blob>();
    const [productImage, setProductImage] = useState<File | Blob>();
    const [categories, setCategories] = useState<string[]>([]);

    const handleAddProduct = async (event: FormEvent) => {
        try {
            event.preventDefault();
            await fetch("http://localhost:3000/api/product", {
                method: "POST",
                body: JSON.stringify({
                    title: nameRef.current?.value,
                    price: parseFloat(priceRef.current?.value!),
                    description: descriptionRef.current?.value,
                    image: productImage,
                    categories,
                }),
            });
            replace("/product");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelect = (value: string) => {
        setCategories((prev) => {
            if (prev.includes(value)) return prev.filter((v) => v !== value);
            return prev.concat([value]);
        });
    };
    if (isLoading) return <h3>Loading...</h3>;
    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <div className="flex items-center justify-between">
                <Header
                    category="Page"
                    title="Add product"
                />
            </div>
            <form onSubmit={handleAddProduct}>
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
                            ref={nameRef}
                            id="productName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Product name"
                            required
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
                            ref={priceRef}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="99.99"
                            step="any"
                            required
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
                        ref={descriptionRef}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write some descriptions for this product..."
                    ></textarea>
                </div>
                <div>
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Categories
                    </p>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {data?.map((category) => (
                            <li
                                key={category._id}
                                className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                            >
                                <div className="flex items-center pl-3">
                                    <input
                                        id={category.slug}
                                        name="categories"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        onChange={() =>
                                            handleSelect(category.slug)
                                        }
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
                {previewImage ? <ImagePreview source={previewImage} /> : null}
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
                            onChange={(e) =>
                                setPreviewImage(e.target.files?.[0])
                            }
                            className="hidden"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-6 text-center dark:focus:ring-blue-800"
                    style={{
                        backgroundColor: themeColor,
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
}
