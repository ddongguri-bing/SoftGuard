"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";
import EventStreamItems from "./EventStreamItems";

import ArrowForward from "@/assets/arrow-forward.svg";
import { eventStreamMockData } from "@/data/eventStreamMockData";
import { eventStreamData } from "@/types/eventStreamDataItem";
import { useEffect, useRef, useState } from "react";

const LIMIT = 4;
const INTERVAL_MS = 3000;

export default function EventStream() {
  const [items, setItems] = useState<eventStreamData[]>([]);
  const cursorRef = useRef(eventStreamMockData.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (cursorRef.current < 0) {
        clearInterval(timer);
        return;
      }

      const nextItem = eventStreamMockData[cursorRef.current];
      cursorRef.current -= 1;

      setItems((prev) => [nextItem, ...prev].slice(0, LIMIT));
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex min-h-105 flex-1 flex-col gap-2.5">
      <SectionHeader
        title="Near-miss 이벤트 스트림"
        label="실시간"
        labelClassName="text-white-third"
        rightSlot={
          <Link
            href={"/eventStream"}
            className="text-body-xsmall text-white-third flex items-center gap-1.25"
          >
            전체보기
            <Image src={ArrowForward} width={12} height={12} alt="전체보기" />
          </Link>
        }
      />
      <EventStreamItems items={items} />
    </section>
  );
}
