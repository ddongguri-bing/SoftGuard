import { eventStreamData } from "@/types/eventStreamDataItem";

export const getEventStreamList = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error(`NEXT_PUBLIC_API_URL 확인 불가`);

  const response = await fetch(`${baseUrl}/api/events/stream`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`이벤트 스트림 데이터 요청 실패`);

  const data = (await response.json()) as eventStreamData[];

  return data;
};
