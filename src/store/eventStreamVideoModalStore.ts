import { create } from "zustand";

type EventStreamVideoModalState = {
  open: boolean;
  videoUrl: string | null;

  openWith: (videoUrl: string) => void;
  close: () => void;
};

export const useEventStreamVideoModalStore = create<EventStreamVideoModalState>(
  (set) => ({
    open: false,
    videoUrl: null,

    openWith: (videoUrl) => set({ open: true, videoUrl }),
    close: () => set({ open: false }),
  }),
);
