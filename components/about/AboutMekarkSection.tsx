"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import {
  aboutBuildingReveal,
  aboutCalloutReveal,
  aboutContainerStagger,
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  aboutParagraphReveal,
  aboutQuoteBorder,
  aboutQuoteIcon,
  aboutQuoteReveal,
  aboutStatReveal,
  aboutStatUnderline,
  aboutStatsStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const STATS = [
  {
    countTo: 70,
    suffix: " Lakh+",
    label: (
      <>
        Sq.Ft Manufacturing
        <br />
        Facility
      </>
    ),
    icon: "/images/about/icon-factory.svg",
    iconAlt: "Manufacturing facility",
  },
  {
    countTo: 18,
    suffix: "+",
    label: "Years of Experience",
    icon: "/images/about/icon-medal.svg",
    iconAlt: "Years of experience",
  },
  {
    countTo: 200,
    suffix: "+",
    label: (
      <>
        Projects
        <br />
        Delivered
      </>
    ),
    icon: "/images/about/icon-hardhat.svg",
    iconAlt: "Projects delivered",
  },
  {
    countTo: 98,
    suffix: "%",
    label: (
      <>
        On-Time Delivery
        <br />
        Rate
      </>
    ),
    icon: "/images/about/icon-clock.svg",
    iconAlt: "On-time delivery",
  },
] as const;

function StatIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative isolate flex size-12 shrink-0 items-center justify-center rounded-full sm:size-16 lg:size-[4.5rem] 2xl:size-24"
      style={{
        background:
          "radial-gradient(95.52% 95.52% at 35% 30%, rgba(255,255,255,0.05), rgba(244,244,244,0.05))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-transparent shadow-[0px_1.33px_0px_rgba(255,255,255,0.1)_inset,0px_10.67px_24px_-10.67px_rgba(0,0,0,0.12),0px_2.67px_5.33px_rgba(0,0,0,0.04)]"
        aria-hidden
      />
      <div className="relative z-[1] size-5 sm:size-7 lg:size-7 2xl:size-8">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
    </div>
  );
}

