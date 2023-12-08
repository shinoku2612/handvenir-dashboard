import { DashBoardChartData } from "@/models/props.model";

export async function getProductCount(): Promise<number> {
    try {
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/statistics/product/count`,
            {
                cache: "no-store",
            },
        );
        const productCount: number = await response.json();
        return productCount;
    } catch (error) {
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
        const productSale: Array<DashBoardChartData> = await response.json();
        return productSale;
    } catch (error) {
        return [{ _id: "", count: 0 }];
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
        const userCount: number = await response.json();
        return userCount;
    } catch (error) {
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
        const saleCount: number = await response.json();
        return saleCount;
    } catch (error) {
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
        const earningCount: number = await response.json();
        return earningCount;
    } catch (error) {
        return 0;
    }
}
