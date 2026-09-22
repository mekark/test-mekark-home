"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { FOOTNOTE_150_DAYS_TERMS_PATH } from "@/lib/legal-disclaimers";
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
  aboutStatUnderline,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

/** Figma 7382:7960 — mobile card 293×full, rounded 13.3px */
const BUILDING_CARD_CLASS =
  "relative aspect-[692/588] w-full max-w-[692px] shrink-0 overflow-hidden rounded-[20px] border border-[rgba(245,245,245,0.08)] bg-[#111] max-lg:h-[293px] max-lg:rounded-[13px] sm:rounded-[26.67px] lg:aspect-auto lg:h-auto lg:min-h-[480px] lg:w-[min(46%,640px)] lg:max-w-none xl:w-[min(44%,600px)] 2xl:min-h-[588px] 2xl:w-[min(48%,692px)]";

const COPY_COLUMN_CLASS =
  "flex w-full min-w-0 flex-1 flex-col gap-6 max-lg:gap-3.5 lg:justify-center lg:gap-[clamp(1.1rem,2vw,1.7rem)]";

const CALLOUT_CLASS =
  "mb-0 box-border flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center bg-[linear-gradient(90deg,rgba(8,8,8,0.54)_0%,rgba(228,0,21,0.54)_42.66%)] px-2.5 py-2 text-center max-lg:min-h-0 max-lg:items-end max-lg:py-[5px] max-lg:text-right sm:mb-[49px] sm:ml-auto sm:mr-0 sm:min-h-[60px] sm:max-w-[413px] sm:flex-none sm:items-start sm:py-2.5 sm:pl-5 sm:pr-6 sm:text-left";

const HEADING_CLASS =
  "w-full text-[28px] font-extrabold text-[#121212] max-lg:text-center max-lg:leading-[44px] max-lg:text-[#111] sm:text-[42px] sm:leading-[64px] lg:text-left lg:text-[clamp(2rem,3.2vw,3.33rem)] lg:leading-[1.2] xl:text-[clamp(2rem,2.8vw,2.5rem)] xl:leading-[1.2] 2xl:text-[53.33px] 2xl:leading-[81.33px]";

const PARAGRAPH_CLASS =
  "text-base leading-[28px] text-[#555] max-lg:text-sm max-lg:leading-[22px] sm:text-[21.33px] sm:leading-[37.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.65] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.6] 2xl:text-[21.33px] 2xl:leading-[37.33px]";

const QUOTE_CLASS =
  "relative flex max-w-[768px] items-start gap-4 max-lg:border-l-4 max-lg:border-solid max-lg:border-[#c4161c] max-lg:pl-4 sm:gap-[21px] sm:pl-[25px]";

const QUOTE_TEXT_CLASS =
  "text-base font-semibold leading-[28px] text-black max-lg:text-sm max-lg:leading-[22px] max-lg:text-[#111] sm:max-w-[515px] sm:text-[21.33px] sm:leading-[33.33px] lg:text-[clamp(0.95rem,1.35vw,1.2rem)] lg:leading-[1.55] xl:max-w-[386px] xl:text-[clamp(0.95rem,1.25vw,1.125rem)] xl:leading-[1.5] 2xl:max-w-[515px] 2xl:text-[21.33px] 2xl:leading-[33.33px]";

function AboutCalloutText() {
  return (
    <p className="text-[9px] font-bold leading-[1.35] tracking-[0.6px] text-[#f5f5f5] max-lg:text-[8px] max-lg:leading-normal max-lg:tracking-[0.612px] sm:text-[13px] sm:leading-normal sm:tracking-[1.1px]">
      EPC Solution providers for Industries
      <br />
      Commercial &amp; Institutional Projects
    </p>
  );
}

function AboutBuildingCardOverlays({ animated }: { animated: boolean }) {
  const CalloutTag = animated ? motion.div : "div";
  const calloutProps = animated
    ? {
        variants: aboutCalloutReveal,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: VIEWPORT,
      }
    : {};

  return (
    <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end gap-0">
      <CalloutTag className={CALLOUT_CLASS} {...calloutProps}>
        <AboutCalloutText />
      </CalloutTag>

      <div className="flex shrink-0 flex-col items-center rounded-br-[20px] bg-[#c4161c] px-3 py-2.5 text-center max-lg:rounded-br-[13px] max-lg:px-4 max-lg:py-3 sm:rounded-br-[26.67px] sm:px-8 sm:py-6">
        <p className="text-[22px] font-extrabold leading-none text-[#f5f5f5] max-lg:text-2xl max-lg:leading-[24px] sm:text-[48px] sm:leading-[48px]">
          18+
        </p>
        <p className="mt-0.5 text-[8px] font-bold capitalize tracking-[0.8px] text-[rgba(245,245,245,0.8)] max-lg:text-[6px] max-lg:tracking-[0.665px] sm:mt-1 sm:text-[13.33px] sm:tracking-[1.33px]">
          Years Of
          <br />
          Excellence
        </p>
      </div>
    </div>
  );
}

