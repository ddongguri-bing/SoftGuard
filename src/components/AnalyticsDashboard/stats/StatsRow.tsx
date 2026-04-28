import StatCard from "./StatCard";

const stats = [
  { title: "Near-miss 누적(오늘)", count: 27 },
  { title: "DANGER 단계 비율", percentage: 18.5 },
  { title: "실제 사고 전환 확률", percentage: 28.6 },
  { title: "야간(18~22시) 비율", percentage: 42.3 },
];

export default function StatsRow() {
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
