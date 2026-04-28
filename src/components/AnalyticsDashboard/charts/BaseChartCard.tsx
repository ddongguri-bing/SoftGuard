// TODO: 차트 카드 공통 프레임(UI)

interface BaseChartCardProps {
  title: string;
  children: React.ReactElement;
}

export default function BaseChartCard({ title, children }: BaseChartCardProps) {
  return (
    <div className="bg-white-first/5 border-white-first flex w-full flex-col items-center justify-between gap-3.75 rounded-[10px] border pt-4.5 pb-4">
      <div className="text-body-xsmall-bold text-white-third">{title}</div>
      <div>{children}</div>
    </div>
  );
}
