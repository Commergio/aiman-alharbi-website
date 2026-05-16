"use client";

import { useEffect, useState, type RefObject } from "react";

/** يقيس عرض مجموعة الشريط (بما فيها المسافة الختامية) لتحريك حلقة بلا قفزة. */
export function useMarqueeShift(groupRef: RefObject<HTMLElement | null>, deps: unknown[]) {
  const [shiftPx, setShiftPx] = useState(0);

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setShiftPx((prev) => (Math.abs(prev - w) < 0.5 ? prev : w));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, deps);

  return shiftPx;
}
