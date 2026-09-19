"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCarouselDesktop = dynamic(
  () =>
    import("@/components/hero/HeroCarouselDesktop").then(
      (module) => module.HeroCarouselDesktop,
    ),
  { loading: () => null },
);

/** Loads desktop hero (video + Framer) only on xl+ — keeps MP4/Framer off mobile. */
export function HeroCarouselDesktopLazy() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const sync = () => setIsDesktop(desktopQuery.matches);
    sync();
    desktopQuery.addEventListener("change", sync);
    return () => desktopQuery.removeEventListener("change", sync);
  }, []);

  if (!isDesktop) return null;
  return <HeroCarouselDesktop />;
}
