"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion } from "framer-motion";
import { STATIC_MOBILE_PATHS } from "@/components/navbar/Navbar";

let releaseFeatures: () => void = () => {};
const featuresReleased = new Promise<void>((resolve) => {
  releaseFeatures = resolve;
});

const loadFeatures = () =>
  featuresReleased
    .then(() => import("@/lib/motion-features"))
    .then((mod) => mod.default);

const INTERACTION_EVENTS = ["pointerdown", "touchstart", "keydown", "scroll"];

/**
 * Shared layout components (navbar, footer, arrow-top) use `m` elements, which
 * get their animation features from here asynchronously instead of shipping the
 * full framer-motion bundle on every page. `motion` elements elsewhere keep
 * working unchanged.
 *
 * On STATIC_MOBILE_PATHS in mobile view those elements already render still,
 * so the animation engine waits for the first user interaction instead of
 * running during page load. Everywhere else it loads right away.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 1023px)");
    if (!STATIC_MOBILE_PATHS.includes(pathname) || !mobile.matches) {
      releaseFeatures();
      return;
    }

    const release = () => releaseFeatures();
    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, release, { once: true, passive: true });
    }
    mobile.addEventListener("change", release);
    return () => {
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, release);
      }
      mobile.removeEventListener("change", release);
    };
  }, [pathname]);

  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
