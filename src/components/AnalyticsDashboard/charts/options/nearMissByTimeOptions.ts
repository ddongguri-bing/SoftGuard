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
  },
  axisLabel: {
    formatter: "{value}", // 눈금에 표시되는 텍스트를 원하는 형태로 바꿔주는 포맷 함수(또는 템플릿 문자열) -> 현재는 기존 표시와 동일
  },
  yAxis: {
    type: "value",
    interval: 10,
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
