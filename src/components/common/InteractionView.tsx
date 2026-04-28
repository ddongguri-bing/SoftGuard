import Image from "next/image";

import DoubleHeadedArrow from "@/assets/double-headed-arrow.svg";

interface InteractionViewProps {
  object1: string | undefined;
  object2: string | undefined;
  size: "small" | "medium";
  danger?: boolean;
}

export default function InteractionView({
  object1,
  object2,
  size,
  danger,
}: InteractionViewProps) {
  return (
    <div
      className={`flex gap-1.25 ${size === "small" ? "text-body-small-bold" : "text-body-medium-bold"}`}
    >
      <div>{object1}</div>
      <Image
        src={DoubleHeadedArrow}
        width={24}
        height={24}
        alt="양방향 화살표"
      />
      <div>{object2}</div>
      {danger && <div>충돌 위험</div>}
    </div>
  );
}
