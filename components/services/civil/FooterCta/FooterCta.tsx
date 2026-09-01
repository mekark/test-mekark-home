import Image from "next/image";
import { PHONE_HREF } from "@/lib/contact";

/** Figma node 2790:9694 — Civil footer CTA @ 1920px */
export default function FooterCta() {
  return (
    <section
      id="contact"
      aria-label="Ready to Start Your Civil Construction Project?"
    >
      {/* Mobile / tablet */}
      <div className="flex flex-col items-center gap-5 bg-[linear-gradient(96.33deg,#8b0c11,#ed1d23)] px-5 py-7 text-center font-manrope text-white sm:px-8 lg:hidden">
        <div className="relative h-[72px] w-[72px] shrink-0 sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
          <div className="absolute left-1/2 top-1/2 h-[38.4px] w-[38.4px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <Image
              src="/images/services/civil/footer/phone-icon.svg"
              alt=""
              width={32}
              height={32}
              className="absolute inset-[8.33%] h-[83.33%] w-[83.34%] max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="flex max-w-[28rem] flex-col gap-2">
          <h2 className="text-[1.35rem] font-extrabold leading-[1.2] sm:text-[1.55rem]">
            Ready to Start Your Civil Construction Project?
          </h2>
          <p className="text-[0.88rem] font-medium leading-[1.45] tracking-[1.1px] text-silver sm:text-[0.95rem]">
            Talk to Mekark&apos;s civil expert today
          </p>
        </div>

        <div className="flex w-full max-w-[17rem] flex-col gap-2.5 text-base text-red-ribbon">
          <a
            href="/#enquiry"
            className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-6 font-bold no-underline"
          >
            Get a Free Quote
            <span className="relative h-[18.8px] w-[18.8px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/quote-arrow.svg"
                alt=""
                fill
                className="object-contain"
                sizes="19px"
              />
            </span>
          </a>
          <a
            href={PHONE_HREF}
            className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-gray px-6 font-bold text-white no-underline"
          >
            Call us
            <span className="relative h-[18.7px] w-[18.7px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/call-phone.svg"
                alt=""
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
              alt=""
              width={32}
              height={32}
              className="absolute inset-[8.33%] h-[83.33%] w-[83.34%] max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute left-[1420px] top-[calc(50%-61.82px)] flex w-[243.2px] shrink-0 flex-col items-start gap-[13.3px] text-base text-red-ribbon">
          <a
            href="/#enquiry"
            className="box-border flex h-[55.3px] items-center justify-center gap-[9.6px] self-stretch rounded-full bg-white px-[24.1px] py-[14.4px] no-underline"
          >
            <b className="relative leading-[24.06px]">Get a Free Quote</b>
            <span className="relative h-[18.8px] w-[18.8px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/quote-arrow.svg"
                alt=""
                width={12}
                height={9}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </span>
          </a>
          <a
            href={PHONE_HREF}
            className="box-border flex h-[55.3px] items-center justify-center gap-[9.6px] self-stretch rounded-full bg-gray px-[24.1px] py-[14.4px] text-white no-underline"
          >
            <b className="relative leading-[24.06px]">Call us</b>
            <span className="relative h-[18.7px] w-[18.7px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/call-phone.svg"
                alt=""
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
