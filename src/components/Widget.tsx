import { WidgetProps } from "@/models/props.model";
import { formatNumber } from "@/utils/helper";
import React from "react";

export default function Widget({
    color,
    backgroundColor,
    label,
    type,
    amount,
    difference,
    Icon,
}: WidgetProps): React.ReactElement {
    return (
        <div
            className="bg-white dark:text-gray-200
            dark:bg-secondary-dark-bg
            md:w-56 p-4 pt-9 rounded-2xl"
        >
            <button
                type="button"
                style={{
                    color,
                    backgroundColor,
                }}
                className="text-2xl opacity-[0.9] rounded-full p-4
        hover:drop-shadow-xl"
            >
                <Icon />
            </button>
            <p className="mt-3">
                <span className="text-lg font-semibold text-shadow-sm">
                    {formatNumber(amount)}
                </span>
                {difference &&
                    (type === "increased" ? (
                        <span className="text-sm text-green-600 ml-2">
                            +{difference}%
                        </span>
                    ) : (
                        <span className="text-sm text-red-600 ml-2">
                            -{difference}%
                        </span>
                    ))}
            </p>
            <p className="text-sm text-gray-400 mt-1">{label}</p>
        </div>
    );
}
