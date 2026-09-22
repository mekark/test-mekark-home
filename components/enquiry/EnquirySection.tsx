"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { EnquiryFormCore } from "@/components/enquiry/EnquiryFormCore";
import {
  buildSolutionPrefill,
  resolveIndustryValue,
  resolveServiceValue,
} from "@/components/enquiry/enquiry-form-shared";
import {
  enquiryCopyItem,
  enquiryCopyReveal,
  enquiryFormReveal,
  enquiryHighlightItem,
  enquiryHighlightStagger,
  enquirySectionStagger,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const HIGHLIGHTS = [
  "200+ industrial projects delivered",
  "18+ years of structural expertise",
  "98% on-time project execution",
] as const;

function scrollToEnquirySection() {
  requestAnimationFrame(() => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

export function EnquirySection({
  projectAreas,
  defaultService,
}: {
  projectAreas?: readonly string[];
  defaultService?: string;
} = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const prefill = useMemo(() => {
    const params = new URLSearchParams(queryString);
    const industrySlug = params.get("industry");
    const industryLabel = params.get("industryLabel");
    const serviceSlug = params.get("service");
    const serviceLabel = params.get("serviceLabel");

    return {
      industry: resolveIndustryValue(industrySlug, industryLabel),
      service:
        resolveServiceValue(serviceSlug, serviceLabel) || defaultService || "",
      message: buildSolutionPrefill(industryLabel, serviceLabel),
    };
  }, [queryString, defaultService]);

  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === "#enquiry") {
        scrollToEnquirySection();
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, [pathname]);

  useEffect(() => {
    const params = new URLSearchParams(queryString);
    const industrySlug = params.get("industry");
    const industryLabel = params.get("industryLabel");
    const serviceSlug = params.get("service");
    const serviceLabel = params.get("serviceLabel");

    if (!industrySlug && !industryLabel && !serviceSlug && !serviceLabel) {
      return;
    }

    const nextIndustry = resolveIndustryValue(industrySlug, industryLabel);
    const nextService = resolveServiceValue(serviceSlug, serviceLabel);
    const prefill = buildSolutionPrefill(industryLabel, serviceLabel);

    if (nextIndustry || nextService || prefill) {
      router.replace(`${pathname}#enquiry`, { scroll: false });
      scrollToEnquirySection();
    }
  }, [pathname, router, queryString]);

  return (
    <section
      id="enquiry"
      className="relative w-full scroll-mt-28 overflow-hidden bg-[#0a0a0a] font-[family-name:var(--font-manrope)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/enquiry/div.absolute.webp"
          alt="Enquiry section background texture"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority={false}
        />
        <Image
          src="/images/enquiry/homeabout 1.webp"
          alt="Mekark industrial construction project"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.65)]" aria-hidden />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(16,16,16,0)_55%)]"
          aria-hidden
        />
      </div>

      <motion.div
        variants={enquirySectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`${SECTION_CONTAINER_CLASS} relative z-[1] flex flex-col items-center gap-8 max-lg:gap-6 max-lg:py-8 py-12 lg:min-h-0 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:py-14 xl:gap-10 xl:py-16 2xl:gap-14 2xl:py-[3vw]`}
      >
        <motion.div
          variants={enquiryCopyReveal}
          className="flex w-full shrink-0 flex-col max-lg:gap-3 lg:w-[min(100%,22rem)] xl:w-[min(34%,26rem)] 2xl:w-[min(30%,32rem)]"
        >
          <motion.p
            variants={enquiryCopyItem}
            className="text-[15px] font-extrabold uppercase leading-[22px] tracking-[3.73px] text-[#e40015] max-lg:text-[10px] max-lg:leading-[15px] max-lg:tracking-[1.2px] lg:text-[clamp(0.7rem,0.78vw,0.875rem)] lg:leading-normal lg:tracking-[0.2em]"
          >
            Start Your Project
          </motion.p>

          <motion.h2
            variants={enquiryCopyItem}
            className="mt-2 text-[clamp(2rem,4.2vw,3.73rem)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white max-lg:mt-0 max-lg:text-[28px] max-lg:leading-[30px] max-lg:tracking-normal lg:mt-3 lg:text-[clamp(2rem,2.8vw,3.73rem)] lg:leading-[1.1]"
          >
            <span className="block 2xl:whitespace-nowrap">
              Let&apos;s Build Your Next
            </span>
            <span className="block">Industrial Project.</span>
          </motion.h2>

          <motion.p
            variants={enquiryCopyItem}
            className="mt-2 max-w-[512px] text-[clamp(1rem,1.4vw,1.267rem)] leading-[1.75] text-white/80 max-lg:mt-0 max-lg:max-w-none max-lg:text-sm max-lg:leading-[22px] max-lg:text-white/80 lg:mt-3 lg:max-w-none lg:text-[clamp(0.9375rem,1.05vw,1.267rem)] lg:leading-[1.7]"
          >
            Partner with Mekark for high-quality, fast-track, and cost-efficient
            industrial construction solutions.
          </motion.p>

          <motion.ul
            variants={enquiryHighlightStagger}
            className="mt-4 flex flex-col gap-3 max-lg:mt-0 max-lg:gap-2.5 lg:mt-5 lg:gap-3"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={enquiryHighlightItem}
                className="flex items-center gap-3 max-lg:gap-2.5 sm:gap-4"
              >
                <span className="flex size-[27px] shrink-0 items-center justify-center rounded-full bg-[#ed2024] max-lg:size-6 lg:size-7 2xl:size-[1.3889vw]">
                  <Image
                    src="/images/enquiry/SVG.svg"
                    alt="Checkmark icon"
                    width={14}
                    height={11}
                    className="h-[10px] w-[13px] max-lg:h-[9px] max-lg:w-[11px]"
                    aria-hidden
                  />
                </span>
                <span className="text-[clamp(0.95rem,1.3vw,1.175rem)] font-semibold leading-[1.5] text-white/90 max-lg:text-sm max-lg:leading-[22px] lg:text-[clamp(0.9rem,0.98vw,1.175rem)]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={enquiryFormReveal}
          className="w-full max-w-[min(100%,52rem)] flex-1"
        >
          <EnquiryFormCore
            key={`${prefill.industry}-${prefill.service}-${prefill.message}`}
            defaultIndustry={prefill.industry}
            defaultService={prefill.service}
            defaultMessage={prefill.message}
            lockIndustry={Boolean(prefill.industry)}
            lockService={Boolean(prefill.service)}
            projectAreas={projectAreas}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
