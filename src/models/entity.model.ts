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
