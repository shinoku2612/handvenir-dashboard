import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const products = [
            {
                _id: "64fa0dbc92fbd5031b8e8cfc",
                title: "Dreamcatcher",
                image: "https://img.fruugo.com/product/4/26/191506264_max.jpg",
                price: 2.5,
                description: "Diameter: 6cm\nMaterial: iron\nColor: red",
                categories: ["dreamcatcher"],
                slug: "dreamcatcher",
                rating_point: 5,
                rating_count: 1,
            },
            {
                _id: "64fa0f7e92fbd5031b8e8d22",
                title: "Bracelet",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNShOQmXKCcgVc_kieO7ETZAEUFOY7OP3Bw&usqp=CAU",
                price: 0.9,
                description: "Diameter: 6cm\nColor: red",
                categories: ["bracelet"],
                slug: "bracelet",
                rating_point: 4,
                rating_count: 3,
            },
            {
                _id: "64fa0fe992fbd5031b8e8d25",
                title: "Card strap: sun flower",
                image: "https://cf.shopee.vn/file/598ff35248581a21f6e61316ee9b9697_tn",
                price: 8.35,
                description: "Diameter (of the flower): 3cm\nColor: red",
                categories: ["card-strap"],
                slug: "card-strap-sun-flower",
                rating_point: 5,
                rating_count: 1,
            },
            {
                _id: "64fa107b92fbd5031b8e8d28",
                title: "Macrame: butterfly",
                image: "https://i.pinimg.com/originals/b8/bd/8b/b8bd8b18ee68a4f7525df41e4d708e09.jpg",
                price: 1.45,
                description: "Width: 6cm\nHeight: 4.5cm\nColor: pink",
                categories: ["macrame"],
                slug: "macrame-butterfly",
                rating_point: null,
                rating_count: 0,
            },
            {
                _id: "65198eb6befb79e2913fa919",
                title: "Macrame: owl",
                image: "https://images.uncommongoods.com/images/items/55300/55359_1_640px.webp",
                price: 36,
                description: "Width: 6cm\nHeight: 4.5cm\nColor: pink",
                categories: ["macrame"],
                slug: "macrame-owl",
                rating_point: null,
                rating_count: 0,
            },
        ];
        // const response = await fetch("http://localhost:8080/api/product/all");
        // const data = await response.json();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(error);
    }
}
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json(error);
    }
}
