import Image from "next/image";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  width?: number;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, ESD/vibration control needs, and automation roadmap before design begins.",
    width: 274,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
    width: 244,
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and insulated panels fabricated to exact specs.",
    width: 257,
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "ESD flooring, steel framing, HVAC, structured cabling, and utility integration executed with precision sequencing for a production-ready base.",
    width: 266,
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, precision checks, and final commissioning completed; your automation facility handed over production-ready.",
    width: 245,
  },
];

function ProcessArrow({ className }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 ${className ?? ""}`}
      style={{ width: 67, height: 20 }}
      aria-hidden
    >
      <Image
        src="/images/industries/automation/automation-facilities/process-arrow.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

function ProcessStepCard({ number, title, description, width }: ProcessStep) {
  return (
    <article
      className="flex flex-col gap-[14px]"
      style={{ maxWidth: width ? `${width}px` : undefined }}
    >
      <p className="font-[family-name:var(--font-manrope)] text-[40px] font-medium leading-none text-[#f01d23]">
        {number}
      </p>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold leading-normal text-[#3c3938]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-manrope)] text-base leading-[21px] text-[#555]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AutomationFacilityProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden opacity-[0.05]"
        style={{ height: 349 }}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/industries/automation/automation-facilities/grid-bg.png"
          alt=""
          className="h-full w-full scale-y-[-1] object-cover"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1757px] flex-col gap-16 lg:gap-[64px]">
        <header className="mx-auto max-w-[1232px] text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,53px)] font-bold leading-[1.22] tracking-[-0.025em] text-[#111]">
            Our Automation Facility Project Execution Process
          </h2>
        </header>

        <div className="hidden items-start gap-7 xl:flex">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-7">
              <ProcessStepCard {...step} />
              {index < steps.length - 1 ? <ProcessArrow /> : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 xl:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-start gap-6">
              <ProcessStepCard {...step} />
              {index < steps.length - 1 ? (
                <ProcessArrow className="rotate-90 self-center" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
