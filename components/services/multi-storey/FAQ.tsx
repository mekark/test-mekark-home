"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const faqs = [
  {
    question:
      "What does a multi-storey building manufacturer like Mekark handle?",
    answer:
      "The full lifecycle: site assessment, structural design, steel fabrication, erection, MEP integration, and handover, as a single turnkey contractor.",
  },
  {
    question: "How is Mekark different from other contractors in Chennai?",
    answer:
      "We combine an in-house design team, PEB technology, and safety-first execution with third-party QA for tighter quality control and faster timelines.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Manufacturing and factories, logistics and warehousing, retail and commerce, healthcare, education, hospitality, and IT and corporate offices.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scale, but pre-engineered steel construction typically delivers a standard project faster than conventional RCC — usually 20–22 weeks* once design is finalised.",
  },
  {
    question:
      "Do you provide complete turnkey construction, or only structural steel work?",
    answer:
      "Both — standalone steel erection, or complete turnkey construction including foundation, framework, MEP, and project management.",
  },
  {
    question: "What is the minimum project size you take on?",
    answer: "10,000 sq.ft and above.",
  },
  {
    question:
      "Do you provide structural design and drawings, or do we need our own architect?",
    answer:
      "Our in-house team handles complete structural design and BIM-based analysis. We're also happy to work alongside your existing architect or consultant.",
  },
  {
    question: "Why is steel preferred over RCC for multi-storey buildings?",
    answer:
      "Steel offers faster construction, high load-bearing capacity, design flexibility, and reduced dead weight — ideal for factories, offices, and commercial complexes.",
  },
  {
    question: "What is the expected lifespan of a steel structure?",
    answer:
      "With quality fabrication and correct corrosion protection, our structures typically last 50+ years with minimal maintenance.",
  },
  {
    question: "Do you serve locations outside Chennai?",
    answer:
      "Yes. While Mekark is headquartered in Chennai, we serve clients across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Telangana, with completed and ongoing multi-storey building projects in Coimbatore, Hosur, Sriperumbudur, Oragadam, Bangalore, Hyderabad, Vizag, Vijayawada, and Kochi. As a South India-focused multi-storey building construction company, our in-house structural design team and manufacturing capabilities allow us to execute multi-level industrial, commercial, and institutional structures across the region, and select projects pan-India with the same quality and turnaround standards.",
  },
] as const;

function FaqItem({
  index,
  question,
  answer,
  open,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div className={MOBILE_FAQ_CARD_CLASS} variants={cardReveal}>
      <button
        id={buttonId}
        type="button"
        className="flex w-full cursor-pointer items-center gap-3 text-left lg:min-h-[clamp(4.5rem,5.208vw,6.25rem)] lg:items-start lg:gap-4 lg:px-[26px] lg:py-[21px]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={MOBILE_FAQ_NUMBER_CLASS}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`min-w-0 flex-1 ${MOBILE_FAQ_QUESTION_CLASS}`}>
          {question}
        </span>
        <motion.span
          className="relative size-[16.624px] shrink-0 lg:mt-2"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <Image
            src="/images/services/multi-storey/frame212/icons/faq-chevron.svg"
            alt="Expand section"
            fill
            className="object-contain"
            sizes="17px"
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
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
              className={`${MOBILE_FAQ_ANSWER_CLASS} lg:border-t lg:border-[#E3E4E7] lg:px-[26px] lg:pb-[21px] lg:pl-[calc(26px+2ch+1rem)] lg:pt-0 lg:text-base lg:leading-[1.65] lg:text-[#53555B]`}
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5);

  return (
    <section
      className={`${MOBILE_FAQ_SECTION_CLASS} max-lg:px-5`}
      aria-labelledby="multi-storey-faq-title"
    >
      <div className="mx-auto flex w-full max-w-[1707px] flex-col items-center gap-6 lg:gap-[67px]">
        <motion.h2
          id="multi-storey-faq-title"
          className={MOBILE_FAQ_TITLE_CLASS}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          Frequently Asked Questions About Multi-Storey{" "}
        </motion.h2>

        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex flex-col gap-3 lg:gap-[13px]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {leftColumn.map((faq, i) => (
              <FaqItem
                key={faq.question}
                index={i}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() =>
                  setOpenIndex((current) => (current === i ? null : i))
                }
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 lg:gap-[13px]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {rightColumn.map((faq, i) => {
              const index = i + 5;
              return (
                <FaqItem
                  key={faq.question}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === index}
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
