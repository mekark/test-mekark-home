"use client";

import type { NextPage } from 'next';
import { useState } from 'react';
import Image from "next/image";
import styles from './index.module.css';

const faqs = [
  	{
    		num: '01',
    		question: 'What is a pre-engineered warehouse building and how does it work?',
    		answer: 'A pre-engineered building is a steel structure designed and fabricated off-site, then assembled on-site with high precision, reducing construction time and material wastage.',
  	},
  	{
    		num: '02',
    		question: 'Who is the best pre-engineered warehouse manufacturer in South India?',
    		answer: "Mekark is one of South India's most trusted pre-engineered warehouse building manufacturers, designing and erecting PEB warehouses, distribution centres, and cold storage structures across the region.",
  	},
  	{
    		num: '03',
    		question: 'How long does it take to construct a pre-engineered warehouse in South India?',
    		answer: "Mekark's in-house process delivers a standard warehouse in around x-x days, up to 50% quicker than conventional construction.",
  	},
  	{
    		num: '04',
    		question: 'How much does it cost to build a factory warehouse shed in South India?',
    		answer: 'Costs vary by span, height, and other factors. Get a free budget estimate within 48 hours of your consultation.',
  	},
  	{
    		num: '05',
    		question: 'Do you provide turnkey EPC solutions for warehouses?',
    		answer: 'Yes. Mekark is one of the few turnkey EPC warehouse solution providers in South India, offering design, manufacturing, and erection under one roof.',
  	},
  	{
    		num: '06',
    		question: 'Can Mekark design and erect cold storage steel structures?',
    		answer: 'Yes. We design and erect thermally efficient cold storage structures for food, pharmaceutical, and agricultural industries, with full panel integration and refrigeration system installation.',
  	},
  	{
    		num: '07',
    		question: 'Can existing warehouses be reconfigured or expanded instead of rebuilt?',
    		answer: 'Yes. We offer warehouse modification and expansion services, reconfiguring layouts and structural capacity to extend usable life.',
  	},
  	{
    		num: '08',
    		question: 'Which parts of South India does Mekark execute projects in?',
    		answer: 'Mekark executes pre-engineered warehouse and logistics facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi.',
  	},
  	{
    		num: '09',
    		question: 'What industries does Mekark service?',
    		answer: 'We serve FMCG, automotive, pharma, e-commerce, cold chain, 3PL, textiles, and chemical industries through customised pre-engineered warehouses.',
  	},
  	{
    		num: '10',
    		question: 'Is the construction of the warehouse at Mekark IS compliant?',
    		answer: 'Yes. Our structures are designed to IS 800:2007, IS 875, and IS 1893 for seismic zones II-V, and can meet NBC fire rating standards.',
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
  	<div className={`${styles.divreveal} ${isOpen ? styles.divrevealOpen : ''}`}>
    		<button
      			type="button"
      			className={styles.buttonradix}
      			aria-expanded={isOpen}
      			onClick={onToggle}
    		>
      			<div className={styles.spanflex}>
        				<b className={styles.b}>{num}</b>
        				<div className={styles.question}>{question}</div>
      			</div>
      			<div className={`${styles.component1} ${isOpen ? styles.component1Open : ''}`}>
        				<Image className={styles.vectorIcon} src="/images/industries/logistics/faq/faq-chevron.svg" width={17} height={17} sizes="100vw" alt="Expand section" />
      			</div>
    		</button>
    		<div className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ''}`}>
      			<div className={styles.answerInner}>
        				<p className={styles.answer}>{answer}</p>
      			</div>
    		</div>
  	</div>
);

const FAQ: NextPage = () => {
  	const [openNum, setOpenNum] = useState<string | null>("01");

  	const toggle = (num: string) => {
    		setOpenNum((current) => (current === num ? null : num));
  	};

  	return (
    		<div className={styles.faq}>
      			<div className={styles.frameParent}>
        				<div className={styles.frequentlyAskedQuestionsWrapper}>
          					<b className={styles.frequentlyAskedQuestions}>Frequently Asked Questions</b>
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
