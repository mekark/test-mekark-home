"use client";

import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const steps = [
  {
    title: "Site Assessment",
    body: "Our engineers visit your facility, review electricity bills, and assess roof or land area.",
  },
  {
    title: "System Design and Approval",
    body: "Custom solar design shared for your review and sign-off before work begins.",
  },
  {
    title: "Supply and Procurement",
    body: "High-quality panels, inverters, and mounting structures sourced and delivered.",
  },
  {
    title: "Installation and Commissioning",
    body: "On-site installation with full testing and performance verification.",
  },
  {
    title: "Handover and AMC Support",
    body: "Final documentation, handover, and optional Annual Maintenance Contract.",
  },
] as const;

export default function SolarHowWeDeliver() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-[107px] lg:py-[107px]">
      <Image
        className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-full object-cover opacity-15 sm:h-[280px] lg:h-[390px]"
        src="/images/services/solar/CTA/grid-1-2.png"
        width={1918}
        height={391}
        sizes="100vw"
        alt=""
      />

      <div className="relative z-10 mx-auto max-w-[1413px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Solar Project"
          steps={steps}
          arrowSrc="/images/services/solar/CTA/line-2.svg"
        />
      </div>
    </section>
  );
}
