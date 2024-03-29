import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FiBarChart } from "react-icons/fi";
import Widget from "@/components/Widget";
import DashboardChart from "../_private/DashboardChart";
import {
    getEarningCount,
    getProductCount,
    getProductSale,
    getSaleCount,
    getUserCount,
} from "@/services/dashboard.service";

export default async function DashBoard() {
    const [categorySale, productCount, userCount, saleCount, earning] =
        await Promise.all([
            getProductSale(),
            getProductCount(),
            getUserCount(),
            getSaleCount(),
            getEarningCount(),
        ]);
    return (
        <div>
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
                            <p className="text-2xl text-shadow-sm">
                                ${earning}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    <Widget
                        color="#03C9D7"
                        backgroundColor="#E5FAFB"
                        Icon={MdOutlineSupervisorAccount}
                        amount={userCount}
                        type="increased"
                        label="Users"
                    />
                    <Widget
                        color="rgb(255, 244, 229)"
                        backgroundColor="rgb(254, 201, 15)"
                        Icon={BsBoxSeam}
                        amount={productCount}
                        type="decreased"
                        label="Product Types"
                    />
                    <Widget
                        color="rgb(228, 106, 118)"
                        backgroundColor="rgb(255, 244, 229)"
                        Icon={FiBarChart}
                        amount={saleCount}
                        type="increased"
                        label="Sales"
                    />
                </div>
            </div>
            <DashboardChart data={categorySale} />
        </div>
    );
}
