"use client";

import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import styles from "./index.module.css";

export default function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.iconWrap} aria-hidden>
          <span className={styles.iconCircle}>
            <Image
              className={styles.phoneIcon}
              src="/images/services/tensile/section/phone-red.svg"
              width={32}
              height={32}
              alt=""
            />
          </span>
        </div>

        <div className={styles.copy}>
          <h2 className={styles.title}>Ready to Start Your Tensile Structure Project?</h2>
          <p className={styles.subtitle}>
            Talk to Mekark&apos;s team today for a free consultation and project quote.
          </p>
        </div>

        <div className={styles.actions}>
          <a href="#enquiry" className={styles.ctaPrimary}>
            <span>Get a Free Quote</span>
            <span className={styles.ctaIcon} aria-hidden>
              <Image
                src="/images/services/tensile/section/arrow.svg"
                width={12}
                height={9}
                alt=""
              />
            </span>
          </a>
          <a href={PHONE_HREF} className={styles.ctaSecondary}>
            <span>Call us</span>
            <span className={styles.ctaIcon} aria-hidden>
              <Image
                src="/images/services/tensile/section/phone.svg"
                width={16}
                height={16}
                alt=""
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
