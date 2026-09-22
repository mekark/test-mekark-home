"use client";

import { useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { engineeringNumbers } from "@/data/engineering";
import { slideFromLeft } from "@/lib/motion-variants";

const headingClassName =
  "flex w-full max-w-[721px] flex-col items-center gap-4 lg:items-start lg:gap-0";

function MobileTitle({ title }: { title: string }) {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) {
    return <>{title}</>;
  }

  const line1 = words.slice(0, -1).join(" ");
  const line2 = words.at(-1) ?? "";

  return (
    <>
      {line1}
      <br />
      {line2}
    </>
  );
}

function EngineeringHeadingContent() {
  const { eyebrow, title } = engineeringNumbers;

  return (
    <>
      <div className="relative flex min-h-0 w-full items-center justify-center gap-3 lg:h-7 lg:justify-start xl:h-[21px]">
        <span
          className="h-px w-6 shrink-0 bg-red-200 lg:hidden"
          aria-hidden
        />
        <span
          className="hidden h-[2.7px] w-[53px] shrink-0 bg-red-200 lg:block xl:w-[40px]"
          aria-hidden
        />
        <p className="whitespace-nowrap text-[10px] font-semibold uppercase leading-[18px] tracking-[3px] text-[#828181] lg:ml-[15px] lg:text-[clamp(0.625rem,2.4vw,0.75rem)] lg:leading-none lg:tracking-[1.6px] xl:text-[12px] xl:leading-[20.8px] xl:tracking-[2px] 2xl:text-base 2xl:tracking-[2.67px]">
          {eyebrow}
        </p>
        <span
          className="h-px w-6 shrink-0 bg-red-200 lg:hidden"
          aria-hidden
        />
      </div>
      <h2 className="w-full text-center text-[28px] font-bold leading-[30px] text-black lg:mt-1 lg:text-left lg:text-[clamp(1.85rem,3vw,2.5rem)] lg:leading-[1.2] xl:text-[clamp(2rem,3.2vw,2.875rem)] xl:leading-[1.25] 2xl:whitespace-nowrap 2xl:text-[61.33px] 2xl:leading-[80px]">
        <span className="lg:hidden">
          <MobileTitle title={title} />
        </span>
        <span className="hidden lg:inline">{title}</span>
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
