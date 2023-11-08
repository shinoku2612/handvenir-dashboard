import { type IconType } from "react-icons";

export interface Route {
    path: string;
    name: string;
    Icon: IconType;
}
export interface SidebarSection {
    title: string;
    paths: Array<Route>;
}
