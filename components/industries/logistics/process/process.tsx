"use client";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Site Evaluation & Feasibility Study",
    description:
      "Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility.",
    descriptionLines: [
      "Geotechnical assessment, regulatory",
      "review, and budget feasibility for your",
      "logistics facility.",
    ],
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural design, load calculations, layout planning, and MEP coordination, all handled in-house.",
    descriptionLines: [
      "Structural design, load calculations,",
      "layout planning, and MEP coordination,",
      "all handled in-house.",
    ],
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our plant - columns, rafters, purlins, and secondary components fabricated to exact specs.",
    descriptionLines: [
      "Precision manufacturing at our plant -",
      "columns, rafters, purlins, and secondary",
      "components fabricated to exact specs.",
    ],
  },
  {
    number: "04",
    title: "On-Site Erection",
    description:
      "Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility.",
    descriptionLines: [
      "Geotechnical assessment, regulatory",
      "review, and budget feasibility for your",
      "logistics facility.",
    ],
  },
  {
    number: "05",
    title: "Handover & After-Sales",
    description:
      "Snag list clearance, documentation handover, and post-handover support for your warehouse.",
    descriptionLines: [
      "Snag list clearance, documentation",
      "handover, and post-handover support",
      "for your warehouse.",
    ],
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
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          <span className={styles.processTitleLine}>Our Warehouse Project </span>
          <span className={styles.processTitleLine}>Execution Process</span>
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
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <ol className={styles.mobileProcess}>
        {STEPS.map((step, index) => (
          <li key={step.number} className={styles.mobileStepItem}>
            <div className={styles.mobileStep}>
              <div className={styles.mobileStepNumber}>{step.number}</div>
              <div className={styles.mobileStepContent}>
                <h3 className={styles.mobileStepTitle}>{step.title}</h3>
                <p className={styles.mobileStepDescription}>
                  {step.descriptionLines.map((line) => (
                    <span key={line} className={styles.mobileDescLine}>
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            {index < STEPS.length - 1 ? (
              <div className={styles.mobileStepArrow} aria-hidden="true">
                <svg
                  width="24"
                  height="36"
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V26"
                    stroke="#8E8E8E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 20L12 29L19 20"
                    stroke="#8E8E8E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Process;
