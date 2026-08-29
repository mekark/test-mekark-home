"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build a spinning mill?",
    answer:
      "A 50,000-1,00,000 sq.ft spinning mill using Mekark's PEB system takes 4-7 months from design approval to handover, versus 8-14 months for RCC construction.",
  },
  {
    question: "What does textile factory construction cost in India?",
    answer:
      "PEB shed construction starts from ₹x-x /sq.ft. RCC-framed structures with full MEP range from ₹x-x /sq.ft. Contact us for a detailed BOQ tailored to your project.",
  },
  {
    question: "Can Mekark handle factory approvals and NOCs?",
    answer:
      "Yes. We assist with DTCP/CMDA approval, Fire NOC, Pollution Control Board consent, and Factories Inspectorate approvals across South India.",
  },
  {
    question: "Do you build outside Tamil Nadu?",
    answer:
      "Yes. Mekark constructs textile factories across South India — Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.",
  },
  {
    question: "What are the structural requirements for a weaving shed?",
    answer:
      "Column-free spans of x-x m, crane beam provisions, north-light roofing, anti-vibration plinths, and fire suppression with smoke venting.",
  },
  {
    question: "Is PEB suitable for a garment export factory?",
    answer:
      "Yes. PEB delivers fast erection, clear-span floors up to x m, easy expansion, and full compliance with BSCI, SEDEX, and WRAP audit requirements.",
  },
  {
    question:
      "Can Mekark construct dyeing and wet-processing units with ETP compliance?",
    answer:
      "Yes. We build dyeing and processing plants with corrosion-resistant flooring, ETP/STP integration, and steam piping for zero-discharge compliance.",
  },
  {
    question:
      "Does Mekark offer turnkey construction for composite textile mills?",
    answer:
      "Yes. We deliver end-to-end composite textile mill construction covering ginning, spinning, weaving, dyeing, and finishing under a single campus.",
  },
  {
    question:
      "Can an existing textile factory be expanded without disrupting production?",
    answer:
      "Yes. Our PEB system enables brownfield expansions with minimal disruption; erection can proceed alongside ongoing operations.",
  },
  {
    question:
      "Does Mekark provide support for factory compliance audits like BSCI, SEDEX, or WRAP?",
    answer:
      "Yes. Our garment and textile buildings meet BSCI, SEDEX, WRAP, and other social compliance audit standards.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative size-[16.624px] shrink-0 overflow-hidden transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <Image
        src="/images/industries/textile/faq/chevron.svg"
        alt=""
        width={10}
        height={6}
        className="absolute left-1/2 top-1/2 h-[5.54px] w-[9.7px] -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  );
}

function FaqCard({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="h-fit rounded-[20.78px] border border-[#E3E4E7] bg-white px-[25.975px]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-[20.78px] text-left"
        aria-expanded={isOpen}
      >
        <span className="flex min-w-0 flex-1 items-center gap-[18px] tracking-[-0.4675px]">
          <span className="shrink-0 font-[family-name:var(--font-montserrat)] text-[16px] font-bold leading-[16.624px] text-[#E60F1A]">
            {number}
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-[16px] font-semibold leading-[26.667px] text-[#101116] sm:text-[18.667px]">
            {faq.question}
          </span>
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="pb-[20.78px] pl-[34px] pr-6 font-[family-name:var(--font-manrope)] text-[15px] font-normal leading-[24px] text-[#53555B] sm:text-[16px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [active, setActive] = useState<number>(0);
  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-white text-black">
      <div className="mx-auto w-full max-w-[1920px] px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-[93.333px] xl:px-[106.667px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal tracking-[-1.333px] text-[#111111] sm:text-[36px] lg:text-[53.333px] lg:leading-[65.333px]"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col gap-[13.333px] lg:mt-[66.667px] lg:flex-row lg:gap-10"
        >
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-1 flex-col gap-[13.333px]"
            >
              {column.map((faq, columnItemIndex) => {
                const index = columnIndex * 5 + columnItemIndex;

                return (
                  <FaqCard
                    key={faq.question}
                    faq={faq}
                    index={index}
                    isOpen={active === index}
                    onToggle={() => setActive(active === index ? -1 : index)}
                  />
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
