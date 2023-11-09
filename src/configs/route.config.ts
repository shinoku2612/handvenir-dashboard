import { type SidebarSection } from "@/models/route.model";
import { BiCategory } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

const routes: Array<SidebarSection> = [
    {
        title: "Dashboard",
        paths: [
            {
                path: "/ecommerce",
                name: "ecommerce",
                Icon: FiShoppingBag,
            },
        ],
    },
    {
        title: "Pages",
        paths: [
            {
                path: "/user",
                name: "user",
                Icon: RiContactsLine,
            },
            {
                path: "/category",
                name: "category",
                Icon: BiCategory,
            },
            {
                path: "/product",
                name: "product",
                Icon: FiShoppingBag,
            },
            {
                path: "/order",
                name: "order",
                Icon: AiOutlineShoppingCart,
            },
        ],
    },
];
export default routes;