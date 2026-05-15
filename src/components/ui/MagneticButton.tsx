"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useRef } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type MagneticButtonProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  href,
  className,
  variant,
  size,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      <span className="magnetic-glow group relative inline-flex">
        {href ? (
          <Link
            href={href}
            className={cn(buttonVariants({ variant, size }), "relative z-10", className)}
          >
            {children}
          </Link>
        ) : (
          <Button variant={variant} size={size} className={cn("relative z-10", className)} onClick={onClick}>
            {children}
          </Button>
        )}
      </span>
    </motion.div>
  );

  return inner;
}
