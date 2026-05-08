"use client";

import { useEventStreamVideoModalStore } from "@/store/eventStreamVideoModalStore";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal() {
  const [mounted, setMounted] = useState(false);

  const open = useEventStreamVideoModalStore((s) => s.open);
  const videoUrl = useEventStreamVideoModalStore((s) => s.videoUrl);
  const close = useEventStreamVideoModalStore((s) => s.close);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const portalTarget = useMemo(() => {
    if (!mounted) return null;
    return document.body;
  }, [mounted]);

  if (!portalTarget) return null;
  if (!open || !videoUrl) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute -top-10 right-0 text-white"
        >
          닫기
        </button>
        <video
          src={videoUrl}
          className="max-h-[85vh] w-full rounded-lg bg-black object-contain"
          controls
          autoPlay
        />
      </div>
    </div>,
    portalTarget,
  );
}
