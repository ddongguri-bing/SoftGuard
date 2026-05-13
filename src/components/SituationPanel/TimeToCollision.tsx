import clsx from "clsx";
import MetricValue from "../common/MetricValue";

interface TimeToCollisionProps {
  second: number;
  tone?: "normal" | "warning" | "danger";
}

const TONE_CLASS: Record<NonNullable<TimeToCollisionProps["tone"]>, string> = {
  normal: "text-success",
  warning: "text-warning",
  danger: "text-error",
};

export default function TimeToCollision({
  second,
  tone = "normal",
}: TimeToCollisionProps) {
  const color = TONE_CLASS[tone];
  if (second === null) {
    return (
      <div className={clsx("text-heading-pc-large text-white-third")}>—</div>
    );
  }
  return (
    <MetricValue
      value={second}
      valueClassName={color}
      unit="sec"
      unitClassName={color}
    />
  );
}
