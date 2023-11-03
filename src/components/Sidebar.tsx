"use client";
import React from "react";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import routes from "@/configs/route.config";
import { usePathname } from "next/navigation";

export default function Sidebar(): React.ReactElement {
    const active = true;
    const pathname = usePathname();
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {active && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                        >
                            <SiShopware />
                            <span>Handvenir</span>
                        </Link>
                        <button
                            type="button"
                            className="text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden"
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
                                {route.paths.map(({ pathName, icon: Icon }) => (
                                    <Link
                                        key={pathName}
                                        href={`/${pathName}`}
                                        style={{
                                            backgroundColor:
                                                pathname === `/${pathName}`
                                                    ? "red"
                                                    : "",
                                            color:
                                                pathname === `/${pathName}`
                                                    ? "white"
                                                    : "",
                                        }}
                                        className={
                                            pathname === `/${pathName}`
                                                ? "active-link"
                                                : "normal-link"
                                        }
                                    >
                                        <Icon />
                                        <span className="capitalize">
                                            {pathName}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
