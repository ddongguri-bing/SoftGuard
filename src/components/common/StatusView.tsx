import { STATUS_THEME } from "@/constants/statusTheme";
import { StatusType } from "@/types/status";

interface StatusViewProps {
  label: string;
  status: StatusType;
}

export default function StatusView({ label, status }: StatusViewProps) {
  const theme = STATUS_THEME[status];

  return (
    <div className="flex items-center gap-2">
      <div className="text-body-small">{label}</div>
      <div className="relative h-2 w-2">
        <div
          className={`text-white-third absolute inset-0 h-2 w-2 rounded-full ${theme.dot}`}
        ></div>
        <div
          className={`absolute inset-0 h-2 w-2 animate-ping rounded-full ${theme.dot}`}
        ></div>
      </div>
    </div>
  );
}
