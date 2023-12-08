import { Product } from "@/models/entity.model";

export async function getAllProducts(): Promise<Array<Product>> {
    try {
        const response = await fetch(`${process.env.APP_DOMAIN}/api/product`);
        const products: Array<Product> = await response.json();
        return products;
    } catch (error) {
        return [
            {
                _id: "",
                categories: [""],
                description: "",
                image: "",
                price: 0,
                title: "",
                slug: "",
                rating: 0,
            },
        ];
    }
}

export async function getProductDetail(productId: string): Promise<Product> {
    try {
        if (!productId) throw new Error("Invalid product ID");
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/product/${productId}`,
            { cache: "no-store" },
        );
        const product: Product = await response.json();
        return product;
    } catch (error) {
        return {
            _id: "",
            categories: [""],
            description: "",
            image: "",
            price: 0,
            title: "",
            slug: "",
            rating: 0,
        };
    }
}
