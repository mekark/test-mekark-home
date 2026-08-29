import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import styles from "./index.module.css";

export default function SolarFooterCta() {
  return (
    <div className={styles.section}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.component1}>
          <Image
            className={styles.vectorIcon}
            width={32}
            height={32}
            sizes="100vw"
            src="/images/services/solar/footer/phone.svg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.readyToStartYourCommercialParent}>
          <div className={styles.readyToStart}>
            Ready to Start Your Commercial Solar Project?
          </div>
          <div className={styles.talkToMekarks}>
            Talk to Mekark&apos;s solar team today for a free consultation and
            project quote.
          </div>
        </div>
        <div className={styles.ctaParent}>
          <a href="#enquiry" className={styles.cta}>
            <b className={styles.getAFree}>Get a Free Quote</b>
            <div className={styles.component4}>
              <Image
                className={styles.vectorIcon2}
                width={12}
                height={9}
                sizes="100vw"
                src="/images/services/solar/footer/Component 4.svg"
                alt=""
              />
            </div>
          </a>
          <a href={PHONE_HREF} className={styles.cta2}>
            <b className={styles.getAFree}>Call us</b>
            <div className={styles.component12}>
              <Image
                className={styles.vectorIcon3}
                width={16}
                height={16}
                sizes="100vw"
                src="/images/services/solar/footer/Component 1.svg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
