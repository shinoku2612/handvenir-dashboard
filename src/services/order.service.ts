import { Order } from "@/models/entity.model";

export async function getAllOrders(): Promise<Array<Order>> {
    try {
        const response = await fetch(`${process.env.APP_DOMAIN}/api/order`, {
            cache: "no-store",
        });
        const orders: Array<Order> = await response.json();
        return orders;
    } catch (error) {
        return [
            {
                _id: "",
                address: "",
                method: "cod",
                product_list: [{ product: "", quantity: 0, price: 0 }],
                receiver: { name: "", phone: "" },
                status: "pending",
                total: 0,
                user: { _id: "", avatar: "", name: "" },
                isCancelable: false,
            },
        ];
    }
}
