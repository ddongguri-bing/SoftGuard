import Image from "next/image";
import DangerIcon from "@/assets/danger-icon.svg";
import WarningIcon from "@/assets/warning-icon.svg";
import NormalIcon from "@/assets/normal-icon.svg";

interface RiskLevelProps {
  level: "danger" | "warning" | "normal";
}

const RISK_LEVEL_META = {
  danger: {
    icon: DangerIcon,
    label: "DANGER",
    textClass: "text-error",
  },
  warning: {
    icon: WarningIcon,
    label: "WARNING",
    textClass: "text-warning",
  },
  normal: {
    icon: NormalIcon,
    label: "NORMAL",
    textClass: "text-success",
  },
} as const;

export default function RiskLevel({ level }: RiskLevelProps) {
  const { icon, label, textClass } = RISK_LEVEL_META[level];

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={icon}
        width={50}
        height={50}
        alt={`위험 단계 ${label} 아이콘`}
      />
      <div className={`text-heading-pc-large ${textClass}`}>{label}</div>
    </div>
  );
}
