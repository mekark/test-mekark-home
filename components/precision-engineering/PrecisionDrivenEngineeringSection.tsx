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
    iconSize: 69,
    benefit: ["Fabrication accuracy from", "Day 1"],
    isLast: false,
  },
  {
    number: "02",
    title: "Model",
    icon: "/images/precision-engineering/icon-model.svg",
    iconSize: 64,
    benefit: ["Clash-free structural", "execution"],
    isLast: false,
  },
  {
    number: "03",
    title: "Shop Drawings",
    icon: "/images/precision-engineering/icon-shop-drawings.svg",
    iconSize: 69,
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
      className={`relative flex min-h-[120px] flex-1 flex-col border border-[#f2d4d4] bg-[#fff9f9] p-4 sm:h-[186.667px] sm:p-[21px] xl:h-[140px] xl:p-4 2xl:h-[186.667px] 2xl:p-[21px] ${
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
        className="text-xs font-extrabold leading-[18px] text-[#ed1c24] sm:text-[15.33px] sm:leading-[23px] xl:text-[11.5px] xl:leading-[17.28px] 2xl:text-[15.33px] 2xl:leading-[23px]"
      >
        {step.number}
      </motion.span>

      <motion.div
        variants={precEngStepIcon}
        className="mt-1.5 flex flex-1 items-center sm:mt-2"
        style={{ transformPerspective: 600 }}
      >
        <Image
          src={step.icon}
          alt=""
          width={step.iconSize}
          height={step.iconSize}
          className={`object-contain ${
            step.iconSize === 64
              ? "size-10 sm:size-16 xl:size-12 2xl:size-16"
              : "size-10 sm:size-[69px] xl:size-[52px] 2xl:size-[69px]"
          }`}
          aria-hidden
        />
      </motion.div>

      <motion.h3
        variants={precEngStepTitle}
        className="text-base font-extrabold leading-6 text-[#111] sm:text-[25.6px] sm:leading-[38.4px] xl:text-[19.2px] xl:leading-[28.8px] 2xl:text-[25.6px] 2xl:leading-[38.4px]"
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
      className="relative overflow-hidden rounded-2xl bg-white pl-6 pr-4 shadow-[0px_10.667px_17.333px_rgba(237,28,36,0.07)] sm:min-h-[221px] sm:pl-[35px] sm:pr-12 sm:pt-8 sm:pb-8 xl:min-h-[166px] xl:pl-[26px] xl:pr-9 xl:py-6 xl:shadow-[0px_8px_13px_rgba(237,28,36,0.07)] 2xl:min-h-[221px] 2xl:pl-[35px] 2xl:pr-12 2xl:pt-8 2xl:pb-8 2xl:shadow-[0px_10.667px_17.333px_rgba(237,28,36,0.07)]"
    >
      <motion.span
        variants={precEngBorderAccent}
        className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed2024] sm:w-[6.667px] xl:w-[5px] 2xl:w-[6.667px]"
        aria-hidden
      />

      <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:gap-0 sm:py-8 xl:py-0">
        <motion.div
          variants={precEngLogoReveal}
          className="relative mx-auto size-16 shrink-0 overflow-hidden rounded-full sm:mx-0 sm:mr-8 sm:size-[107px] xl:mr-[26px] xl:size-20 2xl:mr-8 2xl:size-[107px]"
        >
          <Image
            src={card.logo}
            alt={card.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 64px, 107px"
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <motion.h3
              variants={precEngStepTitle}
              className="text-lg font-bold leading-6 text-[#111] sm:text-[23.47px] sm:leading-[29.33px] xl:text-[17.6px] xl:leading-[22px] 2xl:text-[23.47px] 2xl:leading-[29.33px]"
            >
              {card.name}
            </motion.h3>
            <motion.span
              variants={precEngTagPop}
              className="rounded-full border border-[#ffd5d5] bg-[#ffe8e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#ed1c24] sm:px-[15px] sm:py-[5px] sm:text-[14.53px] sm:tracking-[0.73px] xl:px-[11px] xl:py-1 xl:text-[10.9px] xl:leading-[16.32px] xl:tracking-[0.544px] 2xl:px-[15px] 2xl:py-[5px] 2xl:text-[14.53px] 2xl:tracking-[0.73px]"
            >
              {card.badge}
            </motion.span>
          </div>

          <motion.p
            variants={precEngStepTitle}
            className="mt-1.5 max-w-[482px] text-sm leading-relaxed text-[#666] sm:mt-2 sm:text-[18.8px] sm:leading-[30.5px] xl:mt-1.5 xl:max-w-[284px] xl:text-[14.1px] xl:leading-[22.88px] 2xl:mt-2 2xl:max-w-[482px] 2xl:text-[18.8px] 2xl:leading-[30.5px]"
          >
            {card.description}
          </motion.p>

          <motion.div
            variants={precEngBenefitRow}
            className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-[11px]"
          >
            {card.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={precEngTagPop}
                className="rounded-full bg-[#f5f5f5] px-2.5 py-1 text-xs font-semibold leading-[18px] text-[#555] sm:px-4 sm:py-[5px] sm:text-[15.33px] sm:leading-[23px] xl:px-3 xl:py-1 xl:text-[11.5px] xl:leading-[17.28px] 2xl:px-4 2xl:py-[5px] 2xl:text-[15.33px] 2xl:leading-[23px]"
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
    <section className="relative w-full overflow-hidden bg-[#fef4f4] font-[family-name:var(--font-manrope)] text-[#111]">
      {/* iMac Figma 6700:7151 · large Figma 3327:9736 */}
      <div className={`${SECTION_CONTAINER_CLASS} py-10 sm:py-14 lg:py-[93px] xl:py-[70px] 2xl:py-[93px]`}>
        <motion.div
          className="mx-auto flex w-full max-w-none flex-col gap-8 xl:max-w-[1400px] xl:gap-6 2xl:max-w-none 2xl:gap-8"
          variants={precEngSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex flex-col gap-8 lg:min-h-[196px] lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:relative xl:block xl:min-h-[147px] 2xl:flex 2xl:min-h-[196px] 2xl:gap-10">
            <div className="max-w-[907px] lg:flex lg:flex-col lg:gap-8 xl:absolute xl:bottom-0 xl:left-0 xl:max-w-[672px] xl:gap-6 2xl:static 2xl:max-w-[907px] 2xl:gap-8">
              <motion.div variants={precEngHeadlineGroup}>
                <motion.h2
                  variants={precEngHeadlineWord}
                  className="text-[clamp(1.5rem,6vw,3.33rem)] font-bold tracking-[-0.8px] sm:tracking-[-1.33px] lg:text-[53.33px] lg:leading-[80px] xl:text-[40px] xl:leading-[60px] xl:tracking-[-1px] 2xl:text-[53.33px] 2xl:leading-[80px] 2xl:tracking-[-1.33px]"
                >
                  <span>Precision-</span>
                  <span className="text-[#ed2024]">Driven Engineering</span>
                </motion.h2>
                <motion.div
                  variants={precEngRuleDraw}
                  className="mt-0 h-0.5 w-12 origin-left rounded-[2.67px] bg-[#ed2024] sm:h-1 sm:w-[75px] xl:h-[3px] xl:w-14 2xl:h-1 2xl:w-[75px]"
                  aria-hidden
                />
              </motion.div>

              <motion.p
                variants={precEngSubtitleReveal}
                className="max-w-[896px] text-[15px] leading-[1.7] text-[#666] sm:text-[17px] sm:leading-[1.8] lg:text-[23px] lg:leading-[41.5px] xl:max-w-[672px] xl:text-[17.3px] xl:leading-[31.1px] 2xl:max-w-[896px] 2xl:text-[23px] 2xl:leading-[41.5px]"
              >
                Tekla Structures and STAAD.Pro connect design intent, structural
                validation, detailing, and CNC-ready output before site execution
                begins.
              </motion.p>
            </div>

            <motion.div
              variants={precEngPillRow}
              className="flex flex-wrap gap-4 lg:shrink-0 lg:justify-end xl:absolute xl:bottom-0 xl:right-0 xl:gap-3 2xl:static 2xl:gap-4"
            >
              {VALUE_PILLS.map((pill) => (
                <motion.div
                  key={pill.label}
                  variants={precEngPillSnap}
                  whileHover={{
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="flex h-12 items-center gap-2 rounded-md border-l border-[rgba(237,28,36,0.25)] bg-white/55 px-3.5 py-3 sm:h-16 sm:gap-3 sm:rounded-lg sm:border-l-[1.33px] sm:px-[21px] sm:py-4 xl:h-12 xl:gap-2 xl:rounded-md xl:px-[17px] xl:py-3 2xl:h-16 2xl:gap-3 2xl:rounded-lg 2xl:border-l-[1.33px] 2xl:px-[21px] 2xl:py-4"
                >
                  <motion.div variants={precEngPillIcon}>
                    <Image
                      src={pill.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-6 sm:size-8 xl:size-6 2xl:size-8"
                      aria-hidden
                    />
                  </motion.div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#ed1c24] sm:text-[15.33px] sm:tracking-[2.46px] xl:text-[11.5px] xl:tracking-[1.843px] 2xl:text-[15.33px] 2xl:tracking-[2.46px]">
                    {pill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-[43px] lg:pt-8 xl:grid-cols-[minmax(0,657fr)_minmax(0,591fr)] xl:gap-8 xl:pt-6 2xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] 2xl:gap-[43px] 2xl:pt-8">
            <div className="flex w-full min-w-0 flex-col gap-4">
              <motion.div
                variants={precEngWorkflowPanel}
                whileHover={{
                  boxShadow: "0px 16px 32px rgba(237,28,36,0.1)",
                  transition: { duration: 0.35 },
                }}
                className="w-full self-start rounded-2xl border border-[#ffd5d5] bg-white px-4 py-4 shadow-[0px_13.333px_22.667px_rgba(237,28,36,0.07)] sm:px-9 sm:pt-9 sm:pb-6 xl:px-7 xl:pt-7 xl:pb-6 xl:shadow-[0px_10px_17px_rgba(237,28,36,0.07)] 2xl:px-9 2xl:pt-9 2xl:pb-6 2xl:shadow-[0px_13.333px_22.667px_rgba(237,28,36,0.07)]"
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
                        className="mt-3 flex justify-center gap-4 px-1 sm:mt-4 sm:px-3"
                      >
                        <motion.span
                          variants={precEngBenefitDot}
                          className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#ed1c24] sm:mt-[11px] sm:size-2"
                          aria-hidden
                        />
                        <p className="text-sm font-semibold leading-[22px] text-[#555] sm:text-[19.2px] sm:leading-[31.2px] sm:whitespace-nowrap xl:text-[14.4px] xl:leading-[23.4px] 2xl:text-[19.2px] 2xl:leading-[31.2px]">
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
                className="relative pl-4 sm:pl-[22px]"
              >
                <motion.span
                  variants={precEngQuoteBorder}
                  className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-[#ed1c24] sm:w-[2.67px]"
                  aria-hidden
                />
                <motion.p
                  variants={precEngQuoteText}
                  className="max-w-[840px] text-[15px] font-semibold leading-[23px] text-[#555] sm:text-[20.27px] sm:leading-[30.4px] xl:max-w-[630px] xl:text-[15.2px] xl:leading-[22.8px] 2xl:max-w-[840px] 2xl:text-[20.27px] 2xl:leading-[30.4px]"
                >
                  The result is fewer coordination gaps between engineering
                  office, fabrication shop, and site team.
                </motion.p>
              </motion.blockquote>
            </div>

            <div className="flex min-w-0 flex-col gap-[21px] xl:gap-4 2xl:gap-[21px]">
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
