import Image from "next/image";
import styles from "./FooterCta.module.css";

export default function FooterCta() {
  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/footer/footer-bg.png"
        fill
        sizes="100vw"
        alt="Textile factory floor"
        priority
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={styles.readyToStart}>
                Ready to Build Your Textile Factory?
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
                Only a limited number of new textile construction projects are
                onboarded each quarter. Tell us your requirements and our
                specialist will prepare a project estimate.
              </div>
            </div>
          </div>
          <a href="/#enquiry" className={styles.cta}>
            <b className={styles.requestAQuote}>
              Request Free Project Estimate
            </b>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon}
                src="/images/industries/textile/footer/cta-arrow.svg"
                width={25}
                height={25}
                sizes="100vw"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
