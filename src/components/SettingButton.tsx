"use client";
import useStore from "@/hooks/useStore";
import { usePersistStore, useUnPersistStore } from "@/stores";
import React from "react";
import { FiSettings } from "react-icons/fi";

export default function SettingButton(): React.ReactElement {
    const themColor = useStore(usePersistStore, (state) => state.themeColor);
    const setActiveSetting = useUnPersistStore(
        (state) => state.setActiveSetting,
    );
    return (
        <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
        >
            <button
                type="button"
                style={{
                    backgroundColor: themColor,
                    borderRadius: "50%",
                }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                onClick={() => setActiveSetting(true)}
            >
                <FiSettings />
            </button>
        </div>
    );
}
