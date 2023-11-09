export interface Product {
    _id?: string;
    image: string;
    title: string;
    description: string;
    categories: Array<string>;
    rating?: number;
    price: number;
}
export interface Category {
    _id?: string;
    name: string;
    slug: string;
}
export interface User {
    _id?: string;
    email: string;
    phone: string;
    name: string;
    gender: string;
    date_of_birth: string;
    avatar: string;
    status: "active" | "disabled";
}
export interface Order {
    _id?: string;
    receiver: { name: string; phone: string };
    product_list: Array<{ product: string; quantity: number; price: number }>;
    user: { _id: string; name: string; avatar: string };
    method: string;
    status: "pending" | "shipping" | "completed" | "canceled";
    address: string;
    total: number;
}
