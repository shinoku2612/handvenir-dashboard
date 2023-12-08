"use client";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import { Category } from "@/models/entity.model";
import { useStore } from "zustand";
import { usePersistStore } from "@/stores";
import { getLineChartOptions } from "@/utils/helper";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);

const getCategories = async (url: string): Promise<Category[]> => {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return data;
};

function DashboardChart({
    data,
}: {
    data: Array<{ _id: string; count: number }>;
}) {
    const themeMode = useStore(usePersistStore, (state) => state.themeMode);
    const themColor = useStore(usePersistStore, (state) => state.themeColor);
    const { data: categories, isLoading } = useSWR(
        "/api/category",
        getCategories,
    );
    if (isLoading) return null;
    return (
        <div className="flex gap-10 flex-wrap justify-center">
            <div
                className="bg-white dark:text-gray-200
                dark:bg-secondary-dark-bg
                m-3 p-4 rounded-2xl md:w-780"
            >
                <div className="flex justify-between">
                    <p className="font-semibold text-xl text-shadow-sm">
                        Product sales by category
                    </p>
                </div>
                <div className="mt-10 flex gap-10 flex-wrap justify-center">
                    <Line
                        options={getLineChartOptions(themeMode)}
                        data={{
                            labels: categories?.map(
                                (category) => category.name,
                            ),
                            datasets: [
                                {
                                    data: categories?.map((category) => {
                                        const d = data.find(
                                            (c) => c._id === category.name,
                                        );
                                        if (d) return d.count;
                                        return 0;
                                    }),
                                    borderColor: themColor,
                                    backgroundColor: themColor,
                                    borderWidth: 2,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardChart;
