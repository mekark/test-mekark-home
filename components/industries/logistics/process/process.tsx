import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Site Evaluation & Feasibility Study",
    description:
      "Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural design, load calculations, layout planning, and MEP coordination, all handled in-house.",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our plant - columns, rafters, purlins, and secondary components fabricated to exact specs.",
  },
  {
    number: "04",
    title: "On-Site Erection",
    description:
      "Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility.",
  },
  {
    number: "05",
    title: "Handover & After-Sales",
    description:
      "Snag list clearance, documentation handover, and post-handover support for your warehouse.",
  },
] as const;

const Process: NextPage = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/logistics/process/grid-background.webp"
          fill
          sizes="100vw"
          alt=""
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          Our Warehouse Project Execution Process
        </b>
      </div>

      <div className={styles.desktopProcess}>
        <div className={styles.frameParent}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.desktopStepGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>{step.number}</div>
                <div className={styles.siteEvaluationFeasibilityParent}>
                  <div className={styles.siteEvaluation}>{step.title}</div>
                  <div className={styles.geotechnicalAssessmentRegul}>
                    {step.description}
                  </div>
                </div>
              </div>
              {index < STEPS.length - 1 ? (
                <Image
                  className={styles.frameChild}
                  src="/images/industries/logistics/process/process-arrow.svg"
                  width={66.7}
                  height={19.6}
                  sizes="100vw"
                  alt=""
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <ol className={styles.mobileProcess}>
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            className={`${styles.mobileStep} ${index < STEPS.length - 1 ? styles.mobileStepWithGap : ""}`}
          >
            <div className={styles.mobileStepBadge}>
              <span className={styles.mobileStepNumber}>{step.number}</span>
            </div>
            <article className={styles.mobileStepCard}>
              <h3 className={styles.mobileStepTitle}>{step.title}</h3>
              <p className={styles.mobileStepDescription}>{step.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Process;
