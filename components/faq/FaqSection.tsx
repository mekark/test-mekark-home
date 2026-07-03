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

const VIEWPORT = { once: true, margin: "-80px" as const };

const FAQ_ITEMS = [
  {
    question: "What defines Mekark's EPC approach?",
    answer:
      "An integrated engineering-led model combining design, procurement, fabrication, and execution under one system, eliminating coordination gaps and ensuring single-point accountability across every phase.",
  },
  {
    question: "How is structural performance ensured in large-span buildings?",
    answer:
      "Advanced structural analysis using STAAD.Pro and Tekla, combined with in-house fabrication precision, ensures load paths, connections, and deflection limits are validated before steel reaches site.",
  },
  {
    question: "Why choose a single EPC partner?",
    answer:
      "One partner removes vendor handoff friction, locks accountability across design and construction, and delivers faster timelines with fewer change orders and misaligned deliverables.",
  },
  {
    question: "How does Mekark ensure lifecycle durability?",
    answer:
      "Structures are engineered for expansion, operational stress, and long-term load stability — with material selection, corrosion protection, and connection detailing built for decades of industrial use.",
  },
  {
    question: "Can Mekark handle large-scale industrial projects?",
    answer:
      "Yes. With 450+ projects delivered, 6 lakh+ sq.ft manufacturing capacity, and 40K tons annual fabrication throughput, Mekark is built for large-scale industrial and infrastructure execution.",
  },
  {
    question: "How is factory-level quality maintained?",
    answer:
      "Controlled in-house fabrication, CNC-driven cutting, weld inspection protocols, and stage-gate QA checkpoints ensure every member meets industrial-grade tolerances before dispatch.",
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
        className={`relative overflow-hidden rounded-[23px] border border-[#ffd5d5] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] transition-shadow duration-300 ${
          open ? "shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-[34px] py-5 text-left sm:px-[35px] sm:py-6"
        >
          <span className="text-lg font-semibold leading-[28px] text-[#111]">
            {item.question}
          </span>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#ffd5d5] bg-white">
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
              <p className="px-[34px] pb-[35px] pt-0 text-base leading-[29px] text-[#888] sm:px-[35px]">
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
    <section className="w-full bg-[#fef4f4]">
      <motion.div
        variants={faqSectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,434px)_1fr] lg:gap-x-[85px]">
          <motion.aside
            variants={faqAsideReveal}
            className="relative lg:sticky lg:top-24"
          >
            <motion.div
              variants={aboutBadgeReveal}
              className="inline-flex items-center gap-[7px] rounded-full border border-crimson-100 bg-crimson-200 px-[11.5px] py-[6px]"
            >
              <motion.div
                variants={aboutBadgeDot}
                className="size-[7px] rounded-full bg-red-200"
                aria-hidden
              />
              <span className="font-inter text-xs font-medium capitalize tracking-[0.53px] text-red-100">
                FAQ
              </span>
            </motion.div>

            <div className="mt-[10px]">
              <motion.h2
                variants={faqHeadlineLine}
                className="bg-gradient-to-b from-[#fe7278] to-[#ed1c24] bg-clip-text text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.84px] text-transparent lg:text-[40px] lg:leading-[50px]"
              >
                More Doubts?
              </motion.h2>
              <motion.h2
                variants={faqHeadlineLine}
                className="bg-gradient-to-b from-[#222] to-[#666] bg-clip-text text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.84px] text-transparent lg:text-[40px] lg:leading-[50px]"
              >
                We&apos;ve Got You.
              </motion.h2>
            </div>

            <motion.p
              variants={faqHeadlineLine}
              className="mt-4 max-w-[380px] text-base leading-8 text-[#777]"
            >
              Get Connected So We Could Answer Your Questions
            </motion.p>

            <motion.div
              variants={faqIllustrationReveal}
              className="relative mx-auto mt-8 h-[320px] w-[260px] sm:mt-10 sm:h-[509px] sm:w-[314px] lg:mx-0"
            >
              <Image
                src="/images/faq/question-mark.png"
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 260px, 314px"
                priority={false}
              />
            </motion.div>
          </motion.aside>

          <motion.div
            variants={faqListStagger}
            className="flex flex-col gap-4 lg:pt-[46px]"
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
