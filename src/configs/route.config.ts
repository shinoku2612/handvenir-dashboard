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
                pathName: "ecommerce",
                icon: FiShoppingBag,
            },
        ],
    },
    {
        title: "Pages",
        paths: [
            {
                pathName: "category",
                icon: BiCategory,
            },
            {
                pathName: "product",
                icon: FiShoppingBag,
            },
            {
                pathName: "order",
                icon: AiOutlineShoppingCart,
            },
            {
                pathName: "user",
                icon: RiContactsLine,
            },
        ],
    },
];
export default routes;
