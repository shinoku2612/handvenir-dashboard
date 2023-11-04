import { ButtonProps } from "@/models/props.model";
import React from "react";

export default function Button({
    color,
    backgroundColor,
    size,
    label,
    borderRadius,
}: ButtonProps) {
    return (
        <button
            type="button"
            style={{ backgroundColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {label}
        </button>
    );
}
