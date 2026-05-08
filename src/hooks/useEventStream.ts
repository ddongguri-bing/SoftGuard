"use client";

import { useEventStreamStore } from "@/store/eventStreamStore";
import { useEffect } from "react";

export function useEvnetStream(limit?: number) {
  const items = useEventStreamStore((e) => e.items);
  const start = useEventStreamStore((e) => e.start);

  useEffect(() => {
    start();
  }, [start]);

  return typeof limit === "number" ? items.slice(0, limit) : items;
}
