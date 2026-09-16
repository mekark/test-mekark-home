import Image from "next/image";
import styles from "./hero/index.module.css";

export default function LogisticsHeroBanner() {
  return (
    <div className={styles.automationHeroBanner}>
      <Image
        className={styles.heroBackgroundIcon}
        src="/images/industries/automation/hero-background.webp"
        width={1920}
        height={900}
        sizes="100vw"
        alt="Automation manufacturing facility with robotic assembly line"
        priority
      />
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <h1 className={styles.leadingTitle}>
          Leading Automation Manufacturing Facility
          <br />
          Construction Company in South India
        </h1>
        <div className={styles.highlightWrapper}>
          <h2 className={styles.highlight}>
            Smart Factories, Robotics Plants &amp; Industry 4.0-Ready
            Infrastructure by Mekark
          </h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            Mekark builds turnkey automation and robotics manufacturing
            plants, control panel assembly units, and Industry 4.0-ready
            smart factories across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala. Engineered for precision, uptime, and
            future scalability.
          </div>
        </div>
        <a href="/#enquiry" className={styles.cta}>
          <div className={styles.ctaText}>Get a Free Quote</div>
          <div className={styles.ctaIcon}>
            <Image
              src="/images/industries/automation/arrow-right.svg"
              alt=""
              fill
              className={styles.ctaIconImg}
              sizes="20px"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
