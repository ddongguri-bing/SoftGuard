"use client";

import { formatNow } from "@/utils/timeUtils";
import { useEffect, useState } from "react";

export default function HeaderDate() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-body-medium">{now ? formatNow(now) : "--:--:--"}</div>
  );
}
