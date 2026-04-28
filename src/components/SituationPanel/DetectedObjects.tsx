interface DetectedObjectProps {
  title: string;
  count: number;
}

interface DetectedObjectsProps {
  vehicle_count: number;
  pedestrian_count: number;
  pm_count: number;
}

function DetectedObject({ title, count }: DetectedObjectProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-body-small text-white-third">{title}</div>
      <div className="text-body-medium-bold">{count}</div>
    </div>
  );
}

export default function DetectedObjects({
  vehicle_count,
  pedestrian_count,
  pm_count,
}: DetectedObjectsProps) {
  return (
    <div className="flex items-center gap-5">
      <DetectedObject title="차량" count={vehicle_count} />
      <DetectedObject title="보행자" count={pedestrian_count} />
      <DetectedObject title="PM" count={pm_count} />
    </div>
  );
}
