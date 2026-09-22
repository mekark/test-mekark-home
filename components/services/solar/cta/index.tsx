"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./index.module.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const Cta: NextPage = () => {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <>
      {/* Mobile — MEP CtaBanner pattern */}
      <section className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-4 py-8 sm:px-8 sm:py-10 lg:hidden">
        <motion.div
          className="relative mx-auto h-[487px] w-full max-w-[358px] overflow-hidden rounded-[20px] bg-[linear-gradient(94.75deg,#8B0C11_6.54%,#ED1D23_108.89%)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="relative z-10 flex flex-col gap-[14px] px-[21px] pt-6 text-left">
            <h2 className="w-full max-w-[315px] font-manrope text-[28px] font-extrabold leading-[35px] text-white">
              <span className="block">Planning a Solar Power</span>
              <span className="block">
                <span>Plant for </span>
                <span className="text-black">Your Factory</span>
              </span>
              <span className="block text-black">or Warehouse?</span>
            </h2>

            <p className="max-w-[315px] font-manrope text-sm font-normal leading-normal text-[#ccc6c6]">
              Get a free consultation and system estimate from Mekark&apos;s
              commercial solar engineering team.
            </p>

            <button
              type="button"
              onClick={openEnquiry}
              className="flex w-full max-w-[315px] cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-6 py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]"
            >
              Request a Free Quote
              <span className="relative size-[18.758px] shrink-0">
                <Image
                  src="/images/services/solar/CTA/component-4.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </button>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[215px] w-full overflow-hidden rounded-bl-[20px] rounded-br-[20px]">
            <Image
              src="/images/services/solar/CTA/solar-cta-1.webp"
              alt="Commercial solar project by Mekark"
              fill
              className="object-cover object-[center_35%]"
              sizes="358px"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Desktop */}
      <div className={`${styles.frameParent} !hidden lg:block`}>
        <div className={styles.sectionContainer}>
          <div className={styles.section2}>
            <ServiceMidCtaLine className="absolute left-[117px] top-[42.67px] z-[2] hidden lg:block" />
            <div className={styles.frameParent6}>
              <ServiceMidCtaCopy className="w-full gap-0 !pl-4 sm:!pl-5 lg:!pl-0 [&>span:first-child]:lg:hidden">
                <ServiceMidCtaTitle
                  line1="Planning a Solar Power Plant for"
                  line2="Your Factory or Warehouse?"
                  size="medium"
                  className="!max-w-full"
                  scaledCanvas
                />
                <p className={`mt-4 ${styles.getAFree}`}>
                  Get a free consultation and system estimate from
                  <br /> Mekark&apos;s commercial solar engineering team.
                </p>
                <button
                  type="button"
                  onClick={openEnquiry}
                  className={`mt-6 ${styles.cta}`}
                >
                  <span className={styles.requestAFree}>Request a Free Quote</span>
                  <div className={styles.component4}>
                    <Image
                      className={styles.vectorIcon}
                      fill
                      sizes="19px"
                      src="/images/services/solar/CTA/component-4.svg"
                      alt="Arrow icon"
                    />
                  </div>
                </button>
              </ServiceMidCtaCopy>
            </div>
            <div className={styles.layer2CopyCta1} />
            <div className={styles.sectionChild2} />
            <Image
              className={styles.solarCta1}
              width={786}
              height={415}
              sizes="100vw"
              src="/images/services/solar/CTA/solar-cta-1.webp"
              alt="Commercial solar project by Mekark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
