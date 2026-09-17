"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  solutions,
  TIMELINE_DESIGN_WIDTH,
  TIMELINE_HEIGHT,
} from "./data";
import { timelineGrow } from "./motion";
import { SolutionCard } from "./SolutionCard";

export function SolutionsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const nextScale = node.offsetWidth / TIMELINE_DESIGN_WIDTH;
      // Never upscale past design size; use full 1:1 when column is wide enough
      setScale(Math.min(nextScale, 1));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative hidden w-full min-w-0 overflow-x-clip lg:block"
        style={{ height: TIMELINE_HEIGHT * scale }}
      >
        <div
          className="relative origin-top-left"
          style={{
            width: TIMELINE_DESIGN_WIDTH,
            height: TIMELINE_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          <motion.div
            className="pointer-events-none absolute left-0 top-[78px] h-[1328px] w-[397px] origin-top"
            variants={timelineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src="/images/industries/fmcg/our-solutions/timeline.svg"
              alt="Process timeline illustration"
              width={397}
              height={1328}
              className="h-full w-full"
              aria-hidden
            />
          </motion.div>

          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
              positioned
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7 lg:hidden">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.title} solution={solution} index={index} />
        ))}
      </div>
    </>
  );
}
