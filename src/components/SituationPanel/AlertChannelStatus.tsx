import { StatusItemData } from "@/types/status";
import StatusList from "../common/StatusList";

const channels: StatusItemData[] = [
  { label: "LED", status: "danger" },
  { label: "스피커", status: "warning" },
  { label: "바닥LED", status: "normal" },
  { label: "VMS 전광판", status: "normal" },
];

export default function AlertChannelStatus() {
  return <StatusList items={channels} />;
}
