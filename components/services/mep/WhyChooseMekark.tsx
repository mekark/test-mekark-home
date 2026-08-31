import Image from "next/image";

const features = [
  {
    num: "01",
    title: "Turnkey Project Implementation",
    body: "Single point of responsibility from design to commissioning, so you're never stuck mediating between separate HVAC, electrical, plumbing, or fire-fighting vendors when schedules slip or scopes overlap.",
  },
  {
    num: "02",
    title: "Established Credentials",
    body: "Over X industrial MEP projects completed, with a 4.7 out of 5 customer rating across factory, warehouse, and manufacturing plant clients.",
  },
  {
    num: "03",
    title: "In-House MEP Engineers",
    body: "System designs built around real plant loads, not generic templates — every drawing reflects your actual equipment, layout, and process demands.",
  },
  {
    num: "04",
    title: "Exceptional Quality",
    body: "Independent testing, commissioning checks, and system documentation handed over at project close, so there's a verifiable record of what was built and how it performs.",
  },
  {
    num: "05",
    title: "Safe Execution",
    body: "Trained crews, documented safety checks, and clear scope-based pricing with no hidden variation orders mid-project.",
  },
  {
    num: "06",
    title: "18+ Years of Experience",
    body: "From standalone factory HVAC and electrical works to full manufacturing plant MEP contracts spanning multiple systems and phased handovers.",
  },
] as const;

function FeatureItemDesktop({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex w-full items-start gap-3">
      <div className="shrink-0 font-montserrat text-num-80 tracking-num--4 leading-num-97_33 font-black text-[#cc1020]">
        {num}
      </div>
      <div className="mt-3 flex shrink-0 items-stretch">
        <div className="mx-1 w-num-1_3 self-stretch min-h-num-80 bg-[rgba(204,16,32,0.4)]" />
      </div>
      <div className="min-w-0 flex-1 pt-2 text-left">
        <b className="block text-num-18_67 leading-[26px] text-darkslategray">
          {title}:
        </b>
        <p className="mt-2 text-num-16 leading-num-25_33 text-dimgray">{body}</p>
      </div>
    </div>
  );
}

function FeatureItemMobile({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <article className="flex gap-3 text-left">
      <span
        className="mt-1 w-[3px] shrink-0 self-stretch rounded-full bg-red"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2.5">
          <span className="shrink-0 font-montserrat text-[13px] font-bold tracking-[0.08em] text-red">
            {num}
          </span>
          <h3 className="font-manrope text-[16px] leading-snug font-bold text-gray-100">
            {title}
          </h3>
        </div>
        <p className="mt-2 text-[14px] leading-[21px] text-dimgray font-manrope">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function WhyChooseMekark() {
  const leftItems = features.filter((_, i) => i % 2 === 0);
  const rightItems = features.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="relative isolate w-full shrink-0 overflow-hidden text-center font-manrope text-gray-100"
      style={{
        backgroundImage:
          "linear-gradient(269.25deg, #fff, rgba(255, 255, 255, 0)), linear-gradient(#e6e6e6, #e6e6e6)",
      }}
    >
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/services/mep/why-choose/site-bg.png"
        width={1920}
        height={1032}
        sizes="100vw"
        alt=""
      />

      <div className="relative z-[1] mx-auto flex max-w-[1600px] flex-col items-center px-5 py-12 sm:px-8 md:px-12 lg:px-8 lg:py-16">
        <div className="mb-8 max-w-[1260px] lg:mb-12">
          <span className="mb-3 block text-[12px] font-semibold tracking-[0.18em] text-red uppercase font-montserrat lg:hidden">
            Why Mekark
          </span>
          <b className="block text-[32px] leading-[1.15] tracking-[-1.33px] sm:text-[42px] lg:text-[53.33px] lg:leading-[81.6px]">
            <span>Why Industrial Clients </span>
            <span className="text-red">Choose Mekark</span>
          </b>
          <p className="service-section-description mt-4">
            <span>
              Mekark pairs in-house design-build capability with the execution
              discipline
            </span>
            <span>many generic contractors lack.</span>
          </p>
        </div>

        {/* Mobile / tablet */}
        <div className="flex w-full flex-col gap-8 lg:hidden">
          <div className="relative mx-auto flex w-full max-w-[480px] items-end overflow-hidden rounded-[24px] bg-[#dcdcdc]">
            <Image
              className="h-[220px] w-full object-cover object-[center_15%] sm:h-[260px]"
              src="/images/services/mep/why-choose/worker.png"
              width={795}
              height={861}
              sizes="90vw"
              alt="Mekark industrial MEP professional"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.15) 55%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 z-[1] p-5 text-left">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase font-montserrat">
                Built for industrial clients
              </p>
              <p className="mt-1 max-w-[220px] text-[18px] leading-snug font-bold text-white font-manrope">
                Design-build. One team. Clear accountability.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {features.map((item) => (
              <FeatureItemMobile key={item.num} {...item} />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden w-full grid-cols-[1fr_minmax(280px,42%)_1fr] items-start gap-6 xl:gap-10 lg:grid">
          <div className="flex flex-col gap-[60px]">
            {leftItems.map((item) => (
              <FeatureItemDesktop key={item.num} {...item} />
            ))}
          </div>

          <div className="relative mx-auto w-full self-end lg:translate-y-16 lg:-mb-10 xl:translate-y-24">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
              <Image
                src="/images/services/mep/why-choose/logo-watermark.png"
                width={587}
                height={534}
                sizes="40vw"
                alt=""
                className="h-auto w-[80%] object-contain"
              />
            </div>
            <Image
              className="relative z-[1] mx-auto h-auto w-full max-w-[520px] -translate-y-8 object-contain object-bottom xl:max-w-[640px] xl:-translate-y-12"
              src="/images/services/mep/why-choose/worker.png"
              width={795}
              height={861}
              sizes="40vw"
              alt="Mekark industrial MEP professional"
              priority
            />
          </div>

          <div className="flex flex-col gap-[60px]">
            {rightItems.map((item) => (
              <FeatureItemDesktop key={item.num} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
