import InteractionView from "../common/InteractionView";
import AlertChannelStatus from "./AlertChannelStatus";
import DetectedObjects from "./DetectedObjects";
import DivideLine from "./DivideLine";
import InfoItem from "./InfoItem";
import RiskLevel from "./RiskLevel";
import TimeToCollision from "./TimeToCollision";

export default function SituationPanel() {
  return (
    <div className="flex items-center justify-between">
      <InfoItem title="현재 위험 단계">
        <RiskLevel level="danger" />
      </InfoItem>
      <DivideLine />
      <InfoItem title="위험 유형" gap="large">
        <InteractionView
          object1="우회전 차량"
          object2="보행자"
          size="medium"
          danger
        />
      </InfoItem>
      <DivideLine />
      <InfoItem title="감지된 객체" gap="large">
        <DetectedObjects vehicle_count={1} pedestrian_count={2} pm_count={0} />
      </InfoItem>
      <DivideLine />
      <InfoItem title="예상 충돌 시간">
        <TimeToCollision second={2.3} />
      </InfoItem>
      <DivideLine />
      <InfoItem title="경고 채널 상태" gap="large">
        <AlertChannelStatus />
      </InfoItem>
    </div>
  );
}
