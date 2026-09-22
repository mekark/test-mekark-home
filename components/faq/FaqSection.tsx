"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutBadgeDot,
  aboutBadgeReveal,
  faqAsideReveal,
  faqHeadlineLine,
  faqIllustrationReveal,
  faqItemReveal,
  faqListStagger,
  faqSectionStagger,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const FAQ_ITEMS = [
  {
    question: "What defines Mekark's EPC approach?",
    answer:
      "An integrated, engineering-led model combining design, procurement, fabrication, and execution under one system, eliminating coordination gaps and ensuring single-point accountability across every phase of the project.",
  },
  {
    question: "How is structural performance ensured in large-span buildings?",
    answer:
      "Every large-span structure is engineered using advanced structural analysis and load-modelling techniques to ensure stability, wind and seismic resistance, and long-term durability, validated against relevant industrial building codes before fabrication begins.",
  },
  {
    question: "Why choose a single EPC partner?",
    answer:
      "A single EPC partner removes the communication gaps that occur when design, procurement, and construction are handled by separate vendors. This translates into faster decision-making, fewer cost overruns, tighter timelines, and one accountable point of contact from concept to commissioning.",
  },
  {
    question: "How does Mekark ensure lifecycle durability?",
    answer:
      "We design for performance beyond handover, factoring in material longevity, maintenance efficiency, and operational wear from day one. This lifecycle-first approach reduces long-term maintenance costs and extends the operational life of every facility we build.",
  },
  {
    question: "Can Mekark handle large-scale industrial projects?",
    answer:
      "Yes. With X+ delivered projects and 18+ years of industrial construction experience, Mekark has the engineering depth, fabrication capacity, and project management systems to execute large-scale, multi-phase industrial developments reliably.",
  },
  {
    question: "How is factory-level quality maintained?",
    answer:
      "Through standardised fabrication processes, in-house quality checkpoints, and rigorous material and weld testing at every production stage, ensuring consistent quality whether a component is fabricated on-site or off-site.",
  },
  {
    question: "What industries does Mekark specialise in?",
    answer:
      "Mekark serves a wide range of industrial sectors, including manufacturing, warehousing and logistics, food processing, heavy engineering, and industrial infrastructure projects that require precision-engineered, scalable facilities.",
  },
  {
    question:
      "What is the typical timeline for an industrial construction project?",
    answer:
      "Timelines vary by project scope and complexity, but our integrated EPC model, where design, procurement, and execution run in parallel rather than sequentially, significantly compresses delivery schedules compared to traditional multi-vendor construction.",
  },
  {
    question: "Does Mekark offer post-construction and maintenance support?",
    answer:
      "Yes. Our engagement doesn't end at handover. We offer post-construction support and maintenance guidance to ensure your facility continues to perform at its designed operational efficiency well into its lifecycle.",
  },
  {
    question: "How does Mekark ensure safety and compliance on-site?",
    answer:
      "All projects follow strict industrial safety protocols and comply with relevant national construction and structural codes. Our on-site teams conduct regular safety audits and quality inspections throughout every phase of execution.",
  },
] as const;

function FaqToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-[21px]" aria-hidden>
      <motion.span
        className="absolute left-1/2 top-1/2 block h-[2.2px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111]"
        animate={{ rotate: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 block h-[12px] w-[2.2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111]"
        animate={{ scaleY: open ? 0 : 1, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}

function FaqItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div variants={faqItemReveal(index)}>
      <div
        className={`relative overflow-hidden rounded-[18px] border border-[#ffd5d5] bg-white font-[family-name:var(--font-manrope)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] transition-shadow duration-300 max-lg:rounded-[20px] sm:rounded-[23px] ${
          open ? "shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left max-lg:px-4 max-lg:py-3.5 sm:gap-4 sm:px-[35px] sm:py-6"
        >
          <span className="text-[15px] font-semibold leading-[22px] text-[#111] max-lg:text-lg max-lg:font-bold max-lg:leading-[30px] sm:text-lg sm:font-semibold sm:leading-[28px]">
            {item.question}
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#ffd5d5] bg-white max-lg:size-7 sm:size-9">
            <FaqToggleIcon open={open} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 pt-0 text-sm leading-[22px] text-[#888] max-lg:px-4 max-lg:pb-4 max-lg:text-sm max-lg:leading-[22px] max-lg:text-[#666] sm:px-[35px] sm:pb-[35px] sm:text-base sm:leading-[29px]">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#fef4f4] font-[family-name:var(--font-manrope)]">
      <motion.div
        variants={faqSectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`${SECTION_CONTAINER_CLASS} max-lg:py-8 py-14 lg:py-[70px] xl:py-[53px] 2xl:py-[70px]`}
      >
        <div className="grid items-start gap-8 max-lg:gap-6 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-x-[85px] lg:gap-y-12 xl:grid-cols-[minmax(0,400px)_1fr] xl:gap-x-[60px] 2xl:grid-cols-[minmax(0,480px)_1fr] 2xl:gap-x-[85px]">
          <motion.aside
            variants={faqAsideReveal}
            className="relative flex flex-col items-center text-center max-lg:gap-3 lg:sticky lg:top-24 lg:items-start lg:text-left"
          >
            <motion.div
              variants={aboutBadgeReveal}
              className="inline-flex items-center gap-1.5 rounded-full border border-crimson-100 bg-crimson-200 px-2.5 py-1.5 sm:gap-[7px] sm:px-[11.5px] sm:py-[6px]"
            >
              <motion.div
                variants={aboutBadgeDot}
                className="size-1.5 rounded-full bg-red-200 sm:size-[7px]"
                aria-hidden
              />
              <span className="text-[10px] font-medium capitalize tracking-[0.5px] text-red-100 sm:text-xs sm:tracking-[0.53px]">
                FAQ
              </span>
            </motion.div>

            <div className="mt-[10px] max-lg:mt-0">
              <motion.h2
                variants={faqHeadlineLine}
                className="bg-gradient-to-b from-[#fe7278] to-[#ed1c24] bg-clip-text text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.84px] text-transparent max-lg:text-[28px] max-lg:leading-[30px] max-lg:tracking-normal lg:text-[40px] lg:leading-[48px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[48px]"
              >
                More Doubts?
              </motion.h2>
              <motion.h2
                variants={faqHeadlineLine}
                className="bg-gradient-to-b from-[#222] to-[#666] bg-clip-text text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.84px] text-transparent max-lg:text-[28px] max-lg:leading-[30px] max-lg:tracking-normal lg:text-[40px] lg:leading-[48px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[48px]"
              >
                We&apos;ve Got You.
              </motion.h2>
            </div>

            <motion.p
              variants={faqHeadlineLine}
              className="mt-3 max-w-[380px] text-sm leading-5 text-[#777] max-lg:mt-0 max-lg:max-w-none max-lg:text-sm max-lg:leading-[22px] max-lg:text-[#666] sm:mt-4 sm:text-base sm:leading-6"
            >
              Get connected so we could
              <br />
              answer your questions
            </motion.p>

            <motion.div
              variants={faqIllustrationReveal}
              className="relative mx-auto mt-6 h-[220px] w-[180px] sm:mt-10 sm:h-[720px] sm:w-[460px] lg:mx-0"
            >
              <Image
                src="/images/faq/question-mark.webp"
                alt="FAQ question mark illustration"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 180px, 460px"
                priority={false}
              />
            </motion.div>
          </motion.aside>

          <motion.div
            variants={faqListStagger}
            className="flex flex-col gap-3 max-lg:gap-4 sm:gap-4 lg:pt-[46px]"
          >
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
