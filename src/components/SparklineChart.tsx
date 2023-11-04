import { SparkLineChartProps } from "@/models/props.model";
import React from "react";
import {
    SparklineComponent,
    Inject,
    SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default function SparkLineChart({
    currentColor,
    id,
    type,
    width,
    height,
    data,
    color,
}: SparkLineChartProps) {
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            dataSource={data}
            xName="x"
            yName="y"
            type={type}
            tooltipSettings={{
                visible: true,
                format: "${x} : data ${y}",
                trackLineSettings: {
                    visible: true,
                },
            }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
}
