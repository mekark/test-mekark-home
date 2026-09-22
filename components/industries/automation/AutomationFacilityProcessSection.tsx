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
          <li key={step.number} className={styles.mobileStepItem}>
            <div className={styles.mobileStep}>
              <div className={styles.mobileStepNumber}>{step.number}</div>
              <div className={styles.mobileStepContent}>
                <h3 className={styles.mobileStepTitle}>{step.title}</h3>
                <p className={styles.mobileStepDescription}>{step.description}</p>
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
