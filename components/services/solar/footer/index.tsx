"use client";

import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";
import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function SolarFooterCta() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      id="contact"
      aria-label="Ready to Start Your Commercial Solar Project?"
    >
      {/* Mobile — Figma 7454:8163 */}
      <div className="flex flex-col gap-6 bg-[linear-gradient(95.53deg,#8B0C11_6.54%,#ED1D23_108.89%)] px-6 py-8 text-center font-manrope text-white lg:hidden">
        <div className="flex w-full flex-col items-center gap-[14px]">
          <div className="relative size-[72px] shrink-0">
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
            <div className="absolute left-1/2 top-1/2 size-[38.4px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <Image
                src="/images/services/solar/footer/phone.svg"
                alt="Phone icon"
                width={32}
                height={32}
                className="absolute inset-[8.33%] h-[83.33%] w-[83.34%] max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <h2 className="w-full font-manrope text-[28px] font-extrabold leading-[35px] text-white">
            <span className="block">Ready to Start Your</span>
            <span className="block">Commercial Solar</span>
            <span className="block">Project?</span>
          </h2>
          <p className="w-full font-manrope text-sm font-normal leading-normal text-[#ccc6c6]">
            Talk to Mekark&apos;s solar team today for a free consultation and
            project quote.
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
                src="/images/services/solar/footer/Component 4.svg"
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
                src="/images/services/solar/footer/Component 1.svg"
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
          title="Ready to Start Your Commercial Solar Project?"
          subtitle="Talk to Mekark's solar team today for a free consultation and project quote."
          onQuoteClick={openEnquiry}
          scaledCanvas
          subtitleSingleLine
        />
      </div>
    </section>
  );
}
