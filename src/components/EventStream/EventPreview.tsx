import { STATUS_THEME } from "@/constants/statusTheme";
import { StatusType } from "@/types/status";

interface EventPreviewProps {
  level: StatusType;
}

export default function EventPreview({ level }: EventPreviewProps) {
  const theme = STATUS_THEME[level];

  return (
    <div
      className={`bg-black-third h-15.75 w-27.5 rounded-[10px] border ${theme.previewBorder}`}
    ></div>
  );
}
