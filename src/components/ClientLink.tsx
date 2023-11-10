"use client";
import useStore from "@/hooks/useStore";
import { usePersistStore } from "@/stores";
import Link, { LinkProps } from "next/link";
import React from "react";

export default function ClientLink({
    active,
    children,
    ...props
}: LinkProps & React.HTMLAttributes<HTMLAnchorElement> & { active: boolean }) {
    const themeColor = useStore(usePersistStore, (state) => state.themeColor);

    return (
        <Link
            {...props}
            style={{ backgroundColor: active ? themeColor : "" }}
        >
            {children}
        </Link>
    );
}
