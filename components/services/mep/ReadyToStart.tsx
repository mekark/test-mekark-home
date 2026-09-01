import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import styles from "./ReadyToStart.module.css";

export default function ReadyToStart() {
  return (
    <section
      className={styles.section}
      aria-label="Ready to Start Your Industrial MEP Project?"
    >
      <div className={styles.ellipseParent} aria-hidden>
        <Image
          className={styles.circleShadow}
          src="/images/services/mep/project-cta/circle-shadow.svg"
          width={135}
          height={135}
          alt=""
        />
        <Image
          className={styles.phoneIcon}
          src="/images/services/mep/project-cta/phone-red.svg"
          width={35}
          height={35}
          alt=""
        />
      </div>

      <div className={styles.frameParent}>
        <div className={styles.copy}>
          <h2 className={styles.title}>
            Ready to Start Your Industrial MEP Project?
          </h2>
          <p className={styles.subtitle}>
            Talk to Mekark&apos;s MEP expert today
          </p>
        </div>

        <div className={styles.ctaParent}>
          <a href="/#enquiry" className={styles.cta}>
            <span className={styles.ctaLabel}>Get a Free Quote</span>
            <Image
              className={styles.arrowIcon}
              src="/images/services/mep/project-cta/arrow-red.svg"
              width={14}
              height={12}
              alt=""
            />
          </a>
          <a href={PHONE_HREF} className={styles.ctaSecondary}>
            <span className={styles.ctaLabel}>Call us</span>
            <Image
              className={styles.callIcon}
              src="/images/services/mep/project-cta/phone-white.svg"
              width={18}
              height={18}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}
