import { retryRequest } from "@/utils/retry";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url =
        "https://drive.google.com/uc?id=1z38zlo6e_-Ef3hDgcO-lNpfkYoTdY-5w&export=download";
    const response = await retryRequest({ url, times: 3, delay: 500 });
    return NextResponse.json(response.ok);
}
