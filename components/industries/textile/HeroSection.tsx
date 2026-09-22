"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { openEnquiry } = useServiceEnquiry();

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
          <span className={styles.titleLine}>Leading Textile Mill &amp; </span>
          <span className={styles.titleLine}>Factory Building </span>
          <span className={styles.titleLine}>Contractor in South </span>
          <span className={styles.titleLine}>India</span>
        </h1>
        <div className={styles.highlight}>
          <h2 className={styles.highlightText}>
            Textile Mill &amp; Factory Structures by Mekark
          </h2>
        </div>
        <div className={styles.description}>
          Mekark is South India&apos;s trusted textile factory building
          contractor, constructing spinning mills, weaving sheds, garment
          factories, and dyeing &amp; processing plants with ISO-certified PEB
          and civil construction, backed by 18+ years of experience and 200+
          delivered projects.
        </div>
        <button type="button" onClick={openEnquiry} className={styles.cta}>
          <div className={styles.ctaText}>Get a Free Quote</div>
          <div className={styles.ctaIconWrap}>
            <Image
              className={styles.ctaIcon}
              src="/images/industries/textile/hero/arrow.svg"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
            />
            <Image
              className={styles.mobileArrowIcon}
              src="/images/mobile/component-4.png"
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
