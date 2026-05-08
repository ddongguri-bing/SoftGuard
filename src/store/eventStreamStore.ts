"use client";

import { eventStreamMockData } from "@/data/eventStreamMockData";
import { eventStreamData } from "@/types/eventStreamDataItem";
import { create } from "zustand";

const DELAY_MS_MIN = 2000;
const DELAY_MS_MAX = 8000;

function randomDelay(minMs: number, maxMs: number) {
  return minMs + Math.floor(Math.random() * (maxMs - minMs + 1));
}

type EventStreamState = {
  items: eventStreamData[];
  cursor: number;
  started: boolean;
  timerId: ReturnType<typeof setTimeout> | null;

  start: () => void;
  stop: () => void;
  reset: () => void;
};

export const useEventStreamStore = create<EventStreamState>((set, get) => ({
  items: [],
  cursor: eventStreamMockData.length - 1,
  started: false,
  timerId: null,

  start: () => {
    const { started } = get();
    if (started) return;

    const run = () => {
      const { cursor } = get();
      if (cursor < 0) {
        set({ timerId: null, started: false });
        return;
      }

      const nextItem = eventStreamMockData[cursor];
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
      cursor: eventStreamMockData.length - 1,
      started: false,
      timerId: null,
    });
  },
}));
