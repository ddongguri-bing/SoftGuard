import type { EChartsOption } from "echarts";

export const incidentsByDayOptions: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["월", "화", "수", "목", "금", "토", "일"],
    axisLine: { lineStyle: { color: "#FFFFFF" } }, // 축선
    axisTick: { lineStyle: { color: "#D9D9D9" } }, // 눈금
    axisLabel: { color: "#FFFFFF" }, // 축 라벨
    splitLine: { show: false }, // x축 구분선(보통 끔)
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 300,
    interval: 100,
    axisLine: { lineStyle: { color: "#FFFFFF" } }, // 축선
    axisTick: { lineStyle: { color: "#D9D9D9" } }, // 눈금
    axisLabel: { color: "#FFFFFF" }, // 축 라벨
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
      data: [245, 200, 140, 210, 145, 280, 260],
      itemStyle: {
        color: "#BB8FEB",
      },
    },
  ],
};
