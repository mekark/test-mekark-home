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
            className="pointer-events-none absolute left-0 top-[78px] h-[1319px] w-[397px] origin-top"
            variants={timelineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src="/images/industries/fmcg/our-solutions/timeline.svg"
              alt=""
              width={397}
              height={1319}
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

      <div className="relative flex flex-col lg:hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-[#e50818] via-[#e50818]/35 to-[#e50818]/10"
        />

        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={`relative pl-11 ${index < solutions.length - 1 ? "pb-7" : ""}`}
          >
            <div
              aria-hidden
              className="absolute left-0 top-6 flex size-[30px] items-center justify-center rounded-full border-2 border-[#e50818] bg-white shadow-[0_2px_8px_rgba(229,8,24,0.15)]"
            >
              <span className="text-[11px] font-bold tabular-nums text-[#e50818]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <SolutionCard solution={solution} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}
