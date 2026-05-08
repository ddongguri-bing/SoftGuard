"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";
import EventStreamItems from "./EventStreamItems";

import ArrowForward from "@/assets/arrow-forward.svg";
import { useEventStream } from "@/hooks/useEventStream";

export default function EventStream() {
  const items = useEventStream(4);

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
