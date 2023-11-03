import { type IconType } from "react-icons";

export interface Route {
    pathName: string;
    icon: IconType;
}
export interface SidebarSection {
    title: string;
    paths: Array<Route>;
}