function AboutBuildingCardVisual({ animated }: { animated: boolean }) {
  return (
    <>
      <Image
        src="/images/about/facility-card.webp"
        alt="Mekark industrial facility"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 692px"
        priority={false}
      />

      <div className="absolute left-1/2 top-1/2 z-[2] h-8 w-[min(72%,385px)] -translate-x-1/2 -translate-y-1/2 max-lg:h-5 max-lg:w-[192px] max-lg:max-w-[55%] sm:h-10">
        <Image
          src="/images/about/Mekark logo (Black) 1.webp"
          alt="Mekark"
          fill
          className="object-contain"
          sizes="385px"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[41%] bg-gradient-to-b from-transparent to-black to-[78%] max-lg:h-[120px]"
        aria-hidden
      />

      <div
        className="absolute inset-x-0 top-0 z-[3] h-[5.3px] bg-[#c4161c] max-lg:h-[2.66px]"
        aria-hidden
      />

      <AboutBuildingCardOverlays animated={animated} />
    </>
  );
}

function AboutBuildingCard({ animated }: { animated: boolean }) {
  if (!animated) {
    return (
      <div className={BUILDING_CARD_CLASS}>
        <AboutBuildingCardVisual animated={false} />
      </div>
    );
  }

  return (
    <motion.div
      className={BUILDING_CARD_CLASS}
      variants={aboutBuildingReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <AboutBuildingCardVisual animated />
    </motion.div>
  );
}

function AboutHeadingContent() {
  return (
    <>
      <span className="uppercase">- A</span>
      <span className="lowercase">bout </span>
      <span className="capitalize text-[#c4161c]">Mekark -</span>
    </>
  );
}

const QUOTE_MARK_BOX_CLASS =
  "relative inline-flex shrink-0 max-lg:h-[30px] max-lg:w-4 sm:size-10";

function AboutQuoteMark({
  closing = false,
  className = "",
}: {
  closing?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`${QUOTE_MARK_BOX_CLASS} ${closing ? "ml-1 rotate-180" : ""} ${className}`}
      aria-hidden={closing}
    >
      <Image
        src="/images/about/quotes-ltr.svg"
        alt={closing ? "" : "Opening quotation mark"}
        fill
        className="object-contain"
        sizes="40px"
      />
    </span>
  );
}

function AboutQuoteText() {
  return (
    <p className={QUOTE_TEXT_CLASS}>
      Precision engineering. Proven scale. Performance that lasts.
      <AboutQuoteMark closing className="align-text-top" />
    </p>
  );
}

function AboutQuoteContent({ animated }: { animated: boolean }) {
  if (!animated) {
    return (
      <blockquote className={QUOTE_CLASS}>
        <div
          className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed1c24] max-lg:hidden"
          aria-hidden
        />
        <AboutQuoteMark />
        <AboutQuoteText />
      </blockquote>
    );
  }

  return (
    <motion.blockquote variants={aboutQuoteReveal} className={QUOTE_CLASS}>
      <motion.div
        variants={aboutQuoteBorder}
        className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed1c24] max-lg:hidden"
        aria-hidden
      />
      <motion.div variants={aboutQuoteIcon}>
        <AboutQuoteMark />
      </motion.div>
      <AboutQuoteText />
    </motion.blockquote>
  );
}

