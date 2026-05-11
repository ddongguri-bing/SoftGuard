import { incidentTypeRatioRow } from "@/types/analyticsChartsData";
import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { getIncidentTypeRatioOptions } from "./options/incidentTypeRatioOptions";

interface IncidentTypeRatioCardProps {
  data: incidentTypeRatioRow[];
}

export default function IncidentTypeRatioCard({
  data,
}: IncidentTypeRatioCardProps) {
  return (
    <BaseChartCard title="사고 유형 비율">
      <div className="text-body-small-bold flex w-50 items-center justify-center">
        <EChartView option={getIncidentTypeRatioOptions(data)} />
      </div>
    </BaseChartCard>
  );
}
