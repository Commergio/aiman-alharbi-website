"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

/** يحدّث ScrollTrigger بعد Lenis — للتكامل مع GSAP إن وُجد لاحقاً */
export function useGsapReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    gsap.registerPlugin(ScrollTrigger);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 500);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
    };
  }, [enabled]);
}
