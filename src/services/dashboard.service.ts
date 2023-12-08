import { DashBoardChartData } from "@/models/props.model";

export async function getProductCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/product/count`,
            {
                cache: "no-store",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
export async function getProductSale(): Promise<Array<DashBoardChartData>> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/product/sale`,
            {
                cache: "no-store",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function getUserCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/user`,
            {
                cache: "no-store",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
export async function getSaleCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/sale`,
            {
                cache: "no-store",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
export async function getEarningCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/earning`,
            {
                cache: "no-store",
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
