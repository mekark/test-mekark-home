import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.textileHeroBanner}>
      <div className={styles.heroBgWrapper}>
        <Image
          className={styles.heroBgImage}
          src="/images/industries/textile/hero/herobg.webp"
          width={1920}
          height={900}
          sizes="100vw"
          alt="Textile mill interior with yarn spinning machinery"
          priority
        />
      </div>
      <div className={styles.heroGradient} aria-hidden />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Leading Textile Mill &amp; Factory Building Contractor in South India
        </h1>
        <div className={styles.description}>
          Mekark is South India&apos;s trusted textile factory building
          contractor, constructing spinning mills, weaving sheds, garment
          factories, and dyeing &amp; processing plants with ISO-certified PEB
          and civil construction, backed by 18+ years of experience and 200+
          delivered projects.
        </div>
        <a href="/#enquiry" className={styles.cta}>
          <div className={styles.ctaText}>Get a Free Quote</div>
          <div className={styles.ctaIconWrap}>
            <Image
              className={styles.ctaIcon}
              src="/images/industries/textile/hero/arrow.svg"
              width={18}
              height={18}
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
