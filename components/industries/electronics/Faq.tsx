"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type FaqItem = {
  number: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    number: "01",
    question:
      "What is a turnkey electronics manufacturing facility and how is it different from a regular industrial shed?",
    answer:
      "A turnkey electronics facility integrates structural steel, civil works, ESD-safe flooring, clean rooms, HVAC, and MEP into one coordinated build engineered around production quality and yield, not just floor space.",
  },
  {
    number: "02",
    question:
      "What should I look for in an electronics manufacturing facility construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with clean rooms and ESD-safe environments, MEP integration under one contract, and a track record of on-time delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    number: "03",
    question:
      "How long does it take to construct an electronics manufacturing plant in South India?",
    answer:
      "Mekark's in-house process typically delivers an electronics facility in 12–20 weeks from design approval, up to 30–40% faster than conventional construction.",
  },
  {
    number: "04",
    question:
      "How much does it cost to build an electronics factory or clean room in South India?",
    answer:
      "Costs vary by cleanliness classification, utility load, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    number: "05",
    question:
      "Do you provide turnkey EPC solutions for electronics facilities?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC electronics facility construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    number: "06",
    question:
      "Can Mekark design and build clean rooms for semiconductor or precision assembly?",
    answer:
      "Yes. We design and build clean rooms to the required cleanliness classification for semiconductor, component, and precision electronics assembly, fully integrated with the wider facility.",
  },
  {
    number: "07",
    question:
      "Can existing electronics facilities be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer facility expansion and upgrade services, reconfiguring cleanroom zones, ESD flooring, and utility capacity to extend usable production life.",
  },
  {
    number: "08",
    question:
      "Which parts of South India does Mekark execute electronics facility projects in?",
    answer:
      "Mekark executes electronics manufacturing facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Sriperumbudur, Oragadam, Hosur, Coimbatore, Bengaluru, and Hyderabad.",
  },
  {
    number: "09",
    question:
      "What industries does Mekark's electronics facility construction serve?",
    answer:
      "We serve electronics component manufacturing, semiconductor and precision assembly, consumer electronics, automotive electronics, telecom equipment, and contract electronics manufacturing (EMS/ODM).",
  },
  {
    number: "10",
    question:
      "Are Mekark's electronics facilities ISO-certified and engineering-compliant?",
    answer:
      "Yes. Every facility is designed using STAAD Pro, TEKLA, and Autodesk, and delivered to ISO-certified quality and safety standards.",
  },
];

const leftColumnItems = faqItems.slice(0, 5);
const rightColumnItems = faqItems.slice(5);

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[21px] border border-[#e3e4e7] bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-6 py-5 text-left sm:gap-6 sm:px-[26px] sm:py-[21px]"
      >
        <span className="shrink-0 font-manrope text-base font-bold leading-none text-[#e60f1a]">
          {item.number}
        </span>
        <span className="min-w-0 flex-1 font-manrope text-base font-semibold leading-[27px] tracking-[-0.01em] text-[#101116] sm:text-[19px]">
          {item.question}
        </span>
        <span
          className={`relative size-[17px] shrink-0 overflow-hidden transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <Image
            src="/images/industries/electronics/faq/chevron.svg"
            alt=""
            fill
            className="object-contain"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 font-manrope text-base font-normal leading-[24px] text-[#53555b] sm:px-[26px] sm:pb-[21px] sm:pl-[62px]">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function FaqColumn({
  items,
  openId,
  onToggle,
}: {
  items: FaqItem[];
  openId: string | null;
  onToggle: (number: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3.5">
      {items.map((item) => (
        <FaqAccordionItem
          key={item.number}
          item={item}
          isOpen={openId === item.number}
          onToggle={() => onToggle(item.number)}
        />
      ))}
    </div>
  );
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("01");

  const handleToggle = (number: string) => {
    setOpenId((current) => (current === number ? null : number));
  };

  return (
    <section className="w-full bg-white py-16 lg:py-[93px]">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-[107px]">
        <motion.header
          className="mx-auto mb-12 max-w-[693px] text-center lg:mb-[67px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="mx-auto flex w-full max-w-[693px] items-center justify-center text-center font-manrope text-[32px] font-bold leading-tight tracking-[-1.33px] text-gray sm:text-[40px] lg:h-[66px] lg:text-[53.33px] lg:leading-[65.33px] lg:whitespace-nowrap">
            Frequently Asked Questions
          </h2>
        </motion.header>

        <div className="mx-auto flex max-w-[1707px] flex-col gap-3.5 lg:flex-row lg:gap-10">
          <FaqColumn
            items={leftColumnItems}
            openId={openId}
            onToggle={handleToggle}
          />
          <FaqColumn
            items={rightColumnItems}
            openId={openId}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  );
}
