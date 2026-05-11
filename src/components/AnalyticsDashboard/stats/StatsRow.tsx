import { getAnalyticsStats } from "@/api/analytics";
import StatCard from "./StatCard";

export default async function StatsRow() {
  const data = await getAnalyticsStats();

  const stats = [
    { title: "Near-miss 누적(오늘)", count: data.nearMissToday },
    { title: "DANGER 단계 비율", percentage: data.dangerRatio },
    { title: "실제 사고 전환 확률", percentage: 28.6 },
    { title: "야간(18~22시) 비율", percentage: data.nightRatio },
  ];

  return (
    <div className="flex justify-between gap-2.5">
      {stats.map(({ title, count, percentage }) => (
        <StatCard
          key={title}
          title={title}
          count={count}
          percentage={percentage}
        />
      ))}
    </div>
  );
}
