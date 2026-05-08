import SectionHeader from "../common/SectionHeader";
import ChartsRow from "./charts/ChartsRow";
import StatsRow from "./stats/StatsRow";

export default function AnalyticsDashboard() {
  return (
    <section className="flex flex-5 flex-col gap-2.5">
      <SectionHeader
        title="통계 대시보드"
        label="전주 기준"
        labelClassName="text-white-third"
      />
      <div className="flex flex-col gap-2.5">
        <ChartsRow />
        <StatsRow />
      </div>
    </section>
  );
}
