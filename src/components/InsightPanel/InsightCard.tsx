import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface InsightCardProps {
  title?: ReactNode;
  rightSlot?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export default function InsightCard({
  title,
  rightSlot,
  icon,
  children,
  className,
  bodyClassName,
}: InsightCardProps) {
  return (
    <div
      className={cn(
        "bg-black-second border-theme-light flex flex-col gap-1.25 rounded-[10px] border p-3.75 shadow-[0_0_4px_0_#DBC1F8]",
        className,
      )}
    >
      {(title || rightSlot || icon) && (
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2.5">
            {icon}
            {title && (
              <div className="text-body-xsmall-bold text-theme-light">
                {title}
              </div>
            )}
          </div>
          {rightSlot}
        </div>
      )}
      <div className={cn("text-body-small", bodyClassName)}>{children}</div>
    </div>
  );
}
