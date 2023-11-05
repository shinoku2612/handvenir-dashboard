import { IconType } from "react-icons";

export interface NavButtonProps {
    onClick: (params?: any) => void;
    Icon: IconType;
    color: string;
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
