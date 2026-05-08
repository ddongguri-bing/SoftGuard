"use client";

import { getEventStreamList } from "@/api/eventStream";
import { useEventStreamStore } from "@/store/eventStreamStore";
import { useEffect, useRef } from "react";

export function useEventStream(limit?: number) {
  const sourceItems = useEventStreamStore((s) => s.sourceItems);
  const items = useEventStreamStore((s) => s.items);
  const started = useEventStreamStore((s) => s.started);

  const setSourceItems = useEventStreamStore((s) => s.setSourceItems);
  const start = useEventStreamStore((s) => s.start);
  const stop = useEventStreamStore((s) => s.stop);

  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    let cancelled = false;

    const init = async () => {
      if (sourceItems.length > 0) {
        if (!started) start();
        return;
      }

      try {
        const list = await getEventStreamList();
        console.log("[eventStream] before setSourceItems:", list);

        if (cancelled) return;

        setSourceItems(list);
        start();
      } catch {
        console.error("이벤트 스트림 데이터 호출 실패");
      }
    };

    void init();

    return () => {
      cancelled = true;
      // stop();
      // initializedRef.current = false;
    };
  }, [setSourceItems, start, stop]);

  return typeof limit === "number" ? items.slice(0, limit) : items;
}
