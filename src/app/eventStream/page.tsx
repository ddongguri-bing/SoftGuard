"use client";

import EventStreamItems from "@/components/EventStream/EventStreamItems";
import { eventStreamMockData } from "@/data/eventStreamMockData";
import { eventStreamData } from "@/types/eventStreamDataItem";
import { useEffect, useRef, useState } from "react";

const INTERVAL_MS = 3000;

export default function page() {
  const [items, setItems] = useState<eventStreamData[]>([]);
  const cursorRef = useRef(eventStreamMockData.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (cursorRef.current < 0) {
        clearInterval(timer);
        return;
      }

      const nextItem = eventStreamMockData[cursorRef.current];
      cursorRef.current -= 1;

      setItems((prev) => [nextItem, ...prev]);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-12.5 flex flex-col gap-5">
      <div className="text-heading-pc-medium">Near-miss 이벤트 스트림</div>
      <EventStreamItems items={items} />
    </section>
  );
}
