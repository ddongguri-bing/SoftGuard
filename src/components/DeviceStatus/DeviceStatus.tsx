import { StatusItemData } from "@/types/status";
import SectionHeader from "../common/SectionHeader";
import StatusList from "../common/StatusList";

const devices: StatusItemData[] = [
  { label: "카메라", status: "danger" },
  { label: "LED 바닥 조명", status: "warning" },
  { label: "스피커", status: "normal" },
  { label: "LED VMS 전광판", status: "normal" },
  { label: "진동 모터(PM)", status: "normal" },
];

export default function DeviceStatus() {
  return (
    <section className="flex flex-1 flex-col gap-3.75">
      <SectionHeader title="장비 및 IoT 상태" />
      <StatusList items={devices} />
    </section>
  );
}
