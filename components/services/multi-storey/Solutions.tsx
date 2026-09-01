"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import {
  SERVICE_BODY_TEXT_CLASS,
  SERVICE_INTRO_TITLE_FIGMA_CLASS,
} from "@/components/services/serviceTypography";

const paragraphs = [
  "Mekark is among the premier multi-storey building manufacturers in Chennai, offering fast-track, code-compliant steel structures for industrial, commercial, and institutional projects across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Telangana.",
  "As a leading multi-storey steel structure contractor in South India, we deliver rapid, IS-code compliant multi-level buildings for clients in Chennai, Coimbatore, Bangalore, Hyderabad, Vizag, and Kochi, combining speed of construction with structural durability.",
  "Whether you need a multi-storey building manufacturer in Tamil Nadu, a multi-storey steel structure company in Chennai, or fast-track multi-level construction across South India, Mekark brings manufacturing scale and in-house engineering precision to deliver builds faster and more efficiently than conventional construction methods.",
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
        <motion.div
          className="relative z-10 order-1 mb-4 px-5 pt-10 sm:mb-6 sm:px-8 lg:mb-[34px] lg:w-[50%] lg:min-w-[977px] lg:max-w-[980px] lg:px-0 lg:pt-[56px] lg:pl-[clamp(48px,11.7vw,224px)] lg:pr-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <ServiceIntroTitle
            className={SERVICE_INTRO_TITLE_FIGMA_CLASS}
            beforeRed="End-to-End Multi-Storey Steel Building"
            line2Prefix="Solutions, "
            redPart="Under One Roof"
          />
        </motion.div>

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
          <div className="flex max-w-[724px] flex-col gap-5 text-left">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className={`relative w-full max-w-[724px] shrink-0 ${SERVICE_BODY_TEXT_CLASS}`}
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
