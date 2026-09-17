import Image from "next/image";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/industries/pharma/footer/ed0f0baf5e66363731524bd1df3ed6c45dc08233.webp"
        fill
        sizes="100vw"
        alt="Pharmaceutical manufacturing facility by Mekark"
        priority={false}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={styles.readyToStart}>
                Ready to Start Your Pharmaceutical Manufacturing Facility
                Construction?
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
                <span className={styles.descLine}>
                  Tell us your process requirements: cleanroom classification,
                  production size, location, and timeline. As a leading
                  pharmaceutical manufacturing facility
                </span>
                <span className={styles.descLine}>
                  construction company and trusted cleanroom builder in South
                  India, Mekark will have a preliminary design and estimate ready
                  within 24 hours.
                </span>
              </div>
            </div>
          </div>
          <a href="/#enquiry" className={styles.cta}>
            <span className={styles.requestAQuote}>Get a Free Quote</span>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon}
                src="/images/industries/pharma/footer/arrow-icon.svg"
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
};

export default Footer;
