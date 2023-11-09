import React from "react";
import { Order } from "@/models/entity.model";
import Image from "next/image";
import Link from "next/link";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function OrderRow({
    data,
}: {
    data: Order;
}): React.ReactElement {
    return (
        <tr
            className="bg-white even:bg-light-gray border-b
                    dark:bg-slate-800 dark:even:bg-gray-700 dark:border-slate-700"
        >
            <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-700 whitespace-nowrap dark:text-gray-300"
            >
                <div className="flex items-center">
                    <Image
                        src={data.user.avatar}
                        alt={data.user.name}
                        width={36}
                        height={36}
                        priority
                        className="object-center object-cover w-auto h-auto rounded-full"
                    />
                    <span className="ml-3">{data.user.name}</span>
                </div>
            </th>
            <td className="px-6 py-4">
                <p>{data.receiver.name}</p>
                <p>{data.receiver.phone}</p>
            </td>
            <td className="px-6 py-4 uppercase font-bold">
                <span>{data.method}</span>
            </td>
            <td className="px-6 py-4">
                <span>{data.address}</span>
            </td>
            <td className="px-6 py-4">
                <span>${data.total}</span>
            </td>
            <td className="px-6 py-4">
                <span className={data.status}>{data.status}</span>
            </td>
            <td className="px-6 py-4">
                <Link
                    href={`/order/${data._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Details
                </Link>
            </td>
        </tr>
    );
}
