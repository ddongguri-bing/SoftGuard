import { STATUS_THEME } from "@/constants/statusTheme";
import { StatusType } from "@/types/status";

interface EventBadgeProps {
  level: StatusType;
}

export default function EventBadge({ level }: EventBadgeProps) {
  const theme = STATUS_THEME[level];

  return (
    <div
      className={`text-body-small-bold rounded-md px-2.5 py-1.25 ${theme.badge}`}
    >
      {level.toUpperCase()}
    </div>
  );
}
