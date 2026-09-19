"use client";

import { useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { engineeringNumbers } from "@/data/engineering";
import { slideFromLeft } from "@/lib/motion-variants";

const headingClassName = "flex max-w-[721px] flex-col items-start";

function EngineeringHeadingContent() {
  return (
    <>
      <div className="relative flex h-7 min-w-0 items-center max-[350px]:h-6 xl:h-[21px]">
        <span
          className="h-[2.7px] w-[53px] shrink-0 bg-red-200 max-[350px]:w-8 xl:w-[40px]"
          aria-hidden
        />
        <p className="ml-[15px] whitespace-nowrap text-[clamp(0.625rem,2.4vw,0.75rem)] font-semibold uppercase leading-none tracking-[1.6px] text-[#828181] max-[350px]:ml-2 max-[350px]:tracking-[1px] sm:text-[clamp(0.7rem,1.6vw,0.875rem)] sm:tracking-[2px] xl:text-[12px] xl:leading-[20.8px] xl:tracking-[2px] 2xl:text-base 2xl:tracking-[2.67px]">
          {engineeringNumbers.eyebrow}
        </p>
      </div>
      <h2 className="mt-1 text-[clamp(1.35rem,5.5vw,1.75rem)] font-bold leading-[1.15] text-black sm:text-[clamp(1.75rem,3.5vw,2.25rem)] sm:leading-[1.2] lg:text-[clamp(1.85rem,3vw,2.5rem)] lg:leading-[1.2] xl:text-[clamp(2rem,3.2vw,2.875rem)] xl:leading-[1.25] 2xl:whitespace-nowrap 2xl:text-[61.33px] 2xl:leading-[80px]">
        {engineeringNumbers.title}{" "}
      </h2>
    </>
  );
}

function EngineeringHeadingAnimated() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={headingClassName}>
        <EngineeringHeadingContent />
      </div>
    );
  }

  return (
    <AnimatedSection variants={slideFromLeft} className={headingClassName}>
      <EngineeringHeadingContent />
    </AnimatedSection>
  );
}

export function EngineeringHeading() {
  return (
    <>
      <div className={`${headingClassName} xl:hidden`}>
        <EngineeringHeadingContent />
      </div>
      <div className="hidden xl:block">
        <EngineeringHeadingAnimated />
      </div>
    </>
  );
}
