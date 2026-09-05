"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import type { Variants } from "framer-motion";
import { defaultViewport } from "@/lib/motion/viewport";

type AnimatedSectionProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function AnimatedSection({
  children,
  variants,
  className,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once,
    margin: defaultViewport.margin,
  });

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
