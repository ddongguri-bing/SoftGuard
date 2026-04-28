// TODO : 일자별 사고 건수 차트

import BaseChartCard from "./BaseChartCard";

export default function IncidentsByDay() {
  return (
    <BaseChartCard title="요일별 발생 비율">
      <div className="bg-black-third text-body-small-bold flex h-30 w-40 items-center justify-center">
        EChart 영역
      </div>
    </BaseChartCard>
  );
}
