import { Category } from "@/models/entity.model";

export async function getCategoryDetail(categoryId: string): Promise<Category> {
    try {
        if (!categoryId) throw new Error("Invalid category ID");
        const response = await fetch(
            `${process.env.APP_DOMAIN}/api/category/${categoryId}`,
        );
        const category: Category = await response.json();
        return category;
    } catch (error) {
        return {
            _id: "",
            name: "",
            slug: "",
        };
    }
}

export async function getAllCategories(): Promise<Array<Category>> {
    try {
        const response = await fetch(`${process.env.APP_DOMAIN}/api/category`);
        const category: Array<Category> = await response.json();
        return category;
    } catch (error) {
        return [
            {
                _id: "",
                name: "",
                slug: "",
            },
        ];
    }
}
