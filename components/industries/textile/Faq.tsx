"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";

const faqs = [
  {
    num: "01",
    question: "How long does it take to build a spinning mill?",
    answer:
      "A 50,000-1,00,000 sq.ft spinning mill using Mekark's PEB system takes 4-7 months from design approval to handover, versus 8-14 months for RCC construction.",
  },
  {
    num: "02",
    question: "What does textile factory construction cost in India?",
    answer:
      "PEB shed construction starts from ₹x-x /sq.ft. RCC-framed structures with full MEP range from ₹x-x /sq.ft. Contact us for a detailed BOQ tailored to your project.",
  },
  {
    num: "03",
    question: "Can Mekark handle factory approvals and NOCs?",
    answer:
      "Yes. We assist with DTCP/CMDA approval, Fire NOC, Pollution Control Board consent, and Factories Inspectorate approvals across South India.",
  },
  {
    num: "04",
    question: "Do you build outside Tamil Nadu?",
    answer:
      "Yes. Mekark constructs textile factories across South India — Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.",
  },
  {
    num: "05",
    question: "What are the structural requirements for a weaving shed?",
    answer:
      "Column-free spans of x-x m, crane beam provisions, north-light roofing, anti-vibration plinths, and fire suppression with smoke venting.",
  },
  {
    num: "06",
    question: "Is PEB suitable for a garment export factory?",
    answer:
      "Yes. PEB delivers fast erection, clear-span floors up to x m, easy expansion, and full compliance with BSCI, SEDEX, and WRAP audit requirements.",
  },
  {
    num: "07",
    question:
      "Can Mekark construct dyeing and wet-processing units with ETP compliance?",
    answer:
      "Yes. We build dyeing and processing plants with corrosion-resistant flooring, ETP/STP integration, and steam piping for zero-discharge compliance.",
  },
  {
    num: "08",
    question:
      "Does Mekark offer turnkey construction for composite textile mills?",
    answer:
      "Yes. We deliver end-to-end composite textile mill construction covering ginning, spinning, weaving, dyeing, and finishing under a single campus.",
  },
  {
    num: "09",
    question:
      "Can an existing textile factory be expanded without disrupting production?",
    answer:
      "Yes. Our PEB system enables brownfield expansions with minimal disruption; erection can proceed alongside ongoing operations.",
  },
  {
    num: "10",
    question:
      "Does Mekark provide support for factory compliance audits like BSCI, SEDEX, or WRAP?",
    answer:
      "Yes. Our garment and textile buildings meet BSCI, SEDEX, WRAP, and other social compliance audit standards.",
  },
] as const;

const leftFaqs = faqs.slice(0, 5);
const rightFaqs = faqs.slice(5);

type FaqItemProps = {
  num: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ num, question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`${styles.divreveal} ${isOpen ? styles.divrevealOpen : ""}`}>
      <button
        type="button"
        className={`${styles.buttonradix} ${isOpen ? styles.buttonradixOpen : ""}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div className={styles.spanflex}>
          <b className={styles.b}>{num}</b>
          <div className={styles.question}>{question}</div>
        </div>
        <div
          className={`${styles.component1} ${isOpen ? styles.component1Open : ""}`}
        >
          <Image
            className={styles.vectorIcon}
            src="/images/industries/textile/faq/chevron.svg"
            width={17}
            height={17}
            sizes="100vw"
            alt=""
          />
        </div>
      </button>
      <div
        className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
      >
        <div className={styles.answerInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openNum, setOpenNum] = useState<string | null>("01");

  const toggle = (num: string) => {
    setOpenNum((current) => (current === num ? null : num));
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.frameParent}>
        <div className={styles.frequentlyAskedQuestionsWrapper}>
          <b className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </b>
        </div>
        <div className={styles.divspaceY3Parent}>
          <div className={styles.divrevealParent}>
            {leftFaqs.map((item) => (
              <FaqItem
                key={item.num}
                num={item.num}
                question={item.question}
                answer={item.answer}
                isOpen={openNum === item.num}
                onToggle={() => toggle(item.num)}
              />
            ))}
          </div>
          <div className={styles.divrevealParent}>
            {rightFaqs.map((item) => (
              <FaqItem
                key={item.num}
                num={item.num}
                question={item.question}
                answer={item.answer}
                isOpen={openNum === item.num}
                onToggle={() => toggle(item.num)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
