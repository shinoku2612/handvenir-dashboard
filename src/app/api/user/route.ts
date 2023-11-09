import UserModal from "@/databases/user.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const users = await UserModal.find().select(["-secret"]);
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const disableId = searchParams.get("disable");
        const enableId = searchParams.get("enable");

        if (disableId) {
            await UserModal.findByIdAndUpdate(disableId, {
                $set: {
                    status: "disabled",
                },
            });
        } else if (enableId) {
            await UserModal.findByIdAndUpdate(enableId, {
                $set: {
                    status: "active",
                },
            });
        }
        revalidatePath("/user", "page");
        return NextResponse.json("Done");
    } catch (error) {
        return NextResponse.json(error);
    }
}
