import Image from "next/image";
import styles from "./index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, cleanroom classification, regulatory pathway, and expansion plans before design begins.",
    descriptionLines: [
      "Understanding your production line layout,",
      "cleanroom classification, regulatory pathway,",
      "and expansion plans before design begins.",
    ],
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready, GMP-aligned engineering package using STAAD Pro, TEKLA, and Autodesk.",
    descriptionLines: [
      "Structural layout, electrical zoning, HVAC,",
      "and MEP coordination planned into a GMP-",
      "aligned package using STAAD Pro, TEKLA, and Autodesk.",
    ],
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and cleanroom panels fabricated to exact specs.",
    descriptionLines: [
      "Precision manufacturing at our Tamil Nadu",
      "plants, with structural steel, cladding,",
      "and cleanroom panels fabricated to exact specs.",
    ],
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "Cleanroom flooring, steel framing, HVAC, purified water systems, and utility integration executed with precision sequencing for a validation-ready base.",
    descriptionLines: [
      "Cleanroom flooring, steel framing, HVAC,",
      "purified water systems, and utility integration",
      "executed for a validation-ready base.",
    ],
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, qualification support (DQ/IQ/OQ), and final commissioning completed; your pharmaceutical facility handed over audit-ready.",
    descriptionLines: [
      "Testing, qualification support (DQ/IQ/OQ),",
      "and final commissioning completed; your",
      "pharmaceutical facility handed over audit-ready.",
    ],
  },
] as const;

const Process = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/pharma/process/grid-background.webp"
          fill
          sizes="100vw"
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          <span className={styles.processTitleLine}>Our Pharma Facility </span>
          <span className={styles.processTitleLine}>
            Project Execution Process
          </span>
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
                  src="/images/industries/pharma/process/process-arrow.svg"
                  width={67}
                  height={20}
                  sizes="100vw"
                  alt="Arrow icon"
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
                <p
                  className={
                    index === 0 || index === 3
                      ? `${styles.mobileStepDescription} ${styles.mobileStepDescriptionWrap}`
                      : styles.mobileStepDescription
                  }
                >
                  {index === 0 || index === 3
                    ? step.description
                    : step.descriptionLines.map((line) => (
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
