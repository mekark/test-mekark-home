"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const faqs = [
  {
    num: "01",
    question:
      "What is a turnkey pharmaceutical manufacturing facility and how is it different from a regular industrial shed?",
    answer:
      "A turnkey pharma facility integrates structural steel, civil works, cleanroom construction, cold storage, HVAC, and MEP into one coordinated build engineered around contamination control and regulatory compliance, not just floor space.",
  },
  {
    num: "02",
    question:
      "What should I look for in a pharma plant construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with GMP/WHO-GMP-compliant cleanroom construction, MEP integration under one contract, and a track record of on-time, audit-ready delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    num: "03",
    question:
      "How long does it take to construct a pharmaceutical manufacturing plant in South India?",
    answer:
      "Mekark's in-house process typically delivers a pharma facility in 12–20 weeks from design approval, up to 30–40% faster than conventional construction.",
  },
  {
    num: "04",
    question:
      "How much does it cost to build a pharmaceutical plant or cleanroom facility in South India?",
    answer:
      "Costs vary by cleanroom classification, regulatory pathway, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    num: "05",
    question:
      "Do you provide turnkey EPC solutions for pharmaceutical facilities?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC pharmaceutical facility construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    num: "06",
    question:
      "Can Mekark design and build cleanrooms for sterile or API manufacturing?",
    answer:
      "Yes. We design and build ISO-classified cleanrooms and validated HVAC systems for sterile injectable, API, and biologics manufacturing, fully integrated with the wider facility.",
  },
  {
    num: "07",
    question:
      "Can existing pharmaceutical facilities be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer facility expansion and upgrade services, reconfiguring cleanroom zones, HVAC, and cold storage capacity to extend usable production life.",
  },
  {
    num: "08",
    question:
      "Which parts of South India does Mekark execute pharma facility projects in?",
    answer:
      "Mekark executes pharmaceutical manufacturing facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi.",
  },
  {
    num: "09",
    question:
      "What industries does Mekark's pharmaceutical facility construction serve?",
    answer:
      "We serve API and bulk drug manufacturing, sterile injectable and ophthalmic manufacturing, oral solid dosage manufacturing, biologics and vaccine manufacturing, nutraceutical formulation, and contract manufacturing (CDMO/CMO).",
  },
  {
    num: "10",
    question:
      "Are Mekark's pharmaceutical facilities GMP, WHO-GMP, and USFDA compliance-ready?",
    answer:
      "Yes. Every facility is designed using STAAD Pro, TEKLA, and Autodesk, and delivered to GMP, WHO-GMP, and USFDA-aligned hygiene, contamination control, and safety standards.",
  },
];

const leftFaqs = faqs.slice(0, 5);
const rightFaqs = faqs.slice(5);

type FaqItemProps = {
  num: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem = ({ num, question, answer, isOpen, onToggle }: FaqItemProps) => (
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
          src="/images/industries/pharma/faq/faq-chevron.svg"
          width={17}
          height={17}
          sizes="100vw"
          alt="Expand section"
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

const FAQ = () => {
  const [openNum, setOpenNum] = useState<string | null>("01");

  const toggle = (num: string) => {
    setOpenNum((current) => (current === num ? null : num));
  };

  return (
    <div className={styles.faq}>
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
    </div>
  );
};

export default FAQ;
