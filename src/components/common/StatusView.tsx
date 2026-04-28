import { StatusType } from "@/types/status";

interface StatusViewProps {
  label: string;
  status: StatusType;
}

export default function StatusView({ label, status }: StatusViewProps) {
  const statusClass =
    status === "danger"
      ? "bg-error"
      : status === "warning"
        ? "bg-warning"
        : "bg-success";

  return (
    <div className="flex items-center gap-2">
      <div className="text-body-small">{label}</div>
      <div className="relative h-2 w-2">
        <div
          className={`text-white-third absolute inset-0 h-2 w-2 rounded-full ${statusClass}`}
        ></div>
        <div
          className={`absolute inset-0 h-2 w-2 animate-ping rounded-full ${statusClass}`}
        ></div>
      </div>
    </div>
  );
}
