import SectionHeader from "../common/SectionHeader";
import StatusView from "../common/StatusView";

type DeviceType = {
  device: string;
  status: string;
};

const devices: DeviceType[] = [
  { device: "카메라", status: "danger" },
  { device: "LED 바닥 조명", status: "warning" },
  { device: "스피커", status: "normal" },
  { device: "LED VMS 전광판", status: "normal" },
  { device: "진동 모터(PM)", status: "normal" },
];

export default function DeviceStatus() {
  return (
    <section className="flex flex-1 flex-col gap-3.75">
      <SectionHeader title="장비 및 IoT 상태" />
      <div className="flex gap-3.75">
        {devices.map(({ device, status }) => (
          <StatusView channel={device} status={status} key={device} />
        ))}
      </div>
    </section>
  );
}
