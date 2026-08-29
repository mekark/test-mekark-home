"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/services/multi-storey/frame212/logos/tata.png", alt: "Tata", w: 120, h: 95 },
  { src: "/images/services/multi-storey/frame212/logos/bosch.png", alt: "Bosch", w: 118, h: 118 },
  { src: "/images/services/multi-storey/frame212/logos/hyundai.png", alt: "Hyundai", w: 150, h: 150 },
  { src: "/images/services/multi-storey/frame212/logos/voltas.png", alt: "Voltas", w: 150, h: 150 },
  { src: "/images/services/multi-storey/frame212/logos/jk.png", alt: "JK Tyre", w: 166, h: 87 },
  { src: "/images/services/multi-storey/frame212/logos/tvs.png", alt: "TVS", w: 150, h: 150 },
  { src: "/images/services/multi-storey/frame212/logos/partner.png", alt: "Partner", w: 108, h: 108 },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function TrustedSectors() {
  return (
    <section className="bg-lavenderblush px-5 py-14 text-gray-100 sm:px-8 lg:px-10 lg:py-20">
      <motion.div
        className="mx-auto flex max-w-[1706px] flex-col items-center rounded-[24px] bg-card px-4 py-10 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] sm:rounded-[40px] sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="max-w-[610px] text-center text-[28px] leading-[1.2] font-bold sm:text-[34px] lg:text-[40px] lg:leading-[45.33px]">
          Trusted Across Industrial &{" "}
          <span className="text-red">Commercial Sectors</span>
        </h2>
        <p className="mt-6 max-w-[720px] text-center text-base leading-[24px] font-medium text-black">
          Our project mix spans single-floor sheds to multi-level commercial and
          industrial structures.
        </p>

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-[100px] w-[calc(50%-0.5rem)] max-w-[160px] items-center justify-center rounded-[14.94px] border-[1.3px] border-hairline bg-white sm:h-[122px] sm:w-[160px] sm:max-w-none lg:w-[198px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="h-auto max-h-[72px] w-auto max-w-[110px] object-contain sm:max-h-[100px] sm:max-w-[150px]"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex max-w-full items-center justify-center gap-[6.7px] text-center text-[14px] tracking-[0.8px] text-[#101116] sm:mt-10 sm:text-[18.67px] sm:tracking-[1.33px]">
          <Image
            src="/images/services/multi-storey/frame212/icons/shield.svg"
            alt=""
            width={32}
            height={32}
            className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
          />
          <span className="font-light leading-[22px] sm:leading-[26.67px]">
            Built on Trust. Delivering Excellence.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
