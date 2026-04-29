import SectionHeader from "../common/SectionHeader";
import ChartsRow from "./Charts/ChartsRow";
import StatsRow from "./Stats/StatsRow";

export default function AnalyticsDashboard() {
  return (
    <section className="flex flex-5 flex-col gap-2.5">
      <SectionHeader title="통계 대시보드" />
      <div className="flex flex-col gap-2.5">
        <ChartsRow />
        <StatsRow />
      </div>
    </section>
  );
}
