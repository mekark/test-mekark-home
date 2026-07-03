"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import {
  aboutBadgeDot,
  aboutBadgeReveal,
  aboutBuildingReveal,
  aboutContainerStagger,
  aboutDotGridStagger,
  aboutDotPop,
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  aboutParagraphReveal,
  aboutQuoteBorder,
  aboutQuoteIcon,
  aboutQuoteReveal,
  aboutStatReveal,
  aboutStatsStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const STATS = [
  { value: 18, suffix: "+", label: "Years Expertise" },
  { value: 450, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "On-Time Execution" },
] as const;

function AboutCountUp({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ type: "spring", stiffness: 320, damping: 20, delay }}
      className="min-w-[81px] shrink-0 text-[36px] font-bold leading-[36px] tracking-[-1.16px] text-[#ed1c24] tabular-nums sm:text-[46.5px] sm:leading-[46.5px]"
      aria-label={`${value}${suffix}`}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

const ABOUT_DOT_COLORS = [
  "#eb1325",
  "#f10913",
  "#e6010a",
  "#ee161b",
  "#f00b0d",
  "#eb1325",
  "#f10913",
  "#ee161b",
  "#faabaa",
  "#fbbdbf",
  "#ee161b",
  "#e6010a",
  "#faabaa",
  "#fbbdbf",
  "#fbc9c9",
  "#fbd3d4",
  "#fbbdbf",
  "#fbc9c9",
] as const;

function AboutDotGrid() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-20 right-5 z-[6] grid grid-cols-6 gap-[3.5px] opacity-50 sm:right-8 lg:bottom-[108px] lg:right-[79px]"
      variants={aboutDotGridStagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      aria-hidden
    >
      {ABOUT_DOT_COLORS.map((color, index) => (
        <motion.span
          key={index}
          className="size-[7px] rounded-full"
          style={{ backgroundColor: color }}
          variants={aboutDotPop}
        />
      ))}
    </motion.div>
  );
}

function AboutBadge() {
  return (
    <motion.div
      variants={aboutBadgeReveal}
      className="relative box-border flex w-fit items-center gap-[7.1px] rounded-full border border-solid border-[0.9px] border-crimson-100 bg-crimson-200 px-[10.6px] py-[5.3px] text-left font-inter text-xs text-red-100"
    >
      <motion.div
        variants={aboutBadgeDot}
        className="relative h-[7.1px] w-[7.1px] rounded-full bg-red-200"
        aria-hidden
      />
      <div className="relative font-medium capitalize leading-[14.1px] tracking-[0.53px]">
        About Mekark
      </div>
    </motion.div>
  );
}

function QuotesIcon() {
  return (
    <motion.svg
      variants={aboutQuoteIcon}
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[30px] shrink-0"
      aria-hidden
    >
      <path
        d="M10.5 9C9.70435 9 8.94129 9.31607 8.37868 9.87868C7.81607 10.4413 7.5 11.2044 7.5 12V15H13.5V25.5H3V12C3 10.0109 3.79018 8.10322 5.1967 6.6967C6.60322 5.29018 8.51088 4.5 10.5 4.5V9ZM24 9C23.2044 9 22.4413 9.31607 21.8787 9.87868C21.3161 10.4413 21 11.2044 21 12V15H27V25.5H16.5V12C16.5 10.0109 17.2902 8.10322 18.6967 6.6967C20.1032 5.29018 22.0109 4.5 24 4.5V9Z"
        fill="#ED1C24"
      />
    </motion.svg>
  );
}

function AboutStatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const delay = 0.45 + index * 0.14;

  return (
    <motion.div
      variants={aboutStatReveal}
      whileHover={{
        y: -5,
        scale: 1.015,
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }}
      className="relative flex w-full items-center gap-5 overflow-hidden rounded-[15px] border border-[rgba(224,224,224,0.6)] bg-[rgba(255,255,255,0.5)] p-5 shadow-[0px_3px_0px_0px_#ed1c24] backdrop-blur-[2px] sm:p-[27px]"
    >
      <AboutCountUp value={value} suffix={suffix} delay={delay} />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-[33px] w-px shrink-0 origin-center bg-[#e5e5e5]"
        aria-hidden
      />
      <p className="text-[14.6px] font-semibold leading-[20px] text-black">
        {label}
      </p>
    </motion.div>
  );
}

export function AboutMekarkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={VIEWPORT}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/about/background.png"
            alt=""
            fill
            className="object-cover object-left-top"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1440px] min-h-[640px] lg:min-h-[686px]">
        <div className="relative z-10 min-h-[640px] px-5 pb-64 pt-14 sm:px-8 lg:min-h-[686px] lg:px-0 lg:pb-0 lg:pt-0">
          <motion.div
            className="flex flex-col gap-5 lg:absolute lg:left-[79px] lg:top-[99px] lg:w-[628px]"
            variants={aboutContainerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <AboutBadge />

            <motion.h2
              variants={aboutHeadlineStagger}
              className="overflow-hidden text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.23] tracking-[-1.12px] text-[#111] lg:text-[40px] lg:leading-[49.28px]"
            >
              <motion.span className="block" variants={aboutHeadlineChunk}>
                Engineering Depth.{" "}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-b from-[#ed1c24] to-[#b01218] bg-clip-text text-transparent"
                variants={aboutHeadlineChunk}
              >
                Execution Certainty.
              </motion.span>
              <motion.span className="block" variants={aboutHeadlineChunk}>
                Industrial Focus.
              </motion.span>
            </motion.h2>

            <motion.p
              variants={aboutParagraphReveal}
              className="max-w-[576px] text-base font-medium leading-[1.75] text-[#464646] sm:text-[17.6px] sm:leading-[30.8px]"
            >
              Mekark operates at the intersection of structural engineering,
              industrial design, and large-scale execution.
            </motion.p>

            <motion.p
              variants={aboutParagraphReveal}
              className="max-w-[576px] text-base font-medium leading-[1.75] text-[#464646] sm:text-[17.6px] sm:leading-[30.8px]"
            >
              With over 15 years of experience and 450+ delivered projects, we
              specialise in industrial environments that demand precision,
              scalability, and operational intelligence.
            </motion.p>

            <motion.blockquote
              variants={aboutQuoteReveal}
              className="relative flex max-w-[576px] items-start gap-4 pl-[19px]"
            >
              <motion.div
                variants={aboutQuoteBorder}
                className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-[#ed1c24]"
                aria-hidden
              />
              <QuotesIcon />
              <p className="text-base font-semibold leading-[25px] text-[#4c4c4c]">
                We design not just for construction,
                <br /> but for lifecycle performance.
              </p>
            </motion.blockquote>
          </motion.div>

          <motion.div
            className="mt-10 flex w-full max-w-[432px] flex-col gap-[17px] sm:max-w-none lg:absolute lg:left-[calc(66.67%-32px)] lg:top-[calc(50%-38px)] lg:mt-0 lg:w-[432px] lg:-translate-y-1/2"
            variants={aboutStatsStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {STATS.map((stat, index) => (
              <AboutStatCard key={stat.label} {...stat} index={index} />
            ))}
          </motion.div>
        </div>

        <AboutDotGrid />

        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 z-[5] h-[220px] w-[min(550px,calc(100%-2.5rem))] -translate-x-1/2 sm:h-[260px] lg:left-[384px] lg:h-[299px] lg:w-[550px] lg:translate-x-0"
          variants={aboutBuildingReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <Image
            src="/images/about/building.png"
            alt="Mekark industrial facility"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 1024px) 90vw, 550px"
          />
        </motion.div>
      </div>
    </section>
  );
}
