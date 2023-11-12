export interface Address {
    _id?: string;
    country?: string;
    city?: string;
    district?: string;
    town?: string;
    street?: string;
    isMain?: boolean;
}
export interface Product {
    _id?: string;
    title: string;
    image: string;
    price: number;
    description: string;
    categories: Array<string>;
    rating?: number;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    __v?: number;
}
export interface Category {
    _id?: string;
    name: string;
    slug: string;
    __v?: number;
}
export interface User {
    _id?: string;
    email: string;
    phone: string;
    name: string;
    gender: string;
    date_of_birth: string;
    addresses?: Array<Address>;
    avatar: string;
    status: "active" | "disabled";
    __v?: number;
    createdAt?: string;
    updatedAt?: string;
}
export interface Order {
    _id?: string;
    receiver: { name: string; phone: string };
    product_list: Array<{ product: string; quantity: number; price: number }>;
    user: { _id: string; name: string; avatar: string };
    method: "cod" | "paypal";
    status: "pending" | "shipping" | "completed" | "canceled";
    address: string;
    total: number;
    isCancelable?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}
