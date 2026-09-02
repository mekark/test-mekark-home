import Image from "next/image";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";

const steps = [
  {
    title: "Site Assessment",
    body: "Our engineers visit your facility, review electricity bills, and assess roof or land area.",
    icon: "/images/services/mep/how-we-deliver/icon-compass.svg",
  },
  {
    title: "System Design and Approval",
    body: "Custom solar design shared for your review and sign-off before work begins.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
  },
  {
    title: "Supply and Procurement",
    body: "High-quality panels, inverters, and mounting structures sourced and delivered.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
  },
  {
    title: "Installation and Commissioning",
    body: "On-site installation with full testing and performance verification.",
    icon: "/images/services/mep/how-we-deliver/icon-hardhat.svg",
  },
  {
    title: "Handover and AMC Support",
    body: "Final documentation, handover, and optional Annual Maintenance Contract.",
    icon: "/images/services/mep/how-we-deliver/icon-handshake.svg",
  },
] as const;

export default function SolarHowWeDeliver() {
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

      <div className="relative z-[1] mx-auto flex max-w-[1920px] flex-col items-center px-5 py-14 sm:px-8 md:px-16 lg:px-[107px] lg:py-[107px] xl:px-20 xl:py-[65px] 2xl:px-[107px] 2xl:py-[107px]">
        <HowWeDeliverSteps
          title="How We Deliver Your Solar Project"
          steps={steps}
          arrowSrc="/images/services/mep/how-we-deliver/arrow.svg"
          desktopFrom="xl"
        />
      </div>
    </section>
  );
}
