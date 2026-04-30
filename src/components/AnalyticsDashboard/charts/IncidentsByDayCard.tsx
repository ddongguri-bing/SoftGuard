import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { incidentsByDayOptions } from "./options/incidentsByDayOptions";

export default function IncidentsByDayCard() {
  return (
    <BaseChartCard title="요일별 발생 건수">
      <div className="text-body-small-bold flex w-40 items-center justify-center">
        <EChartView option={incidentsByDayOptions} />
      </div>
    </BaseChartCard>
  );
}
