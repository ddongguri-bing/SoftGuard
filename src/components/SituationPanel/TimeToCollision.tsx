import MetricValue from "../common/MetricValue";

interface TimeToCollisionProps {
  second: number;
}

// TODO : 현재는 Dander로 하드 코딩
// TODO : 예상 충돌 시간의 색상을 결정하는 기준이 필요 (ex. 3초 이내면 Danger, 10초 이내면 Warning, 나머지의 경우 Normal)
export default function TimeToCollision({ second }: TimeToCollisionProps) {
  return (
    // <div className="flex items-baseline gap-0.5">
    //   <div className="text-heading-pc-large text-error">{second}</div>
    //   <div className="text-body-medium-bold text-error">sec</div>
    // </div>
    <MetricValue
      value={second}
      valueClassName="text-error"
      unit="sec"
      unitClassName="text-error"
    />
  );
}
