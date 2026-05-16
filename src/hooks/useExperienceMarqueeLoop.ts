"use client";

import { useEffect, useState, type RefObject } from "react";

import type { TimelineItem } from "@/lib/i18n/types";

const CARD = {
  default: { width: 200, gap: 10 },
  sm: { width: 220, gap: 12 },
} as const;

function trackWidthPx(cardCount: number, sm: boolean) {
  const { width, gap } = sm ? CARD.sm : CARD.default;
  if (cardCount <= 0) return 0;
  return cardCount * width + (cardCount - 1) * gap;
}

/** يكرّر الجدول الزمني حتى يغطي عرض العرض (لحلقة تمرير بلا فراغ). */
export function useExperienceMarqueeChunk(
  timeline: TimelineItem[],
  active: boolean,
  viewportRef: RefObject<HTMLElement | null>,
) {
  const [chunk, setChunk] = useState<TimelineItem[]>(() =>
    Array.from({ length: 4 }, () => timeline).flat(),
  );

  useEffect(() => {
    if (!active) {
      setChunk(timeline);
      return;
    }

    const compute = () => {
      const sm = window.matchMedia("(min-width: 640px)").matches;
      const viewport = viewportRef.current?.clientWidth ?? window.innerWidth;
      const buffer = sm ? CARD.sm.width : CARD.default.width;
      let reps = 1;

      while (trackWidthPx(timeline.length * reps, sm) < viewport + buffer && reps < 24) {
        reps += 1;
      }

      const next = Array.from({ length: reps }, () => timeline).flat();
      setChunk((prev) => (prev.length === next.length ? prev : next));
    };

    compute();
    const el = viewportRef.current;
    const ro = el ? new ResizeObserver(compute) : null;
    el && ro?.observe(el);

    window.addEventListener("resize", compute);
    const mq = window.matchMedia("(min-width: 640px)");
    mq.addEventListener("change", compute);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", compute);
      mq.removeEventListener("change", compute);
    };
  }, [timeline, active, viewportRef]);

  return chunk;
}
