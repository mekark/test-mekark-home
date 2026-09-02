"use client";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const features = [
  {
    num: "01",
    title: "Turnkey Project Implementation:",
    body: "Single point of responsibility from design to commissioning, so you're never stuck mediating between separate HVAC, electrical, plumbing, or fire-fighting vendors when schedules slip or scopes overlap.",
  },
  {
    num: "02",
    title: "Established Credentials:",
    body: "Over 200+ industrial MEP projects completed, with a 4.7 out of 5 customer rating across factory, warehouse, and manufacturing plant clients.",
  },
  {
    num: "03",
    title: "In-House MEP Engineers:",
    body: "System designs built around real plant loads, not generic templates — every drawing reflects your actual equipment, layout, and process demands.",
  },
  {
    num: "04",
    title: "Exceptional Quality:",
    body: "Independent testing, commissioning checks, and system documentation handed over at project close, so there's a verifiable record of what was built and how it performs.",
  },
  {
    num: "05",
    title: "Safe Execution:",
    body: "Trained crews, documented safety checks, and clear scope-based pricing with no hidden variation orders mid-project.",
  },
  {
    num: "06",
    title: "18+ Years of Experience:",
    body: "From standalone factory HVAC and electrical works to full manufacturing plant MEP contracts spanning multiple systems and phased handovers.",
  },
] as const;

const FeatureItem = ({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) => (
  <div className={styles.feature}>
    <span className={styles.featureNum}>{num}</span>
    <span className={styles.featureDivider} aria-hidden />
    <div className={styles.featureText}>
      <b className={styles.featureTitle}>{title}</b>
      <p className={styles.featureBody}>{body}</p>
    </div>
  </div>
);

const WhyChooseMekark: NextPage = () => {
  const left = [features[0], features[2], features[4]];
  const right = [features[1], features[3], features[5]];

  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden>
        <Image
          className={styles.bgImage}
          src="/images/services/mep/why-choose/site-bg.png"
          width={1920}
          height={1032}
          sizes="100vw"
          alt=""
        />
      </div>

      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleMuted}>Why Industrial Clients </span>
          <span className={styles.titleAccent}>Choose Mekark</span>
        </h2>
        <p className={`${styles.subtitle} service-section-description`}>
          <span>
            Mekark pairs in-house design-build capability with the execution
            discipline
          </span>
          <span>many generic contractors lack.</span>
        </p>
      </header>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          {left.map((item) => (
            <FeatureItem key={item.num} {...item} />
          ))}
        </div>

        <div className={styles.media}>
          <Image
            className={styles.watermark}
            src="/images/arrow.png"
            width={587}
            height={534}
            sizes="(max-width: 900px) 70vw, 40vw"
            alt=""
          />
          <Image
            className={styles.product}
            src="/images/services/mep/why-choose/worker.png"
            width={795}
            height={861}
            sizes="(max-width: 900px) 80vw, 45vw"
            alt="Mekark industrial MEP professional"
            priority
          />
        </div>

        <div className={styles.rightColumn}>
          {right.map((item) => (
            <FeatureItem key={item.num} {...item} />
          ))}
        </div>

        <div className={styles.mobileFeatures}>
          {features.map((item) => (
            <FeatureItem key={`m-${item.num}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMekark;
