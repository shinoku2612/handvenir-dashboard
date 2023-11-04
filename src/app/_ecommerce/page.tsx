"use client";
import Button from "@/components/Button";
import { usePersistStore } from "@/stores";
import React from "react";
import { BsCurrencyDollar, BsBoxSeam } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FiBarChart } from "react-icons/fi";
import SparklineChart from "@/components/SparkLineChart";

export default function Ecommerce() {
    const themeColor = usePersistStore((state) => state.themeColor);
    return (
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div
                    className="bg-white
                dark:text-gray-200 dark:bg-secondary-dark-bg
                h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3
                bg-hero-pattern bg-no-repeat bg-cover bg-center"
                >
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font-bold text-gray-400">Earnings</p>
                            <p className="text-2xl">$123.456</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            backgroundColor={themeColor}
                            label="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    <div
                        className="bg-white dark:text-gray-200
                    dark:bg-secondary-dark-bg
                    md:w-56 p-4 pt-9 rounded-2xl"
                    >
                        <button
                            type="button"
                            style={{
                                color: "#03C9D7",
                                backgroundColor: "#E5FAFB",
                            }}
                            className="text-2xl opacity-[0.9] rounded-full p-4
                            hover:drop-shadow-xl"
                        >
                            <MdOutlineSupervisorAccount />
                        </button>
                        <p className="mt-3">
                            <span className="text-lg font-semibold">
                                12.345
                            </span>
                            <span className="text-sm text-green-600 ml-2">
                                +4%
                            </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">Customers</p>
                    </div>
                    <div
                        className="bg-white dark:text-gray-200
                    dark:bg-secondary-dark-bg
                    md:w-56 p-4 pt-9 rounded-2xl"
                    >
                        <button
                            type="button"
                            style={{
                                color: "rgb(255, 244, 229)",
                                backgroundColor: "rgb(254, 201, 15)",
                            }}
                            className="text-2xl opacity-[0.9] rounded-full p-4
                            hover:drop-shadow-xl"
                        >
                            <BsBoxSeam />
                        </button>
                        <p className="mt-3">
                            <span className="text-lg font-semibold">
                                12.345
                            </span>
                            <span className="text-sm text-green-600 ml-2">
                                +4%
                            </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">Customers</p>
                    </div>
                    <div
                        className="bg-white dark:text-gray-200
                    dark:bg-secondary-dark-bg
                    md:w-56 p-4 pt-9 rounded-2xl"
                    >
                        <button
                            type="button"
                            style={{
                                color: "rgb(228, 106, 118)",
                                backgroundColor: "rgb(255, 244, 229)",
                            }}
                            className="text-2xl opacity-[0.9] rounded-full p-4
                            hover:drop-shadow-xl"
                        >
                            <FiBarChart />
                        </button>
                        <p className="mt-3">
                            <span className="text-lg font-semibold">
                                12.345
                            </span>
                            <span className="text-sm text-green-600 ml-2">
                                +4%
                            </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">Customers</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <div
                    className="bg-white dark:text-gray-200
                dark:bg-secondary-dark-bg
                m-3 p-4 rounded-2xl md:w-780"
                >
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p
                                className="flex items-center gap-2
                            text-gray-600 hover:drop-shadow-xl"
                            >
                                <span>
                                    <GoDotFill />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p
                                className="flex items-center gap-2
                            text-green-400 hover:drop-shadow-xl"
                            >
                                <span>
                                    <GoDotFill />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">
                                        $12.345
                                    </span>
                                    <span
                                        className="p-1.5 hover:drop-shadow-xl
                                    cursor-pointer rounded-full text-white
                                    bg-green-400 ml-3 text-xs
                                    "
                                    >
                                        12%
                                    </span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-3xl font-semibold">
                                        $6.123
                                    </span>
                                </p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>

                            <div className="mt-5">
                                <SparklineChart
                                    currentColor={themeColor}
                                    id="line-sparkline"
                                    type="Line"
                                    width="250px"
                                    height="80px"
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 6 },
                                        { x: 3, y: 8 },
                                        { x: 4, y: 5 },
                                        { x: 5, y: 10 },
                                    ]}
                                    color={themeColor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
