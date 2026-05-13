import {
  DEFAULT_PANEL_VIDEO_SRC,
  videoSrcForLocationLabel,
} from "@/data/locationMap";
import { create } from "zustand";

type ScenarioVideoState = {
  selectedLocation: string;
  panelVideoSrc: string;
  selectLocation: (label: string) => void;
};

export const useScenarioVideoStore = create<ScenarioVideoState>((set) => ({
  selectedLocation: "위치 선택",
  panelVideoSrc: DEFAULT_PANEL_VIDEO_SRC,

  selectLocation: (label) =>
    set({
      selectedLocation: label,
      panelVideoSrc: videoSrcForLocationLabel(label),
    }),
}));
