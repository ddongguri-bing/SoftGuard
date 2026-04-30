import BaseChartCard from "./BaseChartCard";
import EChartView from "./EChartView";
import { nearMissByTimeOptions } from "./options/nearMissByTimeOptions";

export default function NearMissByTimeCard() {
  return (
    <BaseChartCard title="시간대별 Near-miss 발생 건수">
      <div className="text-body-small-bold flex w-50 items-center justify-center">
        <EChartView option={nearMissByTimeOptions} />
      </div>
    </BaseChartCard>
  );
}
