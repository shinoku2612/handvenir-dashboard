"use client";
import useStore from "@/hooks/useStore";
import { ButtonProps } from "@/models/props.model";
import { usePersistStore } from "@/stores";
import React from "react";

export default function Button({
    color,
    size,
    label,
    borderRadius,
}: ButtonProps): React.ReactElement {
    const themeColor = useStore(usePersistStore, (state) => state.themeColor);
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
