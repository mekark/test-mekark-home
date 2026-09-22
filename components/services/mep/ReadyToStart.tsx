"use client";

import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function ReadyToStart() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      id="contact"
      aria-label="Ready to Start Your Industrial MEP Project?"
    >
      {/* Mobile — civil FooterCta pattern */}
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
            Ready to Start Your Industrial MEP Project?
          </h2>
          <p className="w-full font-manrope text-sm font-medium leading-5 text-[#ccc6c6]">
            Talk to Mekark&apos;s MEP expert today
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

      {/* Desktop */}
      <div className="hidden lg:block">
        <ServiceFooterCta
          title="Ready to Start Your Industrial MEP Project?"
          subtitle="Talk to Mekark's MEP expert today"
          onQuoteClick={openEnquiry}
          scaledCanvas
        />
      </div>
    </section>
  );
}
