import React from "react";

export default function CategoryLayout({
    children,
    detail,
}: {
    children: React.ReactNode;
    detail: React.ReactNode;
}): React.ReactElement {
    return (
        <div className="grid grid-cols-3 m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            {children}
            {detail}
        </div>
    );
}
