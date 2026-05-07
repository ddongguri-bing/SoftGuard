import EventStreamItems from "@/components/EventStream/EventStreamItems";
import { eventStreamMockData } from "@/data/eventStreamMockData";

export default function page() {
  const items = eventStreamMockData;

  return (
    <section className="mb-12.5 flex flex-col gap-5">
      <div className="text-heading-pc-medium">Near-miss 이벤트 스트림</div>
      <EventStreamItems items={items} />
    </section>
  );
}
