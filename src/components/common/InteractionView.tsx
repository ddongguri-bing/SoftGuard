import DoubleHeadedArrow from "@/assets/double-headed-arrow.svg";
import Image from "next/image";

export type InteractionLayoutMode = "pairOrPlaceholder" | "pairOrSingle";

interface InteractionViewProps {
  object1?: string | undefined;
  object2?: string | undefined;
  size: "small" | "medium";
  danger?: boolean;
  layoutMode?: InteractionLayoutMode;
}

const sizeTextClass = (size: "small" | "medium") =>
  size === "small" ? "text-body-small-bold" : "text-body-medium-bold";

export default function InteractionView({
  object1,
  object2,
  size,
  danger,
  layoutMode = "pairOrPlaceholder",
}: InteractionViewProps) {
  // const showPairLayout = Boolean(object1?.trim()) && Boolean(object2?.trim());

  // if (!showPairLayout) {
  //   return (
  //     <div
  //       className={`text-body-medium-bold text-white-third flex min-h-10 w-full items-center justify-center ${size === "small" ? "text-body-small-bold" : ""}`}
  //     >
  //       —
  //     </div>
  //   );
  // }

  // return (
  //   <div
  //     className={`flex flex-wrap items-center gap-1.25 ${size === "small" ? "text-body-small-bold" : "text-body-medium-bold"}`}
  //   >
  //     <div>{object1}</div>
  //     <Image
  //       src={DoubleHeadedArrow}
  //       width={24}
  //       height={24}
  //       alt="양방향 화살표"
  //     />
  //     <div>{object2}</div>
  //     {danger && <div>충돌 위험</div>}
  //   </div>
  // );
  const t1 = object1?.trim();
  const t2 = object2?.trim();
  const has1 = Boolean(t1);
  const has2 = Boolean(t2);

  const placeholder = (
    <div
      className={`text-white-third flex min-h-10 w-full items-center justify-center ${sizeTextClass(size)}`}
    >
      —
    </div>
  );

  if (has1 && has2) {
    return (
      <div
        className={`flex flex-wrap items-center gap-1.25 ${sizeTextClass(size)}`}
      >
        <div>{t1}</div>
        <Image
          src={DoubleHeadedArrow}
          width={24}
          height={24}
          alt="양방향 화살표"
        />
        <div>{t2}</div>
        {danger && <div>충돌 위험</div>}
      </div>
    );
  }

  if (layoutMode === "pairOrSingle" && (has1 || has2)) {
    return (
      <div
        className={`flex min-h-10 w-full items-center justify-start ${sizeTextClass(size)}`}
      >
        {has1 ? t1 : t2}
      </div>
    );
  }

  return placeholder;
}
