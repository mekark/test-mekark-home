import Image from "next/image";
import styles from "./index.module.css";

const Footer = () => {
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
              <b className={styles.readyToStart}>
                Ready to Start Your Food &amp; Beverage Manufacturing Facility
                Construction?
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
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
            </div>
          </div>
          <a href="/#enquiry" className={styles.cta}>
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
