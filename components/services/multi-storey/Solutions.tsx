"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const paragraphs = [
  "Mekark is among the premier multi-storey building manufacturers in Chennai, offering fast-track, code-compliant steel structures for industrial, commercial and institutional projects across Tamil Nadu.",
  "As a turnkey contractor, we manage the full project lifecycle: site assessment, structural design, fabrication, erection, MEP integration, and handover, one accountable partner instead of multiple vendors. Our in-house architects and engineers use BIM-based analysis and PEB technology for a safety-conscious, quality-first approach.",
  "Whether you need a building for corporate offices, an industrial facility, or a commercial complex, Mekark combines engineering expertise with project management discipline for robust, cost-efficient construction, including structural steel fabrication, space frame construction, and allied civil works.",
  "Every project starts with a site-specific structural study, so column spacing, floor loading, and wind and seismic factors are accounted for before fabrication begins. We source certified structural steel and work with fabricators who follow strict tolerance standards, keeping erection accurate and reducing rework, letting us scale from a compact two-floor office to a large multi-level facility without compromising integrity or timelines.",
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Solutions() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-gainsboro text-left text-[18.67px] text-black">
      {/* Figma: linear-gradient(269.25deg, #fff, rgba(255,255,255,0)) */}
      <div
        className="pointer-events-none absolute inset-0 shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(269.25deg, #fff, rgba(255, 255, 255, 0))",
        }}
      />

      <div className="relative mx-auto flex min-h-[640px] max-w-[1920px] flex-col lg:min-h-[828px]">
        <motion.h2
          className="relative z-10 order-1 mb-4 flex max-w-[977px] items-center px-5 pt-10 font-sans text-[28px] font-bold tracking-[-1px] leading-[1.15] text-gray sm:mb-6 sm:px-8 sm:text-[42px] sm:tracking-[-1.33px] lg:mb-[34px] lg:w-[46%] lg:max-w-[900px] lg:px-0 lg:pt-[56px] lg:pl-[clamp(48px,11.7vw,224px)] lg:pr-4 lg:text-[53.33px] lg:leading-[58.67px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="w-full">
            <span className="leading-[1.15] lg:leading-[58.67px]">
              End-to-End Multi-Storey Steel Building Solutions,{" "}
            </span>
            <span className="leading-[1.15] text-red lg:leading-[58.67px]">
              Under One Roof
            </span>
          </span>
        </motion.h2>

        {/* Visual — after heading on mobile; absolute on desktop */}
        <div className="pointer-events-none relative order-2 mx-auto -mt-1 h-[280px] w-full max-w-[520px] overflow-hidden sm:h-[360px] lg:absolute lg:inset-0 lg:mt-0 lg:h-full lg:max-w-none lg:w-full lg:overflow-visible">
          {/* Blueprint — Figma: w-full h-[752px] object-cover, 602×752 */}
          <motion.div
            className="absolute z-0 top-[-10%] right-0 w-[48%] lg:top-[-154.67px] lg:right-auto lg:left-[1317.77px] lg:w-[602px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <Image
              src="/images/services/multi-storey/solutions/blueprint.png"
              alt=""
              width={602}
              height={752}
              sizes="100vw"
              className="relative h-[752px] w-full max-w-full overflow-hidden object-cover"
            />
          </motion.div>

          {/* Steel frame — keep full structure visible (object-contain, no top crop) */}
          <motion.div
            className="absolute inset-0 z-[1] flex items-end justify-center lg:top-[78.33px] lg:right-0 lg:bottom-0 lg:left-[45%] lg:h-auto lg:w-[55%] lg:items-center lg:justify-start"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.1 }}
          >
            <Image
              src="/images/services/multi-storey/solutions/steel-frame-v2.png"
              alt="Multi-storey structural steel building frame"
              width={1112}
              height={741}
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="h-full w-full max-h-full object-contain object-right-bottom lg:object-left-top"
              priority
            />
          </motion.div>
        </div>

        {/* Copy — paragraphs below image on mobile */}
        <div className="relative z-10 order-3 px-5 pb-8 pt-6 sm:px-8 sm:pt-8 lg:w-[46%] lg:max-w-[900px] lg:px-0 lg:pb-16 lg:pt-0 lg:pl-[clamp(48px,11.7vw,224px)] lg:pr-4">
          <div className="flex max-w-[724px] flex-col gap-5 text-left sm:gap-6 lg:gap-[22px]">
            {paragraphs.map((text, index) => (
              <motion.p
                key={text.slice(0, 40)}
                className={`relative inline-block w-full shrink-0 font-inter text-[16px] leading-[24px] text-black sm:text-[18.67px] sm:leading-[26.67px] ${
                  [
                    "lg:h-20 lg:w-[724px]",
                    "lg:h-[134px] lg:w-[724px]",
                    "lg:h-[107px] lg:w-[724px]",
                    "lg:h-40 lg:w-[720px]",
                  ][index]
                }`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: easeOut,
                  delay: 0.08 + index * 0.06,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
