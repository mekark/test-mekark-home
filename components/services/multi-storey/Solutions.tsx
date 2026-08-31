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
      <div
        className="pointer-events-none absolute inset-0 shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(269.25deg, #fff, rgba(255, 255, 255, 0))",
        }}
      />

      <div className="relative mx-auto flex min-h-[640px] max-w-[1920px] flex-col lg:min-h-[828px]">
        <motion.h2
          className="relative z-10 order-1 mb-4 max-w-[977px] px-5 pt-10 font-sans text-[clamp(1.5rem,4.8vw,3.33rem)] font-bold tracking-[-1px] leading-[1.12] text-gray sm:mb-6 sm:px-8 lg:mb-[34px] lg:w-[50%] lg:max-w-[980px] lg:px-0 lg:pt-[56px] lg:pl-[clamp(48px,11.7vw,224px)] lg:pr-4 lg:leading-[58.67px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="block md:whitespace-nowrap">
            End-to-End Multi-Storey Steel Building
          </span>
          <span className="block md:whitespace-nowrap">
            <span>Solutions, </span>
            <span className="text-red">Under One Roof</span>
          </span>
        </motion.h2>

        <div className="pointer-events-none relative order-2 mx-auto -mt-1 h-[280px] w-full max-w-[520px] overflow-hidden sm:h-[360px] lg:absolute lg:inset-0 lg:mt-0 lg:h-full lg:max-w-none lg:w-full lg:overflow-hidden">
          <motion.div
            className="absolute z-0 top-[-10%] right-0 w-[48%] lg:left-[68.63%] lg:top-[-16.64%] lg:right-auto lg:h-[80.92%] lg:w-[31.35%]"
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
              sizes="(max-width: 1920px) 31vw, 602px"
              className="relative h-full w-full overflow-hidden object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 z-[1] flex items-end justify-center lg:inset-auto lg:left-[48%] lg:top-[10%] lg:h-[86%] lg:w-[54%]"
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
              sizes="(max-width: 1024px) 90vw, 54vw"
              className="h-full w-full origin-right object-contain object-right-bottom lg:translate-x-[1.5%] lg:translate-y-[1.5%] lg:scale-[0.92] lg:object-right"
              priority
            />
          </motion.div>
        </div>

        <div className="relative z-10 order-3 px-5 pb-8 pt-6 sm:px-8 sm:pt-8 lg:w-[50%] lg:max-w-[980px] lg:px-0 lg:pb-16 lg:pt-0 lg:pl-[clamp(48px,11.7vw,224px)] lg:pr-4">
          <div className="flex max-w-[724px] flex-col gap-5 text-left sm:gap-6 lg:gap-[22px]">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="relative w-full max-w-[724px] shrink-0 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[24px] text-black sm:text-[18.67px] sm:leading-[26.67px]"
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
