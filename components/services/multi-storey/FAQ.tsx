"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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

const easeOut = [0.22, 1, 0.36, 1] as const;

const panelTransition = {
  height: { duration: 0.4, ease: easeOut },
  opacity: { duration: 0.28, ease: easeOut },
};

const answerTransition = {
  duration: 0.35,
  ease: easeOut,
};

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
  const number = String(index + 1).padStart(2, "0");
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      layout
      className="w-full overflow-hidden rounded-[20.78px] border-[1.039px] bg-white"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        layout: { duration: 0.35, ease: easeOut },
        opacity: { duration: 0.45, ease: easeOut, delay: 0.04 * (index % 5) },
        y: { duration: 0.45, ease: easeOut, delay: 0.04 * (index % 5) },
      }}
      animate={{
        borderColor: open ? "rgba(230, 15, 26, 0.35)" : "#e3e4e7",
        boxShadow: open
          ? "0 8px 28px rgba(17, 17, 17, 0.06)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      <motion.button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-[18px] text-left sm:gap-4 sm:px-[26px] sm:py-[21px]"
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.15 }}
      >
        <span className="font-montserrat shrink-0 pt-[5px] text-[16px] leading-[16.624px] font-bold tracking-[-0.47px] text-[#e60f1a]">
          {number}
        </span>
        <motion.span
          className="min-w-0 flex-1 text-[17px] leading-[26.67px] font-semibold tracking-[-0.47px] sm:text-[18.67px]"
          animate={{ color: open ? "#111111" : "#101116" }}
          transition={{ duration: 0.25, ease: easeOut }}
        >
          {question}
        </motion.span>
        <motion.span
          className="mt-2 flex size-[16.624px] shrink-0 items-center justify-center overflow-clip"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <Image
            src="/images/services/multi-storey/frame212/icons/faq-chevron.svg"
            alt="Expand section"
            width={10}
            height={6}
            className="h-[5.5px] w-[9.7px]"
          />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="content"
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={panelTransition}
            className="overflow-hidden"
          >
            <motion.p
              className="px-4 pb-[18px] pl-[calc(1rem+2ch+0.75rem)] text-[15px] leading-[24px] font-medium text-[#53555B] sm:px-[26px] sm:pb-[21px] sm:pl-[calc(26px+2ch+1rem)] sm:text-base"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{
                ...answerTransition,
                delay: 0.06,
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
    <section className="bg-white px-5 py-12 text-gray-100 sm:px-8 sm:py-16 lg:px-[clamp(40px,5.5vw,107px)] lg:py-[93px]">
      <div className="mx-auto flex w-full max-w-[1707px] flex-col items-center gap-8 sm:gap-12 lg:gap-[67px]">
        <motion.h2
          className="max-w-[1304px] text-center text-[26px] leading-[1.2] font-bold tracking-[-1px] text-[#111] sm:text-[42px] sm:tracking-[-1.33px] lg:text-[53.33px] lg:leading-[65.33px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          Frequently Asked Questions About Multi-Storey 
        </motion.h2>

        <div className="grid w-full grid-cols-1 gap-[13px] lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-[13px]">
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
          </div>
          <div className="flex flex-col gap-[13px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
