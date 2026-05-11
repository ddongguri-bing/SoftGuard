import { eventStreamData } from "@/types/eventStreamDataItem";
import { getApiBaseUrl } from "./apiBaseUrl";

export const getEventStreamList = async () => {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}/api/events/stream`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`이벤트 스트림 데이터 요청 실패`);

  const data = (await response.json()) as eventStreamData[];

  return data;
};
