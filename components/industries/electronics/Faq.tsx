"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";

const faqs = [
  {
    num: "01",
    question:
      "What is a turnkey electronics manufacturing facility and how is it different from a regular industrial shed?",
    answer:
      "A turnkey electronics facility integrates structural steel, civil works, ESD-safe flooring, clean rooms, HVAC, and MEP into one coordinated build engineered around production quality and yield, not just floor space.",
  },
  {
    num: "02",
    question:
      "What should I look for in an electronics manufacturing facility construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with clean rooms and ESD-safe environments, MEP integration under one contract, and a track record of on-time delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    num: "03",
    question:
      "How long does it take to construct an electronics manufacturing plant in South India?",
    answer:
      "Mekark's in-house process typically delivers an electronics facility in 12–20 weeks from design approval, up to 30–40% faster than conventional construction.",
  },
  {
    num: "04",
    question:
      "How much does it cost to build an electronics factory or clean room in South India?",
    answer:
      "Costs vary by cleanliness classification, utility load, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    num: "05",
    question:
      "Do you provide turnkey EPC solutions for electronics facilities?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC electronics facility construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    num: "06",
    question:
      "Can Mekark design and build clean rooms for semiconductor or precision assembly?",
    answer:
      "Yes. We design and build clean rooms to the required cleanliness classification for semiconductor, component, and precision electronics assembly, fully integrated with the wider facility.",
  },
  {
    num: "07",
    question:
      "Can existing electronics facilities be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer facility expansion and upgrade services, reconfiguring cleanroom zones, ESD flooring, and utility capacity to extend usable production life.",
  },
  {
    num: "08",
    question:
      "Which parts of South India does Mekark execute electronics facility projects in?",
    answer:
      "Mekark executes electronics manufacturing facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Sriperumbudur, Oragadam, Hosur, Coimbatore, Bengaluru, and Hyderabad.",
  },
  {
    num: "09",
    question:
      "What industries does Mekark's electronics facility construction serve?",
    answer:
      "We serve electronics component manufacturing, semiconductor and precision assembly, consumer electronics, automotive electronics, telecom equipment, and contract electronics manufacturing (EMS/ODM).",
  },
  {
    num: "10",
    question:
      "Are Mekark's electronics facilities ISO-certified and engineering-compliant?",
    answer:
      "Yes. Every facility is designed using STAAD Pro, TEKLA, and Autodesk, and delivered to ISO-certified quality and safety standards.",
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
            src="/images/industries/logistics/faq/faq-chevron.svg"
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
            <span className={styles.faqTitleLine}>Frequently Asked </span>
            <span className={styles.faqTitleLine}>Questions</span>
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
