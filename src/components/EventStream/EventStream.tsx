import EventStreamItems from "./EventStreamItems";

export default function EventStream() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2.5 flex items-baseline gap-2.5">
        <div className="text-body-medium-bold">Near-miss 이벤트 스트림</div>
        <div className="text-body-xsmall-bold text-white-third">실시간</div>
      </div>
      <EventStreamItems />
    </div>
  );
}
