"use client";

import { formatNow } from "@/utils/timeUtils";
import { useEffect, useState } from "react";

export default function HeaderDate() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{formatNow(now)}</div>;
}
