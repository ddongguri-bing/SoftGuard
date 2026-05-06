import EventStreamItems from "@/components/EventStream/EventStreamItems";

export default function page() {
  return (
    <section className="flex flex-col gap-5">
      <div className="text-heading-pc-medium">Near-miss 이벤트 스트림</div>
      <EventStreamItems />
    </section>
  );
}
