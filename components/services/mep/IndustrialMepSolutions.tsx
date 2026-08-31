"use client";

import Image from "next/image";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";

const solutions = [
  {
    image: "/images/services/mep/industrial-solutions/hvac.png",
    imageClass: "rounded-num-21_33 object-cover",
    absoluteImage: false,
    title: "HVAC Systems",
    body: "We engineer process cooling, ducting, and ventilation systems sized for factory and manufacturing plant loads, not just floor area.",
  },
  {
    image: "/images/services/mep/industrial-solutions/electrical.png",
    imageClass: "rounded-num-21_33 object-cover",
    absoluteImage: false,
    title: "Electrical Systems",
    body: "We design and install HT/LT distribution, panels, lighting, and power infrastructure to factory-grade standards, including backup power for critical facilities.",
  },
  {
    image: "/images/services/mep/industrial-solutions/plumbing.png",
    imageClass:
      "absolute h-full left-[-11.57%] max-w-none top-[-0.23%] w-[150.38%] rounded-num-21_33 object-cover",
    absoluteImage: true,
    title: "Plumbing Systems",
    body: "We design process water, drainage, and utility piping sized for real plant flow rates and peak demand.",
  },
  {
    image: "/images/services/mep/industrial-solutions/fire-protection.png",
    imageClass:
      "absolute h-[140.14%] left-[-12.09%] max-w-none top-[-14.87%] w-[112.11%] rounded-num-21_33 object-cover",
    absoluteImage: true,
    title: "Fire Protection Systems",
    body: "We design sprinkler grids, hydrant systems, and fire protection infrastructure sized for plant occupancy and applicable fire codes.",
  },
  {
    image: "/images/services/mep/industrial-solutions/mechanical-utility.png",
    imageClass: "rounded-num-21_33 object-cover",
    absoluteImage: false,
    title: "Mechanical & Utility Works",
    body: "We deliver compressed air systems, process mechanical installations, and utility rooms engineered for continuous plant operation.",
  },
  {
    image: "/images/services/mep/industrial-solutions/design-build.png",
    imageClass:
      "absolute h-full left-[-33.78%] max-w-none top-[-0.08%] w-[177.68%] rounded-num-21_33 object-cover",
    absoluteImage: true,
    title: "MEP Design-Build",
    body: "We provide single-scope design and construction across HVAC, electrical, plumbing, and fire systems from concept through commissioning.",
  },
] as const;

export default function IndustrialMepSolutions() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-gray">
      <Image
        className="absolute top-0 left-0 h-[280px] w-full object-cover opacity-[0.15] sm:h-[390px]"
        src="/images/services/mep/industrial-solutions/grid.png"
        width={1918}
        height={391}
        sizes="100vw"
        alt=""
      />

      <ServiceSolutionsMobileGrid
        title="Our Industrial MEP Solutions"
        solutions={solutions.map((item) => ({
          title: item.title,
          description: item.body,
          image: item.image,
        }))}
      />

      <div className="relative z-[1] mx-auto hidden max-w-[1920px] flex-col items-center gap-10 px-5 py-14 sm:px-8 md:gap-[66px] md:px-16 lg:flex lg:px-[107px] lg:py-[107px]">
        <b className="max-w-[701px] text-center text-[32px] leading-[1.15] tracking-[-1.33px] sm:text-[42px] lg:text-[53.33px] lg:leading-[65.33px]">
          Our Industrial MEP Solutions
        </b>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              {item.image ? (
                <div className="relative aspect-square w-full overflow-hidden rounded-num-21_33">
                  {item.absoluteImage ? (
                    <Image
                      className={item.imageClass}
                      src={item.image}
                      width={257}
                      height={257}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
                      alt={item.title}
                    />
                  ) : (
                    <Image
                      className={`${item.imageClass} h-full w-full`}
                      src={item.image}
                      width={257}
                      height={257}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
                      alt={item.title}
                    />
                  )}
                </div>
              ) : (
                <div className="aspect-square w-full rounded-num-21_33 bg-gainsboro-card" />
              )}

              <div>
                <b className="block text-num-18_67 leading-[26px] text-darkslategray font-montserrat">
                  {item.title}
                </b>
                <p className="mt-2 text-num-16 leading-[21.33px] text-dimgray font-montserrat">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
