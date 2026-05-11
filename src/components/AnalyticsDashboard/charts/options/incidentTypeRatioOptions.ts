import type { incidentTypeRatioRow } from "@/types/analyticsChartsData";
import { EChartsOption } from "echarts";

const colors = ["#8339D6", "#9B5DE0", "#BB8FEB", "#DBC1F8"];

export function getIncidentTypeRatioOptions(
  data: incidentTypeRatioRow[],
): EChartsOption {
  const legendData = data.map((d, i) => ({
    value: d.value,
    name: `${d.label} (${d.value}%)`,
    itemStyle: { color: colors[i % colors.length] },
  }));

  return {
    tooltip: {
      show: false,
    },
    legend: {
      orient: "vertical",
      bottom: "0%",
      textStyle: { color: "#FFFFFF" },
    },
    series: [
      {
        name: "비율",
        type: "pie",
        radius: ["15%", "75%"],
        center: ["50%", "35%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        emphasis: {
          disabled: false,
        },
        data: legendData,
      },
    ],
  };
}
