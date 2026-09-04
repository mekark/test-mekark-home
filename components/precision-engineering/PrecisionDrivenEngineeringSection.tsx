"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
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
    benefit: ["Fabrication accuracy from", "Day 1"],
    isLast: false,
  },
  {
    number: "02",
    title: "Model",
    icon: "/images/precision-engineering/icon-model.svg",
    benefit: ["Clash-free structural", "execution"],
    isLast: false,
  },
  {
    number: "03",
    title: "Shop Drawings",
    icon: "/images/precision-engineering/icon-shop-drawings.svg",
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
      className="absolute right-0 top-1/2 z-10 flex size-[30px] -translate-y-1/2 translate-x-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="size-[21px] rotate-45 border-r-[1.33px] border-t-[1.33px] border-[rgba(237,28,36,0.35)] bg-[#fff9f9]" />
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
      className={`relative flex h-full min-h-[140px] flex-col border border-[#f2d4d4] bg-[#fff9f9] p-3 sm:min-h-[168px] sm:p-4 lg:p-4 2xl:min-h-[186px] 2xl:p-[21px] ${
        step.number === "01"
          ? "rounded-2xl sm:rounded-none sm:rounded-l-2xl sm:border-r-0"
          : step.isLast
            ? "rounded-2xl sm:rounded-none sm:rounded-r-2xl"
            : "rounded-2xl sm:rounded-none sm:border-r-0"
      }`}
    >
      {!step.isLast && (
        <div className="hidden sm:block">
          <StepConnector />
        </div>
      )}

      <motion.span
        variants={precEngStepNumber}
        className="shrink-0 text-xs font-extrabold leading-[18px] text-[#ed1c24] sm:text-[clamp(0.75rem,1.1vw,0.96rem)] 2xl:text-[15.33px] 2xl:leading-[23px]"
      >
        {step.number}
      </motion.span>

      <motion.div
        variants={precEngStepIcon}
        className="mt-2 flex flex-1 items-center justify-start"
        style={{ transformPerspective: 600 }}
      >
        <Image
          src={step.icon}
          alt=""
          width={69}
          height={69}
          className="size-10 object-contain sm:size-[clamp(2.75rem,4vw,4rem)] 2xl:size-[69px]"
          aria-hidden
        />
      </motion.div>

      {/* Fixed title slot so Analyse / Model / Shop Drawings share one baseline */}
      <motion.h3
        variants={precEngStepTitle}
        className="mt-2 flex min-h-[2.6em] items-end text-base font-extrabold leading-[1.25] text-[#111] sm:min-h-[2.75em] sm:text-[clamp(0.95rem,1.45vw,1.5rem)] 2xl:min-h-[76px] 2xl:text-[25.6px] 2xl:leading-[38.4px]"
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
      className="relative overflow-hidden rounded-2xl bg-white px-4 py-5 pl-5 shadow-[0px_10.667px_17.333px_rgba(237,28,36,0.07)] sm:px-6 sm:py-6 sm:pl-8 lg:min-h-0 2xl:min-h-[221px] 2xl:px-9 2xl:py-8 2xl:pl-[35px] 2xl:pr-12"
    >
      <motion.span
        variants={precEngBorderAccent}
        className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed2024] sm:w-[5px] 2xl:w-[6.667px]"
        aria-hidden
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4 2xl:gap-0 2xl:py-0">
        <motion.div
          variants={precEngLogoReveal}
          className="relative mx-auto size-14 shrink-0 overflow-hidden rounded-full sm:mx-0 sm:size-[clamp(4rem,6vw,5.5rem)] 2xl:mr-8 2xl:size-[107px]"
        >
          <Image
            src={card.logo}
            alt={card.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 56px, (max-width: 1536px) 88px, 107px"
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <motion.h3
              variants={precEngStepTitle}
              className="text-lg font-bold leading-6 text-[#111] sm:text-[clamp(1.05rem,1.4vw,1.47rem)] 2xl:text-[23.47px] 2xl:leading-[29.33px]"
            >
              {card.name}
            </motion.h3>
            <motion.span
              variants={precEngTagPop}
              className="rounded-full border border-[#ffd5d5] bg-[#ffe8e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#ed1c24] sm:px-3 sm:text-[clamp(0.65rem,0.9vw,0.9rem)] 2xl:px-[15px] 2xl:py-[5px] 2xl:text-[14.53px] 2xl:tracking-[0.73px]"
            >
              {card.badge}
            </motion.span>
          </div>

          <motion.p
            variants={precEngStepTitle}
            className="mt-1.5 max-w-[40rem] text-sm leading-relaxed text-[#666] sm:mt-2 sm:text-[clamp(0.875rem,1.15vw,1.175rem)] sm:leading-[1.55] 2xl:text-[18.8px] 2xl:leading-[30.5px]"
          >
            {card.description}
          </motion.p>

          <motion.div
            variants={precEngBenefitRow}
            className="mt-3 flex flex-wrap gap-2 sm:mt-3 sm:gap-2 2xl:mt-4 2xl:gap-[11px]"
          >
            {card.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={precEngTagPop}
                className="rounded-full bg-[#f5f5f5] px-2.5 py-1 text-xs font-semibold leading-[18px] text-[#555] sm:px-3 sm:text-[clamp(0.7rem,0.95vw,0.96rem)] 2xl:px-4 2xl:py-[5px] 2xl:text-[15.33px] 2xl:leading-[23px]"
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
    <section className="relative w-full overflow-x-clip bg-[#fef4f4] font-[family-name:var(--font-manrope)] text-[#111]">
      <div
        className={`${SECTION_CONTAINER_CLASS} py-10 sm:py-14 lg:py-[clamp(3.5rem,5vw,5.8rem)]`}
      >
        <motion.div
          className="mx-auto flex w-full max-w-none flex-col gap-8 lg:gap-8"
          variants={precEngSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8 xl:gap-10">
            <div className="max-w-[56rem] lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-5">
              <motion.div variants={precEngHeadlineGroup} className="overflow-visible">
                <motion.h2
                  variants={precEngHeadlineWord}
                  className="overflow-visible pb-0.5 text-[clamp(1.5rem,3.2vw,3.33rem)] font-bold leading-[1.2] tracking-[-0.8px] sm:tracking-[-1.33px]"
                >
                  <span>Precision-</span>
                  <span className="text-[#ed2024]">Driven Engineering</span>
                </motion.h2>
                <motion.div
                  variants={precEngRuleDraw}
                  className="mt-0 h-0.5 w-12 origin-left rounded-[2.67px] bg-[#ed2024] sm:h-1 sm:w-[clamp(3rem,5vw,4.7rem)]"
                  aria-hidden
                />
              </motion.div>

              <motion.p
                variants={precEngSubtitleReveal}
                className="mt-3 max-w-[52rem] text-[clamp(0.9375rem,1.35vw,1.4375rem)] leading-[1.65] text-[#666] lg:mt-0"
              >
                Tekla Structures and STAAD.Pro connect design intent, structural
                validation, detailing, and CNC-ready output before site execution
                begins.
              </motion.p>
            </div>

            <motion.div
              variants={precEngPillRow}
              className="flex flex-wrap gap-3 lg:shrink-0 lg:justify-end lg:gap-3 2xl:gap-4"
            >
              {VALUE_PILLS.map((pill) => (
                <motion.div
                  key={pill.label}
                  variants={precEngPillSnap}
                  whileHover={{
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="flex h-11 items-center gap-2 rounded-md border-l border-[rgba(237,28,36,0.25)] bg-white/55 px-3 py-2.5 sm:h-12 sm:gap-2.5 sm:px-4 lg:h-[clamp(2.75rem,4vw,4rem)] lg:px-[clamp(0.85rem,1.2vw,1.3rem)] 2xl:h-16 2xl:gap-3 2xl:rounded-lg 2xl:border-l-[1.33px] 2xl:px-[21px] 2xl:py-4"
                >
                  <motion.div variants={precEngPillIcon}>
                    <Image
                      src={pill.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-5 sm:size-6 lg:size-[clamp(1.25rem,1.8vw,2rem)] 2xl:size-8"
                      aria-hidden
                    />
                  </motion.div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[1.2px] text-[#ed1c24] sm:text-[clamp(0.7rem,0.95vw,0.96rem)] sm:tracking-[1.6px] 2xl:text-[15.33px] 2xl:tracking-[2.46px]">
                    {pill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 pt-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:pt-4 xl:gap-10 2xl:gap-[43px] 2xl:pt-8">
            <div className="flex w-full min-w-0 flex-col gap-4">
              <motion.div
                variants={precEngWorkflowPanel}
                whileHover={{
                  boxShadow: "0px 16px 32px rgba(237,28,36,0.1)",
                  transition: { duration: 0.35 },
                }}
                className="w-full self-start rounded-2xl border border-[#ffd5d5] bg-white px-3 py-4 shadow-[0px_13.333px_22.667px_rgba(237,28,36,0.07)] sm:px-5 sm:py-5 lg:px-6 lg:py-6 2xl:px-9 2xl:pt-9 2xl:pb-6"
              >
                {/* Card + its benefit stay paired (mobile stack & desktop columns) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-stretch sm:gap-0">
                  {WORKFLOW_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="flex min-w-0 flex-col sm:h-full"
                    >
                      <div className="min-h-0 flex-1">
                        <WorkflowStep step={step} />
                      </div>

                      <motion.div
                        variants={precEngBenefitItem}
                        className="mt-2.5 flex items-center gap-2 px-1 sm:mt-4 sm:items-start sm:justify-center sm:gap-3 sm:px-3"
                      >
                        <motion.span
                          variants={precEngBenefitDot}
                          className="size-1.5 shrink-0 rounded-full bg-[#ed1c24] sm:mt-[0.45em] sm:size-2"
                          aria-hidden
                        />
                        <p className="min-w-0 whitespace-nowrap text-[clamp(0.7rem,3.1vw,0.8125rem)] font-semibold leading-none text-[#555] sm:min-h-[2.6em] sm:whitespace-normal sm:text-left sm:text-[clamp(0.75rem,1.05vw,1.15rem)] sm:leading-snug sm:max-w-[14ch]">
                          <span className="sm:hidden">
                            {step.benefit[0]} {step.benefit[1]}
                          </span>
                          <span className="hidden sm:inline">
                            {step.benefit[0]}
                            <br />
                            {step.benefit[1]}
                          </span>
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.blockquote
                variants={precEngQuoteReveal}
                className="relative pl-4 sm:pl-5"
              >
                <motion.span
                  variants={precEngQuoteBorder}
                  className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-[#ed1c24] sm:w-[2.67px]"
                  aria-hidden
                />
                <motion.p
                  variants={precEngQuoteText}
                  className="max-w-[52rem] text-[clamp(0.9375rem,1.25vw,1.27rem)] font-semibold leading-[1.5] text-[#555]"
                >
                  The result is fewer coordination gaps between engineering
                  office, fabrication shop, and site team.
                </motion.p>
              </motion.blockquote>
            </div>

            <div className="flex min-w-0 flex-col gap-4 lg:gap-5 2xl:gap-[21px]">
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
