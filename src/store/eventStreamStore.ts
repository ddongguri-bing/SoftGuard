"use client";

import { eventStreamData } from "@/types/eventStreamDataItem";
import { create } from "zustand";

const DELAY_MS_MIN = 2000;
const DELAY_MS_MAX = 8000;

function randomDelay(minMs: number, maxMs: number) {
  return minMs + Math.floor(Math.random() * (maxMs - minMs + 1));
}

type EventStreamState = {
  sourceItems: eventStreamData[];
  items: eventStreamData[];
  cursor: number;
  started: boolean;
  timerId: ReturnType<typeof setTimeout> | null;
  loading: boolean;
  error: string | null;

  setSourceItems: (items: eventStreamData[]) => void;
  start: () => void;
  stop: () => void;
  reset: () => void;
};

export const useEventStreamStore = create<EventStreamState>((set, get) => ({
  sourceItems: [],
  items: [],
  cursor: -1,
  started: false,
  timerId: null,
  loading: false,
  error: null,

  setSourceItems: (sourceItems) => {
    const { timerId } = get();
    if (timerId) clearTimeout(timerId);

    set({
      sourceItems,
      items: [],
      cursor: sourceItems.length - 1, // 기존 코드 흐름 유지(뒤에서부터 꺼냄)
      started: false,
      timerId: null,
      loading: false,
      error: null,
    });
  },

  start: () => {
    const { started } = get();
    if (started) return;

    const run = () => {
      const { cursor, sourceItems } = get();
      if (cursor < 0) {
        set({ timerId: null, started: false });
        return;
      }

      const nextItem = sourceItems[cursor];
      set((state) => ({
        cursor: state.cursor - 1,
        items: [nextItem, ...state.items],
      }));

      if (get().cursor < 0) {
        set({ timerId: null, started: false });
        return;
      }

      const id = setTimeout(run, randomDelay(DELAY_MS_MIN, DELAY_MS_MAX));
      set({ timerId: id });
    };

    set({ started: true });
    const id = setTimeout(run, randomDelay(DELAY_MS_MIN, DELAY_MS_MAX));
    set({ timerId: id });
  },

  stop: () => {
    const { timerId } = get();
    if (timerId) clearTimeout(timerId);

    set({ timerId: null, started: false });
  },

  reset: () => {
    const { timerId } = get();
    if (timerId) clearTimeout(timerId);

    set({
      items: [],
      cursor: -1,
      started: false,
      timerId: null,
      loading: false,
      error: null,
    });
  },
}));
