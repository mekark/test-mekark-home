"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqItems = [
  {
    number: "01",
    question: "What does an MEP contractor like Mekark handle?",
    answer:
      "Mekark manages the full MEP lifecycle: system design, procurement, HVAC, electrical, plumbing, firefighting, mechanical installation, testing, commissioning, and handover, as a single turnkey MEP contractor, so you're not managing multiple vendor contracts and schedules yourself.",
  },
  {
    number: "02",
    question: "How is Mekark different from other MEP contractors in Chennai?",
    answer:
      "We combine an in-house design team with safety-first execution and independent testing, giving tighter quality control than most competitors in Chennai, where design and installation are often outsourced to separate parties with limited coordination.",
  },
  {
    number: "03",
    question: "What industries do you serve?",
    answer:
      "Manufacturing and factories, logistics and warehousing, industrial buildings, and process-driven manufacturing plants across sectors with varying utility, power, and fire-safety requirements.",
  },
  {
    number: "04",
    question: "How long does a typical industrial MEP project take?",
    answer:
      "Timelines vary by scale and system complexity, but our five-stage process typically delivers a standard project in 20-22 weeks* once design is finalised, and long-lead equipment is confirmed.",
  },
  {
    number: "05",
    question:
      "Do you provide complete turnkey MEP, or only specific systems like HVAC or electrical?",
    answer:
      "Both: standalone industrial HVAC, electrical, plumbing, or fire-fighting works, or complete turnkey MEP design-build across all systems, depending on what your project already has in place.",
  },
  {
    number: "06",
    question: "What is the minimum project size you take on?",
    answer: "10,000 sq.ft and above.",
  },
  {
    number: "07",
    question:
      "Do you provide MEP design and drawings, or do we need our own consultant?",
    answer:
      "Our in-house team handles complete MEP design and load calculations. We're also happy to work alongside your existing consultant or main contractor when a design is already partially developed.",
  },
  {
    number: "08",
    question:
      "Why is a single turnkey MEP contractor preferred over separate vendors?",
    answer:
      "A single point of accountability avoids coordination gaps between HVAC, electrical, plumbing, and fire-fighting vendors, reducing delays and rework on site, particularly when changes come up mid-project and multiple vendors would otherwise need to be realigned.",
  },
  {
    number: "09",
    question: "What kind of after-handover support do you provide?",
    answer:
      "We offer post-handover maintenance support (AMC), so systems continue performing at design capacity, not just on day one, with scheduled checks and documented service records.",
  },
  {
    number: "10",
    question: "Do you serve locations outside Chennai?",
    answer:
      "Yes, Mekark delivers industrial MEP projects across Tamil Nadu, India, and APAC, with project teams that travel to the site for the duration of installation and commissioning.",
  },
] as const;

function FaqItem({
  number,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="self-stretch rounded-num-20_78 border border-solid border-faq-border bg-white px-4 py-num-0 sm:px-num-24_9">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 py-num-20_8 text-left sm:gap-4"
      >
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-[16.6px]">
          <b className="shrink-0 tracking-num--0_47 leading-num-16_62 text-num-16 text-faq-red font-montserrat">
            {number}
          </b>
          <div className="min-w-0 text-[16px] tracking-num--0_47 leading-[24px] font-semibold font-manrope text-faq-question sm:text-num-18_67 sm:leading-num-26_67">
            {question}
          </div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 flex h-[16.6px] w-[16.6px] shrink-0 items-center justify-center sm:mt-0"
        >
          <Image
            src="/images/services/mep/faq/chevron.svg"
            width={10}
            height={6}
            alt="Expand section"
            className="block h-[5.5px] w-[9.7px] object-contain"
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-num-20_8 text-num-16 leading-num-26_67 tracking-num--0_47 text-dimgray font-manrope">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const leftColumn = faqItems.slice(0, 5);
  const rightColumn = faqItems.slice(5);

  return (
    <section className="relative flex w-full flex-col items-start overflow-hidden bg-white px-5 py-14 box-border text-left text-faq-title font-manrope sm:px-8 md:px-16 lg:px-[106.7px] lg:py-[93.3px]">
      <div className="flex w-full flex-col items-center gap-10 self-stretch lg:gap-[66.7px]">
        <b className="w-full max-w-[1526px] text-center text-[28px] leading-[1.2] tracking-[-1.33px] sm:text-[40px] lg:text-[53.33px] lg:leading-[65.33px]">
          Frequently Asked Questions About Industrial MEP Contracting
        </b>

        <div className="flex w-full max-w-[1706px] flex-col items-stretch gap-3 text-num-16 text-faq-red font-montserrat lg:flex-row lg:items-start lg:justify-center lg:gap-10">
          <div className="flex w-full flex-col items-start gap-[13.3px] lg:w-1/2">
            {leftColumn.map((item, index) => (
              <FaqItem
                key={item.number}
                {...item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-[13.3px] lg:w-1/2">
            {rightColumn.map((item, index) => {
              const globalIndex = index + 5;
              return (
                <FaqItem
                  key={item.number}
                  {...item}
                  isOpen={openIndex === globalIndex}
                  onToggle={() =>
                    setOpenIndex(
                      openIndex === globalIndex ? null : globalIndex,
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
