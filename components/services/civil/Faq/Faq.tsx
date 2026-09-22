"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What does a civil construction company like Mekark handle?",
    answer:
      "Mekark handles end-to-end civil and RCC construction — site assessment, structural design, foundations, RCC frameworks, MEP integration, finishing, and handover for factories, warehouses, commercial complexes, and institutional buildings.",
  },
  {
    question: "How is Mekark different from other civil contractors in Chennai?",
    answer:
      "We combine in-house architectural and structural design, BIM-based analysis, ISO-certified processes, and single-point turnkey accountability — so you work with one partner instead of multiple vendors.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve manufacturing, automotive, logistics, retail, healthcare, education, hospitality, and institutional sectors with civil infrastructure and commercial RCC building solutions across Tamil Nadu and India.",
  },
  {
    question: "How long does a typical RCC construction project take?",
    answer:
      "Timelines depend on scale, approvals, and site conditions. After design and permitting, most commercial and industrial RCC projects run on a phased schedule with clear milestones and an on-time delivery commitment.",
  },
  {
    question:
      "Do you provide complete turnkey construction, or only RCC structure work?",
    answer:
      "Both. We deliver full turnkey civil construction — design through handover — and can also execute RCC structure packages when you need a specialized structural civil contractor.",
  },
  {
    question: "What is the minimum project size you take on?",
    answer:
      "We focus on commercial, industrial, and institutional projects. Share your site area and scope with our team and we will confirm fit and recommend the right delivery approach.",
  },
  {
    question:
      "Do you provide structural design and drawings, or do we need our own architect?",
    answer:
      "Our in-house architects and structural designers prepare designs and drawings using BIM-based analysis. You can also bring your own consultant — we coordinate seamlessly either way.",
  },
  {
    question:
      "Why is RCC construction preferred for commercial and industrial buildings?",
    answer:
      "RCC offers high strength, durability, fire resistance, and design flexibility for multi-storey commercial buildings, factories, and warehouses that must handle heavy loads and long service life.",
  },
  {
    question: "What is the expected lifespan of an RCC structure?",
    answer:
      "Properly designed and maintained RCC structures typically deliver 50–100+ years of service life, depending on design grade, exposure conditions, and ongoing maintenance.",
  },
  {
    question: "Do you serve locations outside Chennai?",
    answer:
      "Yes. While Mekark is headquartered in Chennai, we serve clients across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Telangana, with completed and ongoing projects in Coimbatore, Hosur, Sriperumbudur, Oragadam, Bangalore, Hyderabad, Vizag, Vijayawada, and Kochi. As a South India-focused PEB and civil construction company, our manufacturing facility and in-house engineering team allow us to execute industrial, commercial, and institutional projects across the region and select projects pan-India, with the same quality and turnaround standards.",
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
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="flex w-full flex-col self-stretch overflow-hidden rounded-[12px] border border-solid border-[#E3E4E7] bg-white p-4 lg:rounded-[20.78px] lg:p-0 lg:px-[24.9px]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 text-left lg:gap-4 lg:py-[20.8px]"
      >
        <span className="flex min-w-0 flex-1 items-center gap-3 lg:gap-[16.6px]">
          <span className="w-6 shrink-0 font-montserrat text-sm font-bold leading-[16.624px] tracking-[-0.4675px] text-[#E60F1A] lg:w-auto lg:text-num-16 lg:leading-[16.62px] lg:tracking-[-0.47px]">
            {number}
          </span>
          <span className="font-manrope text-base font-medium leading-normal text-[#101116] lg:text-[18.67px] lg:font-semibold lg:leading-[26.67px] lg:tracking-[-0.47px]">
            {question}
          </span>
        </span>
        <span
          className={`relative size-[16.624px] shrink-0 overflow-hidden transition-transform duration-200 lg:size-[16.6px] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src="/images/services/civil/faq/chevron.svg"
            alt="Expand section"
            width={17}
            height={17}
            className="size-full object-contain"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-0 pl-9 pr-0 font-manrope text-sm font-normal leading-normal text-[#53555B] lg:pb-[20.8px] lg:pl-[calc(1em+16.6px)] lg:pr-2 lg:text-num-16 lg:leading-[1.65] lg:text-dimgray">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative box-border flex w-full flex-col items-start overflow-hidden bg-white px-4 py-8 text-left font-manrope text-[#111] lg:px-[106.7px] lg:py-[93.3px] lg:text-[53.33px]"
      aria-label="Frequently asked questions about civil and RCC construction"
    >
      <div className="flex w-full flex-col items-center gap-6 self-stretch lg:gap-[66.7px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="relative w-full max-w-[1480px] text-center font-manrope text-[28px] font-bold leading-[36px] text-[#111] lg:h-[66px] lg:text-[53.33px] lg:leading-[65.33px] lg:tracking-[-1.33px]"
        >
          Frequently Asked Questions About Civil &amp; RCC Construction
        </motion.h2>

        {/* Mobile: single stack (Figma 7385:1204) | Desktop: 01–05 | 06–10 */}
        <div className="flex w-full max-w-[1706.7px] flex-col items-stretch justify-center gap-3 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex w-full flex-col items-start gap-3 lg:w-[790.7px] lg:gap-[13.3px]">
            {faqs.slice(0, 5).map((item, index) => (
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
          </div>
          <div className="flex w-full flex-col items-start gap-3 lg:w-[790.7px] lg:gap-[13.3px]">
            {faqs.slice(5).map((item, i) => {
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
          </div>
        </div>
      </div>
    </section>
  );
}
