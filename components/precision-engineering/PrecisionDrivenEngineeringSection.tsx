"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  precEngBenefitDot,
  precEngBenefitItem,
  precEngBenefitRow,
  precEngBorderAccent,
  precEngConnectorPulse,
  precEngHeadlineGroup,
  precEngHeadlineWord,
  precEngLogoReveal,
  precEngPillIcon,
  precEngPillRow,
  precEngPillSnap,
  precEngQuoteBorder,
  precEngQuoteReveal,
  precEngQuoteText,
  precEngRuleDraw,
  precEngSectionStagger,
  precEngSoftwareCard,
  precEngStepIcon,
  precEngStepNumber,
  precEngStepReveal,
  precEngStepTitle,
  precEngSubtitleReveal,
  precEngTagPop,
  precEngWorkflowPanel,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const VALUE_PILLS = [
  {
    label: "Accuracy",
    icon: "/images/precision-engineering/icon-accuracy.svg",
  },
  {
    label: "Clarity",
    icon: "/images/precision-engineering/icon-clarity.svg",
  },
  {
    label: "Speed",
    icon: "/images/precision-engineering/icon-speed.svg",
  },
] as const;

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Analyse",
    icon: "/images/precision-engineering/icon-analyse.svg",
    iconSize: 52,
    benefit: ["Fabrication accuracy from", "Day 1"],
    isLast: false,
  },
  {
    number: "02",
    title: "Model",
    icon: "/images/precision-engineering/icon-model.svg",
    iconSize: 48,
    benefit: ["Clash-free structural", "execution"],
    isLast: false,
  },
  {
    number: "03",
    title: "Shop Drawings",
    icon: "/images/precision-engineering/icon-shop-drawings.svg",
    iconSize: 52,
    benefit: ["Structural reliability at", "industrial scale"],
    isLast: true,
  },
] as const;

const SOFTWARE_CARDS = [
  {
    name: "Tekla Structures",
    badge: "3D BIM Modeling",
    description:
      "Fabrication-ready structural detailing and connection design for precision execution.",
    logo: "/images/precision-engineering/tekla-logo.png",
    tags: ["Shop Drawings", "Clash Detection", "CNC Export"],
  },
  {
    name: "STAAD.Pro",
    badge: "Structural Analysis",
    description:
      "Industry-standard load analysis with full code compliance for industrial structures.",
    logo: "/images/precision-engineering/staad-pro.png",
    tags: ["Seismic Analysis", "Wind Load", "Code Compliance"],
  },
  {
    name: "MBS",
    badge: "Metal Building Design",
    description:
      "Specialized PEB design software that optimizes steel frames for material efficiency and structural strength.",
    logo: "/images/precision-engineering/mbs-logo.png",
    tags: ["Cost Estimation", "Design Optimization", "BIM Export"],
  },
] as const;

