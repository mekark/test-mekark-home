"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./index.module.css";

const Footer = () => {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.frameParent}>
      <div className={styles.heroBgWrapper}>
        <img
          className={styles.backgroundImage}
          src="/images/industries/data-center/footer/footer.webp"
          alt="Data center facility footer background"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={`${styles.readyToStart} ${styles.footerDesktop}`}>
                Ready to Start Your Data Center Construction?
              </b>
              <b className={`${styles.readyToStart} ${styles.footerMobile}`}>
                <span className={styles.footerTitleLine}>
                  Ready to Start Your{" "}
                </span>
                <span className={styles.footerTitleLine}>
                  Data Center Construction?
                </span>
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={`${styles.tellUsYour} ${styles.footerDesktop}`}>
                <span className={styles.descLine}>
                  Tell us your uptime tier, power density, location, and timeline.
                  As a leading data center construction company in South
                </span>
                <span className={styles.descLine}>
                  India, Mekark will have a preliminary design and estimate ready
                  within 24 hours.
                </span>
              </div>
              <div className={`${styles.tellUsYour} ${styles.footerMobile}`}>
                Tell us your uptime tier, power density, location, and timeline.
                As a leading data center construction company in South India,
                Mekark will have a preliminary design and estimate ready within
                24 hours.
              </div>
            </div>
          </div>
          <button type="button" onClick={openEnquiry} className={styles.cta}>
            <span className={styles.requestAQuote}>Get a Free Quote</span>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon}
                src="/images/industries/data-center/footer/arrow-icon.svg"
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
