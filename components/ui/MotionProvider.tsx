"use client";

import type { ReactNode } from "react";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Shared components (navbar, footer, scroll-to-top, cookie banner) use the
 * lightweight `m` element. Its animation features are fetched as a separate
 * chunk after the page loads instead of being part of the initial bundle.
 * Pages that still use `motion` keep working unchanged inside this provider.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
