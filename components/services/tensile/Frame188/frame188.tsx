'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import styles from './index.module.css';

const FAQS = [
	{
		id: 1,
		q: "What is a tensile structure?",
		a: "A tensile structure is a lightweight construction made of high-strength fabric membrane, such as PTFE or ETFE, stretched over a steel or cable framework and held in place purely by tension. It offers column-free spans, natural light transmission, and faster installation than conventional roofing ideal for car parks, stadiums, and canopies.",
	},
	{
		id: 2,
		q: "How is Mekark different from other tensile structure contractors in South India?",
		a: "Mekark handles design, fabrication, and installation in-house rather than outsourcing membrane cutting or steelwork to third parties. This gives us tighter quality control, faster turnaround, and single-point accountability for your tensile fabric project, wherever it's located across South India.",
	},
	{
		id: 3,
		q: "What is the difference between PTFE and PVC tensile fabric?",
		a: "PTFE (Teflon-coated fibreglass) offers superior UV resistance, self-cleaning properties, and a longer lifespan, making it ideal for permanent structures. PVC-coated polyester is more economical and suited to shorter-term or budget-sensitive installations. Mekark helps you choose the right fabric based on project life, budget, and location.",
	},
	{
		id: 4,
		q: "What industries and applications use tensile structures?",
		a: "Tensile structures are widely used for car parking sheds, stadium and sports facility roofing, mall and hotel entrance canopies, industrial sheds, event venues, and public spaces such as parks and walkways.",
	},
	{
		id: 5,
		q: "How long does a typical tensile structure project take?",
		a: "Timelines vary by span and design complexity, but tensile structures generally install significantly faster than conventional roofing since fabrication happens off-site. A standard car parking shed is typically completed in a few weeks once design is finalised.",
	},
	{
		id: 6,
		q: "What is the expected lifespan of a tensile fabric structure?",
		a: "With quality PTFE or ETFE membrane and proper engineering, tensile structures typically last 15–25+ years, with some permanent PTFE installations lasting longer. Maintenance mainly involves periodic cleaning and re-tensioning to keep the fabric performing well.",
	},
	{
		id: 7,
		q: "Are tensile structures weather-resistant?",
		a: "Yes. Tensile fabrics used by Mekark are UV-stabilized, fire-retardant, and engineered for wind and rain loads specific to your site, making them suitable for the heat, humidity, and monsoon conditions found across South India.",
	},
	{
		id: 8,
		q: "Do you take up projects outside Tamil Nadu?",
		a: "Yes. While our manufacturing facility is based in Chennai, we design, fabricate, and install tensile structures across South India, including Karnataka, Telangana, Andhra Pradesh, and Kerala, with on-site teams deployed to your project location.",
	},
	{
		id: 9,
		q: "Can tensile structures be customised in shape and size?",
		a: "Yes, one of the biggest advantages of tensile architecture is design flexibility. Structures can be engineered as flat canopies, conical, hypar, or dome shapes, and scaled from small parking sheds to large stadium roofs.",
	},
	{
		id: 10,
		q: "Do you provide structural design and drawings, or do we need our own consultant?",
		a: "Our in-house engineering team handles complete tension and wind-load analysis, design, and drawings, so you don't need to source this separately. We're also happy to work alongside your existing architect or consultant.",
	},
] as const;

const Frame188: NextPage = () => {
	const [openId, setOpenId] = useState<number | null>(1);

	const toggle = (id: number) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	const onKeyDown = (id: number) => (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggle(id);
		}
	};

	const left = FAQS.slice(0, 5);
	const right = FAQS.slice(5);

	const renderItem = (item: (typeof FAQS)[number]) => {
		const open = openId === item.id;
		const num = String(item.id).padStart(2, "0");

		return (
			<div key={item.id} className={styles.item}>
				<div
					className={styles.question}
					role="button"
					tabIndex={0}
					aria-expanded={open}
					onClick={() => toggle(item.id)}
					onKeyDown={onKeyDown(item.id)}
				>
					<div className={styles.questionMain}>
						<span className={styles.num}>{num}</span>
						<span className={styles.questionText}>{item.q}</span>
					</div>
					<span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} aria-hidden>
						<Image
							src="/images/services/tensile/frame188/chevron.svg"
							width={22}
							height={11}
							alt="Expand section"
						/>
					</span>
				</div>
				<div className={`${styles.answer} ${open ? styles.answerOpen : ""}`}>
					<div className={styles.answerInner}>
						<p className={styles.answerText}>{item.a}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Frequently Asked Questions About Tensile Structures</h2>

			<div className={styles.columns}>
				<div className={styles.column}>{left.map(renderItem)}</div>
				<div className={styles.column}>{right.map(renderItem)}</div>
			</div>
		</section>
	);
};

export default Frame188;
