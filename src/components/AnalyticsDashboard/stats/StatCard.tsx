import MetricValue from "@/components/common/MetricValue";

interface StatCardProps {
  title: string;
  count?: number;
  percentage?: number;
}

export default function StatCard({ title, count, percentage }: StatCardProps) {
  return (
    <div className="border-white-first bg-white-first/5 flex w-full flex-col items-center justify-between gap-2.5 rounded-[10px] border pt-4.5 pb-4">
      <div className="text-body-xsmall-bold text-white-third">{title}</div>
      {count !== undefined && <MetricValue value={count} unit="건" />}
      {percentage !== undefined && <MetricValue value={percentage} unit="%" />}
    </div>
  );
}
