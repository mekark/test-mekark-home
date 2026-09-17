import Image from "next/image";
import styles from "./FooterCta.module.css";

export default function FooterCta() {
  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/industries/electronics/quote-cta/background.webp"
        fill
        sizes="100vw"
        alt="Electronics facility quote section background"
        priority={false}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={styles.readyToStart}>
                Ready to Start Your Electronics Manufacturing Facility
                Construction?
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
                <span className={styles.descLine}>
                  Tell us your process requirements: cleanroom class, production
                  size, location, and timeline. As a leading electronics
                  manufacturing facility
                </span>
                <span className={styles.descLine}>
                  construction company and trusted cleanroom builder in South
                  India, Mekark will have a preliminary design and estimate
                  ready within 24 hours.
                </span>
              </div>
            </div>
          </div>
          <a href="/#enquiry" className={styles.cta}>
            <b className={styles.requestAQuote}>Get a Free Quote</b>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon}
                src="/images/industries/electronics/quote-cta/arrow.svg"
                width={25}
                height={25}
                sizes="100vw"
                alt="Arrow icon"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
