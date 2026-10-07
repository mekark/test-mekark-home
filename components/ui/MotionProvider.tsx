"use client";

import type { ReactNode } from "react";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Shared layout components (navbar, footer, arrow-top) use `m` elements, which
 * get their animation features from here asynchronously instead of shipping the
 * full framer-motion bundle on every page. `motion` elements elsewhere keep
 * working unchanged.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
