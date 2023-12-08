import { DashBoardChartData } from "@/models/props.model";

export async function getProductCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/product/count`,
            {
                cache: "no-cache",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return 0;
    }
}
export async function getProductSale(): Promise<Array<DashBoardChartData>> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/product/sale`,
            {
                cache: "no-cache",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}
export async function getUserCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/user`,
            {
                cache: "no-cache",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return 0;
    }
}
export async function getSaleCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/sale`,
            {
                cache: "no-cache",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return 0;
    }
}
export async function getEarningCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/earning`,
            {
                cache: "no-cache",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return 0;
    }
}
