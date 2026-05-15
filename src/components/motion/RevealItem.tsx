"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
};

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div variants={staggerItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
