"use client";

import { motion } from "framer-motion";

export function SiteBackground() {
  return (
    <motion.div
      className="site-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-bg-base" />

      <motion.div
        className="site-orb site-orb--navy site-orb--top"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="site-orb site-orb--gold site-orb--mid"
        animate={{ x: [0, -20, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="site-orb site-orb--navy site-orb--low"
        animate={{ x: [0, 16, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      <motion.div
        className="site-orb site-orb--ice"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="site-beam site-beam--top"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="site-beam site-beam--mid"
        animate={{ opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="site-lines" />
      <motion.div
        className="site-noise"
        animate={{ opacity: [0.32, 0.48, 0.32] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
