import React from "react";
import { IconType } from "react-icons";

export interface NavButtonProps {
    onClick: (params?: any) => void;
    Icon: IconType;
    color?: string;
    dotColor?: string;
}
export interface ButtonProps {
    color: string;
    label: string;
    borderRadius: string;
    size: string;
}
export interface HeaderProps {
    category: string;
    title: string;
}
export interface TableProps<T> {
    headers: Array<string>;
    renderData: Array<T>;
    RowItem: ({ data }: { data: T }) => React.ReactElement;
}
export interface WidgetProps {
    color: string;
    backgroundColor: string;
    label: string;
    type: "increased" | "decreased";
    amount: number;
    difference: number;
    Icon: IconType;
}