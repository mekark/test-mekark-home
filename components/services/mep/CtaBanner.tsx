import Image from "next/image";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";

export default function CtaBanner() {
  return (
    <>
      {/* Mobile / tablet */}
      <section className="relative w-full bg-white px-4 py-6 text-left font-manrope text-base text-silver sm:px-6 md:px-8 lg:hidden">
        <div
          className="relative mx-auto flex max-w-[1706px] flex-col overflow-hidden rounded-[24px] sm:rounded-[40px]"
          style={{
            background: "linear-gradient(96.33deg, #8b0c11, #ed1d23)",
          }}
        >
          <div className="relative z-[1] flex w-full flex-col px-6 py-8 sm:px-10 sm:py-10">
            <ServiceMidCtaCopy>
              <ServiceMidCtaTitle
                line1="Planning a Factory, Warehouse,"
                line2="or Manufacturing Plant?"
                size="short"
                scaledCanvas
              />

              <p className="mt-4 max-w-[520px] text-[16px] leading-[22px] font-medium tracking-[1.42px] sm:text-[18.67px] sm:leading-[22.72px]">
                Get a free consultation and MEP system layout from Mekark&apos;s
                design-build team.
              </p>

              <a
                href="/#enquiry"
                className="mt-8 inline-flex w-fit items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] text-red-ribbon"
              >
                <b className="leading-[24.06px]">
                Request a Free Quote
                </b>
                <Image
                  src="/images/services/mep/cta-banner/arrow.svg"
                  width={12}
                  height={9}
                  alt="Arrow icon"
                  className="h-[9px] w-[12px]"
                />
              </a>
            </ServiceMidCtaCopy>
          </div>

          <div className="relative h-[220px] w-full shrink-0 sm:h-[280px]">
            <Image
              className="h-full w-full object-cover object-[center_20%]"
              src="/images/services/mep/cta-banner/engineer.webp"
              width={949}
              height={345}
              sizes="100vw"
              alt="MEP engineer reviewing plant layout drawings"
              priority
            />
          </div>
        </div>
      </section>

      {/* Desktop — original layout */}
      <section className="relative hidden h-[346px] w-full bg-white text-left font-manrope text-base text-silver lg:block">
        <div
          className="absolute top-0 left-1/2 h-[345.3px] w-[1706.7px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded-[40px]"
          style={{
            background: "linear-gradient(96.33deg, #8b0c11, #ed1d23)",
          }}
        >
          <ServiceMidCtaLine className="absolute left-[117.33px] top-[42.67px] z-[2]" />

          <div className="absolute top-[50px] left-[146.67px] z-10 flex min-h-[264px] w-[553.3px] flex-col">
            <ServiceMidCtaTitle
              line1="Planning a Factory, Warehouse,"
              line2="or Manufacturing Plant?"
              size="short"
              className="lg:max-w-none"
              scaledCanvas
            />

            <p className="mt-4 max-w-[520px] text-[18.67px] leading-[22.72px] font-medium tracking-[1.42px]">
              Get a free consultation and MEP system layout from Mekark&apos;s
              design-build team.
            </p>

            <a
              href="/#enquiry"
              className="mt-8 inline-flex w-fit items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] text-red-ribbon"
            >
              <b className="relative leading-[24.06px]">
              Request a Free Quote
              </b>
              <span className="relative size-[18.8px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/mep/cta-banner/arrow.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </a>
          </div>

          <Image
            className="absolute top-[-0.33px] left-[757.33px] h-[345.3px] w-[949px] object-cover shrink-0"
            src="/images/services/mep/cta-banner/engineer.webp"
            width={949}
            height={345}
            sizes="949px"
            alt="MEP engineer reviewing plant layout drawings"
            priority
          />
        </div>
      </section>
    </>
  );
}
