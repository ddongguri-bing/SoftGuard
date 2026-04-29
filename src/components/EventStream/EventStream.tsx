import SectionHeader from "../common/SectionHeader";
import EventStreamItems from "./EventStreamItems";

export default function EventStream() {
  return (
    <section className="flex flex-1 flex-col gap-2.5">
      <SectionHeader
        title="Near-miss 이벤트 스트림"
        label="실시간"
        labelClassName="text-white-third"
      />
      <EventStreamItems />
    </section>
  );
}
