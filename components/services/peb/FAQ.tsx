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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

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

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is a pre-engineered building (PEB)?",
    answer:
      "A PEB is a steel structure designed and fabricated off-site in a factory, then transported and assembled on-site. It offers faster construction, lower cost, and greater design flexibility compared to conventional RCC construction—ideal for factories, warehouses, and industrial sheds.",
  },
  {
    question:
      "How is Mekark different from other PEB contractors in Chennai?",
    answer:
      "Mekark is a turnkey PEB contractor and manufacturer; we design, fabricate, and erect structures in-house at our own 6 lakh sq. ft. facility, rather than outsourcing fabrication like many contractors do. This gives us tighter quality control and faster delivery.",
  },
  {
    question: "What industries do you serve as an industrial PEB contractor?",
    answer:
      "We work across manufacturing plants, warehousing and logistics, industrial sheds, commercial buildings, and infrastructure projects such as airports and metro stations.",
  },
  {
    question: "How long does a typical PEB construction project take?",
    answer:
      "Timelines vary by scale and scope, but PEB construction is significantly faster than conventional construction—up to 50% faster—with a standard industrial shed typically completed in 20-22 weeks* once the design is finalized.",
  },
  {
    question:
      "Do you provide complete turnkey industrial EPC services, or only steel structure manufacturing?",
    answer:
      "Mekark offers both steel structure manufacturing alone and a complete turnkey industrial construction service, including civil works, MEP, and project management.",
  },
  {
    question: "What is the minimum project size you take on?",
    answer: "10,000 sq. ft. and above.",
  },
  {
    question:
      "Do you provide structural design and drawings, or do we need our own architect/consultant?",
    answer:
      "Our in-house team of 175+ engineers handles complete structural design and analysis, so you don’t need to source this separately. However, we’re also happy to work alongside your existing architect or consultant.",
  },
  {
    question: "Can PEB structures be expanded or modified in the future?",
    answer:
      "Yes. One of the key advantages of PEB is flexibility. Additional bays can be added by extending the frame in length, and in many cases, height or width can also be planned for at the design stage to allow future expansion with minimal structural rework.",
  },
  {
    question:
      "What is the expected lifespan and maintenance requirement of a PEB structure?",
    answer:
      "With proper design, quality fabrication, and correct coatings such as galvanizing or painting, PEB structures typically last 30–50+ years. Maintenance mainly involves periodic checks of roof sheeting and gutters, plus touch-up painting on exposed steel—significantly lower upkeep compared to conventional structures.",
  },
  {
    question:
      "What is the difference between a PEB and a conventional steel structure?",
    answer:
      "A conventional steel structure is typically custom-fabricated with standard hot-rolled sections, often requiring more steel and longer fabrication time. A PEB uses tapered built-up sections engineered specifically for the load and span required, optimizing steel usage — reducing material cost and weight without compromising strength, and enabling faster fabrication and on-site assembly.",
  },
];

function FAQCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      className={MOBILE_FAQ_CARD_CLASS}
      variants={cardReveal}
    >
      <button
        id={buttonId}
        type="button"
        className="flex w-full cursor-pointer items-center gap-3 text-left lg:min-h-[clamp(4.5rem,5.208vw,6.25rem)] lg:gap-[clamp(0.75rem,0.865vw,1.039rem)] lg:px-[clamp(1rem,1.299vw,1.559rem)] lg:py-[clamp(1rem,1.082vw,1.299rem)]"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={MOBILE_FAQ_NUMBER_CLASS}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 ${MOBILE_FAQ_QUESTION_CLASS}`}>
          {item.question}
        </span>
        <motion.span
          className="relative size-[16.624px] shrink-0 lg:size-[clamp(0.875rem,0.865vw,1.039rem)]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <Image
            src="/images/services/peb/faq/chevron.svg"
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
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
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
              {item.answer}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const columns = [faqItems.slice(0, 5), faqItems.slice(5)];

  return (
    <section
      className={MOBILE_FAQ_SECTION_CLASS}
      aria-labelledby="faq-title"
    >
      <div className="mx-auto flex w-full max-w-[1706.67px] flex-col items-center gap-6 lg:gap-[clamp(2.5rem,3.472vw,4.167rem)]">
        <motion.h2
          id="faq-title"
          className={`max-w-[16ch] text-balance sm:max-w-[22ch] lg:max-w-none ${MOBILE_FAQ_TITLE_CLASS}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          Frequently Asked Questions About PEB Construction
        </motion.h2>

        <div className="grid w-full gap-3 lg:grid-cols-2 lg:gap-[clamp(1.5rem,2.083vw,2.5rem)]">
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex === 0 ? "first-column" : "second-column"}
              className="flex flex-col gap-3 lg:gap-[clamp(0.75rem,0.694vw,0.833rem)]"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {column.map((item, itemIndex) => {
                const index = columnIndex === 0 ? itemIndex : itemIndex + 5;

                return (
                  <FAQCard
                    key={item.question}
                    item={item}
                    index={index}
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
          ))}
        </div>
      </div>
    </section>
  );
}
