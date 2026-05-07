"use client";

import { eventStreamData } from "@/types/eventStreamDataItem";
import { AnimatePresence, motion } from "motion/react";
import EventStreamItem from "./EventStreamItem";

interface EventStreamItemsProps {
  items: eventStreamData[];
}

export default function EventStreamItems({ items }: EventStreamItemsProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
              mass: 0.6,
            }}
          >
            <EventStreamItem data={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
