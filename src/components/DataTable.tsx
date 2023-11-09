import { TableProps } from "@/models/props.model";
import React from "react";
export default function DataTable<T extends { _id?: string }>({
    headers,
    renderData,
    RowItem,
}: TableProps<T>): React.ReactElement {
    return (
        <div className="relative max-h-[50vh] overflow-auto shadow-md sm:rounded-lg side-bar-hidden">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase bg-light-gray dark:bg-gray-700 dark:text-white sticky top-0">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderData.map((data, index) => (
                        <RowItem
                            key={data._id}
                            data={data}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
