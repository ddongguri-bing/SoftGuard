interface StatCardProps {
  title: string;
  count?: number;
  percentage?: number;
}

export default function StatCard({ title, count, percentage }: StatCardProps) {
  return (
    <div className="border-white-first bg-white-first/5 flex w-full flex-col items-center justify-between gap-2.5 rounded-[10px] border pt-4.5 pb-4">
      <div className="text-body-xsmall-bold text-white-third">{title}</div>
      {count && (
        <div className="flex items-baseline gap-0.5">
          <div className="text-heading-pc-large">{count}</div>
          <div className="text-body-large-bold">건</div>
        </div>
      )}
      {percentage && (
        <div className="flex items-baseline gap-0.5">
          <div className="text-heading-pc-large">{percentage}</div>
          <div className="text-body-large-bold">%</div>
        </div>
      )}
    </div>
  );
}
