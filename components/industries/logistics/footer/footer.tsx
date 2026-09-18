"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from './index.module.css';


const Footer: NextPage = () => {
  	const { openEnquiry } = useServiceEnquiry();

  	return (
    		<div className={styles.frameParent}>
      			<Image className={styles.backgroundImage} src="/images/industries/logistics/footer/footer-background.webp" fill sizes="100vw" alt="Logistics warehouse facility by Mekark" />
      			<div className={styles.frameWrapper}>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameContainer}>
            						<div className={styles.readyToStartYourLogisticsWrapper}>
              							<b className={styles.readyToStart}>Ready to Start Your Logistics Facility Construction?</b>
            						</div>
            						<div className={styles.tellUsYourRequirementsSpaWrapper}>
              							<div className={styles.tellUsYour}>Tell us your requirements: span, height, location, and timeline. As a leading pre-engineered warehouse manufacturer and trusted distribution centre builder in South India, Mekark will have a preliminary design and estimate ready within 48 hours.</div>
            						</div>
          					</div>
          					<button type="button" onClick={openEnquiry} className={styles.cta}>
            						<b className={styles.requestAQuote}>Get a Free Quote</b>
            						<div className={styles.component4}>
              							<Image className={styles.vectorIcon} src="/images/industries/logistics/footer/arrow-icon.svg" width={25} height={25} sizes="100vw" alt="Arrow icon" />
            						</div>
          					</button>
        				</div>
      			</div>
    		</div>
  	);
};

export default Footer;
