import { eventStreamData } from "@/types/eventStreamDataItem";
import EventStreamItem from "./EventStreamItem";

interface EventStreamItemsProps {
  items: eventStreamData[];
}

export default function EventStreamItems({ items }: EventStreamItemsProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((data, idx) => (
        <EventStreamItem data={data} key={idx} />
      ))}
    </div>
  );
}
