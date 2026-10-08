"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { CountUp } from "@/components/motion/CountUp";
import {
  aboutBadgeDot,
  achCornerPop,
  achCornersStagger,
  achGlowBreath,
  achPanelReveal,
  achStatActivate,
  achStatsRow,
  achTestSectionStagger,
  achTitleGradient,
  testBadgeReveal,
  testCardReveal,
  testGridStagger,
  testHeadlineReveal,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CORNERS = [
  { pos: "left-5 top-5 sm:left-8 sm:top-8", hOrigin: "origin-top", vOrigin: "origin-left" },
  { pos: "right-5 top-5 sm:right-8 sm:top-8", hOrigin: "origin-top", vOrigin: "origin-right" },
  { pos: "bottom-5 left-5 sm:bottom-8 sm:left-8", hOrigin: "origin-bottom", vOrigin: "origin-left" },
  { pos: "bottom-5 right-5 sm:bottom-8 sm:right-8", hOrigin: "origin-bottom", vOrigin: "origin-right" },
] as const;

const ACHIEVEMENTS = [
  {
    countTo: 450,
    suffix: "+",
    label: ["Industrial", "Projects Delivered"],
  },
  {
    countTo: 18,
    suffix: "+",
    label: ["Years Industry Experience"],
  },
  {
    countTo: 98,
    suffix: "%",
    label: ["On-Time Delivery Performance"],
  },
  {
    countTo: 40,
    suffix: " K",
    label: ["Tons Annual Capacity"],
  },
  {
    countTo: 6,
    suffix: " L+",
    label: ["Sq.ft Manufacturing Facility"],
  },
  {
    text: "Zero",
    label: ["Compromise Quality Standard"],
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Mekark delivers engineering clarity that translates directly into execution confidence. Every milestone was hit without compromise.",
    name: "Industrial Client",
    role: "Manufacturing Infrastructure",
    featured: false,
  },
  {
    quote:
      "Their ability to integrate design, fabrication, and construction under one roof is genuinely unmatched in the industry.",
    name: "Project Director",
    role: "Large-Scale Industrial Facility",
    featured: true,
  },
  {
    quote:
      "Reliable timelines and industrial-grade precision make Mekark the only EPC partner we'd trust for critical infrastructure.",
    name: "Operations Head",
    role: "Industrial EPC Delivery",
    featured: false,
  },
] as const;

function PanelCorners() {
  return (
    <motion.div
      variants={achCornersStagger}
      className="pointer-events-none absolute inset-0 z-[2]"
      aria-hidden
    >
      {CORNERS.map((corner) => (
        <div key={corner.pos} className={`absolute ${corner.pos}`}>
          <motion.span
            variants={achCornerPop}
            className={`block h-4 w-px bg-[#ed1c24]/75 ${corner.hOrigin}`}
          />
          <motion.span
            variants={achCornerPop}
            className={`block h-px w-4 bg-[#ed1c24]/75 ${corner.vOrigin}`}
          />
        </div>
      ))}
    </motion.div>
  );
}

function AchievementStat({
  stat,
  index,
  active,
}: {
  stat: (typeof ACHIEVEMENTS)[number];
  index: number;
  active: boolean;
}) {
  const countDelay = 0.52 + index * 0.22;

  return (
    <motion.div
      variants={achStatActivate(index)}
      whileHover={{
        y: -3,
        transition: { type: "spring", stiffness: 380, damping: 20 },
      }}
      className="group w-[148px] shrink-0 sm:w-[160px] lg:w-auto lg:min-w-[110px] lg:max-w-[180px] lg:flex-1"
    >
      <p className="min-h-[48px] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-[-1.2px] text-white tabular-nums lg:min-h-[48px] lg:text-[48px] lg:leading-[48px]">
        {"text" in stat ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: countDelay }}
          >
            {stat.text}
          </motion.span>
        ) : (
          <CountUp
            value={stat.countTo}
            suffix={stat.suffix}
            start={active}
            delay={countDelay}
            duration={1.7}
          />
        )}
      </p>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: countDelay + 0.4,
        }}
        className="mt-2 text-[11px] font-bold uppercase leading-[19px] tracking-[2.25px] text-[#ed1c24] transition-colors duration-300 group-hover:text-[#ff4d55]"
      >
        {stat.label.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </motion.p>
    </motion.div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/images/achievements-testimonials/star-4.svg"
          alt="Rating star"
          width={17}
          height={17}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const featured = testimonial.featured;

  return (
    <motion.figure
      variants={testCardReveal(index)}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className={`flex h-full flex-col rounded-[24px] border p-8 ${
        featured
          ? "border-transparent bg-[#0d0808] text-white"
          : "border-[#e5e0e0] bg-[#fcf9f9] text-[#111]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/images/achievements-testimonials/icon-quote.svg"
          alt="Testimonial quote icon"
          width={32}
          height={32}
          aria-hidden
        />
        <StarRating />
      </div>

      <blockquote
        className={`mt-5 flex-1 text-base leading-[26px] ${
          featured ? "text-[#9e9c9c]" : "text-[#333]"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption
        className={`mt-6 border-t pt-6 ${
          featured ? "border-white/15" : "border-[#e5e0e0]"
        }`}
      >
        <p className="text-base font-bold leading-6">{testimonial.name}</p>
        <p
          className={`mt-0.5 text-sm leading-5 ${
            featured ? "text-white/60" : "text-[#383131]"
          }`}
        >
          {testimonial.role}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export function AchievementsTestimonialsSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const panelActive = useInView(panelRef, {
    once: true,
    margin: "-80px",
    amount: 0.35,
  });

  return (
    <section className="relative w-full bg-white">
      <div className="relative bg-gradient-to-b from-white to-[#f8f6f6] pb-14 pt-0 lg:pb-[70px]">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
          <motion.div
            ref={panelRef}
            variants={achPanelReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative z-10 w-full overflow-hidden rounded-[32px] bg-[#08090b] px-6 py-12 shadow-[0px_20px_31px_6px_rgba(0,0,0,0.23)] sm:px-10 sm:py-14 lg:min-h-[277px] lg:px-12 lg:py-12"
          >
            <motion.div
              className="pointer-events-none absolute inset-0 z-[1]"
              initial={{ x: "-120%" }}
              animate={panelActive ? { x: "120%" } : { x: "-120%" }}
              transition={{
                duration: 1.85,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.15,
              }}
              aria-hidden
            >
              <div className="h-full w-[55%] bg-gradient-to-r from-transparent via-[#ed1c24]/14 to-transparent blur-sm" />
            </motion.div>

            <PanelCorners />

            <motion.div
              variants={achGlowBreath}
              className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-[rgba(229,9,31,0.25)] blur-[121px]"
              aria-hidden
            />

            <motion.h2
              variants={achTitleGradient}
              className="relative z-[3] text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-9 text-transparent lg:text-[40px]"
              style={{
                backgroundImage:
                  "linear-gradient(112.47deg, rgb(237, 32, 36) 3.5%, rgb(135, 18, 21) 107.66%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Achievements
            </motion.h2>

            <motion.div
              variants={achStatsRow}
              className="relative z-[3] mt-10 flex w-full flex-nowrap items-start justify-start gap-8 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:justify-between lg:gap-10 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {ACHIEVEMENTS.map((stat, index) => (
                <AchievementStat
                  key={stat.label.join("-")}
                  stat={stat}
                  index={index}
                  active={panelActive}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={achTestSectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative mx-auto w-full max-w-[1280px]"
          >
            <div className="relative -mt-6 border-b border-[rgba(107,13,17,0.1)] bg-[#f8f6f6] px-0 pb-14 pt-24 sm:pt-28 lg:pb-[70px] lg:pt-32">
              <div className="mx-auto flex max-w-[672px] flex-col items-center text-center">
                <motion.div
                  variants={testBadgeReveal}
                  className="flex items-center gap-[7px] rounded-full border border-crimson-100 bg-crimson-200 px-[11.5px] py-[6px]"
                >
                  <motion.div
                    variants={aboutBadgeDot}
                    className="size-[7px] rounded-full bg-red-200"
                    aria-hidden
                  />
                  <span className="font-manrope text-xs font-medium tracking-[0.53px] text-red-100">
                    Testimonials
                  </span>
                </motion.div>

                <motion.h2
                  variants={testHeadlineReveal}
                  className="mt-3.5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.84px] text-[#0d0808] lg:text-[40px] lg:leading-[48px]"
                >
                  What Clients Say After Handover
                </motion.h2>
              </div>

              <motion.div
                variants={testGridStagger}
                className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5"
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.name}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
