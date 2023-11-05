"use client";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { usePersistStore, useUnPersistStore } from "@/stores";
import NavButton from "./NavButton";

export default function Navbar(): React.ReactElement {
    const toogleActive = useUnPersistStore((state) => state.toogleActive);
    const setActiveMenu = useUnPersistStore((state) => state.setActiveMenu);
    const screenWidth = usePersistStore((state) => state.screenWidth);
    const setScreenWidth = usePersistStore((state) => state.setScreenWidth);
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenWidth <= 768) setActiveMenu(false);
        else setActiveMenu(true);
    }, [screenWidth]);
    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
            <NavButton
                onClick={() => toogleActive((prev: boolean) => !prev)}
                color="red"
                Icon={AiOutlineMenu}
            />
            <div className="flex">
                <NavButton
                    onClick={() => {}}
                    color="red"
                    Icon={FiShoppingCart}
                />
                <NavButton
                    dotColor="#03C9D7"
                    onClick={() => {}}
                    color="red"
                    Icon={BsChatLeft}
                />
                <NavButton
                    dotColor="rgb(254, 201, 15)"
                    onClick={() => {}}
                    color="red"
                    Icon={RiNotification3Line}
                />
            </div>
        </div>
    );
}
