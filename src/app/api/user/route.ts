import UserModel from "@/databases/user.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const users = await UserModel.find().select("-secret");
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const disableId = searchParams.get("disable");
        const enableId = searchParams.get("enable");

        if (disableId) {
            await UserModel.findByIdAndUpdate(disableId, {
                $set: {
                    status: "disabled",
                },
            });
        } else if (enableId) {
            await UserModel.findByIdAndUpdate(enableId, {
                $set: {
                    status: "active",
                },
            });
        }
        revalidatePath("/user", "page");
        return NextResponse.json(
            { message: "Change status successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
