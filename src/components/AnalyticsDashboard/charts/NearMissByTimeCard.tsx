import { nearMissByHourRow } from "@/types/analyticsChartsData";
import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { getNearMissByTimeOptions } from "./options/nearMissByTimeOptions";

interface NearMissByTimeCardProps {
  data: nearMissByHourRow[];
}

export default function NearMissByTimeCard({ data }: NearMissByTimeCardProps) {
  return (
    <BaseChartCard title="시간대별 Near-miss 발생 건수">
      <div className="text-body-small-bold flex w-50 items-center justify-center">
        <EChartView option={getNearMissByTimeOptions(data)} />
      </div>
    </BaseChartCard>
  );
}
