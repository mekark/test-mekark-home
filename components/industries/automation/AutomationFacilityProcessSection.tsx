import Image from "next/image";
import styles from "./process/index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, ESD/vibration control needs, and automation roadmap before design begins.",
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
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and insulated panels fabricated to exact specs.",
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "ESD flooring, steel framing, HVAC, structured cabling, and utility integration executed with precision sequencing for a production-ready base.",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, precision checks, and final commissioning completed; your automation facility handed over production-ready.",
  },
] as const;

export default function AutomationFacilityProcessSection() {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/automation/automation-facilities/grid-bg.webp"
          fill
          sizes="100vw"
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.headingWrapper}>
        <b className={styles.heading}>
          Our Automation Facility Project Execution Process
        </b>
      </div>

      <div className={styles.desktopProcess}>
        <div className={styles.frameParent}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.stepGroup}>
              <div className={styles.parent}>
                <div className={styles.number}>{step.number}</div>
                <div className={styles.textGroup}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.description}>{step.description}</div>
                </div>
              </div>
              {index < STEPS.length - 1 ? (
                <Image
                  className={styles.arrow}
                  src="/images/industries/automation/automation-facilities/process-arrow.svg"
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
