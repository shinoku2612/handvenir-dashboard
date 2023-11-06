export interface Product {
    _id?: string;
    image: string;
    title: string;
    description: string;
    categories: Array<string>;
    rating?: number;
    price: number;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    __v?: number;
}
export interface Category {
    _id?: string;
    name: string;
    slug: string;
}
