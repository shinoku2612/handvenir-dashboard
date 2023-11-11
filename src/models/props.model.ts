import { Url } from "next/dist/shared/lib/router/router";
import { LinkProps } from "next/link";
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
    onClick?: (params: any) => void;
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
export interface ImagePreviewProps {
    source: File | Blob;
}
export interface DeleteModalProps {
    message: string;
    originUrl: string;
    requestUrl: string;
    redirectUrl: string;
}
export interface ConfirmModalProps {
    message: string;
    targetId: string;
    type: "disable" | "enable";
}
