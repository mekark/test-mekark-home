"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterCta() {
  return (
    <section className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[360px] lg:min-h-[388px]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/industries/textile/footer/foot.png"
          alt="Textile factory floor"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,2,2,0.52) 0%, #020202 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[320px] items-center justify-center px-5 py-10 sm:min-h-[360px] sm:px-10 sm:py-12 lg:min-h-[388px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex w-full max-w-[1193px] flex-col items-center gap-6 text-center sm:gap-10"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal text-white sm:text-[36px] lg:text-[50px]">
              Ready to Build Your Textile Factory?
            </h2>
            <p className="max-w-[1080px] font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-normal text-[#E6E6E6] lg:text-[18px]">
              Only a limited number of new textile construction projects are
              onboarded each quarter. Tell us your requirements and our
              specialist will prepare a project estimate.
            </p>
          </div>

          <Link
            href="/#enquiry"
            className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-[30px] bg-[#ED2024] px-6 py-4 text-center text-base font-bold leading-snug text-white transition-colors duration-200 hover:bg-[#C4161C] sm:w-auto sm:px-10 sm:text-lg md:px-[90px] md:text-[20px] md:leading-[31.479px]"
          >
            <span className="text-balance">Request Free Project Estimate</span>
            <span className="relative size-[24.544px] shrink-0 overflow-hidden">
              <Image
                src="/images/industries/textile/footer/cta-arrow.svg"
                alt=""
                width={18}
                height={15}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
