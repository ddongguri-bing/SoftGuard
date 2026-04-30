import { EChartsOption } from "echarts";

export const nearMissByTimeOptions: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "value",
    min: 0,
    max: 24,
    interval: 4,
    axisLine: { lineStyle: { color: "#FFFFFF" } }, // 축선
    axisTick: { lineStyle: { color: "#D9D9D9" } }, // 눈금
    axisLabel: { color: "#FFFFFF" }, // 축 라벨
    splitLine: { show: false }, // x축 구분선(보통 끔)
  },
  yAxis: {
    type: "value",
    interval: 10,
    axisLine: { lineStyle: { color: "#FFFFFF" } }, // 축선
    axisTick: { lineStyle: { color: "#D9D9D9" } }, // 눈금
    axisLabel: { color: "#FFFFFF" }, // 축 라벨
    splitLine: { show: true }, // x축 구분선(보통 끔)
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
      smooth: false, // smooth가 true이면 그래프 노드가 부드러운 곡선으로 연결, 아니면 직선으로 연결
      data: [
        ["00", 2],
        ["02", 10],
        ["04", 8],
        ["06", 7],
        ["08", 13],
        ["10", 12],
        ["12", 20],
        ["14", 17],
        ["16", 30],
        ["18", 26],
        ["20", 15],
        ["22", 10],
        ["24", 9],
      ],

      lineStyle: {
        color: "#BB8FEB", // 선 색
        width: 2,
      },
      itemStyle: {
        color: "#BB8FEB", // 노드 내부 색
        borderWidth: 2,
      },
      areaStyle: {
        color: "rgba(155, 94, 224, 0.2)", // 영역 채움
      },
    },
  ],
};
