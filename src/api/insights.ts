import { insightData } from "@/types/insightsData";
import { getApiBaseUrl } from "./apiBaseUrl";

export const getInsights = async () => {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}/api/insights/latest`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`LLM 기반 인사이트 데이터 요청 실패`);

  const data = (await response.json()) as insightData;

  console.log("인사이트 : ", data);

  return data;
};
