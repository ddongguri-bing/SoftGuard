// TODO: 전체 레이아웃

import ChartsRow from "./charts/ChartsRow";
import StatsRow from "./stats/StatsRow";

export default function AnalyticsDashboard() {
  return (
    <section className="flex flex-5 flex-col gap-3.75">
      <div className="text-body-medium-bold">통계 대시보드</div>
      <div className="flex flex-col gap-2.5">
        <ChartsRow />
        <StatsRow />
      </div>
    </section>
  );
}
