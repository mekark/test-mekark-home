"use client";

import { motion } from "framer-motion";
import { historyJourneyLayerReveal } from "@/lib/motion-variants";

const LAYER_SOURCES = [
  "/images/about/history/journey-layer-1-wireframes.svg",
  "/images/about/history/journey-layer-2-buildings.svg",
  "/images/about/history/journey-layer-3-construction.svg",
  "/images/about/history/journey-layer-4-mekark.svg",
] as const;

type JourneyBackgroundProps = {
  active: boolean;
};

export function JourneyBackground({ active }: JourneyBackgroundProps) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex h-[min(52vw,619px)] items-end"
      aria-hidden
    >
      {LAYER_SOURCES.map((src, index) => (
        <motion.div
          key={src}
          variants={historyJourneyLayerReveal(index)}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          className="relative h-full min-w-0 flex-1 overflow-hidden"
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
        </motion.div>
      ))}
    </div>
  );
}
