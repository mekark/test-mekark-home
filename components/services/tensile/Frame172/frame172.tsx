'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const logos = [
	{ src: "/images/services/tensile/frame172/tata.png", alt: "Tata", width: 200, height: 156 },
	{ src: "/images/services/tensile/frame172/bosch.png", alt: "Bosch", width: 200, height: 200 },
	{ src: "/images/services/tensile/frame172/hyundai.png", alt: "Hyundai", width: 200, height: 200 },
	{ src: "/images/services/tensile/frame172/voltas.png", alt: "Voltas", width: 200, height: 200 },
	{ src: "/images/services/tensile/frame172/jk.png", alt: "JK", width: 220, height: 114 },
	{ src: "/images/services/tensile/frame172/tvs.png", alt: "TVS", width: 200, height: 200 },
	{ src: "/images/services/tensile/frame172/client-logo.png", alt: "Client", width: 180, height: 180 },
] as const;

const Frame172: NextPage = () => {
	return (
		<section className={styles.section}>
			<div className={styles.card}>
				<h2 className={styles.title}>
					<span className={styles.titleMuted}>Trusted Across</span>
					<br />
					<span className={styles.titleAccent}>Commercial, Industrial &amp; Public Sectors</span>
				</h2>

				<div className={styles.logoGrid}>
					{logos.map((logo) => (
						<div key={logo.alt} className={styles.logoCard}>
							<Image
								className={styles.logo}
								src={logo.src}
								width={logo.width}
								height={logo.height}
								sizes="(max-width: 640px) 40vw, (max-width: 1100px) 22vw, 12vw"
								alt={logo.alt}
							/>
						</div>
					))}
				</div>

				<div className={styles.tagline}>
					<span className={styles.line} aria-hidden />
					<div className={styles.taglineInner}>
						<Image
							className={styles.shield}
							src="/images/services/tensile/frame172/shield-tick.svg"
							width={32}
							height={32}
							alt=""
						/>
						<span className={styles.taglineText}>Built on Trust. Delivering Excellence.</span>
					</div>
					<span className={styles.line} aria-hidden />
				</div>
			</div>
		</section>
	);
};

export default Frame172;
