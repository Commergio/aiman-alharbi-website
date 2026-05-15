"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { useTranslations } from "@/contexts/LocaleContext";
import { useTypewriter } from "@/hooks/useTypewriter";

type FloatingAIAssistantProps = {
  activeSection: string;
  ready: boolean;
};

export function FloatingAIAssistant({ activeSection, ready }: FloatingAIAssistantProps) {
  const { dict } = useTranslations();
  const { ai } = dict;
  const message = ai.sections[activeSection] ?? ai.sections.hero;
  const [minimized, setMinimized] = useState(false);
  const [phase, setPhase] = useState<"visible" | "hiding" | "entering">("entering");

  const { displayed, done } = useTypewriter(message, 26, ready && phase === "visible");

  useEffect(() => {
    if (!ready || minimized || phase !== "visible") return;
    const t = window.setTimeout(() => setMinimized(true), 3000);
    return () => window.clearTimeout(t);
  }, [ready, minimized, phase, activeSection]);

  useEffect(() => {
    if (!ready) return;
    setPhase("hiding");
    const t1 = window.setTimeout(() => {
      setPhase("entering");
      setMinimized(false);
    }, 380);
    const t2 = window.setTimeout(() => setPhase("visible"), 820);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [activeSection, ready]);

  useEffect(() => {
    if (ready) {
      const t = window.setTimeout(() => setPhase("visible"), 600);
      return () => window.clearTimeout(t);
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <AnimatePresence mode="wait">
      {phase !== "hiding" && !minimized ? (
        <motion.aside
          key={activeSection}
          role="status"
          aria-live="polite"
          className="ai-assistant fixed z-50 max-w-[min(calc(100vw-1.5rem),260px)]"
          style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))", insetInlineStart: "max(1rem, env(safe-area-inset-left))" }}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="ai-assistant-inner relative overflow-hidden rounded-xl border border-white/50 bg-white/75 p-2.5 shadow-[0_16px_40px_-24px_rgba(15,39,69,0.4)] backdrop-blur-xl sm:p-3">
            <motion.div className="ai-ripple pointer-events-none absolute -end-4 -top-4 size-16 rounded-full bg-[#B8925A]/15" aria-hidden />
            <motion.div
              className="ai-ripple pointer-events-none absolute -bottom-6 -start-3 size-14 rounded-full bg-[#0F2745]/8"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              aria-hidden
            />

            <motion.div
              className="flex items-start gap-2"
              animate={{ y: [0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div className="relative flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#B8925A]/25 bg-gradient-to-br from-[#0F2745] to-[#162f4f] text-[#D2B181] shadow-inner">
                <Sparkles className="size-3.5" aria-hidden />
                <span className="absolute inset-0 rounded-lg ring-1 ring-[#B8925A]/20" />
                <motion.span
                  className="absolute inset-0 rounded-lg border border-[#B8925A]/30"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
              </motion.div>
              <motion.div className="min-w-0 flex-1 space-y-0.5">
                <p className="font-body-en text-[7px] uppercase tracking-[0.28em] text-[#8a9bb0]">
                  {ai.guide}
                </p>
                <p className="min-h-[2rem] text-[11px] leading-[1.35] text-[#1F3A56] sm:min-h-[2.25rem] sm:text-xs sm:leading-snug">
                  {displayed}
                  {!done ? (
                    <motion.span
                      className="mr-0.5 inline-block h-3 w-px bg-[#B8925A]"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  ) : null}
                </p>
              </motion.div>
            </motion.div>

            <button
              type="button"
              onClick={() => setMinimized(true)}
              className="mt-1.5 text-[9px] text-[#7a8ea7] transition hover:text-[#0F2745]"
              aria-label={ai.minimize}
            >
              {ai.minimize}
            </button>
          </motion.div>
        </motion.aside>
      ) : minimized ? (
        <motion.button
          key="fab"
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ai-fab touch-target fixed z-50 flex size-12 items-center justify-center rounded-full border border-white/40 bg-[#0F2745] text-[#D2B181] shadow-lg backdrop-blur-md"
          style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))", insetInlineStart: "max(1rem, env(safe-area-inset-left))" }}
          onClick={() => {
            setMinimized(false);
            setPhase("visible");
          }}
          aria-label={ai.open}
        >
          <Sparkles className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
