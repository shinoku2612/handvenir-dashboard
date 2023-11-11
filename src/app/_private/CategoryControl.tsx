"use client";
import { genarateSlug } from "@/utils/helper";
import React, { useState, useEffect } from "react";

export default function CategoryControl({
    name,
    slug,
}: {
    name: string;
    slug: string;
}) {
    const [nameValue, setNameValue] = useState<string>(name);
    const [slugValue, setSlugValue] = useState<string>(slug);

    function handleGenerateSlug() {
        const newSlug = genarateSlug(nameValue);
        setSlugValue(newSlug);
    }
    useEffect(() => {
        setNameValue(name);
        setSlugValue(slug);
    }, [name, slug]);
    return (
        <>
            <div className="mb-6">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </div>
            <div className="mb-6 flex-1">
                <label
                    htmlFor="slug"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Slug
                </label>
                <div className="flex items-center justify-between gap-2">
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Slug"
                        required
                        value={slugValue}
                        onChange={(e) => setSlugValue(e.target.value)}
                    />
                    <button
                        type="button"
                        className="form-btn"
                        onClick={handleGenerateSlug}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    );
}