function StepConnector() {
  return (
    <motion.div
      variants={precEngConnectorPulse}
      className="absolute right-0 top-1/2 z-10 flex size-[23px] -translate-y-1/2 translate-x-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="size-4 rotate-45 border-r border-t border-[rgba(237,28,36,0.35)] bg-[#fff9f9]" />
    </motion.div>
  );
}

function WorkflowStep({
  step,
}: {
  step: (typeof WORKFLOW_STEPS)[number];
}) {
  return (
    <motion.div
      variants={precEngStepReveal}
      className={`relative flex h-[140px] flex-1 flex-col border border-[#f2d4d4] bg-[#fff9f9] p-4 sm:h-[140px] ${
        step.number === "01"
          ? "rounded-xl sm:rounded-none sm:rounded-l-xl sm:border-r-0"
          : step.isLast
            ? "rounded-xl sm:rounded-none sm:rounded-r-xl"
            : "rounded-xl sm:rounded-none sm:border-r-0"
      }`}
    >
      {!step.isLast && (
        <div className="hidden sm:block">
          <StepConnector />
        </div>
      )}

      <motion.span
        variants={precEngStepNumber}
        className="text-[11.5px] font-extrabold leading-[17px] text-[#ed1c24]"
      >
        {step.number}
      </motion.span>

      <motion.div
        variants={precEngStepIcon}
        className="mt-2 flex flex-1 items-center"
        style={{ transformPerspective: 600 }}
      >
        <Image
          src={step.icon}
          alt=""
          width={step.iconSize}
          height={step.iconSize}
          className="h-auto w-auto"
          aria-hidden
        />
      </motion.div>

      <motion.h3
        variants={precEngStepTitle}
        className="text-[19px] font-extrabold leading-[29px] text-[#111]"
      >
        {step.title}
      </motion.h3>
    </motion.div>
  );
}

function SoftwareCard({
  card,
  index,
}: {
  card: (typeof SOFTWARE_CARDS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={precEngSoftwareCard(index)}
      whileHover={{
        y: -4,
        boxShadow: "0px 14px 28px rgba(237,28,36,0.12)",
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="relative overflow-hidden rounded-xl bg-white p-6 pl-[26px] shadow-[0px_8px_13px_rgba(237,28,36,0.07)] sm:min-h-[166px]"
    >
      <motion.span
        variants={precEngBorderAccent}
        className="absolute bottom-0 left-0 top-0 w-[5px] origin-top bg-[#ed2024]"
        aria-hidden
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <motion.div
          variants={precEngLogoReveal}
          className="relative size-20 shrink-0 overflow-hidden rounded-full"
        >
          <Image
            src={card.logo}
            alt={card.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <motion.h3
              variants={precEngStepTitle}
              className="text-[17.6px] font-bold leading-[22px] text-[#111]"
            >
              {card.name}
            </motion.h3>
            <motion.span
              variants={precEngTagPop}
              className="rounded-full border border-[#ffd5d5] bg-[#ffe8e8] px-[11px] py-1 text-[10.9px] font-bold uppercase tracking-[0.54px] text-[#ed1c24]"
            >
              {card.badge}
            </motion.span>
          </div>

          <motion.p
            variants={precEngStepTitle}
            className="mt-2 max-w-[361px] text-[14px] leading-[23px] text-[#666]"
          >
            {card.description}
          </motion.p>

          <motion.div
            variants={precEngBenefitRow}
            className="mt-3 flex flex-wrap gap-2"
          >
            {card.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={precEngTagPop}
                className="rounded-full bg-[#f5f5f5] px-3 py-1 text-[11.5px] font-semibold leading-[17px] text-[#555]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function PrecisionDrivenEngineeringSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef4f4] text-[#111]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
        <motion.div
          className="flex w-full max-w-[1280px] flex-col gap-6"
          variants={precEngSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[672px]">
              <motion.div variants={precEngHeadlineGroup}>
                <motion.h2
                  variants={precEngHeadlineWord}
                  className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.5] tracking-[-1px] lg:text-[40px] lg:leading-[60px]"
                >
                  <span>Precision-</span>
                  <span className="text-[#ed2024]">Driven Engineering</span>
                </motion.h2>
                <motion.div
                  variants={precEngRuleDraw}
                  className="mt-0 h-[3px] w-14 origin-left rounded-sm bg-[#ed2024]"
                  aria-hidden
                />
              </motion.div>

              <motion.p
                variants={precEngSubtitleReveal}
                className="mt-6 text-[17px] leading-[31px] text-[#666]"
              >
                Tekla Structures and STAAD.Pro connect design intent, structural
                validation, detailing, and CNC-ready output before site execution
                begins.
              </motion.p>
            </div>

            <motion.div
              variants={precEngPillRow}
              className="flex flex-wrap gap-3"
            >
              {VALUE_PILLS.map((pill) => (
                <motion.div
                  key={pill.label}
                  variants={precEngPillSnap}
                  whileHover={{
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="flex h-12 origin-left items-center gap-2 rounded-md border-l border-[rgba(237,28,36,0.25)] bg-white/55 px-4"
                >
                  <motion.div variants={precEngPillIcon}>
                    <Image
                      src={pill.icon}
                      alt=""
                      width={24}
                      height={24}
                      aria-hidden
                    />
                  </motion.div>
                  <span className="text-[11.5px] font-extrabold uppercase tracking-[1.84px] text-[#ed1c24]">
                    {pill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8">
            <div className="flex flex-col gap-3 max-lg:contents">
              <motion.div
                variants={precEngWorkflowPanel}
                whileHover={{
                  boxShadow: "0px 16px 32px rgba(237,28,36,0.1)",
                  transition: { duration: 0.35 },
                }}
                className="flex flex-col rounded-xl border border-[#ffd5d5] bg-white p-7 shadow-[0px_10px_17px_rgba(237,28,36,0.07)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
                  {WORKFLOW_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="flex flex-1 flex-col sm:min-w-0"
                    >
                      <WorkflowStep step={step} />

                      <motion.div
                        variants={precEngBenefitItem}
                        className="mt-3 flex gap-3 px-1 sm:mt-7 sm:justify-center sm:px-3"
                      >
                        <motion.span
                          variants={precEngBenefitDot}
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ed1c24]"
                          aria-hidden
                        />
                        <p className="text-[14.4px] font-semibold leading-[23.4px] text-[#555] sm:whitespace-nowrap">
                          {step.benefit[0]}
                          <br />
                          {step.benefit[1]}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.blockquote
                variants={precEngQuoteReveal}
                className="relative pl-4 max-lg:order-last"
              >
                <motion.span
                  variants={precEngQuoteBorder}
                  className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-[#ed1c24]"
                  aria-hidden
                />
                <motion.p
                  variants={precEngQuoteText}
                  className="text-[15.2px] font-semibold leading-[23px] text-[#555] lg:leading-[22.8px]"
                >
                  The result is fewer coordination gaps between engineering
                  office, fabrication shop, and site team.
                </motion.p>
              </motion.blockquote>
            </div>

            <div className="flex flex-col gap-4">
              {SOFTWARE_CARDS.map((card, index) => (
                <SoftwareCard key={card.name} card={card} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
