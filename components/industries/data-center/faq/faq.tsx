"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const faqs = [
  {
    num: "01",
    question:
      "What is a turnkey data center construction project and how is it different from a regular industrial shed?",
    answer:
      "A turnkey data center integrates structural steel, civil works, raised flooring, precision cooling, power infrastructure, and MEP into one coordinated build engineered around uptime and redundancy, not just floor space.",
  },
  {
    num: "02",
    question: "What should I look for in a data center construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with Tier III/IV-aligned power and cooling infrastructure, MEP integration under one contract, and a track record of on-time delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    num: "03",
    question: "How long does it take to construct a data center in South India?",
    answer:
      "Mekark's in-house process typically delivers a data center shell and MEP fit-out in 16–24 weeks from design approval, up to 30–40% faster than conventional construction, with modular options further reducing timelines.",
  },
  {
    num: "04",
    question: "How much does it cost to build a data center in South India?",
    answer:
      "Costs vary by uptime tier, power density, cooling architecture, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    num: "05",
    question: "Do you provide turnkey EPC solutions for data centers?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC data center construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    num: "06",
    question: "Can Mekark build Tier III or Tier IV compliant data centers?",
    answer:
      "Yes. We design and build power and cooling redundancy architecture aligned to Tier III and Tier IV uptime standards, fully integrated with the wider facility.",
  },
  {
    num: "07",
    question:
      "Can existing data centers be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer data center retrofit and capacity expansion services, reconfiguring cooling, power, and white space to support higher density loads.",
  },
  {
    num: "08",
    question:
      "Which parts of South India does Mekark execute data center projects in?",
    answer:
      "Mekark executes data center construction projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi.",
  },
  {
    num: "09",
    question: "What types of data center facilities does Mekark construct?",
    answer:
      "We build hyperscale data centers, colocation facilities, edge and modular data centers, enterprise and captive data centers, and disaster recovery sites.",
  },
  {
    num: "10",
    question:
      "Does Mekark offer modular or prefabricated data center construction?",
    answer:
      "Yes. We fabricate modular data hall units at our Tamil Nadu plants for faster deployment and phased capacity scaling, designed using STAAD Pro, TEKLA, and Autodesk.",
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
    </div>
  );
};

export default FAQ;
