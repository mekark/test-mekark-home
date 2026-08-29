'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const features = [
	{
		num: "01",
		title: "Turnkey Execution:",
		body: "From membrane design to fabrication to installation, a single point of accountability for your entire tensile structure project.",
	},
	{
		num: "02",
		title: "Premium Fabric Sourcing:",
		body: "PTFE and ETFE membranes selected for UV resistance, fire retardancy, and long-term weatherproofing.",
	},
	{
		num: "03",
		title: "In-House Engineering Team:",
		body: "X+ engineers using ETABS, AutoCAD, and STAAD.Pro for wind-load and tension analysis on every tensile canopy and dome design.",
	},
	{
		num: "04",
		title: "ISO & Green Certified:",
		body: "Consistent quality, safety, and sustainability compliance across every tensile fabric project.",
	},
	{
		num: "05",
		title: "18+ Years of Industry Experience:",
		body: "A proven track record across tensile car parking sheds, event canopies, sports facility roofing, and architectural entrance structures.",
	},
	{
		num: "06",
		title: "Faster, Lightweight Builds:",
		body: "Tensile structures typically install faster than conventional roofing, with less structural steel and lower foundation loads.",
	},
] as const;

const FeatureItem = ({
	num,
	title,
	body,
}: {
	num: string;
	title: string;
	body: string;
}) => (
	<div className={styles.feature}>
		<span className={styles.featureNum}>{num}</span>
		<span className={styles.featureDivider} aria-hidden />
		<div className={styles.featureText}>
			<b className={styles.featureTitle}>{title}</b>
			<p className={styles.featureBody}>{body}</p>
		</div>
	</div>
);

const WhyChooseMekark: NextPage = () => {
	const left = [features[0], features[2], features[4]];
	const right = [features[1], features[3], features[5]];

	return (
		<section className={styles.section}>
			<div className={styles.bg} aria-hidden>
				<Image
					className={styles.bgImage}
					src="/images/services/tensile/why/background.png"
					width={1920}
					height={1032}
					sizes="100vw"
					alt=""
				/>
			</div>

			<header className={styles.header}>
				<h2 className={styles.title}>
					<span className={styles.titleMuted}>Why Clients </span>
					<span className={styles.titleAccent}>Choose Mekark</span>
					<span className={styles.titleMuted}> for Tensile Structures</span>
				</h2>
				<p className={styles.subtitle}>
					As a trusted tensile structure contractor serving South India, Mekark brings in-house engineering and fabrication capability that most tensile contractors outsource.
				</p>
			</header>

			<div className={styles.content}>
				<div className={styles.leftColumn}>
					{left.map((item) => (
						<FeatureItem key={item.num} {...item} />
					))}
				</div>

				<div className={styles.media}>
					<Image
						className={styles.watermark}
						src="/images/services/tensile/why/logo-watermark.png"
						width={587}
						height={534}
						sizes="(max-width: 900px) 70vw, 40vw"
						alt=""
					/>
					<Image
						className={styles.product}
						src="/images/services/tensile/why/product.png"
						width={795}
						height={903}
						sizes="(max-width: 900px) 80vw, 45vw"
						alt="Mekark tensile structures engineer"
						priority
					/>
				</div>

				<div className={styles.rightColumn}>
					{right.map((item) => (
						<FeatureItem key={item.num} {...item} />
					))}
				</div>

				<div className={styles.mobileFeatures}>
					{features.map((item) => (
						<FeatureItem key={`m-${item.num}`} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseMekark;
