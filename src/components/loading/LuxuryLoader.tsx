"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useTranslations } from "@/contexts/LocaleContext";

type LuxuryLoaderProps = {
  visible: boolean;
  onComplete: () => void;
};

export function LuxuryLoader({ visible, onComplete }: LuxuryLoaderProps) {
  const { dict } = useTranslations();
  const { loader } = dict;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible ? (
        <motion.div
          key="loader"
          className="loader-screen fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#070d16]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(184,146,90,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            className="absolute h-px w-[min(72vw,420px)] bg-gradient-to-l from-transparent via-[#B8925A] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="relative z-10 mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <span className="inline-flex overflow-hidden rounded-xl bg-white p-3 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.5)] sm:rounded-2xl sm:p-3.5">
              <Image
                src="/Logo_website1.png"
                alt=""
                width={138}
                height={64}
                className="h-12 w-auto sm:h-14"
                priority
              />
            </span>
          </motion.div>

          <motion.p
            className="mt-8 font-body-en text-[10px] uppercase tracking-[0.42em] text-[#B8925A]/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {loader.identity}
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#B8925A]/60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#B8925A]" />
            </span>
            <span className="text-xs text-white/70">{loader.preparing}</span>
          </motion.div>

          <motion.div
            className="absolute bottom-12 h-px w-32 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-[#B8925A]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
