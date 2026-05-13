export const LOCATIONS = [
  "시나리오1: 횡단보도",
  "시나리오2: 골목길",
  "시나리오3: 인도(PM)",
  "강남구 논현동 교보타워 교차로",
  "종로구 숭인동 신설동 교차로",
  "영등포구 영등포3가 영등포 교차로",
  "성북구 하월곡동 월암교(월곡) 교차로",
  "중구 서소문동 시청 앞 교차로",
  "마포구 공덕동 공덕 오거리",
  "관악구 신림동 신림 교차로",
  "종로구 혜화동 혜화동 로터리",
  "중구 남대문4가 남대문 교차로",
  "송파구 신천동 잠실 교차로",
  "강북구 미아동 삼양입구 사거리",
  "강남구 신사동 신사역 교차로",
  "동대문구 청량리동 청량리역 교차로",
  "강남구 역삼동 역삼역·영동전화국 교차로",
  "동작구 사당동 이수 교차로",
];

export const SCENARIO_LOCATION_TO_VIDEO: Record<string, string> = {
  [LOCATIONS[0]]: "/video/scenario1.mp4",
  [LOCATIONS[1]]: "/video/scenario2.mp4",
  [LOCATIONS[2]]: "/video/scenario3.mp4",
};

export function videoSrcForLocationLabel(label: string): string {
  return SCENARIO_LOCATION_TO_VIDEO[label] ?? null;
}

// TODO : 4분할 미리보기용 (필요에 맞게 순서/반복 조정)
export const QUAD_PANEL_VIDEO_SRCS: string[] = [
  "/video/scenario1.mp4",
  "/video/scenario2.mp4",
  "/video/scenario3.mp4",
  "/video/scenario1.mp4",
];
