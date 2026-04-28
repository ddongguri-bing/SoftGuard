import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  label?: string;
  labelStyle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  label,
  labelStyle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-baseline gap-2.5", className)}>
      <div className="text-body-medium-bold">{title}</div>
      <div className={`text-body-xsmall-bold ${labelStyle}`}>{label}</div>
    </div>
  );
}
