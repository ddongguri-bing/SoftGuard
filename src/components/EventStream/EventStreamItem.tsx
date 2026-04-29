import { STATUS_THEME } from "@/constants/statusTheme";
import { eventStreamData } from "@/types/eventStreamDataItem";
import InteractionView from "../common/InteractionView";
import EventBadge from "./EventBadge";
import EventDetailText from "./EventDetailText";
import EventPreview from "./EventPreview";

interface EventStreamItemProps {
  data: eventStreamData;
}

export default function EventStreamItem({ data }: EventStreamItemProps) {
  const theme = STATUS_THEME[data.level];

  const isNormal = data.level === "normal";

  return (
    <div
      className={`flex justify-between rounded-[10px] border py-2.5 pr-2.5 pl-5 ${theme.card}`}
    >
      <div className="flex gap-5">
        <div className="text-body-xsmall pt-1.5">{data.time}</div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <EventBadge level={data.level} />

            {isNormal ? (
              <div className="text-body-small-bold">{data.state}</div>
            ) : (
              <InteractionView
                object1={data.object1}
                object2={data.object2}
                size="small"
              />
            )}
          </div>
          <EventDetailText data={data} />
        </div>
      </div>
      <EventPreview level={data.level} />
    </div>
  );
}
