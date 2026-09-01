import type { NextPage } from 'next';
import Image from "next/image";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";
import SolarSolutionsSection from "@/components/services/solar/SolarSolutionsSection";
import styles from './index.module.css';

const Cta: NextPage = () => {
	return (
		<div className={styles.frameParent}>
			<SolarSolutionsSection />
			<div className={styles.sectionContainer}>
				<div className={styles.section2}>
					<ServiceMidCtaLine className="absolute left-[117px] top-[42.67px] z-[2] hidden lg:block" />
					<div className={styles.frameParent6}>
						<ServiceMidCtaCopy className="w-full gap-0 !pl-4 sm:!pl-5 lg:!pl-0 [&>span:first-child]:lg:hidden">
							<ServiceMidCtaTitle
								line1="Planning a Solar Power Plant for"
								line2="Your Factory or Warehouse?"
								size="medium"
								className="!max-w-full"
							/>
							<p className={`mt-4 ${styles.getAFree}`}>
								Get a free consultation and system estimate from
								<br /> Mekark&apos;s commercial solar engineering team.
							</p>
							<a href="/#enquiry" className={`mt-6 ${styles.cta}`}>
								<span className={styles.requestAFree}>Request a Free Quote</span>
								<div className={styles.component4}>
									<Image className={styles.vectorIcon} width={12} height={9} sizes="100vw" src="/images/services/solar/CTA/component-4.svg" alt="" />
								</div>
							</a>
						</ServiceMidCtaCopy>
					</div>
					<div className={styles.layer2CopyCta1} />
					<div className={styles.sectionChild2} />
					<Image className={styles.solarCta1} width={786} height={415} sizes="100vw" src="/images/services/solar/CTA/solar-cta-1.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Cta;
