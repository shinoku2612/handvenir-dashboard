"use client";
import React from "react";

export default function CategoryError() {
    return (
        <div className="col-start-2 col-end-[-1] px-4">
            <div className="mb-10">
                <p className="text-gray-400">Category</p>
                <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Untitled
                </p>
            </div>
            <form>
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Name"
                        required
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Slug"
                            required
                        />
                        <button
                            type="button"
                            className="form-btn"
                        >
                            Generate
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="form-btn"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
