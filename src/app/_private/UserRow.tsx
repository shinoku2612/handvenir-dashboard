import React from "react";
import { User } from "@/models/entity.model";
import Image from "next/image";
import Link from "next/link";

export default function UserRow({ data }: { data: User }): React.ReactElement {
    return (
        <tr
            className="bg-white even:bg-light-gray border-b
                    dark:bg-slate-800 dark:even:bg-gray-700 dark:border-slate-700"
        >
            <td className="w-32 px-6 py-4">
                <Image
                    src={data.avatar}
                    alt={data.name}
                    width={64}
                    height={64}
                    priority
                    className="object-center object-cover w-auto h-auto rounded-full"
                />
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-700 whitespace-nowrap dark:text-gray-300"
            >
                <span>{data.name}</span>
            </th>
            <td className="px-6 py-4">
                <span>{data.email}</span>
            </td>
            <td className="px-6 py-4">
                <span>{data.phone}</span>
            </td>
            <td className="px-6 py-4">
                <span>{data.gender}</span>
            </td>
            <td className="px-6 py-4">
                <span>
                    {new Date(data.date_of_birth).toLocaleDateString("en-GB")}
                </span>
            </td>
            <td className="px-6 py-4">
                {data.status === "active" ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300">
                        {data.status}
                    </span>
                ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-3 py-1 rounded dark:bg-red-900 dark:text-red-300">
                        {data.status}
                    </span>
                )}
            </td>
            <td className="px-6 py-4">
                {data.status === "active" ? (
                    <Link
                        href={`/user?disable=${data._id}`}
                        className="text-red-600 dark:text-red-500 hover:underline"
                    >
                        Disable
                    </Link>
                ) : (
                    <Link
                        href={`/user?enable=${data._id}`}
                        className="text-green-600 dark:text-green-500 hover:underline"
                    >
                        Enable
                    </Link>
                )}
            </td>
        </tr>
    );
}
