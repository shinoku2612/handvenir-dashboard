"use client";
import React from "react";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import routes from "@/configs/route.config";
import { usePathname } from "next/navigation";
import { usePersistStore, useUnPersistStore } from "@/stores";
import useStore from "@/hooks/useStore";

export default function Sidebar(): React.ReactElement {
    const activeMenu = useUnPersistStore((state) => state.activeMenu);
    const themeColor = useStore(usePersistStore, (state) => state.themeColor);
    const setActiveMenu = useUnPersistStore((state) => state.setActiveMenu);
    const screenWidth = usePersistStore((state) => state.screenWidth);
    const pathname = usePathname();
    const handleCloseSidebar = () => {
        if (activeMenu && screenWidth <= 768) setActiveMenu(false);
    };
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            <div className="flex justify-between items-center">
                <Link
                    href="/"
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                    onClick={handleCloseSidebar}
                >
                    <SiShopware />
                    <span>Handvenir</span>
                </Link>
                <button
                    type="button"
                    className="text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden"
                    onClick={() => setActiveMenu(false)}
                >
                    <MdOutlineCancel />
                </button>
            </div>
            <div className="mt-10">
                {routes.map((route) => (
                    <div key={route.title}>
                        <p className="text-gray-400 m-3 mt-4 uppercase">
                            {route.title}
                        </p>
                        {route.paths.map(({ path, name, Icon }) => (
                            <Link
                                key={path}
                                href={path}
                                style={{
                                    backgroundColor:
                                        pathname === path ? themeColor : "",
                                }}
                                className={
                                    pathname === path
                                        ? "active-link text-white"
                                        : "normal-link"
                                }
                                onClick={handleCloseSidebar}
                            >
                                <Icon />
                                <span className="capitalize">{name}</span>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
