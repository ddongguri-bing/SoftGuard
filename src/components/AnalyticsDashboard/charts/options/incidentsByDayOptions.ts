import type { incidentsByWeekdayRow } from "@/types/analyticsChartsData";
import type { EChartsOption } from "echarts";

export function getIncidentsByDayOptions(
  data: incidentsByWeekdayRow[],
): EChartsOption {
  const categories = data.map((d) => d.label);
  const values = data.map((d) => d.value);
  const maxVal = Math.max(1, ...values);
  const yMax = Math.max(50, Math.ceil(maxVal / 50) * 50);
  const interval = Math.max(25, Math.ceil(yMax / 4 / 25) * 25);

  return {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: categories,
      axisLine: { lineStyle: { color: "#FFFFFF" } },
      axisTick: { lineStyle: { color: "#D9D9D9" } },
      axisLabel: { color: "#FFFFFF" },
      splitLine: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: yMax,
      interval,
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
        type: "bar",
        data: values,
        itemStyle: {
          color: "#BB8FEB",
        },
      },
    ],
  };
}
