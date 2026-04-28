import StatusView from "../common/StatusView";

type AlertChannelType = {
  channel: string;
  status: string;
};

const channels: AlertChannelType[] = [
  { channel: "LED", status: "danger" },
  { channel: "스피커", status: "warning" },
  { channel: "바닥LED", status: "normal" },
  { channel: "VMS 전광판", status: "normal" },
];

export default function AlertChannelStatus() {
  return (
    <div className="flex gap-3.75">
      {channels.map(({ channel, status }) => (
        <StatusView channel={channel} status={status} key={channel} />
      ))}
    </div>
  );
}
