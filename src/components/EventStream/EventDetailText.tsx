import { eventStreamData } from "@/types/eventStreamDataItem";

interface EventDetailTextProps {
  data: eventStreamData;
}

export default function EventDetailText({ data }: EventDetailTextProps) {
  const locationWords = data.location.trim().split(/\s+/);
  const displayLocation =
    locationWords.length > 2 ? locationWords.slice(2).join(" ") : data.location;

  if (data.level === "normal") {
    return (
      <div className="text-body-small text-white-third">{data.location}</div>
    );
  }
  const counts: string[] = [];

  if ((data.vehicleCount ?? 0) > 0) counts.push(`차량 ${data.vehicleCount}`);
  if ((data.pedestrianCount ?? 0) > 0)
    counts.push(`보행자 ${data.pedestrianCount}`);
  if ((data.pmCount ?? 0) > 0) counts.push(`PM ${data.pmCount}`);

  const parts: string[] = [displayLocation];

  if (counts.length > 0) {
    parts.push(counts.join(" "));
  }

  if (data.action?.trim()) {
    parts.push(data.action);
  }

  const detailText = parts.join(" | ");

  return <div className="text-body-small text-white-third">{detailText}</div>;
}
