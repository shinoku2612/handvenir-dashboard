"use server";

import { redirect } from "next/navigation";

export async function handleAddProduct(formData: FormData) {
    const response = await fetch(`${process.env.APP_DOMAIN}/api/product`, {
        method: "POST",
        body: formData,
    });
    if (response.ok) redirect("/product");
}