export function AboutMekarkSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.25 });
  return (
    <section className="relative w-full overflow-hidden bg-white font-[family-name:var(--font-manrope)] text-[#555]">
      <div
        className={`${SECTION_CONTAINER_CLASS} flex flex-col items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:gap-14 lg:py-[85px] xl:gap-12 xl:py-[73px] 2xl:gap-14 2xl:py-[85px]`}
      >
        {/* Hero row — image stretches to match copy height (paras + quote) */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-12 2xl:gap-16">
          {/* Image card */}
          <motion.div
            className="relative aspect-[692/588] w-full max-w-[692px] shrink-0 overflow-hidden rounded-[20px] border border-[rgba(245,245,245,0.08)] bg-[#111] sm:rounded-[26.67px] lg:aspect-auto lg:h-auto lg:min-h-[480px] lg:w-[min(46%,640px)] lg:max-w-none xl:w-[min(44%,600px)] 2xl:min-h-[588px] 2xl:w-[min(48%,692px)]"
            variants={aboutBuildingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <Image
              src="/images/about/facility-card.png"
              alt="Mekark industrial facility"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 692px"
              priority={false}
            />

            {/* Centered Mekark wordmark */}
            <div className="absolute left-1/2 top-1/2 z-[2] h-8 w-[min(72%,385px)] -translate-x-1/2 -translate-y-1/2 sm:h-10">
              <Image
                src="/images/about/Mekark logo (Black) 1.png"
                alt="Mekark"
                fill
                className="object-contain"
                sizes="385px"
              />
            </div>

            {/* Bottom gradient */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[41%] bg-gradient-to-b from-transparent to-black to-[78%]"
              aria-hidden
            />

            {/* Top red accent line */}
            <div
              className="absolute inset-x-0 top-0 z-[3] h-[5.3px] bg-[#c4161c]"
              aria-hidden
            />

            {/* Bottom overlays: callout + years badge */}
            <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end gap-0">
              <motion.div
                className="mb-0 box-border flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center bg-[linear-gradient(90deg,rgba(8,8,8,0.54)_0%,rgba(228,0,21,0.54)_42.66%)] px-2.5 py-2 text-center sm:mb-[49px] sm:ml-auto sm:mr-0 sm:min-h-[60px] sm:max-w-[413px] sm:flex-none sm:items-start sm:py-2.5 sm:pl-5 sm:pr-6 sm:text-left"
                variants={aboutCalloutReveal}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
              >
                <p className="text-[9px] font-bold leading-[1.35] tracking-[0.6px] text-[#f5f5f5] sm:text-[13px] sm:leading-normal sm:tracking-[1.1px]">
                  EPC Solution providers for Industries
                  <br />
                  Commercial &amp; Institutional Projects
                </p>
              </motion.div>

              <div className="flex shrink-0 flex-col items-center rounded-br-[20px] bg-[#c4161c] px-3 py-2.5 text-center sm:rounded-br-[26.67px] sm:px-8 sm:py-6">
                <p className="text-[22px] font-extrabold leading-none text-[#f5f5f5] sm:text-[48px] sm:leading-[48px]">
                  18+
                </p>
                <p className="mt-0.5 text-[8px] font-bold capitalize tracking-[0.8px] text-[rgba(245,245,245,0.8)] sm:mt-1 sm:text-[13.33px] sm:tracking-[1.33px]">
                  Years Of
                  <br />
                  Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            className="flex w-full min-w-0 flex-1 flex-col gap-6 lg:justify-center lg:gap-[clamp(1.1rem,2vw,1.7rem)]"
            variants={aboutContainerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.h2
              variants={aboutHeadlineStagger}
              className="text-[28px] font-extrabold leading-tight text-[#121212] sm:text-[42px] sm:leading-[64px] lg:text-[clamp(2rem,3.2vw,3.33rem)] lg:leading-[1.2] xl:text-[clamp(2rem,2.8vw,2.5rem)] xl:leading-[1.2] 2xl:text-[53.33px] 2xl:leading-[81.33px]"
            >
              <motion.span variants={aboutHeadlineChunk} className="inline">
                <span className="uppercase">- A</span>
                <span className="lowercase">bout </span>
                <span className="capitalize text-[#c4161c]">Mekark -</span>
              </motion.span>
            </motion.h2>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.65] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.6] 2xl:text-[21.33px] 2xl:leading-[37.33px]"
            >
              With 18+ years of engineering excellence and 200+ successfully
              delivered projects, Mekark is a trusted industrial EPC
              (Engineering, Procurement, and Construction) company specialising
              in facilities that demand engineered for long-term operational
              performance.
            </motion.p>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.65] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.6] 2xl:text-[21.33px] 2xl:leading-[37.33px]"
            >
              We don't just construct industrial buildings we design them to
              perform for years, not just to get finished on time. From
              ready-to-assemble steel buildings and factory shells to large
              open-span structures and turnkey plants, every Mekark project is
              built for lasting performance over its full lifetime.
            </motion.p>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.65] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.6] 2xl:text-[21.33px] 2xl:leading-[37.33px]"
            >
              Our integrated approach brings design, procurement, production,
              and execution together under a single accountable system, reducing
              delays, eliminating coordination gaps, and delivering industrial,
              commercial, and institutional assets that stay efficient for
              decades.
            </motion.p>

            <motion.blockquote
              variants={aboutQuoteReveal}
              className="relative flex max-w-[768px] items-start gap-4 pl-5 sm:gap-[21px] sm:pl-[25px]"
            >
              <motion.div
                variants={aboutQuoteBorder}
                className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed1c24]"
                aria-hidden
              />
              <motion.div
                variants={aboutQuoteIcon}
                className="relative size-8 shrink-0 sm:size-10"
              >
                <Image
                  src="/images/about/quotes-ltr.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="40px"
                  aria-hidden
                />
              </motion.div>
              <p className="text-base font-semibold leading-[28px] text-black sm:max-w-[515px] sm:text-[21.33px] sm:leading-[33.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.55] xl:max-w-[386px] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.5] 2xl:max-w-[515px] 2xl:text-[21.33px] 2xl:leading-[33.33px]">
                Precision engineering. Proven scale. Performance that lasts.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Stats grid — equal columns; no overflow clip at laptop widths */}
        <motion.div
          ref={statsRef}
          className="box-border grid w-full grid-cols-1 gap-3 rounded-4xl border-[1.3px] border-solid border-[rgba(255,255,255,0.8)] bg-[#0e0e0e] px-3 py-8 shadow-[0px_0px_20.27px_rgba(0,0,0,0.05)] backdrop-blur-[13.33px] sm:grid-cols-2 sm:gap-4 sm:px-4 sm:py-10 lg:grid-cols-4 lg:gap-0 lg:px-2 lg:py-8 2xl:px-1 2xl:py-[41px]"
          variants={aboutStatsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.iconAlt}
              variants={aboutStatReveal}
              className={`relative isolate flex min-w-0 items-center gap-3 rounded-2xl px-4 py-4 sm:gap-4 sm:px-5 sm:py-5 lg:gap-3 lg:px-3 xl:gap-3.5 xl:px-4 2xl:gap-6 2xl:px-8 2xl:py-[18.67px] ${
                index > 0
                  ? "border-[rgba(214,214,214,0.25)] lg:border-l-[1.3px] lg:border-solid"
                  : ""
              }`}
            >
              <StatIcon src={stat.icon} alt={stat.iconAlt} />
              <div className="z-[1] flex min-w-0 flex-col items-start gap-1.5 2xl:gap-[4.6px]">
                <p className="whitespace-nowrap font-[family-name:var(--font-montserrat-alternates)] text-[clamp(1.25rem,1.9vw,2.79rem)] font-bold leading-none tracking-[-1.01px] text-white tabular-nums">
                  <CountUp
                    value={stat.countTo}
                    suffix={stat.suffix}
                    start={statsInView}
                    delay={0.35 + index * 0.18}
                    duration={1.7}
                  />
                </p>
                <motion.div
                  variants={aboutStatUnderline}
                  className="h-[2.67px] w-10 origin-left bg-[#ed2024] sm:w-12"
                  aria-hidden
                />
                <p className="text-[clamp(0.625rem,0.85vw,0.917rem)] font-semibold uppercase leading-snug tracking-[1.2px] text-[#6b6b6b] sm:tracking-[1.6px] 2xl:text-[14.67px] 2xl:leading-[21.27px] 2xl:tracking-[2.05px]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
