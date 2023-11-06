"use client";
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
    console.log(data);
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
                {data.title}
            </th>
            <td className="px-6 py-4">{data.description}</td>
            <td className="px-6 py-4">{data.categories.join(", ")}</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">${data.price}</td>
            <td className="px-6 py-4">
                <div className=" flex items-center">
                    <Link
                        href={`/product/${data._id}`}
                        className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        <BiEdit className="" />
                    </Link>
                    <Link
                        href="#"
                        className="font-medium text-xl text-red-600 dark:text-red-500 hover:underline ml-3"
                    >
                        <BiTrash />
                    </Link>
                </div>
            </td>
        </tr>
    );
}
