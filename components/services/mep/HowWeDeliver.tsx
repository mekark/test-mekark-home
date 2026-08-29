import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Design",
    body: "Load calculations and system drawings built around your plant layout and process requirements, reviewed with you before procurement begins.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
    iconClass: "size-full max-w-none",
    showArrow: true,
  },
  {
    step: "02",
    title: "Procurement",
    body: "Detailed engineering using STAAD.Pro/ETABS/Tekla, shared for your sign-off",
    icon: "/images/services/mep/how-we-deliver/icon-compass.svg",
    iconClass: "absolute inset-[12.5%] size-auto",
    showArrow: true,
  },
  {
    step: "03",
    title: "Installation",
    body: "HVAC, electrical, plumbing, fire, and mechanical works executed in parallel by in-house crews, reducing the sequencing delays that come from coordinating separate subcontractors.",
    icon: "/images/services/mep/how-we-deliver/icon-factory.svg",
    iconClass: "size-full max-w-none",
    showArrow: true,
  },
  {
    step: "04",
    title: "Testing & Commissioning",
    body: "Fast, safety-compliant on-site assembly",
    icon: "/images/services/mep/how-we-deliver/icon-hardhat.svg",
    iconClass: "absolute inset-[16.67%_8.33%_20.83%_8.33%] size-auto",
    showArrow: true,
  },
  {
    step: "05",
    title: "Handover & Support",
    body: "Inspections, as-built documentation, and after-project maintenance support, so your facilities team has everything needed to operate the systems from day one.",
    icon: "/images/services/mep/how-we-deliver/icon-handshake.svg",
    iconClass: "absolute inset-[12.5%_8.33%_12%_8.33%] size-auto",
    showArrow: false,
  },
] as const;

function StepIcon({
  icon,
  iconClass,
  size = "md",
}: {
  icon: string;
  iconClass: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "size-14" : "size-[106.7px]";
  const iconWrap = size === "sm" ? "size-7" : "size-10";

  return (
    <div
      className={`relative flex ${box} shrink-0 items-center justify-center rounded-[18px] bg-lavenderblush`}
    >
      <div className={`relative overflow-hidden ${iconWrap}`}>
        <Image
          className={iconClass}
          src={icon}
          width={40}
          height={40}
          alt=""
        />
      </div>
    </div>
  );
}

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

      <div className="relative z-[1] mx-auto flex max-w-[1920px] flex-col items-center gap-10 px-5 py-14 sm:px-8 md:gap-[53px] md:px-16 lg:px-[107px] lg:py-[107px]">
        <div className="flex max-w-[690px] flex-col items-center gap-3 text-center">
          <span className="text-[12px] font-semibold tracking-[0.18em] text-red uppercase font-montserrat xl:hidden">
            Our process
          </span>
          <b className="text-[32px] leading-[1.15] tracking-[-1.33px] sm:text-[42px] lg:text-[53.33px] lg:leading-[65.33px]">
            How We Deliver Your Project
          </b>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative w-full max-w-[560px] xl:hidden">
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={item.title} className="relative flex gap-4 pb-9 last:pb-0 sm:gap-5 sm:pb-10">
                <div className="relative flex w-14 shrink-0 justify-center sm:w-16">
                  {!isLast ? (
                    <span
                      className="absolute top-14 bottom-[-36px] left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,#cc102066_0%,#cc102033_60%,transparent_100%)] sm:bottom-[-40px]"
                      aria-hidden
                    />
                  ) : null}
                  <StepIcon icon={item.icon} iconClass={item.iconClass} size="sm" />
                </div>

                <div className="min-w-0 flex-1 pt-1.5">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="font-montserrat text-[13px] font-bold tracking-[0.08em] text-red">
                      {item.step}
                    </span>
                    <h3 className="font-montserrat text-[18px] leading-snug font-bold text-darkslategray sm:text-num-18_67">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-[22px] text-dimgray font-montserrat sm:text-num-16 sm:leading-[21.33px]">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Desktop: horizontal process row */}
        <div className="hidden w-full grid-cols-5 gap-6 xl:grid">
          {steps.map((step) => (
            <div key={step.title} className="relative flex flex-col gap-5">
              <div className="relative flex items-center gap-4">
                <StepIcon icon={step.icon} iconClass={step.iconClass} />
                {step.showArrow ? (
                  <Image
                    className="h-5 w-[66.7px]"
                    src="/images/services/mep/how-we-deliver/arrow.svg"
                    width={67}
                    height={20}
                    alt=""
                  />
                ) : null}
              </div>

              <div>
                <b className="block text-num-18_67 leading-[26px] text-darkslategray font-montserrat">
                  {step.title}
                </b>
                <p className="mt-2 text-num-16 leading-[21.33px] text-dimgray font-montserrat">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
