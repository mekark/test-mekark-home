"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterCta() {
  return (
    <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
      <div className="relative min-h-[320px] w-full sm:min-h-[360px] lg:min-h-[388px]">
        <div className="absolute inset-0">
          <Image
            src="/images/industries/electronics/quote-cta/background.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgb(2, 2, 2) 0%, rgba(2, 2, 2, 0.52) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-[1624px] flex-col items-center justify-center gap-8 px-6 py-10 text-center sm:min-h-[360px] sm:gap-10 sm:py-12 lg:min-h-[388px] lg:gap-10">
          <motion.div
            className="flex w-full max-w-[1619px] flex-col items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="w-full max-w-[1619px] text-center font-manrope text-[28px] font-bold leading-tight tracking-[-1px] text-white sm:text-[36px] lg:text-[50px] lg:leading-[53px] xl:whitespace-nowrap">
              Ready to Start Your Electronics Manufacturing Facility Construction?
            </h2>
            <p className="mx-auto w-full max-w-[1206px] text-center font-manrope text-base font-normal leading-relaxed text-gainsboro sm:text-lg sm:leading-[25px] lg:max-w-[1206px]">
              Tell us your process requirements: cleanroom class, production
              size, location, and timeline. As a leading electronics
              manufacturing facility construction company and trusted cleanroom
              builder in South India, Mekark will have a preliminary design and
              estimate ready within 24 hours.
            </p>
          </motion.div>

          <motion.a
            href="/#enquiry"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-[30px] bg-[#ed2024] px-6 py-4 sm:w-auto sm:px-10 sm:py-4 md:px-[90px]"
          >
            <span className="font-manrope text-lg font-bold leading-[31px] text-white sm:text-xl">
              Request a Quote
            </span>
            <span className="relative size-[25px] shrink-0 overflow-hidden">
              <Image
                src="/images/industries/electronics/quote-cta/arrow.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
