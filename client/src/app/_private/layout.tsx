"use client";
import Navbar from "@/components/Navbar";
import SettingButton from "@/components/SettingButton";
import Sidebar from "@/components/Sidebar";
import ThemeSetting from "@/components/ThemeSetting";
import useStore from "@/hooks/useStore";
import { usePersistStore, useUnPersistStore } from "@/stores";
import React from "react";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    const activeMenu = useUnPersistStore((state) => state.activeMenu);
    const activeSetting = useUnPersistStore((state) => state.activeSetting);
    const themeMode = useStore(usePersistStore, (state) => state.themeMode);
    return (
        <div className={themeMode}>
            <div className="flex relative dark:bg-main-dark-bg">
                <SettingButton />
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full"
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    {children}
                </div>
                {activeSetting && <ThemeSetting />}
            </div>
        </div>
    );
}
