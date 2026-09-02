"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { accordionTransition } from "./motion";
import macStyles from "./faqMac.module.css";

type FaqItemProps = {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({
  number,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const contentId = `faq-content-${number}`;

  return (
    <article className="overflow-hidden rounded-[21px] border border-[#e3e4e7] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-6 py-5 text-left sm:gap-4"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="w-9 shrink-0 text-base font-bold leading-[17px] text-[#e60f1a]">
          {number}
        </span>

        <span className={`min-w-0 flex-1 text-base font-semibold leading-[27px] tracking-[-0.47px] text-[#101116] sm:text-lg ${macStyles.itemQuestion}`}>
          {question}
        </span>

        <motion.span
          className="relative mt-1 size-[17px] shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={accordionTransition}
          aria-hidden
        >
          <Image
            src="/images/industries/fmcg/faq/chevron-down.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.span>
      </button>

      <motion.div
        id={contentId}
        role="region"
        aria-hidden={!isOpen}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={accordionTransition}
        className="overflow-hidden"
      >
        <p className={`px-6 pb-5 pl-[60px] text-base leading-[26px] text-[#53555b] sm:pl-[68px] ${macStyles.itemAnswer}`}>
          {answer}
        </p>
      </motion.div>
    </article>
  );
}
