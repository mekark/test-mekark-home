"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const faqs = [
  {
    num: "01",
    question:
      "What is a turnkey food & beverage manufacturing facility and how is it different from a regular industrial shed?",
    answer:
      "A turnkey food & beverage facility integrates structural steel, civil works, food-grade flooring, cold storage, HVAC, and MEP into one coordinated build engineered around hygiene and product quality, not just floor space.",
  },
  {
    num: "02",
    question:
      "What should I look for in a food processing plant construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with FSSAI/HACCP-compliant flooring and cold chain infrastructure, MEP integration under one contract, and a track record of on-time delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    num: "03",
    question:
      "How long does it take to construct a food or beverage manufacturing plant in South India?",
    answer:
      "Mekark's in-house process typically delivers a food & beverage facility in 12–20 weeks from design approval, up to 30–40% faster than conventional construction.",
  },
  {
    num: "04",
    question:
      "How much does it cost to build a food processing plant or cold storage facility in South India?",
    answer:
      "Costs vary by hygiene classification, cold chain requirements, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    num: "05",
    question:
      "Do you provide turnkey EPC solutions for food & beverage facilities?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC food & beverage facility construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    num: "06",
    question:
      "Can Mekark design and build cold storage for dairy, meat, or seafood processing?",
    answer:
      "Yes. We design and build PUF-insulated cold storage and blast freezing systems for dairy, meat, seafood, and beverage products, fully integrated with the wider facility.",
  },
  {
    num: "07",
    question:
      "Can existing food processing facilities be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer facility expansion and upgrade services, reconfiguring hygiene zones, food-grade flooring, and cold storage capacity to extend usable production life.",
  },
  {
    num: "08",
    question:
      "Which parts of South India does Mekark execute food & beverage facility projects in?",
    answer:
      "Mekark executes food & beverage manufacturing facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi.",
  },
  {
    num: "09",
    question:
      "What industries does Mekark's food & beverage facility construction serve?",
    answer:
      "We serve dairy processing, beverage bottling and packaging, bakery and confectionery, meat and seafood processing, fruit and vegetable processing, and contract food manufacturing (co-packing).",
  },
  {
    num: "10",
    question:
      "Are Mekark's food & beverage facilities FSSAI-compliant and engineering-certified?",
    answer:
      "Yes. Every facility is designed using STAAD Pro, TEKLA, and Autodesk, and delivered to FSSAI/HACCP-compliant hygiene and safety standards.",
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
          src="/images/industries/food-and-beverage/faq/faq-chevron.svg"
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
