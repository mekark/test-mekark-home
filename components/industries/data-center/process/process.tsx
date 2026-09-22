import Image from "next/image";
import styles from "./index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your uptime tier, power density, cooling architecture, and redundancy requirements before design begins.",
    descriptionLines: [
      "Understanding your uptime tier, power density,",
      "cooling architecture, and redundancy",
      "requirements before design begins.",
    ],
    descClass: styles.geotechnicalAssessmentRegul,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, cooling architecture, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
    descriptionLines: [
      "Structural layout, electrical zoning, cooling",
      "architecture, and MEP coordination planned into",
      "a build-ready engineering package.",
    ],
    descClass: styles.structuralDesignLoad,
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and modular data hall components fabricated to exact specs.",
    descriptionLines: [
      "Precision manufacturing at our Tamil Nadu plants,",
      "with structural steel, cladding, and modular",
      "data hall components fabricated to exact specs.",
    ],
    descClass: styles.precisionManufacturingAt,
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "Raised flooring, steel framing, precision cooling, power infrastructure, and fire suppression executed with precision sequencing for a go-live-ready base.",
    descriptionLines: [
      "Raised flooring, steel framing, precision cooling,",
      "power infrastructure, and fire suppression",
      "executed for a go-live-ready base.",
    ],
    descClass: styles.geotechnicalAssessmentRegul2,
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, redundancy validation, and final commissioning completed; your data center handed over operations-ready.",
    descriptionLines: [
      "Testing, redundancy validation, and final",
      "commissioning completed; your data center",
      "handed over operations-ready.",
    ],
    descClass: styles.snagListClearance,
  },
] as const;

const Process = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/data-center/process/grid-background.webp"
          fill
          sizes="100vw"
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          <span className={styles.processTitleLine}>Our Data Center Project </span>
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
                  <div className={step.descClass}>{step.description}</div>
                </div>
              </div>
              {index < STEPS.length - 1 ? (
                <Image
                  className={styles.frameChild}
                  src="/images/industries/data-center/process/process-arrow.svg"
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
