"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Figma Frame 191 — node 2488:5965 */
const CTA_WIDTH = 1706.67;
const CTA_HEIGHT = 345.33;

/**
 * Planning CTA — Civil Mid CTA
 * Red box: 1706.67 × 345.33
 */
export default function PlanningCta() {
  return (
    <section
      id="quote"
      className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12 xl:px-[107px]"
      aria-labelledby="civil-quote-title"
    >
      {/* Mobile — continuous red gradient; building blended at bottom */}
      <motion.div
        className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] sm:rounded-[32px] lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="relative z-10 flex flex-col px-5 pt-8 pb-[200px] sm:px-8 sm:pt-10 sm:pb-[260px]">
          <div className="relative pl-4 sm:pl-5">
            <span
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2.7px] bg-white"
              aria-hidden
            />

            <div className="mb-3 flex items-center gap-2">
              <span className="relative h-[15px] w-[18px] shrink-0">
                <Image
                  src="/images/services/civil/cta/planning-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="18px"
                />
              </span>
              <p className="text-[12px] font-bold capitalize tracking-[1.2px] text-[#CCC6C6]">
                Planning <span className="lowercase">a</span>
              </p>
            </div>

            <h2
              id="civil-quote-title"
              className="text-[24px] font-extrabold leading-[1.15] text-white sm:text-[32px] sm:leading-[1.1]"
            >
              Factory, Commercial Building, or{" "}
              <span className="text-black">Industrial Building?</span>
            </h2>

            <p className="mt-3 max-w-[28rem] text-[13px] font-medium leading-[18px] tracking-[1.1px] text-[#CCC6C6] sm:text-[14px] sm:leading-[20px]">
              Get a free consultation and project blueprint from Mekark&apos;s
              civil construction and structural engineering team.
            </p>
          </div>

          <a
            href="/#enquiry"
            className="relative z-10 mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3.5 text-[14px] font-bold text-[#E5091F] transition-transform active:scale-[0.98] sm:mt-7 sm:w-fit sm:px-6"
          >
            Request a Free Quote
            <span className="relative size-[16px] shrink-0">
              <Image
                src="/images/services/civil/cta/arrow.svg"
                alt=""
                fill
                className="object-contain"
                sizes="16px"
              />
            </span>
          </a>
        </div>

        {/* Building on same gradient — no separate red layer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[200px] sm:h-[260px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/civil/cta/MidCTA.png"
            alt="Modern commercial building under construction"
            className="absolute left-1/2 bottom-0 h-[115%] w-[170%] max-w-none -translate-x-[46%] object-cover object-[center_30%] sm:w-[145%] sm:-translate-x-[48%]"
          />
        </div>
      </motion.div>

      {/* Desktop red box — 1706.67 × 345.33 */}
      <div
        className="relative mx-auto hidden overflow-visible rounded-[40px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:block"
        style={{
          width: CTA_WIDTH,
          height: CTA_HEIGHT,
          maxWidth: "100%",
        }}
      >
        {/* Image 32 — MidCTA.png, overflows above red card */}
        <motion.div
          className="pointer-events-none absolute z-[1] overflow-visible"
          style={{
            right: 0,
            bottom: -57,
            width: 976,
            height: 614,
          }}
          aria-hidden
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <Image
            src="/images/services/civil/cta/MidCTA.png"
            alt=""
            width={976}
            height={614}
            className="h-[614px] w-full max-w-none rounded-t-none rounded-br-[34px] rounded-bl-none object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 h-full"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          {/* Vertical divider — Figma 2488:5979 */}
          <span
            className="pointer-events-none absolute left-[6.87%] top-[12.36%] h-[76.45%] w-[2.7px] bg-white"
            aria-hidden
          />

          {/* Copy block — Figma 2488:5967 */}
          <div className="absolute left-[8.59%] top-[11.88%] flex h-[76.63%] w-[32.42%] min-w-0 flex-col">
            <div className="mb-1 flex items-center gap-2">
              <span className="relative h-[19.4px] w-[24.1px] shrink-0">
                <Image
                  src="/images/services/civil/cta/planning-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </span>
              <p className="text-base font-bold capitalize tracking-[1.2px] text-[#CCC6C6]">
                Planning <span className="lowercase">a</span>
              </p>
            </div>

            <h2 className="mt-1 w-[138%] max-w-none text-[clamp(28px,2.8vw,48px)] font-extrabold leading-[1.05] text-white xl:text-[48px] xl:leading-[50.52px]">
              Factory, Commercial Building,
              <br />
              or <span className="text-black">Industrial Building?</span>
            </h2>

            <p className="mt-3 w-[110%] text-[clamp(14px,1.1vw,18.67px)] font-medium leading-[1.22] tracking-[1.42px] text-[#CCC6C6] xl:text-[18.67px] xl:leading-[22.72px]">
              Get a free consultation and project blueprint from
              <br />
              Mekark&apos;s civil construction and structural engineering team.
            </p>

            <a
              href="/#enquiry"
              className="mt-auto inline-flex w-fit items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] text-base font-bold leading-[24.06px] text-[#E5091F] transition-transform hover:scale-[1.03]"
            >
              Request a Free Quote
              <span className="relative size-[18.8px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/civil/cta/arrow.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
