import Image, { StaticImageData } from "next/image";

import Close from "@/assets/close-icon.svg";
import Arrow from "@/assets/right-arrow.svg";

type markerItemType =
  | { label: string; type: "dot"; colorClass: string }
  | { label: string; type: "icon"; icon: StaticImageData; alt: string };

const MARKER_ITEMS: markerItemType[] = [
  { label: "차량", type: "dot", colorClass: "bg-error" },
  { label: "보행자", type: "dot", colorClass: "bg-success" },
  { label: "PM", type: "dot", colorClass: "bg-warning" },
  { label: "예측 경로", type: "icon", icon: Arrow, alt: "예측 경로" },
  { label: "충돌 예상 지점", type: "icon", icon: Close, alt: "충돌 예상 지점" },
];

export default function VideoPanel() {
  return (
    <div className="bg-black-third relative flex-1 rounded-[10px]">
      <div className="bg-black-second/50 absolute bottom-0 flex h-12.5 w-full gap-3.75 rounded-b-[10px] px-7.5">
        {MARKER_ITEMS.map((item) => (
          <div
            key={`${item.type}-${item.label}`}
            className="flex items-center gap-1.25"
          >
            {item.type === "dot" ? (
              <div className={`${item.colorClass} h-4 w-4 rounded-full`} />
            ) : (
              <Image src={item.icon} width={16} height={16} alt={item.alt} />
            )}
            <div className="text-body-xsmall">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
