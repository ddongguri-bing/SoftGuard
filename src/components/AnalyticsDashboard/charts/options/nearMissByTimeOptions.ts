import { EChartsOption } from "echarts";

import type { nearMissByHourRow } from "@/types/analyticsChartsData";

export function getNearMissByTimeOptions(
  data: nearMissByHourRow[],
): EChartsOption {
  const sorted = [...data].sort(
    (a, b) => parseInt(a.bucket, 10) - parseInt(b.bucket, 10),
  );
  const seriesData = sorted.map(({ bucket, count }) => {
    const hour = parseInt(bucket, 10);
    return [Number.isFinite(hour) ? hour : 0, count] as [number, number];
  });
  const maxCount = Math.max(1, ...sorted.map((d) => d.count));
  const yMax = Math.max(10, Math.ceil(maxCount / 10) * 10);
  const yInterval = Math.max(5, Math.ceil(yMax / 5 / 5) * 5);

  return {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "value",
      min: 0,
      max: 24,
      interval: 4,
      axisLine: { lineStyle: { color: "#FFFFFF" } },
      axisTick: { lineStyle: { color: "#D9D9D9" } },
      axisLabel: { color: "#FFFFFF" },
      splitLine: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: yMax,
      interval: yInterval,
      axisLine: { lineStyle: { color: "#FFFFFF" } },
      axisTick: { lineStyle: { color: "#D9D9D9" } },
      axisLabel: { color: "#FFFFFF" },
      splitLine: { show: true },
    },
    grid: {
      top: 30,
      bottom: 20,
      left: 0,
      right: 15,
    },
    series: [
      {
        name: "건수",
        type: "line",
        smooth: false,
        data: seriesData,
        lineStyle: {
          color: "#BB8FEB",
          width: 2,
        },
        itemStyle: {
          color: "#BB8FEB",
          borderWidth: 2,
        },
        areaStyle: {
          color: "rgba(155, 94, 224, 0.2)",
        },
      },
    ],
  };
}
