import React from "react";
import { Product } from "@/models/entity.model";
import Image from "next/image";
import Link from "next/link";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function ProductRow({
    data,
}: {
    data: Product;
}): React.ReactElement {
    return (
        <tr
            className="bg-white even:bg-light-gray border-b
                    dark:bg-slate-800 dark:even:bg-gray-700 dark:border-slate-700"
        >
            <td className="w-32 px-6 py-4">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={128}
                    height={128}
                    priority
                    className="object-center object-cover w-auto h-auto"
                />
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-700 whitespace-nowrap dark:text-gray-300"
            >
                <span>{data.title}</span>
            </th>
            <td className="px-6 py-4">
                <span>{data.description}</span>
            </td>
            <td className="px-6 py-4">
                <span>{data.categories.join(", ")}</span>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                        {data.rating ?? 0}
                    </p>
                    
                </div>
            </td>
            <td className="px-6 py-4">
                <span>${data.price}</span>
            </td>
            <td className="px-6 py-4">
                <div className=" flex items-center">
                    <Link
                        href={`/product/${data._id}`}
                        className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        <BiEdit className="" />
                    </Link>
                    <Link
                        href={`/product?delete=${data._id}`}
                        className="font-medium text-xl text-red-600 dark:text-red-500 hover:underline ml-3"
                    >
                        <BiTrash />
                    </Link>
                </div>
            </td>
        </tr>
    );
}
