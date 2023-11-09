import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { User } from "@/models/entity.model";
import { Metadata } from "next";
import React from "react";
import UserRow from "../_private/UserRow";
import ConfirmModal from "@/components/ConfirmModal";

export const metadata: Metadata = {
    title: "User",
};

export default async function User({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<React.ReactElement> {
    const response = await fetch(`${process.env.APP_DOMAIN}/api/user/`);
    // const users: Array<User> = await response.json();
    return (
        <div className="m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            {searchParams.disable ? (
                <ConfirmModal
                    message="Are you sure you want to disable this user?"
                    targetId={searchParams.disable as string}
                    type="disable"
                />
            ) : searchParams.enable ? (
                <ConfirmModal
                    message="Are you sure you want to enable this user?"
                    targetId={searchParams.enable as string}
                    type="enable"
                />
            ) : null}
            <Header
                category="Page"
                title="Users"
            />
            <div className="mt-4">
                {/* <DataTable
                    headers={[
                        "",
                        "Fullname",
                        "Email",
                        "Phone",
                        "Gender",
                        "Birthday",
                        "Status",
                        "Action",
                    ]}
                    renderData={users}
                    RowItem={UserRow}
                /> */}
            </div>
        </div>
    );
}
