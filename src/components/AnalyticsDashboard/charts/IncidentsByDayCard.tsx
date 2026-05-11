import { incidentsByWeekdayRow } from "@/types/analyticsChartsData";
import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { incidentsByDayOptions } from "./options/incidentsByDayOptions";

interface IncidentsByDayCardProps {
  data: incidentsByWeekdayRow[];
}

export default function IncidentsByDayCard({ data }: IncidentsByDayCardProps) {
  return (
    <BaseChartCard title="요일별 발생 건수">
      <div className="text-body-small-bold flex w-50 items-center justify-center">
        <EChartView option={incidentsByDayOptions} />
      </div>
    </BaseChartCard>
  );
}
