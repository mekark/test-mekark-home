"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  MOBILE_FAQ_ANSWER_CLASS,
  MOBILE_FAQ_CARD_CLASS,
  MOBILE_FAQ_NUMBER_CLASS,
  MOBILE_FAQ_QUESTION_CLASS,
  MOBILE_FAQ_SECTION_CLASS,
  MOBILE_FAQ_TITLE_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import styles from "./index.module.css";

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
    question: "Is solar power suitable for factories and warehouses?",
    answer:
      "Yes. Large roof areas, high daytime power consumption, and significant electricity bills make industrial facilities ideal for commercial solar. Mekark specializes exclusively in B2B solar installations across South India.",
  },
  {
    question: "How much can my business save with solar?",
    answer:
      "Most commercial clients reduce electricity bills by 50 to 80 percent. Exact savings depend on consumption, current tariff rates, and system size. We provide a detailed savings projection as part of the free site assessment.",
  },
  {
    question: "What is the typical ROI period for commercial solar?",
    answer:
      "Most industrial and commercial solar installations in Tamil Nadu, Bangalore, and Hyderabad achieve payback within 3 to 5 years, after which the system generates power at near-zero cost for 20+ years.",
  },
  {
    question: "Can solar panels be installed on PEB or RCC structures?",
    answer:
      "Yes. Mekark has deep expertise in both PEB and RCC construction, allowing us to design mounting systems that are fully compatible with your existing building structure.",
  },
  {
    question: "Do you handle government approvals and net metering?",
    answer:
      "Yes. We manage DISCOM approvals, net metering applications, and applicable subsidy documentation on your behalf across Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana.",
  },
  {
    question: "What is the minimum project size you accept?",
    answer:
      "Mekark handles commercial solar installations from x kW and above. We do not take on residential or small-scale projects.",
  },
  {
    question: "What happens to power supply on cloudy days?",
    answer:
      "Solar panels continue generating at reduced capacity on cloudy days. On-grid systems draw from the grid when needed, and battery storage systems ensure uninterrupted supply for critical operations.",
  },
  {
    question: "Do you offer maintenance after installation?",
    answer:
      "Yes. We offer Annual Maintenance Contracts covering performance monitoring, cleaning, inverter checks, and preventive maintenance to keep your system operating at peak efficiency.",
  },
  {
    question: "Can PEB rooftop solar systems be expanded later?",
    answer:
      "Yes. Systems can be designed at the outset to allow future capacity additions with minimal structural rework, making it easy to scale as your energy needs grow.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact Mekark for a free site assessment. Our team will visit your facility, analyze your energy requirements, and provide a full proposal including system design, cost, and ROI projection at no charge.",
  },
] as const;

function MobileFaqItem({
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
  const panelId = `solar-faq-panel-${index}`;
  const buttonId = `solar-faq-button-${index}`;

  return (
    <motion.div className={MOBILE_FAQ_CARD_CLASS} variants={cardReveal}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center gap-3 text-left"
      >
        <span className={MOBILE_FAQ_NUMBER_CLASS}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`min-w-0 flex-1 ${MOBILE_FAQ_QUESTION_CLASS}`}>
          {question}
        </span>
        <motion.span
          className="relative size-[16.624px] shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <Image
            src="/images/services/solar/faq/Component 1.svg"
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
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden"
          >
            <motion.p
              className={MOBILE_FAQ_ANSWER_CLASS}
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

const DesktopFaqItem = ({
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
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button
        type="button"
        className={styles.itemButton}
        onClick={onToggle}
        aria-expanded={open}
      >
        <b className={styles.number}>{String(index).padStart(2, "0")}</b>
        <div className={styles.question}>{question}</div>
        <motion.div
          className={styles.component1}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: easeOut }}
        >
          <Image
            className={styles.vectorIcon}
            width={17}
            height={17}
            sizes="100vw"
            src="/images/services/solar/faq/Component 1.svg"
            alt="FAQ expand icon"
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.answerWrap}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: easeOut }}
            style={{ overflow: "hidden" }}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq: NextPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      {/* Mobile — Figma 7454:8109 */}
      <section
        id="faq"
        className={`${MOBILE_FAQ_SECTION_CLASS} max-lg:px-5 lg:hidden`}
        aria-label="Frequently asked questions about commercial solar"
      >
        <div className="mx-auto flex w-full max-w-[1706.7px] flex-col items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className={`${MOBILE_FAQ_TITLE_CLASS} leading-[35px]`}
          >
            Frequently Asked Questions About Commercial Solar
          </motion.h2>

          <motion.div
            className="flex w-full flex-col gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {faqs.map((faq, index) => (
              <MobileFaqItem
                key={faq.question}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <div className={`${styles.frameParent} !hidden lg:flex`}>
        <div className={styles.frameGroup}>
          <div className={styles.titleWrapper}>
            <b className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions About Commercial Solar
            </b>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              {faqs.slice(0, 5).map((faq, i) => (
                <DesktopFaqItem
                  key={faq.question}
                  index={i + 1}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
            <div className={styles.column}>
              {faqs.slice(5).map((faq, i) => (
                <DesktopFaqItem
                  key={faq.question}
                  index={i + 6}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === i + 5}
                  onToggle={() => toggle(i + 5)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