function AboutCopyColumn({
  animated,
  showHeading = true,
}: {
  animated: boolean;
  showHeading?: boolean;
}) {
  if (!animated) {
    return (
      <div className={COPY_COLUMN_CLASS}>
        {showHeading ? (
          <h2 className={HEADING_CLASS}>
            <AboutHeadingContent />
          </h2>
        ) : null}

        <p className={PARAGRAPH_CLASS}>
          With 18+ years of engineering excellence and 200+ successfully
          delivered projects, Mekark is a trusted industrial EPC (Engineering,
          Procurement, and Construction) company specialising in facilities
          that demand engineered for long-term operational performance.
        </p>

        <p className={PARAGRAPH_CLASS}>
          We don&apos;t just construct industrial buildings we design them to
          perform for years, not just to get finished on time. From
          ready-to-assemble steel buildings and factory shells to large
          open-span structures and turnkey plants, every Mekark project is
          built for lasting performance over its full lifetime.
        </p>

        <p className={PARAGRAPH_CLASS}>
          Our integrated approach brings design, procurement, production, and
          execution together under a single accountable system, reducing delays,
          eliminating coordination gaps, and delivering industrial, commercial,
          and institutional assets that stay efficient for decades.
        </p>

        <AboutQuoteContent animated={false} />
      </div>
    );
  }

  return (
    <motion.div
      className={COPY_COLUMN_CLASS}
      variants={aboutContainerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {showHeading ? (
        <motion.h2 variants={aboutHeadlineStagger} className={HEADING_CLASS}>
          <motion.span variants={aboutHeadlineChunk} className="inline">
            <AboutHeadingContent />
          </motion.span>
        </motion.h2>
      ) : null}

      <motion.p variants={aboutParagraphReveal} className={PARAGRAPH_CLASS}>
        With 18+ years of engineering excellence and 200+ successfully delivered
        projects, Mekark is a trusted industrial EPC (Engineering, Procurement,
        and Construction) company specialising in facilities that demand
        engineered for long-term operational performance.
      </motion.p>

      <motion.p variants={aboutParagraphReveal} className={PARAGRAPH_CLASS}>
        We don&apos;t just construct industrial buildings we design them to
        perform for years, not just to get finished on time. From
        ready-to-assemble steel buildings and factory shells to large open-span
        structures and turnkey plants, every Mekark project is built for lasting
        performance over its full lifetime.
      </motion.p>

      <motion.p variants={aboutParagraphReveal} className={PARAGRAPH_CLASS}>
        Our integrated approach brings design, procurement, production, and
        execution together under a single accountable system, reducing delays,
        eliminating coordination gaps, and delivering industrial, commercial,
        and institutional assets that stay efficient for decades.
      </motion.p>

      <AboutQuoteContent animated />
    </motion.div>
  );
}

const STATS = [
  {
    countTo: 70,
    suffix: " Lakh+",
    label: (
      <>
        Sq.Ft Projects
        <br />
        Completed
      </>
    ),
    icon: "/images/about/icon-factory.svg",
    iconAlt: "Completed projects",
  },
  {
    countTo: 150,
    suffix: " Days",
    footnote: true,
    label: (
      <>
        Design-to-Handover
        <br />
        Turnaround
      </>
    ),
    icon: "/images/about/icon-calendar.svg",
    iconAlt: "Design-to-handover turnaround",
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

type StatItem = (typeof STATS)[number];

function AboutStatItem({
  stat,
  index,
}: {
  stat: StatItem;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const itemInView = useInView(itemRef, { once: true, amount: 0.45 });

  return (
    <div
      ref={itemRef}
      className={`relative isolate flex min-w-0 max-lg:flex-1 max-lg:flex-col max-lg:items-start max-lg:gap-2.5 max-lg:px-0 max-lg:py-0 lg:items-center lg:gap-3 lg:rounded-2xl lg:px-3 lg:py-5 xl:gap-3.5 xl:px-4 2xl:gap-6 2xl:px-8 2xl:py-[18.67px] ${
        index > 0
          ? "max-lg:border-0 lg:border-l-[1.3px] lg:border-solid lg:border-[rgba(214,214,214,0.25)]"
          : ""
      }`}
    >
      <StatIcon src={stat.icon} alt={stat.iconAlt} />
      <div className="z-[1] flex min-w-0 flex-col items-start max-lg:gap-1 lg:gap-1.5 2xl:gap-[4.6px]">
        <p className="font-manrope tabular-nums text-white max-lg:text-[14px] max-lg:font-semibold max-lg:leading-[15px] max-lg:tracking-normal lg:text-[clamp(1.25rem,1.9vw,2.79rem)] lg:font-bold lg:leading-none lg:tracking-[-1.01px]">
          <span className="inline-flex max-w-full items-start overflow-visible">
            <CountUp
              value={stat.countTo}
              suffix={stat.suffix}
              start={itemInView}
              delay={0.15}
              duration={1.7}
            />
            {"footnote" in stat && stat.footnote ? (
              <span className="max-lg:mt-0 max-lg:pl-0 max-lg:text-[14px] max-lg:font-semibold max-lg:leading-[15px] max-lg:text-[#ed2024] lg:mt-0.5 lg:shrink-0 lg:pl-0.5 lg:text-[13px] lg:font-normal lg:leading-none lg:text-[#ed2024] 2xl:mt-1.5 2xl:text-[18px]">
                {LEGAL_AND_COOKIE_CONSENT_ENABLED ? (
                  <Link
                    href={FOOTNOTE_150_DAYS_TERMS_PATH}
                    className="hover:underline"
                    aria-label="150 Days terms and conditions apply"
                    title="Terms and conditions apply"
                  >
                    *
                  </Link>
                ) : (
                  <span
                    className="cursor-not-allowed"
                    aria-label="150 Days terms and conditions apply"
                    title="Under review"
                  >
                    *
                  </span>
                )}
              </span>
            ) : null}
          </span>
        </p>
        <motion.div
          initial="hidden"
          animate={itemInView ? "visible" : "hidden"}
          variants={aboutStatUnderline}
          className="h-[2.67px] w-10 origin-left bg-[#ed2024] max-lg:hidden lg:w-12"
          aria-hidden
        />
        <p className="text-[#6b6b6b] max-lg:text-[10px] max-lg:font-normal max-lg:normal-case max-lg:leading-[12px] max-lg:tracking-normal lg:text-[clamp(0.625rem,0.85vw,0.917rem)] lg:font-semibold lg:uppercase lg:leading-snug lg:tracking-[1.6px] 2xl:text-[14.67px] 2xl:leading-[21.27px] 2xl:tracking-[2.05px]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function StatIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative isolate flex size-[35px] shrink-0 items-center justify-center rounded-[35px] bg-[#2a2a2a] lg:size-[4.5rem] lg:rounded-full lg:bg-transparent 2xl:size-24">
      <div
        className="pointer-events-none absolute inset-0 rounded-full max-lg:hidden"
        style={{
          background:
            "radial-gradient(95.52% 95.52% at 35% 30%, rgba(255,255,255,0.05), rgba(244,244,244,0.05))",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-transparent shadow-[0px_1.33px_0px_rgba(255,255,255,0.1)_inset,0px_10.67px_24px_-10.67px_rgba(0,0,0,0.12),0px_2.67px_5.33px_rgba(0,0,0,0.04)] max-lg:hidden"
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="relative z-[1] size-5 object-contain lg:size-7 2xl:size-8"
      />
    </div>
  );
}

export function AboutMekarkSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-white font-[family-name:var(--font-manrope)] text-[#555]">
      <div
        className={`${SECTION_CONTAINER_CLASS} flex flex-col items-center gap-10 py-12 max-lg:gap-[30px] max-lg:py-8 sm:gap-12 sm:py-16 lg:gap-14 lg:py-[85px] xl:gap-12 xl:py-[73px] 2xl:gap-14 2xl:py-[85px]`}
      >
        {/* Hero row — static on mobile; blur/slide animations on lg+ only */}
        <div className="flex w-full flex-col items-center gap-10 max-lg:gap-5 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-12 2xl:gap-16">
          <div className="flex w-full flex-col gap-5 max-lg:gap-5 lg:hidden">
            <h2 className={HEADING_CLASS}>
              <AboutHeadingContent />
            </h2>
            <AboutBuildingCard animated={false} />
            <AboutCopyColumn animated={false} showHeading={false} />
          </div>
          <div className="hidden lg:contents">
            <AboutBuildingCard animated />
            <AboutCopyColumn animated />
          </div>
        </div>

        {/* Stats — Figma 7382:7982 mobile row; lg+ desktop grid */}
        <div className="box-border flex w-full flex-row items-start justify-center gap-[14px] rounded-[20px] bg-[#0e0e0e] py-[14px] pl-2 pr-1 max-lg:flex-nowrap lg:grid lg:grid-cols-4 lg:gap-0 lg:rounded-4xl lg:border-[1.3px] lg:border-solid lg:border-[rgba(255,255,255,0.8)] lg:px-2 lg:py-8 lg:shadow-[0px_0px_20.27px_rgba(0,0,0,0.05)] lg:backdrop-blur-[13.33px] 2xl:px-1 2xl:py-[41px]">
          {STATS.map((stat, index) => (
            <AboutStatItem key={stat.iconAlt} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
