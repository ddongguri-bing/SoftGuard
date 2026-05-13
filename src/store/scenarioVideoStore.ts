import { videoSrcForLocationLabel } from "@/data/locationMap";
import { create } from "zustand";

type ScenarioVideoState = {
  selectedLocation: string;
  panelVideoSrc: string | null;
  selectLocation: (label: string) => void;
};

export const useScenarioVideoStore = create<ScenarioVideoState>((set) => ({
  selectedLocation: "위치 선택",
  panelVideoSrc: null,

  selectLocation: (label) =>
    set({
      selectedLocation: label,
      panelVideoSrc: videoSrcForLocationLabel(label),
    }),
}));
