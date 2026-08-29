"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/images/services/civil/trusted/tata.png",
    alt: "Tata",
    className: "h-[62.6px] w-[80.4px]",
    left: 0,
  },
  {
    src: "/images/services/civil/trusted/bosch.png",
    alt: "Bosch",
    className: "size-[78.7px]",
    left: 232,
  },
  {
    src: "/images/services/civil/trusted/hyundai.png",
    alt: "Hyundai",
    className: "size-[100px]",
    left: 465.33,
  },
  {
    src: "/images/services/civil/trusted/voltas.png",
    alt: "Voltas",
    className: "size-[100px]",
    left: 697.33,
  },
  {
    src: "/images/services/civil/trusted/jk.png",
    alt: "JK",
    className: "h-[57.5px] w-[110.7px]",
    left: 930.67,
  },
  {
    src: "/images/services/civil/trusted/tvs.png",
    alt: "TVS",
    className: "size-[100px]",
    left: 1164,
  },
  {
    src: "/images/services/civil/trusted/volvo.png",
    alt: "Volvo",
    className: "size-[72px]",
    left: 1396,
  },
] as const;

export default function TrustedSectors() {
  return (
    <section
      id="industries"
      className="relative h-auto w-full shrink-0 overflow-hidden bg-[#FDEBEB] px-5 py-12 text-center font-manrope text-[40px] text-[#111] sm:px-8 sm:py-14 lg:h-[599px] lg:px-0 lg:py-0"
      aria-label="Trusted across industrial and commercial sectors"
    >
      {/* Inner card — Figma 1706 × 430 */}
      <div className="relative mx-auto w-full max-w-[1706px] rounded-[28px] bg-[#FCFCFC] px-5 py-9 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] sm:px-8 sm:py-10 lg:absolute lg:top-[calc(50%-214.5px)] lg:left-[107px] lg:h-[430px] lg:w-[1706px] lg:max-w-none lg:rounded-[40px] lg:px-0 lg:py-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-[1022.7px] font-bold text-[26px] leading-[1.2] text-[#111] sm:text-[36px] sm:leading-[42px] lg:absolute lg:left-1/2 lg:top-[38.67px] lg:-translate-x-1/2 lg:text-[40px] lg:leading-[45.33px]"
        >
          <span className="leading-[inherit]">Trusted Across</span>
          <br />
          <span className="leading-[inherit] text-red">
            Industrial &amp; Commercial Sectors
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-3 max-w-[720px] text-center text-[14px] font-medium leading-6 text-black sm:text-base sm:leading-[24.06px] lg:absolute lg:left-[479px] lg:top-[157px] lg:mt-0 lg:max-w-none lg:text-left lg:whitespace-nowrap"
        >
          As a civil infrastructure development company, our project mix spans
          core RCC structures to full sites.
        </motion.p>

        {/* Mobile / tablet logo grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:hidden">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex h-[100px] items-center justify-center rounded-[14.94px] border-[1.3px] border-solid border-black/5 bg-white sm:h-[110px] ${
                index === logos.length - 1
                  ? "col-span-2 justify-self-center w-full max-w-[calc(50%-6px)] sm:col-span-1 sm:max-w-none"
                  : ""
              }`}
            >
              <div className={`relative ${logo.className}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop logo row — Figma 1593.3 × 122.3 */}
        <div className="absolute left-[calc(50%-795.67px)] top-[209px] hidden h-[122.3px] w-[1593.3px] lg:block">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="absolute top-0 h-[122.3px] w-[198px]"
              style={{ left: logo.left }}
            >
              <div className="absolute inset-0 rounded-[14.94px] border-[1.3px] border-solid border-black/5 bg-white" />
              <div
                className={`absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 ${logo.className}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline + divider lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-6 flex items-center justify-center gap-[6.7px] text-[18.67px] text-[#101116] sm:mt-7 lg:absolute lg:left-1/2 lg:top-[359px] lg:mt-0 lg:-translate-x-1/2"
        >
          <span
            className="hidden h-px w-[94.9px] bg-black sm:block lg:absolute lg:-left-[159.8px] lg:top-[17.2px]"
            aria-hidden
          />
          <Image
            src="/images/services/civil/trusted/shield.svg"
            alt=""
            width={32}
            height={32}
            className="relative size-8 shrink-0"
          />
          <p className="w-auto max-w-[353.3px] text-center text-[15px] font-light leading-6 tracking-[1.33px] sm:w-[353.3px] sm:text-[18.67px] sm:leading-[26.67px]">
            Built on Trust. Delivering Excellence.
          </p>
          <span
            className="hidden h-px w-[94.9px] bg-black sm:block lg:absolute lg:left-[calc(100%+65px)] lg:top-[17.2px]"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
