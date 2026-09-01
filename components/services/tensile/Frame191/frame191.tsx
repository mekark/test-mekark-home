'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import { ServiceMidCtaLine } from "@/components/services/ServiceMidCtaLine";
import styles from './index.module.css';

const Frame191: NextPage = () => {
	return (
		<section className={styles.wrap}>
			<div className={styles.banner}>
				<div className={styles.copy}>
					<ServiceMidCtaLine
						stretch
						className="left-[clamp(20px,3.5vw,56px)] lg:inset-y-auto lg:top-1/2 lg:h-[264px] lg:-translate-y-1/2"
					/>
					<ServiceMidCtaTitle
						line1="Planning a Tensile"
						line2="Roofing or Canopy Project?"
						size="medium"
						className="!max-w-full"
					/>

					<p className={styles.subtitle}>
						Get a free consultation and project estimate from Mekark&apos;s tensile structure engineering team.
					</p>

					<a href="/#enquiry" className={styles.cta}>
						<span className={styles.ctaLabel}>Request a Free Site Assessment</span>
						<span className={styles.ctaIcon} aria-hidden>
							<Image
								src="/images/services/tensile/frame191/arrow.svg"
								width={12}
								height={9}
								alt=""
							/>
						</span>
					</a>
				</div>

				<div className={styles.media}>
					<Image
						className={styles.heroPhoto}
						src="/images/services/tensile/frame191/hero-photo.png"
						width={779}
						height={345}
						sizes="(max-width: 900px) 100vw, 45vw"
						alt="Tensile structure project consultation"
					/>
					<Image
						className={styles.illustration}
						src="/images/services/tensile/frame191/illustration.png"
						width={397}
						height={414}
						sizes="(max-width: 900px) 50vw, 25vw"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Frame191;
