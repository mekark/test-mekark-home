import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: (
      <>
        <span className="leading-num-25_62">18</span>
        <span className="leading-num-25_62 text-red-200">+</span>
      </>
    ),
    label: "Years Experience",
    valueClass: "text-white",
  },
  {
    value: (
      <>
        <span className="leading-num-25_62">X </span>
        <span className="leading-num-25_62 text-red-200">Tons</span>
      </>
    ),
    label: "Production Capacity",
    valueClass: "text-whitesmoke",
  },
  {
    value: (
      <>
        <span className="leading-num-25_62">X </span>
        <span className="leading-num-25_62 text-red-300">+ Sq.ft.</span>
      </>
    ),
    label: "Manufacturing Campus",
    valueClass: "text-white",
  },
  {
    value: (
      <>
        <span className="leading-num-25_62">X </span>
        <span className="leading-num-25_62 text-red-300">In-House</span>
      </>
    ),
    label: "Engineers",
    valueClass: "text-white",
  },
] as const;

const heroDescription =
  "Mekark delivers turnkey MEP design-build for factories, warehouses, and manufacturing plants: HVAC, electrical, plumbing, firefighting, and mechanical utilities, backed by 18+ years of experience and 200+ completed industrial MEP projects across Tamil Nadu, India.";

export default function Hero() {
  return (
    <>
      {/* Mobile / tablet */}
      <section className="relative flex min-h-[640px] w-full shrink-0 flex-col overflow-hidden bg-gray-200 text-left font-manrope text-num-26_67 text-white lg:hidden">
        <div className="absolute inset-0">
          <Image
            className="absolute top-[-17px] left-0 h-full min-h-[1080px] w-full max-w-none object-cover"
            src="/images/services/mep/hero/remove-1.png"
            width={1920}
            height={1080}
            sizes="100vw"
            alt=""
            priority
          />
          <div
            className="absolute inset-x-0 top-0 h-[62%]"
            style={{
              background:
                "linear-gradient(180deg, #ffc2c2 0%, rgba(255, 194, 194, 0.92) 45%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div className="absolute top-[26%] right-0 bottom-0 left-0 overflow-hidden sm:top-[22%]">
            <Image
              className="absolute inset-0 h-full w-full object-cover object-[center_10%]"
              src="/images/services/mep/hero/layer-1.png"
              width={1920}
              height={1080}
              sizes="100vw"
              alt="Industrial MEP facility"
              priority
            />
          </div>
          <div
            className="absolute right-0 bottom-0 h-[45%] w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 30, 30, 0), #1e1e1e)",
            }}
          />
        </div>

        <div className="relative z-[1] flex flex-1 flex-col justify-between px-5 pt-24 pb-8 sm:px-8 sm:pt-28 md:pl-24 md:pr-8">
          <div className="flex max-w-[1158px] flex-col items-start gap-4 text-[32px] text-gray-100 sm:gap-5 sm:text-[40px]">
            <b className="relative self-stretch tracking-[-1px] leading-[1.15] drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] sm:leading-[56px]">
              Leading Industrial MEP Contractor & Turnkey MEP Contracting
              Company
            </b>
            <div className="relative mb-4 w-full text-[15px] leading-[22px] font-semibold text-[rgba(5,7,12,0.72)] sm:mb-6 sm:text-[18.67px] sm:leading-[26.67px]">
              {heroDescription}
            </div>
            <div className="relative mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="/#enquiry"
                className="inline-flex items-center gap-[8.7px] rounded-[6.93px] bg-firebrick px-[31.2px] py-[15.6px] text-[16px] text-white shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)]"
              >
                <span className="leading-[20.79px] font-semibold">
                  Get a Free Quote
                </span>
              </a>
              <Link
                href="/projects/completed-projects"
                className="inline-flex items-center gap-2 rounded-[5.2px] px-4 py-3 text-[16px] text-firebrick"
              >
                <span className="leading-[20.79px] font-semibold">
                  View Our Projects
                </span>
                <Image
                  src="/images/services/mep/hero/arrow.svg"
                  width={9}
                  height={7}
                  alt=""
                  className="h-[7px] w-[9px]"
                />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-end gap-x-6 gap-y-4 sm:gap-x-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex min-w-[120px] flex-col items-start gap-1 ${stat.valueClass}`}
              >
                <div className="tracking-[-1.11px] leading-num-25_62 font-extrabold">
                  {stat.value}
                </div>
                <div className="text-[10.67px] tracking-[1.6px] leading-[11.89px] font-semibold text-gray-400 capitalize">
                  {stat.label}
                </div>
              </div>
            ))}
            <div className="flex min-w-[180px] max-w-[240px] flex-col items-start">
              <div className="tracking-[-0.93px] leading-num-27_18 font-extrabold">
                <span className="leading-num-27_18">ISO 9001:2015 </span>
                <span className="leading-num-27_18 text-red-200">& </span>
                <span className="leading-num-27_18 text-limegreen">Green </span>
                <span className="leading-num-27_18 text-red-100">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — original layout */}
      <section className="relative hidden h-[1048px] w-full shrink-0 overflow-hidden bg-gray-200 text-left font-manrope text-num-26_67 text-white lg:block">

        <div className="absolute top-[-32px] right-0 left-0 h-[1080px] w-full shrink-0">
          <Image
            className="absolute top-[-17px] left-0 h-[1080px] w-full max-w-none object-cover shrink-0"
            src="/images/services/mep/hero/remove-1.png"
            width={1920}
            height={1080}
            sizes="100vw"
            alt=""
            priority
          />
          <div
            className="absolute top-[32.33px] right-0 h-[1048px] w-full shrink-0"
            style={{
              background:
                "linear-gradient(180deg, #ffc2c2, rgba(255, 255, 255, 0))",
            }}
          />
          <div className="absolute top-[125px] left-0 h-[882px] w-full overflow-hidden shrink-0">
            <Image
              className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
              src="/images/services/mep/hero/layer-1.png"
              width={1920}
              height={1080}
              sizes="100vw"
              alt="Industrial MEP facility"
              priority
            />
          </div>
          <div
            className="absolute right-0 bottom-0 h-[358.7px] w-full shrink-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 30, 30, 0), #1e1e1e)",
            }}
          />
          <div className="absolute bottom-[66.7px] left-1/2 flex -translate-x-1/2 items-center gap-[66.7px] shrink-0">
            <div className="flex h-[65.3px] w-[137.3px] shrink-0 flex-col items-start justify-center gap-[4.1px] px-num-13_3 pt-[18px] pb-[18.6px] box-border">
              <div className="flex w-[110.7px] shrink-0 flex-col items-start">
                <div className="relative self-stretch tracking-[-1.11px] leading-num-25_62 font-extrabold">
                  <span className="leading-num-25_62">18</span>
                  <span className="leading-num-25_62 text-red-200">+</span>
                </div>
              </div>
              <div className="flex w-[110.7px] shrink-0 flex-col items-start text-[10.67px] text-gray-400">
                <div className="relative self-stretch tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="flex h-16 w-[161.3px] shrink-0 flex-col items-start justify-center gap-[4.1px] px-num-13_3 pt-[18px] pb-[18.6px] box-border text-whitesmoke">
              <div className="flex w-[133.3px] shrink-0 flex-col items-start">
                <div className="relative self-stretch tracking-[-1.11px] leading-num-25_62 font-extrabold">
                  <span className="leading-num-25_62">X </span>
                  <span className="leading-num-25_62 text-red-200">Tons</span>
                </div>
              </div>
              <div className="flex w-[133.3px] shrink-0 flex-col items-start text-[10.67px] text-gray-400">
                <div className="relative self-stretch tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Production Capacity
                </div>
              </div>
            </div>

            <div className="flex h-16 w-[177.3px] shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="flex w-[149.3px] shrink-0 flex-col items-start">
                <div className="relative flex w-[138.7px] items-center tracking-[-1.11px] leading-num-25_62 font-extrabold">
                  <span className="w-full">
                    <span className="leading-num-25_62">X </span>
                    <span className="leading-num-25_62 text-red-300">
                      + Sq.ft.
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex w-[150.7px] shrink-0 flex-col items-start text-[10.67px] text-gray-400">
                <div className="relative flex w-[150.7px] items-center tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Manufacturing Campus
                </div>
              </div>
            </div>

            <div className="flex h-16 w-40 shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="flex w-[133.3px] shrink-0 flex-col items-start">
                <div className="relative flex w-[159.8px] shrink-0 items-center tracking-[-1.11px] leading-num-25_62 font-extrabold">
                  <span className="w-full">
                    <span className="leading-num-25_62">X </span>
                    <span className="leading-num-25_62 text-red-300">
                      In-House
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex w-[133.3px] shrink-0 flex-col items-start text-[10.67px] text-gray-400">
                <div className="relative self-stretch tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Engineers
                </div>
              </div>
            </div>

            <div className="flex w-56 shrink-0 flex-col items-start px-num-13_3 py-[4.3px] box-border">
              <div className="flex w-[197.3px] flex-col items-start">
                <div className="relative flex w-[215.3px] shrink-0 items-center tracking-[-0.93px] leading-num-27_18 font-extrabold">
                  <span className="w-full">
                    <span className="leading-num-27_18">ISO 9001:2015 </span>
                    <span className="leading-num-27_18 text-red-200">& </span>
                    <span className="leading-num-27_18 text-limegreen">
                      Green{" "}
                    </span>
                    <span className="leading-num-27_18 text-red-100">
                      Certified
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] flex w-full shrink-0 flex-col items-start gap-5 pl-32 pr-[131px] pt-32 text-[48px] text-gray-100 opacity-90">
          <b className="relative self-stretch tracking-[-1px] leading-[56px]">
            Leading Industrial MEP Contractor & Turnkey MEP Contracting Company
          </b>
          <div className="relative flex w-full max-w-[1158px] items-center text-[18.67px] leading-[26.67px] font-semibold text-gray-300">
            {heroDescription}
          </div>
          <div className="relative h-[50.7px] w-[400px] text-[16px] text-white">
            <a
              href="/#enquiry"
              className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center gap-[8.7px] rounded-[6.93px] bg-firebrick px-[31.2px] py-[15.6px] shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] shrink-0"
            >
              <span className="relative shrink-0 leading-[20.79px] font-semibold">
                Get a Free Quote
              </span>
            </a>
            <Link
              href="/projects/completed-projects"
              className="absolute top-0 bottom-[0.5px] left-[217.04px] h-[calc(100%-0.5px)] w-[191.8px] shrink-0 rounded-[5.2px] text-firebrick"
            >
              <span className="absolute top-1/2 left-[21.66px] -translate-y-1/2 shrink-0 leading-[20.79px] font-semibold">
                View Our Projects
              </span>
              <span className="absolute top-[18.19px] left-[169.66px] h-[13.9px] w-[13.9px] overflow-hidden shrink-0">
                <Image
                  className="absolute top-[24.93%] right-[18.71%] bottom-[25.43%] left-[18.7%] h-[49.64%] w-full max-h-full max-w-full overflow-hidden"
                  src="/images/services/mep/hero/arrow.svg"
                  width={9}
                  height={7}
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
