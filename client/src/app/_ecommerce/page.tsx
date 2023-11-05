import Button from "@/components/Button";
import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FiBarChart } from "react-icons/fi";
import Widget from "@/components/Widget";

export default function Ecommerce() {
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
                            label="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    <Widget
                        color="#03C9D7"
                        backgroundColor="#E5FAFB"
                        Icon={MdOutlineSupervisorAccount}
                        amount={12_345}
                        difference={4}
                        type="increased"
                        label="Users"
                    />
                    <Widget
                        color="rgb(255, 244, 229)"
                        backgroundColor="rgb(254, 201, 15)"
                        Icon={BsBoxSeam}
                        amount={3_456}
                        difference={5}
                        type="decreased"
                        label="Products"
                    />
                    <Widget
                        color="rgb(228, 106, 118)"
                        backgroundColor="rgb(255, 244, 229)"
                        Icon={FiBarChart}
                        amount={2_468}
                        difference={12}
                        type="increased"
                        label="Sales"
                    />
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
                            text-gray-400 hover:drop-shadow-xl"
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
                                <p className="text-gray-400 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-3xl font-semibold">
                                        $6.123
                                    </span>
                                </p>
                                <p className="text-gray-400 mt-1">Expense</p>
                            </div>
                            <div className="mt-10">
                                <Button
                                    color="white"
                                    label="Download Report"
                                    borderRadius="10px"
                                    size="md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
