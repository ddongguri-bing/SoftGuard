import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { incidentTypeRatioOptions } from "./options/incidentTypeRatioOptions";

export default function IncidentTypeRatioCard() {
  return (
    <BaseChartCard title="사고 유형 비율">
      <div className="text-body-small-bold flex w-50 items-center justify-center">
        <EChartView option={incidentTypeRatioOptions} />
      </div>
    </BaseChartCard>
  );
}
