import { LOCATIONS } from "./locationMap";

export type LiveRiskLevel = "normal" | "warning" | "danger";

export type ScenarioSituationRow = {
  // 영상의 N번째 초 시작
  warningAtVideoSec: number;
  // Warning/Danger 구간에 표시할 예상 충돌 시간(초)
  ttcDisplaySec: number;
  // 메타데이터 로드 전 폴백용 루프 길이
  expectedDurationSec: number;
  object1: string;
  object2: string;
  vehicle_count: number;
  pedestrian_count: number;
  pm_count: number;
};

export const SCENARIO_SITUATION_BY_LOCATION: Record<
  string,
  ScenarioSituationRow
> = {
  [LOCATIONS[0]]: {
    warningAtVideoSec: 4,
    ttcDisplaySec: 2.3,
    expectedDurationSec: 4,
    object1: "자차(승용차)",
    object2: "보행자",
    vehicle_count: 1,
    pedestrian_count: 1,
    pm_count: 0,
  },
  [LOCATIONS[1]]: {
    warningAtVideoSec: 7,
    ttcDisplaySec: 1.8,
    expectedDurationSec: 7,
    object1: "자차",
    object2: "자전거를 든 보행자",
    vehicle_count: 1,
    pedestrian_count: 1,
    pm_count: 0,
  },
  [LOCATIONS[2]]: {
    warningAtVideoSec: 4,
    ttcDisplaySec: 0.9,
    expectedDurationSec: 4,
    object1: "일반 승용차",
    object2: "보행자",
    vehicle_count: 1,
    pedestrian_count: 1,
    pm_count: 0,
  },
};

/**
 * "N초 시점" = N번째 초의 시작 → 내부적으로 t >= N-1 부터 warning 1초 구간.
 * danger는 (같은 루프에서) warning 직후 ~ 클립 끝, 그리고 루프 직후 t<1 구간(최대 1초).
 */
export function computeLiveRiskLevel(
  currentTime: number,
  prevTime: number | null,
  duration: number,
  warningAtVideoSec: number,
): LiveRiskLevel {
  const d = duration > 0.01 ? duration : 1;
  const wStart = Math.min(Math.max(warningAtVideoSec - 1, 0), d - 0.001);
  const loopBack = prevTime !== null && prevTime - currentTime > d * 0.5;
  if (loopBack && prevTime >= wStart && currentTime < 1) {
    return "danger";
  }
  if (currentTime < wStart) return "normal";
  if (currentTime < Math.min(wStart + 1, d)) return "warning";
  if (currentTime < d) return "danger";
  return "normal";
}
