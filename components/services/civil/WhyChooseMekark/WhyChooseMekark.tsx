"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import { SERVICE_BODY_TEXT_CLASS_SCALED } from "@/components/services/serviceTypography";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MOBILE_BODY_TEXT_CLASS =
  "relative inline-block w-full text-left font-manrope text-sm font-normal leading-normal text-black";

const mobileParagraphs = [
  "Mekark is among the premier civil construction companies and RCC contractors based out of Chennai, offering you resilient, code-compliant structures for all your industrial, commercial and institutional projects across Tamil Nadu and India.",
  "As a turnkey civil construction contractor, we manage the full project lifecycle: site assessment, structural design, RCC construction, MEP integration, and handover, giving you one accountable partner instead of multiple vendors. All our projects are designed by our in-house architects and structural designers, who use BIM-based structural analysis and formwork with an ISO-certified, safety-conscious approach.",
  "For your requirements of a civil construction company for commercial RCC construction, factory civil contractor or structural civil contractor for warehouses or shopping complexes, Mekark integrates engineering skills with project management skills for robust, safe and cost-efficient construction works. At Mekark, we also cater to site infrastructure works, roads, drainage works and utilities, making your land into a ready-to-use facility.",
] as const;

export default function WhyChooseMekark() {
  return (
    <section className="relative h-auto w-full shrink-0 overflow-hidden text-left font-manrope text-num-18_67 font-normal text-black [background:linear-gradient(269.25deg,#fff,rgba(255,255,255,0)),linear-gradient(#e6e6e6,#e6e6e6)] lg:h-[820px]">
      {/* Mobile / tablet — styles only; same content as desktop */}
      <div className="relative z-10 overflow-x-hidden bg-white lg:hidden">
        <div className="relative mx-auto max-w-[720px]">
          <div className="px-5 pt-12 sm:px-8 sm:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="relative inline-block w-full max-w-[342px] text-left font-manrope text-[28px] leading-8 font-bold tracking-normal text-[#111] sm:max-w-none sm:text-[36px]">
                <span className="block">End-to-End Civil &amp; RCC</span>
                <span className="block">Construction,</span>
                <span className="block text-red">Under One Roof</span>
              </h2>
            </motion.div>
          </div>

          {/* Figma Frame 567 — full-bleed mobile image composition */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6 aspect-[390/312] w-full overflow-hidden sm:mt-8"
          >
            {/* Blueprint base — Figma 7385:1059 */}
            <div
              className="pointer-events-none absolute top-[56.41%] left-[-16.41%] h-[50%] w-[149%] overflow-hidden"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/civil/why-choose/mobile-blueprint-layer.webp"
                alt=""
                className="absolute top-[-148.44%] left-[-6.66%] h-[290.08%] w-[129.51%] max-w-none"
              />
            </div>

            {/* Blueprint grid — Figma 7385:1060 */}
            <div
              className="pointer-events-none absolute top-0 left-[25%] h-[79.81%] w-[80.77%] overflow-hidden"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/civil/why-choose/mobile-building-layer.webp"
                alt=""
                className="size-full max-w-none object-cover"
              />
            </div>

            {/* Main building — Figma 7385:1061 */}
            <div className="absolute top-[3%] left-[-24%] h-[84%] w-[124%] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/civil/why-choose/mobile-building-main.webp"
                alt="Mekark RCC construction project with tower crane"
                className="size-full max-w-none object-cover object-[center_40%]"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col px-5 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {mobileParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`${MOBILE_BODY_TEXT_CLASS} ${
                  index < mobileParagraphs.length - 1 ? "mb-5 sm:mb-6" : ""
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop — Figma absolute layout */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute top-[83px] left-[221.33px] h-[628px] w-[836px] shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <ServiceIntroTitle
              className="lg:max-w-[836px]"
              beforeRed="End-to-End Civil & RCC Construction, "
              redPart="Under One Roof"
              scaledCanvas
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={`absolute top-[172px] left-[2.67px] flex w-[699px] flex-col gap-[26px] [word-break:break-word] ${SERVICE_BODY_TEXT_CLASS_SCALED}`}
          >
            <p className="w-[686px]">
              Mekark is among the premier civil construction companies and RCC
              contractor in Chennai, offering resilient, code-compliant
              structures for industrial, commercial, and institutional projects
              across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, Telangana,
              and pan-India.
            </p>
            <p>
              As a trusted RCC contractor in South India, we deliver structurally
              sound, IS-code compliant civil works, from foundations to complete
              building structures, for clients in Chennai, Coimbatore, Bangalore,
              Hyderabad, Vizag, and Kochi.
            </p>
            <p>
              Whether you need a civil construction company in Tamil Nadu, an RCC
              contractor in Chennai, or reliable industrial civil works across
              South India, Mekark brings engineering rigor and on-ground execution
              experience to every project, ensuring durable, code-compliant
              structures built to last.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-[-154.67px] left-[767px] h-[951.7px] w-[1153px] shrink-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            className="absolute top-[43px] left-[651px] h-[626px] w-[502px] shrink-0 object-cover opacity-50"
            src="/images/services/civil/why-choose/building-bg.webp"
            width={502}
            height={626}
            sizes="502px"
            alt="Commercial building under civil construction"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute top-[182.67px] left-0 h-[769px] w-[1153px] shrink-0 object-cover"
            src="/images/services/civil/why-choose/building-mask.webp"
            width={1153}
            height={769}
            alt="Mekark RCC construction project with tower crane"
          />
        </motion.div>

        <motion.div
          className="absolute right-[-131.7px] bottom-[-65.77px] flex h-[391.5px] w-[1160.7px] shrink-0 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="relative h-[341.33px] w-[1146.8px] shrink-0 overflow-hidden -rotate-[2.52deg]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none absolute top-[-148.44%] left-[-6.66%] h-[290.08%] w-[129.51%] max-w-none"
              src="/images/services/civil/why-choose/blueprint.webp"
              alt="Structural blueprint for civil construction"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
