"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import { SERVICE_BODY_TEXT_CLASS_SCALED } from "@/components/services/serviceTypography";
import { SERVICE_END_TO_END_ASPECT_CLASS_SCALED } from "@/lib/sectionLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const paragraphs = [
  {
    text: "Mekark is a leading pre-engineered building (PEB) service provider and manufacturer in Chennai, delivering high-performance steel structures for industrial, commercial, and institutional projects across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Telangana.",
    maxWidth: "max-w-[641px]",
  },
  {
    text: "As a turnkey industrial EPC contractor, we handle the complete lifecycle: structural design, fabrication, supply, and on-site erection- so you work with one accountable partner instead of coordinating multiple vendors.",
    maxWidth: "max-w-[672px]",
  },
  {
    text: "70 lakh sq. ft. delivered and counting, backed by a 40,000 MT production capacity, one of the highest in Tamil Nadu. Every project is engineered by our 175+ member in-house team using ETABS, AutoCAD, STAAD Pro, and Tekla, under ISO-certified, green-certified processes",
    maxWidth: "max-w-[653px]",
  },
] as const;

export default function EndToEndPEB() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#E6E6E6] text-[#111111]"
      aria-labelledby="end-to-end-peb-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />

      <div className={`relative z-10 mx-auto flex w-full max-w-[1920px] flex-col px-5 py-10 sm:px-10 sm:py-14 lg:block lg:px-0 lg:py-0 ${SERVICE_END_TO_END_ASPECT_CLASS_SCALED}`}>
        {/* Copy — Figma: left 224, title top 85.33 */}
        <div className="contents lg:block lg:absolute lg:left-[11.67%] lg:top-[9.18%] lg:z-10 lg:w-[43.54%] lg:max-w-none">
          <motion.div
            className="order-1 lg:order-none"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <ServiceIntroTitle
              id="end-to-end-peb-title"
              beforeRed="End-to-End PEB Construction, "
              redPart="Under One Roof"
              scaledCanvas
            />
          </motion.div>

          <motion.div
            className={`order-3 mt-6 flex max-w-[672px] flex-col gap-5 sm:mt-[clamp(2rem,2.7vw,3.25rem)] sm:gap-[1.667rem] lg:order-none lg:max-w-none ${SERVICE_BODY_TEXT_CLASS_SCALED}`}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {paragraphs.map(({ text, maxWidth }) => (
              <motion.p key={text} variants={fadeUp} className={maxWidth}>
                {text}
              </motion.p>
            ))}

            <motion.p variants={fadeUp} className="max-w-[668px]">
              Whether you need a factory construction company, a warehouse
              construction company, or a structural steel fabrication company,
              Mekark combines manufacturing scale with engineering precision to
              deliver{" "}
              <br className="hidden lg:inline" />
              faster, safer, and more cost-effective builds than conventional
              construction.
            </motion.p>
          </motion.div>
        </div>

        {/* Visual — Figma absolute coords as % of 1920×929 */}
        <motion.div
          className="relative order-2 mt-5 aspect-[1054/703] w-full sm:mt-6 lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:aspect-auto"
          aria-hidden="true"
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/services/peb/about/construction-detail.png"
            alt=""
            width={602}
            height={752}
            className="pointer-events-none absolute z-0 hidden opacity-60 lg:left-[68.63%] lg:top-[-16.64%] lg:block lg:h-[80.92%] lg:w-[31.35%] lg:object-cover"
            sizes="(max-width: 1920px) 31vw, 602px"
          />

          <Image
            src="/images/services/peb/about/construction-base.png"
            alt=""
            width={1147}
            height={341}
            className="pointer-events-none absolute z-[1] hidden lg:left-[43.54%] lg:top-[51.36%] lg:block lg:h-[36.73%] lg:w-[59.73%] lg:object-contain"
            sizes="(max-width: 1920px) 60vw, 1147px"
          />

          <Image
            src="/images/services/peb/about/peb-building.png"
            alt=""
            width={1054}
            height={703}
            priority={false}
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-contain object-bottom lg:inset-auto lg:left-[45.14%] lg:top-[4.45%] lg:h-[75.61%] lg:w-[54.9%]"
            sizes="(max-width: 1023px) 92vw, (max-width: 1920px) 55vw, 1054px"
          />
        </motion.div>
      </div>
    </section>
  );
}
