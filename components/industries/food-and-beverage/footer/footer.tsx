"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./index.module.css";

const Footer = () => {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/industries/food-and-beverage/footer/footer-bg.webp"
        fill
        sizes="100vw"
        alt="Food and beverage facility footer background"
        priority={false}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={`${styles.readyToStart} ${styles.footerDesktop}`}>
                Ready to Start Your Food &amp; Beverage Manufacturing Facility
                Construction?
              </b>
              <b className={`${styles.readyToStart} ${styles.footerMobile}`}>
                <span className={styles.footerTitleLine}>
                  Ready to Start Your Food{" "}
                </span>
                <span className={styles.footerTitleLine}>
                  &amp; Beverage Manufacturing{" "}
                </span>
                <span className={styles.footerTitleLine}>
                  Facility Construction?
                </span>
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={`${styles.tellUsYour} ${styles.footerDesktop}`}>
                <span className={styles.descLine}>
                  Tell us your process requirements: hygiene classification,
                  production size, location, and timeline. As a leading food
                  &amp; beverage manufacturing facility
                </span>
                <span className={styles.descLine}>
                  construction company and trusted cold storage builder in South
                  India, Mekark will have a preliminary design and estimate ready
                  within 24 hours.
                </span>
              </div>
              <div className={`${styles.tellUsYour} ${styles.footerMobile}`}>
                Tell us your process requirements: hygiene classification,
                production size, location, and timeline. As a leading food
                &amp; beverage manufacturing facility construction company and
                trusted cold storage builder in South India, Mekark will have a
                preliminary design and estimate ready within 24 hours.
              </div>
            </div>
          </div>
          <button type="button" onClick={openEnquiry} className={styles.cta}>
            <b className={styles.requestAQuote}>Get a Free Quote</b>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon}
                src="/images/industries/food-and-beverage/footer/arrow-icon.svg"
                width={25}
                height={25}
                sizes="100vw"
                alt="Arrow icon"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
