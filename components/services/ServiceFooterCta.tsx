import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import styles from "./ServiceFooterCta.module.css";

type ServiceFooterCtaProps = {
  title: string;
  subtitle: string;
  id?: string;
  quoteLabel?: string;
  callLabel?: string;
  compactCopy?: boolean;
  /** Fixed 1920px Figma sizes — use inside DesignScale (PEB). */
  scaledCanvas?: boolean;
};

export function ServiceFooterCta({
  title,
  subtitle,
  id,
  quoteLabel = "Get a Free Quote",
  callLabel = "Call us",
  compactCopy = false,
  scaledCanvas = false,
}: ServiceFooterCtaProps) {
  return (
    <section
      id={id}
      className={`${styles.section}${scaledCanvas ? ` ${styles.scaled}` : ""}`}
      aria-label={title}
    >      <div className={styles.ellipseParent}>
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
        <div
          className={
            compactCopy
              ? `${styles.readyToStartYourCommercialParent} ${styles.readyToStartYourCommercialParentCompact}`
              : styles.readyToStartYourCommercialParent
          }
        >
          <h2 className={styles.readyToStart}>{title}</h2>
          <p className={styles.talkToMekarks}>{subtitle}</p>
        </div>
        <div className={styles.ctaParent}>
          <a href="/#enquiry" className={styles.cta}>
            <b className={styles.getAFree}>{quoteLabel}</b>
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
            <b className={styles.getAFree}>{callLabel}</b>
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
    </section>
  );
}
