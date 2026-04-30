import { EChartsOption } from "echarts";

const rawData = [
  { value: 52, label: "보행자-차량" },
  { value: 28, label: "차량-차량" },
  { value: 16, label: "차량-PM" },
  { value: 6, label: "기타" },
];

const colors = ["#8339D6", "#9B5DE0", "#BB8FEB", "#DBC1F8"];

const legendData = rawData.map((d, i) => ({
  value: d.value,
  name: `${d.label} (${d.value}%)`, // 범례에 값 포함
  itemStyle: { color: colors[i] },
}));

export const incidentTypeRatioOptions: EChartsOption = {
  tooltip: {
    // trigger: "item",
    show: false,
  },
  legend: {
    orient: "vertical", // 범례를 세로로 배치 [색깔 - 범례]
    right: "5%", // 범례를 오른쪽에서 5% 안에 위치
    top: "middle", // 세로 중앙 정렬
  },
  series: [
    {
      name: "비율", // 시리즈 이름
      type: "pie",
      radius: ["20%", "60%"], // 도넛의 안쪽 바깥쪽 반지름
      center: ["35%", "50%"], // 도넛 중심의 x, y 위치
      avoidLabelOverlap: false, // 파이 조각 라벨이 겹치지 않게 자동 조정하는 기능 관련 옵션
      // itemStyle: {
      //   borderRadius: 10,
      //   borderColor: "#fff",
      //   borderWidth: 2,
      // },
      label: {
        show: false, // 파이 그래프에 각각이 어떤 아이템인지 라벨링
      },
      emphasis: {
        disabled: false,
      },
      data: legendData,
    },
  ],
};
