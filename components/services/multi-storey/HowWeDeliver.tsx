"use client";

import GridBackground from "@/components/services/multi-storey/GridBackground";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const deliverySteps = [
  {
    title: "Site Analysis & Soil Testing",
    body: "Feasibility studies for your project.",
    icon: "/images/services/multi-storey/frame212/icons/site-analysis.svg",
  },
  {
    title: "Project Planning & Design",
    body: "Structural design, floor planning & cost estimate for approval.",
    icon: "/images/services/multi-storey/frame212/icons/planning.svg",
  },
  {
    title: "Permitting & Approvals",
    body: "Obtaining permits & approvals for you.",
    icon: "/images/services/multi-storey/frame212/icons/permits.svg",
  },
  {
    title: "Steel Fabrication & Erection",
    body: "Factory-fabricated steel erected on site, inspected at every floor.",
    icon: "/images/services/multi-storey/frame212/icons/fabrication.svg",
  },
  {
    title: "MEP & Finishes",
    body: "Mechanical, electrical & plumbing systems, with high-quality finishes.",
    icon: "/images/services/multi-storey/frame212/icons/wrench.svg",
  },
  {
    title: "Handover & Support",
    body: "Inspections, documentation & after-project support.",
    icon: "/images/services/multi-storey/frame212/icons/handover.svg",
  },
] as const;

export default function HowWeDeliver() {
  return (
    <section className="relative overflow-visible bg-white px-5 pt-14 pb-14 text-gray-100 sm:px-8 sm:pt-20 sm:pb-16 lg:px-10 lg:pt-[107px] lg:pb-[80px] xl:px-20 xl:pt-[65px] xl:pb-[65px] 2xl:px-10 2xl:pt-[107px] 2xl:pb-[80px]">
      <GridBackground position="bottom" />

      <div className="relative z-10 mx-auto max-w-[1732px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Project"
          steps={deliverySteps}
          desktopCols={6}
        />
      </div>
    </section>
  );
}
