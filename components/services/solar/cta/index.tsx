import type { NextPage } from 'next';
import Image from "next/image";
import SolarSolutionsSection from "@/components/services/solar/SolarSolutionsSection";
import styles from './index.module.css';

const Cta: NextPage = () => {
	return (
		<div className={styles.frameParent}>
			<SolarSolutionsSection />
			<div className={styles.sectionContainer}>
				<div className={styles.section2}>
					<div className={styles.frameParent6}>
						<div className={styles.planningASolarPowerPlantFParent}>
							<div className={styles.planningASolarContainer}>
								<span className={styles.trustedAcrossIndustrialContainer2}>
									<span className={styles.planningASolar}>Solar Power Plant for</span>
									<br />
									<span className={styles.yourFactoryOr}>Your Factory or Warehouse?</span>
								</span>
							</div>
							<div className={styles.getAFree}>
								Get a free consultation and system estimate from
								<br /> Mekark&apos;s commercial solar engineering team.
							</div>
						</div>
						<a href="/#enquiry" className={styles.cta}>
							<b className={styles.requestAFree}>Request a Free Quote</b>
							<div className={styles.component4}>
								<Image className={styles.vectorIcon} width={12} height={9} sizes="100vw" src="/images/services/solar/CTA/component-4.svg" alt="" />
							</div>
						</a>
					</div>
					<div className={styles.sectionInner} />
					<div className={styles.layer2CopyCta1} />
					<div className={styles.sectionChild2} />
					<Image className={styles.solarCta1} width={786} height={415} sizes="100vw" src="/images/services/solar/CTA/solar-cta-1.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Cta;
