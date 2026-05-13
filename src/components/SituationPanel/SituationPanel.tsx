"use client";

import { useScenarioVideoStore } from "@/store/scenarioVideoStore";
import InteractionView from "../common/InteractionView";
import AlertChannelStatus from "./AlertChannelStatus";
import DetectedObjects from "./DetectedObjects";
import DivideLine from "./DivideLine";
import InfoItem from "./InfoItem";
import RiskLevel from "./RiskLevel";
import TimeToCollision from "./TimeToCollision";

export default function SituationPanel() {
  const liveRiskLevel = useScenarioVideoStore((s) => s.liveRiskLevel);
  const liveTtcSeconds = useScenarioVideoStore((s) => s.liveTtcSeconds);
  const situationActive = useScenarioVideoStore((s) => s.situationActive);
  const object1 = useScenarioVideoStore((s) => s.interactionObject1);
  const object2 = useScenarioVideoStore((s) => s.interactionObject2);
  const vehicleCount = useScenarioVideoStore((s) => s.vehicleCount);
  const pedestrianCount = useScenarioVideoStore((s) => s.pedestrianCount);
  const pmCount = useScenarioVideoStore((s) => s.pmCount);

  return (
    <section className="flex items-center justify-between">
      <InfoItem title="현재 위험 단계">
        <RiskLevel level={liveRiskLevel} />
      </InfoItem>
      <DivideLine />
      <InfoItem title="위험 유형" gap="large">
        <InteractionView
          object1={liveRiskLevel !== "normal" ? object1 : undefined}
          object2={liveRiskLevel !== "normal" ? object2 : undefined}
          size="medium"
          danger={liveRiskLevel === "danger"}
          layoutMode="pairOrPlaceholder"
        />
      </InfoItem>
      <DivideLine />
      <InfoItem title="감지된 객체" gap="large">
        <DetectedObjects
          vehicle_count={situationActive ? vehicleCount : 0}
          pedestrian_count={situationActive ? pedestrianCount : 0}
          pm_count={situationActive ? pmCount : 0}
        />
      </InfoItem>
      <DivideLine />
      <InfoItem title="예상 충돌 시간">
        <TimeToCollision second={liveTtcSeconds ?? 0} tone={liveRiskLevel} />
      </InfoItem>
      <DivideLine />
      <InfoItem title="경고 채널 상태" gap="large">
        <AlertChannelStatus />
      </InfoItem>
    </section>
  );
}
