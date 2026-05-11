import { getAnalyticsCharts } from "@/api/analytics";
import IncidentsByDayCard from "./IncidentsByDayCard";
import IncidentTypeRatioCard from "./IncidentTypeRatioCard";
import NearMissByTimeCard from "./NearMissByTimeCard";

export default async function ChartsRow() {
  const charts = await getAnalyticsCharts();

  return (
    <div className="flex justify-between gap-2.5">
      <NearMissByTimeCard data={charts.nearMissByHour} />
      <IncidentTypeRatioCard data={charts.incidentTypeRatio} />
      <IncidentsByDayCard data={charts.incidentsByWeekday} />
    </div>
  );
}
