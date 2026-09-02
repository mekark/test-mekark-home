"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "./data";
import { FaqItem } from "./FaqItem";
import { fadeSlideUp } from "./motion";

function formatFaqNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

type FaqColumnProps = {
  items: typeof faqs;
  startIndex: number;
  openIndex: number;
  onToggle: (index: number) => void;
};

function FaqColumn({ items, startIndex, openIndex, onToggle }: FaqColumnProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3.5">
      {items.map((faq, columnIndex) => {
        const globalIndex = startIndex + columnIndex;

        return (
          <FaqItem
            key={globalIndex}
            number={formatFaqNumber(globalIndex)}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === globalIndex}
            onToggle={() => onToggle(globalIndex)}
          />
        );
      })}
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5);

  return (
    <section
      className="bg-white px-6 pb-16 pt-8 sm:px-10 sm:pt-10 lg:px-12 xl:px-16 2xl:px-20 lg:pb-24 lg:pt-12"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-12 lg:gap-16">
        <motion.h2
          className="text-center text-[32px] font-bold tracking-[-1.33px] text-[#111] sm:text-[40px] lg:text-[53px] lg:leading-[65px]"
          custom={0}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          <FaqColumn
            items={leftColumn}
            startIndex={0}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
          <FaqColumn
            items={rightColumn}
            startIndex={5}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  );
}
