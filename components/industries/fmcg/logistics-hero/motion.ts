import type { Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: smoothEase },
  }),
};

export const backgroundZoom: Variants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 12, ease: "easeOut" },
  },
};
