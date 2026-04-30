"use client";

import { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

interface EChartProps {
  option: EChartsOption;
}

export default function EChartView({ option }: EChartProps) {
  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: 280 }}
      notMerge
      lazyUpdate
    />
  );
}
