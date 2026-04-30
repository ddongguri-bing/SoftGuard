import type { EChartsOption } from "echarts";

export const basicBarOption: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["월", "화", "수", "목", "금", "토", "일"],
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 300,
    interval: 100,
  },
  series: [
    {
      name: "건수",
      type: "bar",
      data: [245, 200, 140, 210, 145, 280, 260],
      itemStyle: {
        color: "#9B5DE0",
      },
    },
  ],
};
