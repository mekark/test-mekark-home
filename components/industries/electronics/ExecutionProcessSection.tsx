import Image from "next/image";
import styles from "./ExecutionProcessSection.module.css";

const STEPS = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your assembly line layout, cleanroom class, utility requirements, and expansion plans before design begins.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and components fabricated to exact specs.",
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "ESD flooring, steel framing, HVAC, and utility integration executed with precision sequencing for a compliant, production-ready base.",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, safety checks, and final commissioning completed; your electronics facility handed over production-ready.",
  },
] as const;

export default function ExecutionProcessSection() {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/electronics/execution-process/grid.png"
          fill
          sizes="100vw"
          alt=""
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          Our Electronics Facility Project Execution Process
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
                  src="/images/industries/electronics/execution-process/arrow.svg"
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
}
