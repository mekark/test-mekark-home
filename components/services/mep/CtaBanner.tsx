import Image from "next/image";

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
          <div className="relative z-[1] flex w-full flex-col gap-4 px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="text-[28px] leading-[1.15] font-extrabold text-white sm:text-5xl sm:leading-[50.52px]">
              <span className="leading-[inherit]">
                Factory, Warehouse, or
                <br />
              </span>
              <span className="leading-[inherit] text-black">
                Manufacturing Plant?
              </span>
            </h2>

            <p className="max-w-[520px] text-[16px] leading-[22px] font-medium tracking-[1.42px] sm:text-[18.67px] sm:leading-[22.72px]">
              Get a free consultation and MEP system layout from Mekark&apos;s
              design-build team.
            </p>

            <a
              href="/#enquiry"
              className="mt-2 inline-flex w-fit items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] text-red-ribbon"
            >
              <b className="leading-[24.06px]">
                Request a Free Site Assessment
              </b>
              <Image
                src="/images/services/mep/cta-banner/arrow.svg"
                width={12}
                height={9}
                alt=""
                className="h-[9px] w-[12px]"
              />
            </a>
          </div>

          <div className="relative h-[220px] w-full shrink-0 sm:h-[280px]">
            <Image
              className="h-full w-full object-cover object-[center_20%]"
              src="/images/services/mep/cta-banner/engineer.png"
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
          <div className="absolute top-[41.01px] left-[146.67px] h-[264.6px] w-[553.3px] shrink-0">
            <div className="absolute top-[149.16px] left-1/2 flex h-[39.7px] w-[519.7px] -translate-x-1/2 items-center text-[18.67px] leading-[22.72px] font-medium tracking-[1.42px] shrink-0">
              Get a free consultation and MEP system layout from Mekark&apos;s
              design-build team.
            </div>

            <div className="absolute top-[26.99px] left-1/2 flex h-[113.3px] w-[578.7px] -translate-x-1/2 items-center text-5xl leading-[50.52px] font-extrabold text-white shrink-0">
              <span className="w-full">
                <span className="leading-[50.52px]">
                  Factory, Warehouse, or
                  <br />
                </span>
                <span className="leading-[50.52px] text-black">
                  Manufacturing Plant?
                </span>
              </span>
            </div>

            <a
              href="/#enquiry"
              className="absolute top-[208.7px] bottom-[0.6px] left-0 flex h-[calc(100%-209.3px)] shrink-0 items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] box-border text-red-ribbon"
            >
              <b className="relative leading-[24.06px]">
                Request a Free Site Assessment
              </b>
              <span className="relative h-[18.8px] w-[18.8px] overflow-hidden shrink-0">
                <Image
                  className="absolute top-[24.94%] right-[19.06%] bottom-[25.06%] left-[18.71%] h-3/6 w-full max-h-full max-w-full overflow-hidden"
                  src="/images/services/mep/cta-banner/arrow.svg"
                  width={12}
                  height={9}
                  alt=""
                />
              </span>
            </a>
          </div>

          <div className="absolute top-[42.67px] left-[117.33px] h-[264px] w-[2.7px] shrink-0 border-r-[2.7px] border-solid border-white box-border" />

          <Image
            className="absolute top-[-0.33px] left-[757.33px] h-[345.3px] w-[949px] object-cover shrink-0"
            src="/images/services/mep/cta-banner/engineer.png"
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
