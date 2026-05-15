"use client";

import { motion } from "framer-motion";

const dots = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 11) % 100}%`,
  top: `${(i * 23 + 7) % 100}%`,
  size: 1 + (i % 3),
  delay: (i % 8) * 0.4,
  duration: 4 + (i % 5),
}));

export function Particles({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-[#B8925A]/40"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -8, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
