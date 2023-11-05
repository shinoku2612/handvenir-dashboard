import { NavButtonProps } from "@/models/props.model";

export default function NavButton({
    onClick,
    Icon,
    color = "#1A97F5",
    dotColor,
}: NavButtonProps): React.ReactElement {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            <Icon />
        </button>
    );
}
