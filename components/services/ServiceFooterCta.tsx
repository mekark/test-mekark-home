import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import styles from "./ServiceFooterCta.module.css";

type ServiceFooterCtaProps = {
  title: string;
  subtitle: string;
  id?: string;
  quoteLabel?: string;
  quoteHref?: string;
  onQuoteClick?: () => void;
  callLabel?: string;
  compactCopy?: boolean;
  /** Fixed 1920px Figma sizes — use inside DesignScale (PEB). */
  scaledCanvas?: boolean;
  /** Keep subtitle on one line at Mac / XL (1201px+). */
  subtitleSingleLine?: boolean;
};

export function ServiceFooterCta({
  title,
  subtitle,
  id,
  quoteLabel = "Get a Free Quote",
  quoteHref = "/enquiry/form",
  onQuoteClick,
  callLabel = "Call us",
  compactCopy = false,
  scaledCanvas = false,
  subtitleSingleLine = false,
}: ServiceFooterCtaProps) {
  const quoteContent = (
    <>
      <b className={styles.getAFree}>{quoteLabel}</b>
      <div className={styles.component4}>
        <Image
          className={styles.vectorIcon2}
          width={12}
          height={9}
          sizes="100vw"
          src="/images/services/solar/footer/Component 4.svg"
          alt="Arrow icon"
        />
      </div>
    </>
  );

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
            alt="Phone icon"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div
          className={
            compactCopy
              ? `${styles.readyToStartYourCommercialParent} ${styles.readyToStartYourCommercialParentCompact}${
                  subtitleSingleLine ? ` ${styles.copyBlockSingleLineSubtitle}` : ""
                }`
              : `${styles.readyToStartYourCommercialParent}${
                  subtitleSingleLine ? ` ${styles.copyBlockSingleLineSubtitle}` : ""
                }`
          }
        >
          <h2 className={styles.readyToStart}>{title}</h2>
          <p
            className={`${styles.talkToMekarks}${
              subtitleSingleLine ? ` ${styles.talkToMekarksSingleLine}` : ""
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div className={styles.ctaParent}>
          {onQuoteClick ? (
            <button type="button" onClick={onQuoteClick} className={styles.cta}>
              {quoteContent}
            </button>
          ) : (
            <a href={quoteHref} className={styles.cta}>
              {quoteContent}
            </a>
          )}
          <a href={PHONE_HREF} className={styles.cta2}>
            <b className={styles.getAFree}>{callLabel}</b>
            <div className={styles.component12}>
              <Image
                className={styles.vectorIcon3}
                width={16}
                height={16}
                sizes="100vw"
                src="/images/services/solar/footer/Component 1.svg"
                alt="FAQ expand icon"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
