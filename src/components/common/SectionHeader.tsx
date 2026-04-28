import { cn } from "@/lib/utils";
import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  label?: string;
  labelClassName?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  label,
  labelClassName,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-baseline gap-2.5", className)}>
      <div className="text-body-medium-bold">{title}</div>
      {label && (
        <div className={clsx("text-body-xsmall-bold", labelClassName)}>
          {label}
        </div>
      )}
    </div>
  );
}
