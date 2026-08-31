import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: (
      <>
        18<span className="text-red-200">+</span>
      </>
    ),
    label: "Years Experience",
    mobileLabel: "Years Experience",
    valueClass: "text-white",
  },
  {
    value: (
      <>
        40,000 <span className="text-red-200">Tons</span>
      </>
    ),
    label: "Production Capacity",
    mobileLabel: "Prod. Capacity",
    valueClass: "text-whitesmoke",
  },
  {
    value: (
      <>
        70 lakh Sq.ft. <span className="text-red-300">+ Sq.ft.</span>
      </>
    ),
    label: "Manufacturing Campus",
    mobileLabel: "Mfg. Campus",
    valueClass: "text-white",
  },
  {
    value: (
      <>
        175<span className="text-red-300">+ In-House</span>
      </>
    ),
    label: "Engineers",
    mobileLabel: "Engineers",
    valueClass: "text-white",
  },
] as const;

const heroDescription =
  "Mekark delivers turnkey MEP design-build for factories, warehouses, and manufacturing plants: HVAC, electrical, plumbing, firefighting, and mechanical utilities, backed by 18+ years of experience and 200+ completed industrial MEP projects across Tamil Nadu, India.";

export default function Hero() {
  return (
    <>
      {/* Mobile / tablet */}
      <section className="relative flex min-h-svh w-full shrink-0 flex-col overflow-hidden bg-gray-200 text-left font-manrope text-white lg:hidden">
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

        <div className="relative z-[1] flex min-h-0 flex-1 flex-col px-5 pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-28">
          <div className="flex max-w-[1158px] flex-col items-start gap-3 sm:gap-4">
            <b className="relative w-full min-w-0 self-stretch text-[clamp(1.625rem,6.2vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.04em] text-gray-100 drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] sm:text-[36px] sm:leading-[1.2] sm:tracking-[-0.9px]">
              Leading Industrial MEP Contractor &amp; Turnkey MEP Contracting Company
            </b>
            <div className="relative mb-2 w-full min-w-0 text-[clamp(0.9375rem,3.8vw,1.0625rem)] leading-[1.5] font-semibold text-[rgba(5,7,12,0.72)] sm:mb-4 sm:text-[17px] sm:leading-[26px] lg:text-[18.67px] lg:leading-[26.67px]">
              {heroDescription}
            </div>
            <div className="relative flex w-full min-w-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="/#enquiry"
                className="inline-flex w-full items-center justify-center gap-[8.7px] rounded-[6.93px] bg-firebrick px-6 py-[13px] text-[15px] leading-[20.79px] font-semibold text-white shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] sm:w-auto sm:px-[31px] sm:py-[15.6px] sm:text-base"
              >
                <span className="font-semibold">Get a Free Quote</span>
              </a>
              <Link
                href="/projects/completed-projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[5.2px] px-4 py-3 text-[15px] leading-[20.79px] font-semibold text-firebrick sm:w-auto sm:justify-start sm:text-base"
              >
                <span className="font-semibold">View Our Projects</span>
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

          <div className="mt-auto w-full min-w-0 pt-6 sm:pt-8">
            <div className="grid w-full min-w-0 grid-cols-2 gap-x-3 gap-y-4 min-[390px]:gap-x-4 sm:gap-x-6 sm:gap-y-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex min-w-0 flex-col items-start gap-1 text-left ${stat.valueClass}`}
                >
                  <div className="w-full whitespace-nowrap text-[clamp(1rem,4.4vw,1.125rem)] font-extrabold leading-[1.2] tracking-[-0.04em] [&_span]:leading-[inherit] sm:text-[22px] sm:leading-[26px] sm:tracking-[-1.11px]">
                    {stat.value}
                  </div>
                  <div className="w-full break-words text-[clamp(0.5625rem,2.7vw,0.625rem)] font-semibold leading-[1.35] tracking-[0.04em] text-white/70 capitalize sm:text-[10.67px] sm:leading-[11.89px] sm:tracking-[1.6px]">
                    <span className="sm:hidden">{stat.mobileLabel}</span>
                    <span className="hidden sm:inline">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex min-w-0 flex-col items-start gap-1 border-t border-white/15 pt-4 sm:mt-5 sm:pt-5">
              <div className="w-full text-left text-[clamp(1rem,4.4vw,1.125rem)] font-extrabold leading-[1.2] tracking-[-0.04em] [&_span]:leading-[inherit] sm:text-[18px] sm:leading-[22px] sm:tracking-[-0.8px]">
                <span className="block">
                  ISO 9001:2015 <span className="text-red-200">&</span>
                </span>
                <span className="block">
                  <span className="text-limegreen">Green </span>
                  <span className="text-red-100">Certified</span>
                </span>
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
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <span className="leading-num-25_62">18</span>
                <span className="leading-num-25_62 text-red-200">+</span>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.1px] px-num-13_3 pt-[18px] pb-[18.6px] box-border text-whitesmoke">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <span className="leading-num-25_62">40,000 </span>
                <span className="leading-num-25_62 text-red-200">Tons</span>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Production Capacity
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <span className="leading-num-25_62">70 lakh Sq.ft. </span>
                <span className="leading-num-25_62 text-red-300">+ Sq.ft.</span>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Manufacturing Campus
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <span className="leading-num-25_62">175</span>
                <span className="leading-num-25_62 text-red-300">+ In-House</span>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Engineers
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start px-num-13_3 py-[4.3px] box-border">
              <div className="relative tracking-[-0.93px] leading-num-27_18 font-extrabold">
                <span className="block leading-num-27_18">
                  ISO 9001:2015 <span className="text-red-200">&</span>
                </span>
                <span className="block leading-num-27_18">
                  <span className="text-limegreen">Green </span>
                  <span className="text-red-100">Certified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] flex w-full shrink-0 flex-col items-start gap-5 pl-32 pr-[131px] pt-32 text-[48px] text-gray-100 opacity-90">
          <b className="relative self-stretch whitespace-nowrap text-[clamp(2rem,2.35vw,46px)] tracking-[-1px] leading-[56px]">
            Leading Industrial MEP Contractor &amp; Turnkey MEP Contracting Company
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
