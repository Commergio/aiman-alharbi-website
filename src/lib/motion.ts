export const easeExecutive = [0.22, 1, 0.36, 1] as const;

export const viewportSection = {
  once: true,
  amount: 0.12,
  margin: "-48px 0px -32px 0px" as const,
};

export const viewportItem = {
  once: true,
  amount: 0.2,
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeExecutive },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeExecutive },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: easeExecutive },
  },
};
