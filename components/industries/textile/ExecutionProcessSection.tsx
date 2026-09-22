import Image from "next/image";
import styles from "./ExecutionProcessSection.module.css";

const STEPS = [
  {
    number: "01",
    title: "Free Consultation & Site Study",
    description:
      "Our textile construction expert reviews your machinery layout and statutory requirements before any drawing is made.",
    descriptionLines: [
      "Our textile construction expert reviews",
      "your machinery layout and statutory",
      "requirements before any drawing is made.",
    ],
    descClass: styles.geotechnicalAssessmentRegul,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural design, architectural drawings, MEP layouts, and detailed BOQ tailored to your operation.",
    descriptionLines: [
      "Structural design, architectural drawings,",
      "MEP layouts, and detailed BOQ tailored",
      "to your operation.",
    ],
    descClass: styles.structuralDesignLoad,
  },
  {
    number: "03",
    title: "Approvals & Permits",
    description:
      "Precision manufacturing at our plant - columns, rafters, purlins, and secondary components fabricated to exact specs.",
    descriptionLines: [
      "Precision manufacturing at our plant -",
      "columns, rafters, purlins, and secondary",
      "components fabricated to exact specs.",
    ],
    descClass: styles.precisionManufacturingAt,
  },
  {
    number: "04",
    title: "Construction & Erection",
    description:
      "Foundation, steel erection, roofing, flooring, and finishing executed by parallel teams for speed.",
    descriptionLines: [
      "Foundation, steel erection, roofing,",
      "flooring, and finishing executed by",
      "parallel teams for speed.",
    ],
    descClass: styles.geotechnicalAssessmentRegul2,
  },
  {
    number: "05",
    title: "Handover & Commissioning",
    description:
      "Testing, punch-list closure, as-built drawings, and warranty documents, ready for machine installation.",
    descriptionLines: [
      "Testing, punch-list closure, as-built",
      "drawings, and warranty documents,",
      "ready for machine installation.",
    ],
    descClass: styles.snagListClearance,
  },
] as const;

export default function ExecutionProcessSection() {
  return (
    <div id="execution-process" className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/textile/execution-process/grid.webp"
          fill
          sizes="100vw"
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          <span className={styles.processTitleLine}>Our Textile Factory </span>
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
                  src="/images/industries/textile/execution-process/arrow.svg"
                  width={66.7}
                  height={19.6}
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
}
