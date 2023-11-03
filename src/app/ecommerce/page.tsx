import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.png";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecommerce",
};

export default function Ecommerce(): React.ReactElement {
    return (
        <div>
            <Image
                src={logo}
                alt=""
            />
        </div>
    );
}
