import Image from "next/image";
import Link from "next/link";
import styles from "./AutomationQuoteCtaSection.module.css";

export default function AutomationQuoteCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="automation-quote-title">
      <Image
        className={styles.backgroundImage}
        src="/images/industries/automation/automation-quote-cta/factory-background.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
      />
      <div className={styles.overlay} aria-hidden />

      <div className={styles.content}>
        <div className={styles.copy}>
          <h2 id="automation-quote-title" className={styles.heading}>
            Ready to Start Your Automation Manufacturing Facility Construction?
          </h2>
          <p className={styles.description}>
            Tell us your process requirements: precision tolerances, production
            size, location, and timeline. As a leading automation manufacturing
            facility construction company and trusted smart factory builder in
            South India, Mekark will have a preliminary design and estimate
            ready within 24 hours.
          </p>
        </div>

        <Link href="/#enquiry" className={styles.button}>
          <span>Get a Free Quote</span>
          <Image
            src="/images/industries/automation/automation-quote-cta/arrow-right.svg"
            alt=""
            width={25}
            height={25}
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
