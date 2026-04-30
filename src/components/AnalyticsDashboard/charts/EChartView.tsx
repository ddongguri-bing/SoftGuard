"use client";

import { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

interface EChartProps {
  option: EChartsOption;
  height?: number | string;
}

export default function EChartView({ option, height }: EChartProps) {
  return (
    <ReactECharts
      option={option}
      className={`w-full ${height}`}
      notMerge
      lazyUpdate
    />
  );
}
