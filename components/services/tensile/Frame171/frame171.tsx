'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const steps = [
	{
		icon: "/images/services/tensile/frame171/lucide_map-pinned.svg",
		title: "Consultation and Site Study",
		body: "Knowledge about your site, span, loading, and design considerations",
	},
	{
		icon: "/images/services/tensile/frame171/lucide_drafting-compass.svg",
		title: "Membrane Design and Approval",
		body: "Tension analysis and wind loading analysis through STAAD.Pro/ETABS, provided to you for your approval",
	},
	{
		icon: "/images/services/tensile/frame171/lucide_factory.svg",
		title: "In-house Fabrication",
		body: "Membrane fabrication and framework fabrication carried out under strict quality control measures",
	},
	{
		icon: "/images/services/tensile/frame171/lucide_construction.svg",
		title: "Site Erection and Tensioning",
		body: "Fast and safety-compliant erection process at site with membrane tensioning",
	},
	{
		icon: "/images/services/tensile/frame171/lucide_handshake.svg",
		title: "Handover and Support",
		body: "Handover process and post-project support",
	},
] as const;

const Frame171: NextPage = () => {
	return (
		<section className={styles.section}>
			<div className={styles.bg} aria-hidden>
				<Image
					className={styles.bgImage}
					src="/images/services/tensile/frame171/grid-bg.png"
					width={1918}
					height={391}
					sizes="100vw"
					alt=""
				/>
			</div>

			<div className={styles.inner}>
				<h2 className={styles.title}>How We Deliver Your Tensile Structure Project</h2>

				<div className={styles.steps}>
					{steps.map((step, index) => (
						<article key={step.title} className={styles.step}>
							<div className={styles.iconWrap}>
								<Image
									className={styles.icon}
									src={step.icon}
									width={40}
									height={40}
									alt=""
								/>
							</div>
							{index < steps.length - 1 && (
								<span className={styles.connector} aria-hidden>
									<Image
										src="/images/services/tensile/frame171/connector-line.svg"
										width={67}
										height={20}
										alt=""
									/>
								</span>
							)}
							<div className={styles.stepText}>
								<h3 className={styles.stepTitle}>{step.title}</h3>
								<p className={styles.stepBody}>{step.body}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Frame171;
