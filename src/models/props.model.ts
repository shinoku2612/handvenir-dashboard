import { IconType } from "react-icons";
import { type SparklineType } from "@syncfusion/ej2-react-charts";

export interface NavButtonProps {
    onClick: (params?: any) => void;
    Icon: IconType;
    color: string;
    dotColor?: string;
}

export interface ButtonProps {
    color: string;
    backgroundColor: string;
    label: string;
    borderRadius: string;
    size: string;
}
export interface SparkLineChartProps {
    currentColor: string;
    id: string;
    type: SparklineType;
    height: string;
    width: string;
    data: Array<{ x: number; y: number }>;
    color: string;
}
