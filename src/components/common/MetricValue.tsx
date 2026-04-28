import clsx from "clsx";

interface MetricValueProps {
  value: string | number;
  valueClassName?: string;
  unit: string;
  unitClassName?: string;
  className?: string;
}

export default function MetricValue({
  value,
  valueClassName,
  unit,
  unitClassName,
  className,
}: MetricValueProps) {
  return (
    <div className={clsx("flex items-baseline gap-0.5", className)}>
      <div className={clsx("text-heading-pc-large", valueClassName)}>
        {value}
      </div>
      <div className={clsx("text-body-large-bold", unitClassName)}>{unit}</div>
    </div>
  );
}
