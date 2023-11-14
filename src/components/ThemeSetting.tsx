"use client";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { usePersistStore, useUnPersistStore } from "@/stores";
import themes from "@/configs/theme.config";
import { Theme } from "@/models/theme.model";
import useStore from "@/hooks/useStore";

export default function ThemeSetting(): React.ReactElement {
    const themeMode = useStore(usePersistStore, (state) => state.themeMode);
    const themeColor = useStore(usePersistStore, (state) => state.themeColor);
    const setThemeMode = usePersistStore((state) => state.setThemeMode);
    const setThemeColor = usePersistStore((state) => state.setThemeColor);
    const setActiveSetting = useUnPersistStore(
        (state) => state.setActiveSetting,
    );
    return (
        <div className="bg-dark-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-xl">Settings</p>
                    <button
                        type="button"
                        onClick={() => setActiveSetting(false)}
                        style={{
                            color: "rgb(153, 171, 180)",
                            borderRadius: "50%",
                        }}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdOutlineCancel />
                    </button>
                </div>

                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg capitalize">
                        Theme options
                    </p>
                    <div
                        className="mt-4 p-3 py-0 flex rounded-md
                    hover:bg-light-gray
                    dark:hover:bg-slate-600"
                    >
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="light"
                            className="cursor-pointer"
                            onChange={(e) => setThemeMode("light")}
                            checked={themeMode === "light"}
                        />
                        <label
                            htmlFor="light"
                            className="ml-2 p-2 cursor-pointer flex-1"
                        >
                            Light mode
                        </label>
                    </div>
                    <div
                        className="mt-4 p-3 py-0 flex rounded-md
                    hover:bg-light-gray
                    dark:hover:bg-slate-600"
                    >
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="dark"
                            className="cursor-pointer"
                            onChange={(e) => setThemeMode("dark")}
                            checked={themeMode === "dark"}
                        />
                        <label
                            htmlFor="dark"
                            className="ml-2 p-2 cursor-pointer flex-1"
                        >
                            Dark mode
                        </label>
                    </div>
                </div>

                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg capitalize">
                        Theme colors
                    </p>
                    <div className="flex gap-3">
                        {themes.map((theme: Theme) => (
                            <div
                                key={theme.name}
                                className="relative mt-2 cursor-pointer flex gap-5 items-center"
                            >
                                <button
                                    type="button"
                                    className="h-10 w-10 rounded-full cursor-pointer"
                                    style={{ backgroundColor: theme.color }}
                                    onClick={() => setThemeColor(theme.color)}
                                >
                                    <BsCheck
                                        className={`ml-2 text-2xl text-white ${
                                            theme.color === themeColor
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
