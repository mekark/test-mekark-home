import Image from "next/image";

function EndToEndIllustration({ className }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-[986/658] w-full max-w-[640px] lg:max-w-none ${className ?? ""}`}
    >
      <Image
        className="absolute bottom-0 left-0 h-[40%] w-[90%] object-cover opacity-60 lg:opacity-100"
        src="/images/services/mep/end-to-end/floor-grid.png"
        width={1147}
        height={341}
        sizes="(max-width: 1024px) 90vw, 50vw"
        alt=""
      />
      <Image
        className="absolute top-0 right-0 hidden h-[70%] w-[45%] object-cover lg:block"
        src="/images/services/mep/end-to-end/layer-14.png"
        width={602}
        height={752}
        sizes="30vw"
        alt=""
      />
      <Image
        className="relative z-[1] h-full w-full object-contain object-center"
        src="/images/services/mep/end-to-end/mep-cutaway.png"
        width={986}
        height={658}
        sizes="(max-width: 1024px) 90vw, 50vw"
        alt="MEP systems cutaway illustration"
        priority
      />
    </div>
  );
}

export default function EndToEnd() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-gainsboro text-left font-manrope font-normal text-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(269.25deg, #fff, rgba(255, 255, 255, 0))",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-[1920px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:px-16 lg:grid-cols-2 lg:gap-12 lg:px-[112px] lg:py-[85px] xl:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8">
          <b className="font-manrope text-[32px] leading-[1.15] tracking-[-1.33px] text-gray sm:text-[42px] sm:leading-[52px] lg:text-[53.33px] lg:leading-[58.67px]">
            <span className="leading-[inherit]">
              End-to-End MEP Design, Build & Commissioning,{" "}
            </span>
            <span className="leading-[inherit] text-red">Under One Roof</span>
          </b>

          <EndToEndIllustration className="lg:hidden" />

          <div className="flex flex-col gap-5 text-[14px] font-normal leading-[22px] text-black sm:text-[17px] sm:leading-[26px] lg:gap-6 lg:text-num-18_67">
            <p>
              Mekark is a leading industrial MEP contractor based in Chennai,
              delivering reliable, code-compliant mechanical, electrical,
              plumbing, and fire-fighting systems for factories, warehouses, and
              manufacturing plants across Tamil Nadu, India. We work with plant
              owners, EPC contractors, and facility managers who need MEP
              systems built for real production loads, not just handover-day
              inspections.
            </p>
            <p>
              As a turnkey partner, we manage the full project lifecycle design,
              procurement, installation, testing, commissioning, and handover,
              as one accountable team. Every system is engineered in-house
              around your actual plant layout and process requirements, not
              templated specifications.
            </p>
            <p>
              Whether you need HVAC, electrical, plumbing, or fire-fighting
              expertise, Mekark combines engineering capability with in-house
              execution for safe, cost-efficient MEP work, including compressed
              air, process utilities, and mechanical systems, so your facility
              is operational from day one.
            </p>
            <p>
              Because design and execution sit under one roof, mid-construction
              changes get resolved without the delays of looping in a separate
              consultant, often the difference between a project finishing on
              schedule and one that slips.
            </p>
          </div>
        </div>

        <EndToEndIllustration className="hidden lg:block" />
      </div>
    </section>
  );
}
