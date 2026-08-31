"use client";

import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const steps = [
  {
    icon: "/images/services/civil/process/compass.svg",
    title: "Site Analysis, Planning & Design",
    body: "Conducting feasibility studies, soil testing, structural design, and cost estimation for project approval.",
  },
  {
    icon: "/images/services/civil/process/file-check.svg",
    title: "Permitting & Approvals",
    body: "Obtaining permits & approvals for you.",
  },
  {
    icon: "/images/services/civil/process/building.svg",
    title: "Foundation & Structure Construction",
    body: "Construction using RCC with quality inspections throughout.",
  },
  {
    icon: "/images/services/civil/process/wrench.svg",
    title: "MEP & Finishes",
    body: "Installation of mechanical, electrical & plumbing systems with high-quality finishes.",
  },
  {
    icon: "/images/services/civil/process/clipboard.svg",
    title: "Handover & Support",
    body: "Inspections, documentation & after-project support.",
  },
] as const;

export default function ConstructionProcess() {
  return (
    <section
      id="process"
      className="relative h-auto w-full shrink-0 overflow-hidden bg-white px-5 py-16 font-manrope text-gray sm:px-8 sm:py-20 lg:px-[107px] lg:py-[107px]"
      aria-label="How we deliver your civil construction project"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] opacity-[0.15] sm:h-[280px] lg:h-[390.7px]"
        aria-hidden
      >
        <div className="relative h-full w-full -scale-y-100">
          <Image
            src="/images/services/civil/process/grid.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1706px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Civil Construction Project"
          steps={steps}
          arrowSrc="/images/services/civil/process/arrow.svg"
          desktopFrom="lg"
        />
      </div>
    </section>
  );
}
