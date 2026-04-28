import { cn } from "@/lib/utils";
import { StatusItemData } from "@/types/status";
import StatusView from "./StatusView";

interface StatusListProps {
  items: StatusItemData[];
  className?: string;
}

export default function StatusList({ items, className }: StatusListProps) {
  return (
    <div className={cn("flex gap-3.75", className)}>
      {items.map(({ label, status }) => (
        <StatusView label={label} status={status} key={label} />
      ))}
    </div>
  );
}
