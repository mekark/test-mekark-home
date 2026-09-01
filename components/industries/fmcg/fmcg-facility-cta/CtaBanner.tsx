"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideRight, fadeSlideUp } from "./motion";
import { IndustryMobileCtaBanner } from "@/components/industries/shared/IndustryMobileCtaBanner";
import { logisticsCtaWorkerAssets } from "@/components/industries/shared/logisticsCtaWorkerAssets";

export function CtaBanner() {
  return (
    <>
      <div className="lg:hidden">
        <IndustryMobileCtaBanner
          title="Planning an FMCG Manufacturing Facility in South India?"
          subtitle={
            <>
              Every week your production line isn&apos;t running is lost market
              share and a delayed product launch. Mekark&apos;s team will assess
              your process requirements, hygiene class, warehousing needs, and
              utility load, and deliver a transparent budgetary estimate within 24
              hours. No obligation, just honest expert advice.
            </>
          }
          buttonText="Request a Free Consultation"
          workerAlt="Mekark warehouse construction expert"
          assets={logisticsCtaWorkerAssets}
        />
      </div>

      <motion.div
        className="relative hidden overflow-hidden rounded-[24px] bg-gradient-to-br from-[#f01c22] to-[#8b0c11] sm:rounded-[32px] lg:block lg:h-[295px] lg:rounded-[40px]"
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      {/* Desktop decorative layer + engineer */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src="/images/industries/fmcg/fmcg-facility-cta/banner-accent-1.svg"
          alt=""
          width={180}
          height={180}
          className="absolute left-[154px] top-[38px] size-[180px]"
        />
        <Image
          src="/images/industries/fmcg/fmcg-facility-cta/banner-accent-2.svg"
          alt=""
          width={317}
          height={213}
          className="absolute left-[58px] top-[51px] h-[213px] w-[317px]"
        />

        <div className="absolute left-[-10px] top-[-28px] h-[323px] w-[491px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/images/industries/fmcg/fmcg-facility-cta/engineer.png"
              alt="Mekark engineer reviewing facility plans"
              width={491}
              height={467}
              className="absolute left-[10.55%] top-0 h-[144.52%] w-[78.89%] max-w-none"
            />
          </div>
        </div>

        <div className="absolute left-[66px] top-1/2 flex h-[150px] w-0 -translate-y-1/2 items-center justify-center">
          <div className="flex h-[150px] rotate-90 items-center justify-center">
            <Image
              src="/images/industries/fmcg/fmcg-facility-cta/banner-line.svg"
              alt=""
              width={150}
              height={3}
              className="h-px w-[150px]"
            />
          </div>
        </div>
      </div>

      {/* Desktop: flex centers content vertically within the 295px banner */}
      <div className="relative z-10 hidden h-[295px] w-full items-center lg:flex lg:pl-[26%] lg:pr-[5.5%] xl:pl-[447px]">
        <motion.div
          className="flex min-w-0 flex-1 flex-col gap-2.5"
          custom={0.1}
          variants={fadeSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="max-w-[836px] text-[44px] font-bold leading-[1.271] text-white">
            Planning an FMCG Manufacturing Facility in South India?
          </h2>
          <p className="max-w-[754px] text-lg font-medium leading-normal text-[#ccc6c6]">
            Every week your production line isn&apos;t running is lost market
            share and a delayed product launch. Mekark&apos;s team will assess
            your process requirements, hygiene class, warehousing needs, and
            utility load, and deliver a transparent budgetary estimate within 24
            hours. No obligation, just honest expert advice.
          </p>
        </motion.div>

        <motion.a
          href="/#enquiry"
          className="ml-8 inline-flex h-[79px] w-[391px] shrink-0 items-center justify-center gap-3.5 rounded-full bg-white px-[34px] py-5"
          custom={0.3}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="whitespace-nowrap text-[22px] font-bold leading-[34px] text-[#0e0e0e]">
            Request a Free Consultation
          </span>
          <span className="relative size-[27px] shrink-0 overflow-hidden">
            <Image
              src="/images/industries/fmcg/fmcg-facility-cta/arrow-icon.svg"
              alt=""
              width={27}
              height={27}
              className="size-full"
            />
          </span>
        </motion.a>
      </div>
    </motion.div>
    </>
  );
}
