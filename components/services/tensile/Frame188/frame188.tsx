'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  MOBILE_FAQ_ANSWER_CLASS,
  MOBILE_FAQ_CARD_CLASS,
  MOBILE_FAQ_NUMBER_CLASS,
  MOBILE_FAQ_QUESTION_CLASS,
  MOBILE_FAQ_SECTION_CLASS,
  MOBILE_FAQ_TITLE_CLASS,
} from '@/components/services/serviceMobileCivilTemplate';

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

const FAQS = [
  {
    question: 'What is a tensile structure?',
    answer:
      "A tensile structure is a lightweight construction made of high-strength fabric membrane, such as PTFE or ETFE, stretched over a steel or cable framework and held in place purely by tension. It offers column-free spans, natural light transmission, and faster installation than conventional roofing ideal for car parks, stadiums, and canopies.",
  },
  {
    question:
      'How is Mekark different from other tensile structure contractors in South India?',
    answer:
      'Mekark handles design, fabrication, and installation in-house rather than outsourcing membrane cutting or steelwork to third parties. This gives us tighter quality control, faster turnaround, and single-point accountability for your tensile fabric project, wherever it\'s located across South India.',
  },
  {
    question: 'What is the difference between PTFE and PVC tensile fabric?',
    answer:
      'PTFE (Teflon-coated fibreglass) offers superior UV resistance, self-cleaning properties, and a longer lifespan, making it ideal for permanent structures. PVC-coated polyester is more economical and suited to shorter-term or budget-sensitive installations. Mekark helps you choose the right fabric based on project life, budget, and location.',
  },
  {
    question: 'What industries and applications use tensile structures?',
    answer:
      'Tensile structures are widely used for car parking sheds, stadium and sports facility roofing, mall and hotel entrance canopies, industrial sheds, event venues, and public spaces such as parks and walkways.',
  },
  {
    question: 'How long does a typical tensile structure project take?',
    answer:
      'Timelines vary by span and design complexity, but tensile structures generally install significantly faster than conventional roofing since fabrication happens off-site. A standard car parking shed is typically completed in a few weeks once design is finalised.',
  },
  {
    question: 'What is the expected lifespan of a tensile fabric structure?',
    answer:
      'With quality PTFE or ETFE membrane and proper engineering, tensile structures typically last 15–25+ years, with some permanent PTFE installations lasting longer. Maintenance mainly involves periodic cleaning and re-tensioning to keep the fabric performing well.',
  },
  {
    question: 'Are tensile structures weather-resistant?',
    answer:
      'Yes. Tensile fabrics used by Mekark are UV-stabilized, fire-retardant, and engineered for wind and rain loads specific to your site, making them suitable for the heat, humidity, and monsoon conditions found across South India.',
  },
  {
    question: 'Do you take up projects outside Tamil Nadu?',
    answer:
      'Yes. While our manufacturing facility is based in Chennai, we design, fabricate, and install tensile structures across South India, including Karnataka, Telangana, Andhra Pradesh, and Kerala, with on-site teams deployed to your project location.',
  },
  {
    question: 'Can tensile structures be customised in shape and size?',
    answer:
      'Yes, one of the biggest advantages of tensile architecture is design flexibility. Structures can be engineered as flat canopies, conical, hypar, or dome shapes, and scaled from small parking sheds to large stadium roofs.',
  },
  {
    question:
      'Do you provide structural design and drawings, or do we need our own consultant?',
    answer:
      "Our in-house engineering team handles complete tension and wind-load analysis, design, and drawings, so you don't need to source this separately. We're also happy to work alongside your existing architect or consultant.",
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
  const panelId = `tensile-faq-panel-${index}`;
  const buttonId = `tensile-faq-button-${index}`;

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
          {String(index + 1).padStart(2, '0')}
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
            src="/images/services/tensile/frame188/chevron.svg"
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
            animate={{ height: 'auto', opacity: 1 }}
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

export default function Frame188() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = FAQS.slice(0, 5);
  const rightColumn = FAQS.slice(5);

  return (
    <section
      id="faq"
      className={`${MOBILE_FAQ_SECTION_CLASS} max-lg:px-5`}
      aria-label="Frequently asked questions about tensile structures"
    >
      <div className="mx-auto flex w-full max-w-[1706.7px] flex-col items-center gap-6 lg:gap-[66.7px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className={`${MOBILE_FAQ_TITLE_CLASS} max-lg:leading-[35px]`}
        >
          Frequently Asked Questions About Tensile Structures
        </motion.h2>

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
                  setOpenIndex((current) => (current === index ? null : index))
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
