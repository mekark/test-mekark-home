"use client";

import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const steps = [
  {
    icon: "/images/services/tensile/frame171/lucide_map-pinned.svg",
    title: "Consultation and Site Study",
    body: "Knowledge about your site, span, loading, and design considerations",
  },
  {
    icon: "/images/services/tensile/frame171/lucide_drafting-compass.svg",
    title: "Membrane Design and Approval",
    body: "Tension analysis and wind loading analysis through STAAD.Pro/ETABS, provided to you for your approval",
  },
  {
    icon: "/images/services/tensile/frame171/lucide_factory.svg",
    title: "In-house Fabrication",
    body: "Membrane fabrication and framework fabrication carried out under strict quality control measures",
  },
  {
    icon: "/images/services/tensile/frame171/lucide_construction.svg",
    title: "Site Erection and Tensioning",
    body: "Fast and safety-compliant erection process at site with membrane tensioning",
  },
  {
    icon: "/images/services/tensile/frame171/lucide_handshake.svg",
    title: "Handover and Support",
    body: "Handover process and post-project support",
  },
] as const;

export default function Frame171() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-12 font-manrope text-[#111] sm:px-8 sm:py-16 lg:px-[107px] lg:py-[107px]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] sm:h-[280px] lg:h-[390px]">
        <Image
          className="h-full w-full object-cover object-bottom opacity-95"
          src="/images/services/tensile/frame171/grid-bg.webp"
          width={1918}
          height={391}
          sizes="100vw"
          alt="Decorative grid background"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1413px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Tensile Structure Project"
          steps={steps}
          arrowSrc="/images/services/tensile/frame171/connector-line.svg"
          scaledCanvas
        />
      </div>
    </section>
  );
}
