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
