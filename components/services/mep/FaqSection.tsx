"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  MOBILE_FAQ_ANSWER_CLASS,
  MOBILE_FAQ_CARD_CLASS,
  MOBILE_FAQ_NUMBER_CLASS,
  MOBILE_FAQ_QUESTION_CLASS,
  MOBILE_FAQ_SECTION_CLASS,
  MOBILE_FAQ_TITLE_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";

const easeOut = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const faqItems = [
  {
    question: "What does an MEP contractor like Mekark handle?",
    answer:
      "Mekark manages the full MEP lifecycle: system design, procurement, HVAC, electrical, plumbing, firefighting, mechanical installation, testing, commissioning, and handover, as a single turnkey MEP contractor, so you're not managing multiple vendor contracts and schedules yourself.",
  },
  {
    question: "How is Mekark different from other MEP contractors in Chennai?",
    answer:
      "We combine an in-house design team with safety-first execution and independent testing, giving tighter quality control than most competitors in Chennai, where design and installation are often outsourced to separate parties with limited coordination.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Manufacturing and factories, logistics and warehousing, industrial buildings, and process-driven manufacturing plants across sectors with varying utility, power, and fire-safety requirements.",
  },
  {
    question: "How long does a typical industrial MEP project take?",
    answer:
      "Timelines vary by scale and system complexity, but our five-stage process typically delivers a standard project in 20-22 weeks* once design is finalised, and long-lead equipment is confirmed.",
  },
  {
    question:
      "Do you provide complete turnkey MEP, or only specific systems like HVAC or electrical?",
    answer:
      "Both: standalone industrial HVAC, electrical, plumbing, or fire-fighting works, or complete turnkey MEP design-build across all systems, depending on what your project already has in place.",
  },
  {
    question: "What is the minimum project size you take on?",
    answer: "10,000 sq.ft and above.",
  },
  {
    question:
      "Do you provide MEP design and drawings, or do we need our own consultant?",
    answer:
      "Our in-house team handles complete MEP design and load calculations. We're also happy to work alongside your existing consultant or main contractor when a design is already partially developed.",
  },
  {
    question:
      "Why is a single turnkey MEP contractor preferred over separate vendors?",
    answer:
      "A single point of accountability avoids coordination gaps between HVAC, electrical, plumbing, and fire-fighting vendors, reducing delays and rework on site, particularly when changes come up mid-project and multiple vendors would otherwise need to be realigned.",
  },
  {
    question: "What kind of after-handover support do you provide?",
    answer:
      "We offer post-handover maintenance support (AMC), so systems continue performing at design capacity, not just on day one, with scheduled checks and documented service records.",
  },
  {
    question: "Do you serve locations outside Chennai?",
    answer:
      "Yes, Mekark delivers industrial MEP projects across Tamil Nadu, India, and APAC, with project teams that travel to the site for the duration of installation and commissioning.",
  },
] as const;

function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `mep-faq-panel-${index}`;
  const buttonId = `mep-faq-button-${index}`;

  return (
    <motion.div className={MOBILE_FAQ_CARD_CLASS} variants={cardReveal}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center gap-3 text-left lg:min-h-[clamp(4.5rem,5.208vw,6.25rem)] lg:items-start lg:gap-4 lg:py-[20.8px]"
      >
        <span className={MOBILE_FAQ_NUMBER_CLASS}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`min-w-0 flex-1 ${MOBILE_FAQ_QUESTION_CLASS}`}>
          {question}
        </span>
        <motion.span
          className="relative size-[16.624px] shrink-0 lg:mt-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <Image
            src="/images/services/mep/faq/chevron.svg"
            alt="Expand section"
            fill
            className="object-contain"
            sizes="17px"
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden"
          >
            <motion.p
              className={`${MOBILE_FAQ_ANSWER_CLASS} lg:border-t lg:border-[#E3E4E7] lg:px-[clamp(1rem,1.299vw,1.559rem)] lg:py-[clamp(0.875rem,1.042vw,1.25rem)] lg:pl-[clamp(2.75rem,3.472vw,4.167rem)] lg:font-[family-name:var(--font-manrope)] lg:text-[clamp(0.875rem,0.938vw,1.125rem)] lg:leading-[clamp(1.375rem,1.458vw,1.75rem)]`}
              initial={{ opacity: 0, y: -6 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: easeOut, delay: 0.05 },
              }}
              exit={{
                opacity: 0,
                y: -4,
                transition: { duration: 0.2, ease: easeOut },
              }}
            >
              {answer}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = faqItems.slice(0, 5);
  const rightColumn = faqItems.slice(5);

  return (
    <section
      id="faq"
      className={`${MOBILE_FAQ_SECTION_CLASS} max-lg:px-5`}
      aria-label="Frequently asked questions about industrial MEP contracting"
    >
      <div className="mx-auto flex w-full max-w-[1706.7px] flex-col items-center gap-6 lg:gap-[66.7px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className={`${MOBILE_FAQ_TITLE_CLASS} max-lg:leading-[35px]`}
        >
          Frequently Asked Questions About Industrial MEP Contracting
        </motion.h2>

        {/* Mobile — Figma 7396:5998: single column, 12px card gap */}
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex flex-col gap-3 lg:gap-[13.3px]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {leftColumn.map((item, index) => (
              <FaqItem
                key={item.question}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index,
                  )
                }
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 lg:gap-[13.3px]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {rightColumn.map((item, i) => {
              const index = i + 5;
              return (
                <FaqItem
                  key={item.question}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
