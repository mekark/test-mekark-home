import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const steps = [
  {
    title: "Design",
    body: "Load calculations and system drawings built around your plant layout and process requirements, reviewed with you before procurement begins.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
  },
  {
    title: "Procurement",
    body: "Detailed engineering using STAAD.Pro/ETABS/Tekla, shared for your sign-off",
    icon: "/images/services/mep/how-we-deliver/icon-compass.svg",
  },
  {
    title: "Installation",
    body: "HVAC, electrical, plumbing, fire, and mechanical works executed in parallel by in-house crews, reducing the sequencing delays that come from coordinating separate subcontractors.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
  },
  {
    title: "Testing & Commissioning",
    body: "Fast, safety-compliant on-site assembly",
    icon: "/images/services/mep/how-we-deliver/icon-hardhat.svg",
  },
  {
    title: "Handover & Support",
    body: "Inspections, as-built documentation, and after-project maintenance support, so your facilities team has everything needed to operate the systems from day one.",
    icon: "/images/services/mep/how-we-deliver/icon-handshake.svg",
  },
] as const;

export default function HowWeDeliver() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-gray">
      <div className="absolute bottom-0 left-0 flex h-[280px] w-full items-center justify-center sm:h-[390px]">
        <div className="-scale-y-100 flex-none">
          <Image
            className="h-[280px] w-[1917.8px] max-w-none object-cover opacity-[0.15] sm:h-[390.7px]"
            src="/images/services/mep/how-we-deliver/grid.png"
            width={1918}
            height={391}
            sizes="100vw"
            alt=""
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto flex max-w-[1920px] flex-col items-center px-5 py-14 sm:px-8 md:px-16 lg:px-[107px] lg:py-[107px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Project"
          steps={steps}
          arrowSrc="/images/services/mep/how-we-deliver/arrow.svg"
          desktopFrom="xl"
        />
      </div>
    </section>
  );
}
