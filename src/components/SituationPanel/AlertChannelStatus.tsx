type channelsType = {
  channel: string;
  status: string;
};

const channels: channelsType[] = [
  { channel: "LED", status: "danger" },
  { channel: "스피커", status: "warning" },
  { channel: "바닥LED", status: "normal" },
  { channel: "VMS 전광판", status: "normal" },
];

interface AlertChannelProps {
  channel: string;
  status: string;
}

function AlertChannel({ channel, status }: AlertChannelProps) {
  const statusClass =
    status === "danger"
      ? "bg-error"
      : status === "warning"
        ? "bg-warning"
        : "bg-success";

  return (
    <div className="flex items-center gap-2">
      <div className="text-body-small">{channel}</div>
      <div className="relative h-2 w-2">
        <div
          className={`text-white-third absolute inset-0 h-2 w-2 rounded-full ${statusClass}`}
        ></div>
        <div
          className={`absolute inset-0 h-2 w-2 animate-ping rounded-full ${statusClass}`}
        ></div>
      </div>
    </div>
  );
}

export default function AlertChannelStatus() {
  return (
    <div className="flex gap-3.75">
      {channels.map(({ channel, status }) => (
        <AlertChannel channel={channel} status={status} key={channel} />
      ))}
    </div>
  );
}
