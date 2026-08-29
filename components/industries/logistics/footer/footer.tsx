import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const Footer: NextPage = () => {
  	return (
    		<div className={styles.frameParent}>
      			<Image className={styles.backgroundImage} src="/images/industries/logistics/footer/footer-background.png" fill sizes="100vw" alt="" />
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
          					<a href="#enquiry" className={styles.cta}>
            						<b className={styles.requestAQuote}>Request a Quote</b>
            						<div className={styles.component4}>
              							<Image className={styles.vectorIcon} src="/images/industries/logistics/footer/arrow-icon.svg" width={25} height={25} sizes="100vw" alt="" />
            						</div>
          					</a>
        				</div>
      			</div>
    		</div>
  	);
};

export default Footer;
