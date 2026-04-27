import { eventStreamData } from "@/types/eventStreamDataItem";

export const eventStreamMockData: eventStreamData[] = [
  {
    time: "16:03:43",
    level: "danger",
    object1: "우회전 차량",
    object2: "보행자",
    location: "남문 사거리",
    vehicle_count: 1,
    pedestrian_count: 2,
    action: "경고 송출",
  },
  {
    time: "16:03:43",
    level: "warning",
    object1: "이면도로 진입 차량",
    object2: "보행자",
    location: "남문 사거리",
    vehicle_count: 1,
    pedestrian_count: 2,
    action: "LED 점등",
  },
  {
    time: "16:03:43",
    level: "warning",
    object1: "이면도로 진입 차량",
    object2: "보행자",
    location: "남문 사거리",
    vehicle_count: 1,
    pedestrian_count: 2,
    action: "LED 점등",
  },
  {
    time: "16:03:43",
    level: "normal",
    state: "정상 주행",
    location: "남문 사거리",
    action: "특이사항 없음",
  },
];
