import Image from "next/image";
import styles from "./index.module.css";

const STEPS = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, hygiene classification, cold chain requirements, and expansion plans before design begins.",
    descriptionLines: [
      "Understanding your production line layout,",
      "hygiene classification, cold chain requirements,",
      "and expansion plans before design begins.",
    ],
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
    descriptionLines: [
      "Structural layout, electrical zoning, HVAC,",
      "and MEP coordination planned into a",
      "build-ready package using STAAD Pro, TEKLA, and Autodesk.",
    ],
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and cold storage panels fabricated to exact specs.",
    descriptionLines: [
      "Precision manufacturing at our Tamil Nadu",
      "plants, with structural steel, cladding,",
      "and cold storage panels fabricated to exact specs.",
    ],
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "Food-grade flooring, steel framing, HVAC, cold storage, and utility integration executed with precision sequencing for a compliant, production-ready base.",
    descriptionLines: [
      "Food-grade flooring, steel framing, HVAC,",
      "cold storage, and utility integration executed",
      "with precision sequencing for a compliant base.",
    ],
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, hygiene checks, and final commissioning completed; your food & beverage facility handed over production-ready.",
    descriptionLines: [
      "Testing, hygiene checks, and final",
      "commissioning completed; your food & beverage",
      "facility handed over production-ready.",
    ],
  },
] as const;

const Process = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/food-and-beverage/process/grid-background.webp"
          fill
          sizes="100vw"
          alt="Decorative grid background"
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          <span className={styles.processTitleLine}>
            Our Food &amp; Beverage Facility{" "}
          </span>
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
                  src="/images/industries/logistics/process/process-arrow.svg"
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
};

export default Process;
