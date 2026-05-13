import { videoSrcForLocationLabel } from "@/data/locationMap";
import {
  SCENARIO_SITUATION_BY_LOCATION,
  computeLiveRiskLevel,
  type LiveRiskLevel,
  type ScenarioSituationRow,
} from "@/data/scenarioSituationConfig";
import { create } from "zustand";

type ScenarioVideoState = {
  selectedLocation: string;
  panelVideoSrc: string | null;
  selectLocation: (label: string) => void;

  liveRiskLevel: LiveRiskLevel;
  liveTtcSeconds: number | null;
  situationActive: boolean;
  interactionObject1: string;
  interactionObject2: string;
  vehicleCount: number;
  pedestrianCount: number;
  pmCount: number;

  applyVideoTick: (
    currentTime: number,
    prevTime: number | null,
    duration: number,
  ) => void;
};

const idleSituation = {
  liveRiskLevel: "normal" as const,
  liveTtcSeconds: null as number | null,
  situationActive: false,
  interactionObject1: "",
  interactionObject2: "",
  vehicleCount: 0,
  pedestrianCount: 0,
  pmCount: 0,
};

function applyConfig(
  cfg: ScenarioSituationRow,
  level: LiveRiskLevel,
): Pick<
  ScenarioVideoState,
  | "liveRiskLevel"
  | "liveTtcSeconds"
  | "situationActive"
  | "interactionObject1"
  | "interactionObject2"
  | "vehicleCount"
  | "pedestrianCount"
  | "pmCount"
> {
  const active = level !== "normal";
  return {
    liveRiskLevel: level,
    liveTtcSeconds: active ? cfg.ttcDisplaySec : null,
    situationActive: active,
    interactionObject1: cfg.object1,
    interactionObject2: cfg.object2,
    vehicleCount: cfg.vehicle_count,
    pedestrianCount: cfg.pedestrian_count,
    pmCount: cfg.pm_count,
  };
}

export const useScenarioVideoStore = create<ScenarioVideoState>((set, get) => ({
  selectedLocation: "위치 선택",
  panelVideoSrc: null,
  ...idleSituation,

  selectLocation: (label) => {
    const panelVideoSrc = videoSrcForLocationLabel(label);
    const cfg = SCENARIO_SITUATION_BY_LOCATION[label];

    set({
      selectedLocation: label,
      panelVideoSrc,
      ...(cfg && panelVideoSrc ? applyConfig(cfg, "normal") : idleSituation),
    });
  },

  applyVideoTick: (currentTime, prevTime, duration) => {
    const { selectedLocation, panelVideoSrc } = get();
    const cfg = SCENARIO_SITUATION_BY_LOCATION[selectedLocation];

    if (!cfg || !panelVideoSrc) {
      set(idleSituation);
      return;
    }

    const dur =
      Number.isFinite(duration) && duration > 0.01
        ? duration
        : cfg.expectedDurationSec;

    const level = computeLiveRiskLevel(
      currentTime,
      prevTime,
      dur,
      cfg.warningAtVideoSec,
    );

    set(applyConfig(cfg, level));
  },
}));
