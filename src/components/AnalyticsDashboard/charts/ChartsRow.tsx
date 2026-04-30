import IncidentsByDayCard from "./IncidentsByDayCard";
import IncidentTypeRatioCard from "./IncidentTypeRatioCard";
import NearMissByTimeCard from "./NearMissByTimeCard";

export default function ChartsRow() {
  return (
    <div className="flex justify-between gap-2.5">
      <NearMissByTimeCard />
      <IncidentTypeRatioCard />
      <IncidentsByDayCard />
    </div>
  );
}
