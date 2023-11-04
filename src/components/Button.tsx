"use";
import { ButtonProps } from "@/models/props.model";
import { usePersistStore } from "@/stores";
import React from "react";

export default function Button({
    color,
    size,
    label,
    borderRadius,
}: ButtonProps): React.ReactElement {
    const themeColor = usePersistStore((state) => state.themeColor);
    return (
        <button
            type="button"
            style={{ backgroundColor: themeColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {label}
        </button>
    );
}
