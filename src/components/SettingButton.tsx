"use client";
import { usePersistStore } from "@/stores";
import React from "react";
import { FiSettings } from "react-icons/fi";

export default function SettingButton(): React.ReactElement {
    const themColor = usePersistStore((state) => state.themeColor);
    return (
        <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
        >
            <button
                type="button"
                style={{
                    background: themColor,
                    borderRadius: "50%",
                }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
                <FiSettings />
            </button>
        </div>
    );
}
