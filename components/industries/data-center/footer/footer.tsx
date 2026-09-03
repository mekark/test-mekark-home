import Image from "next/image";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.heroBgWrapper}>
        {/* Native img so transform/position CSS applies reliably */}
        <img
          className={styles.backgroundImage}
          src="/images/industries/data-center/footer/footer.png"
          alt=""
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={styles.readyToStart}>
                Ready to Start Your Data Center Construction?
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
                <span className={styles.descLine}>
                  Tell us your uptime tier, power density, location, and timeline.
                  As a leading data center construction company in South
                </span>
                <span className={styles.descLine}>
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
                src="/images/industries/data-center/footer/arrow-icon.svg"
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
};

export default Footer;
