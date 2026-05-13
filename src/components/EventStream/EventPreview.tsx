"use client";

import { STATUS_THEME } from "@/constants/statusTheme";
import { useEventStreamVideoModalStore } from "@/store/eventStreamVideoModalStore";
import { StatusType } from "@/types/status";

import PlayIcon from "@/assets/play-icon.svg";
import Image from "next/image";

interface EventPreviewProps {
  level: StatusType;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function EventPreview({
  level,
  videoUrl,
  thumbnailUrl,
}: EventPreviewProps) {
  const theme = STATUS_THEME[level];
  const openWith = useEventStreamVideoModalStore((s) => s.openWith);

  return (
    <>
      <button
        type="button"
        onClick={() => openWith(videoUrl)}
        className={`bg-black-third relative h-15.75 w-27.5 rounded-[10px] border ${theme.previewBorder} overflow-hidden`}
      >
        <video
          src={videoUrl}
          poster={thumbnailUrl}
          muted
          preload="metadata"
          className="h-full w-full object-contain"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <div className="flex size-8 items-center justify-center rounded-full bg-black/50">
            <Image
              src={PlayIcon}
              width={20}
              height={10}
              alt="이벤트 스트림 영상 재생"
            />
          </div>
        </div>
      </button>
    </>
  );
}
