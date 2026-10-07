"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Shared components (navbar, footer, scroll-to-top, cookie banner) use the
 * lightweight `m` element, which needs this provider. Pages that still use
 * `motion` keep working unchanged inside it.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
