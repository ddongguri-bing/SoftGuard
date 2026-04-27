import { eventStreamData } from "@/types/eventStreamDataItem";
import Image from "next/image";

import DoubleHeadedArrow from "@/assets/double-headed-arrow.svg";

interface EventStreamItemProps {
  data: eventStreamData;
}

const LEVEL_STYLE = {
  danger: {
    card: "border-error bg-error-opa5 shadow-error",
    badge: "bg-error",
    vedio: "border-error",
  },
  warning: {
    card: "border-warning bg-warning-opa5 shadow-warning",
    badge: "bg-warning",
    vedio: "border-warning",
  },
  normal: {
    card: "border-success bg-success-opa5 shadow-success",
    badge: "bg-success",
    vedio: "border-success",
  },
} as const;

export default function EventStreamItem({ data }: EventStreamItemProps) {
  const style = LEVEL_STYLE[data.level];

  const isNormal = data.level === "normal";
  const hasTrafficCounts =
    data.vehicle_count != null && data.pedestrian_count != null;
  const detailText = hasTrafficCounts
    ? `${data.location} | 차량 ${data.vehicle_count}, 보행자 ${data.pedestrian_count} | ${data.action}`
    : `${data.location} | ${data.action}`;

  return (
    <div
      className={`flex justify-between rounded-[10px] border py-2.5 pr-2.5 pl-5 ${style.card}`}
    >
      {/* 시간 및 Near-miss 이벤트 정보 */}
      <div className="flex gap-5">
        {/* 시간 */}
        <div className="text-body-xsmall pt-1.5">{data.time}</div>
        {/* Near-miss 이벤트 정보 */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <div
              className={`text-body-small-bold rounded-md px-2.5 py-1.25 ${style.badge}`}
            >
              {data.level.toUpperCase()}
            </div>

            {isNormal ? (
              <div className="text-body-small-bold">{data.state}</div>
            ) : (
              <div className="text-body-small-bold flex gap-1.25">
                <div>{data.object1}</div>
                <Image
                  src={DoubleHeadedArrow}
                  width={24}
                  height={24}
                  alt="양방향 화살표"
                />
                <div>{data.object2}</div>
              </div>
            )}
          </div>
          <div className="text-body-small text-white-third">{detailText}</div>
        </div>
      </div>
      {/* 영상 영역 */}
      <div
        className={`bg-black-third h-15.75 w-27.5 rounded-[10px] border ${style.vedio}`}
      ></div>
    </div>
  );
}
