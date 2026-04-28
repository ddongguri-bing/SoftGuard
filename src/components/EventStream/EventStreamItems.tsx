import { eventStreamMockData } from "@/data/eventStreamMockData";
import EventStreamItem from "./EventStreamItem";

export default function EventStreamItems() {
  return (
    <div className="flex flex-col gap-2.5">
      {eventStreamMockData.map((data, idx) => (
        <EventStreamItem data={data} key={idx} />
      ))}
    </div>
  );
}
