import { analyticsChartsData } from "@/types/analyticsChartsData";
import { analyticsStatsData } from "@/types/analyticsStatsData";
import { getApiBaseUrl } from "./apiBaseUrl";

export const getAnalyticsStats = async () => {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}/api/analytics/stats`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`통계 대시보드 스탯 데이터 요청 실패`);

  const data = (await response.json()) as analyticsStatsData;

  return data;
};

export const getAnalyticsCharts = async () => {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}/api/analytics/charts`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`통계 대시보드 차트 데이터 요청 실패`);

  const data = (await response.json()) as analyticsChartsData;

  return data;
};
