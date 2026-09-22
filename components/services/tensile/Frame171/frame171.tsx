"use client";

import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";
import { MOBILE_PROCESS_TYPOGRAPHY } from "@/components/services/serviceMobileCivilTemplate";

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
    <section className="relative w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-[#111]">
      <div className="absolute bottom-0 left-0 flex h-[280px] w-full items-center justify-center sm:h-[390px]">
        <div className="-scale-y-100 flex-none">
          <Image
            className="h-[280px] w-[1917.8px] max-w-none object-cover opacity-[0.15] sm:h-[390.7px]"
            src="/images/services/tensile/frame171/grid-bg.webp"
            width={1918}
            height={391}
            sizes="100vw"
            alt="Decorative grid background"
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto flex max-w-[1920px] flex-col items-center overflow-visible px-5 py-14 sm:px-8 md:px-16 lg:px-[107px] lg:py-[107px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Tensile Structure Project"
          steps={steps}
          arrowSrc="/images/services/tensile/frame171/connector-line.svg"
          desktopFrom="lg"
          scaledCanvas
          mobileTypography={MOBILE_PROCESS_TYPOGRAPHY}
        />
      </div>
    </section>
  );
}
