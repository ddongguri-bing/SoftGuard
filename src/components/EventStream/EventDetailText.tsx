import { eventStreamData } from "@/types/eventStreamDataItem";

interface EventDetailTextProps {
  data: eventStreamData;
}

export default function EventDetailText({ data }: EventDetailTextProps) {
  const hasTrafficCounts =
    data.vehicle_count != null && data.pedestrian_count != null;

  const detailText = hasTrafficCounts
    ? `${data.location} | 차량 ${data.vehicle_count}, 보행자 ${data.pedestrian_count} | ${data.action}`
    : `${data.location} | ${data.action}`;

  return <div className="text-body-small text-white-third">{detailText}</div>;
}
