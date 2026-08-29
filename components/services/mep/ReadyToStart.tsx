import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";

export default function ReadyToStart() {
  return (
    <section
      className="relative w-full text-left font-manrope text-white"
      style={{
        background: "linear-gradient(96.33deg, #8b0c11, #ed1d23)",
      }}
    >
      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 md:px-16 lg:px-[107px] lg:py-12">
        <div className="flex items-start gap-4 sm:items-center sm:gap-6">
          <div className="relative flex size-[64px] shrink-0 items-center justify-center sm:size-[92px]">
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
            <Image
              className="relative z-[1] h-6 w-6 sm:h-[32px] sm:w-[32px]"
              src="/images/services/mep/project-cta/phone-red.svg"
              width={32}
              height={32}
              alt=""
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[24px] leading-[1.2] font-extrabold sm:text-[32px] lg:text-[45.33px] lg:leading-[50.52px]">
              Ready to Start Your Industrial MEP Project?
            </div>
            <div className="mt-2 text-[18px] leading-[1.3] font-medium tracking-[1.42px] text-silver sm:text-[24px] lg:text-[29.33px] lg:leading-[22.72px]">
              Talk to Mekerk&apos;s MEP expert today
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3 text-base text-red-ribbon sm:w-auto sm:min-w-[243px] sm:flex-row md:flex-col">
          <a
            href="#enquiry"
            className="flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] box-border sm:w-auto sm:min-w-[243px]"
          >
            <b className="leading-[24.06px]">Get a Free Quote</b>
            <Image
              src="/images/services/mep/project-cta/arrow-red.svg"
              width={12}
              height={9}
              alt=""
              className="h-[9px] w-[12px]"
            />
          </a>

          <a
            href={PHONE_HREF}
            className="flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-gray px-[24.1px] py-[14.4px] box-border text-white sm:w-auto sm:min-w-[243px]"
          >
            <b className="leading-[24.06px]">Call us</b>
            <Image
              src="/images/services/mep/project-cta/phone-white.svg"
              width={16}
              height={16}
              alt=""
              className="h-4 w-4"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
