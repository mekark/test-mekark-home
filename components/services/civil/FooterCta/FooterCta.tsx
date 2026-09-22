"use client";

import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

/** Figma node 2790:9694 — Civil footer CTA @ 1920px */
export default function FooterCta() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      id="contact"
      aria-label="Ready to Start Your Civil Construction Project?"
    >
      {/* Mobile — Figma 7385:1255 */}
      <div className="flex flex-col gap-6 bg-[linear-gradient(96.36deg,#8B0C11_6.54%,#ED1D23_108.89%)] px-6 py-8 text-center font-manrope text-white lg:hidden">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="relative size-[72px] shrink-0">
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
            <div className="absolute left-1/2 top-1/2 size-[38.4px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <Image
                src="/images/services/civil/footer/phone-icon.svg"
                alt="Phone icon"
                width={32}
                height={32}
                className="absolute inset-[8.33%] h-[83.33%] w-[83.34%] max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <h2 className="w-full font-manrope text-[28px] font-extrabold leading-[30px] text-white">
            Ready to Start Your Civil Construction Project?
          </h2>
          <p className="w-full font-manrope text-sm font-medium leading-5 text-[#ccc6c6]">
            Talk to Mekark&apos;s civil expert today
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="flex h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-white px-6 py-[14px] text-base font-bold leading-6 text-[#E5091F]"
          >
            Get a Free Quote
            <span className="relative size-[18.758px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/quote-arrow.svg"
                alt="Arrow icon"
                fill
                className="object-contain"
                sizes="19px"
              />
            </span>
          </button>
          <a
            href={PHONE_HREF}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-[14px] text-base font-bold leading-6 text-white no-underline"
          >
            Call us
            <span className="relative size-[18.667px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/call-phone.svg"
                alt="Call phone icon"
                fill
                className="object-contain"
                sizes="19px"
              />
            </span>
          </a>
        </div>
      </div>

      {/* Desktop — Figma export @ 1920px */}
      <div className="relative hidden h-[206.7px] w-full bg-[linear-gradient(96.33deg,#8b0c11,#ed1d23)] text-left font-manrope text-[45.33px] text-white lg:block">
        <h2 className="absolute left-[calc(50%-711px)] top-[49.53px] flex h-16 w-[1050px] shrink-0 items-center font-extrabold leading-[50.52px]">
          Ready to Start Your Civil Construction Project?
        </h2>

        <p className="absolute left-[calc(50%-710.67px)] top-[116.2px] flex h-[39.7px] w-[519.7px] shrink-0 items-center text-[29.33px] font-medium leading-[22.72px] tracking-[1.42px] text-silver">
          Talk to Mekark&apos;s civil expert today
        </p>

        <div className="absolute left-[106.67px] top-[calc(50%-45.82px)] h-[92px] w-[92px] shrink-0">
          <div className="absolute left-0 top-[calc(50%-46px)] h-[92px] w-[92px] rounded-[50%] bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
          <div className="absolute left-[27.47px] top-[calc(50%-18.53px)] h-[38.4px] w-[38.4px] overflow-hidden">
            <Image
              src="/images/services/civil/footer/phone-icon.svg"
              alt="Phone icon"
              width={32}
              height={32}
              className="absolute inset-[8.33%] h-[83.33%] w-[83.34%] max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute left-[1420px] top-[calc(50%-61.82px)] flex w-[243.2px] shrink-0 flex-col items-start gap-[13.3px] text-base text-red-ribbon">
          <button
            type="button"
            onClick={openEnquiry}
            className="box-border flex h-[55.3px] cursor-pointer items-center justify-center gap-[9.6px] self-stretch rounded-full border-0 bg-white px-[24.1px] py-[14.4px]"
          >
            <b className="relative leading-[24.06px]">Get a Free Quote</b>
            <span className="relative h-[18.8px] w-[18.8px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/quote-arrow.svg"
                alt="Arrow icon"
                width={12}
                height={9}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </span>
          </button>
          <a
            href={PHONE_HREF}
            className="box-border flex h-[55.3px] items-center justify-center gap-[9.6px] self-stretch rounded-full bg-gray px-[24.1px] py-[14.4px] text-white no-underline"
          >
            <b className="relative leading-[24.06px]">Call us</b>
            <span className="relative h-[18.7px] w-[18.7px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/call-phone.svg"
                alt="Call phone icon"
                width={16}
                height={16}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
