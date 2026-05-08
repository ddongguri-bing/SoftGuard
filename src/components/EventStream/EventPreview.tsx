"use client";

import { STATUS_THEME } from "@/constants/statusTheme";
import { useEventStreamVideoModalStore } from "@/store/eventStreamVideoModalStore";
import { StatusType } from "@/types/status";

interface EventPreviewProps {
  level: StatusType;
  videoUrl: string;
}

export default function EventPreview({ level, videoUrl }: EventPreviewProps) {
  const theme = STATUS_THEME[level];
  const openWith = useEventStreamVideoModalStore((s) => s.openWith);

  return (
    <>
      <button
        type="button"
        onClick={() => openWith(videoUrl)}
        className={`bg-black-third h-15.75 w-27.5 rounded-[10px] border ${theme.previewBorder} overflow-hidden`}
      >
        <video src={videoUrl} muted />
      </button>
    </>
  );
}
