// TODO : Near-miss 시간대 차트

import BaseChartCard from "./BaseChartCard";

export default function NearMissByTimeCard() {
  return (
    <BaseChartCard title="시간대별 Near-miss 발생 건수">
      <div className="bg-black-third text-body-small-bold flex h-30 w-40 items-center justify-center">
        EChart 영역
      </div>
    </BaseChartCard>
  );
}
