// TODO : 상단 3개 차트 카드 배치

import IncidentsByDay from "./IncidentsByDay";
import IncidentTypeRatioCard from "./IncidentTypeRatioCard";
import NearMissByTimeCard from "./NearMissByTimeCard";

export default function ChartsRow() {
  return (
    <div className="flex justify-between gap-2.5">
      <NearMissByTimeCard />
      <IncidentTypeRatioCard />
      <IncidentsByDay />
    </div>
  );
}
