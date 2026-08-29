"use client";

import { SolutionsCallout } from "./SolutionsCallout";
import { SolutionsHeader } from "./SolutionsHeader";
import { SolutionsTimeline } from "./SolutionsTimeline";

export function OurSolutionsSection() {
  return (
    <section
      className="bg-[#f6f6f6] px-5 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-24 xl:px-16 2xl:px-20"
      aria-label="Our FMCG facility solutions"
    >
      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16">
        <div className="flex min-w-0 flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:gap-x-8 xl:gap-x-12">
          {/* Narrower on lg so the timeline column gets more width for larger cards */}
          <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-[300px] lg:pt-[80px] xl:w-[480px] xl:pt-[140px] 2xl:w-[654px] 2xl:pt-[218px]">
            <SolutionsHeader />
          </aside>

          <div className="min-w-0 w-full flex-1 lg:min-w-[720px] xl:min-w-[900px] 2xl:min-w-[1024px]">
            <SolutionsTimeline />
          </div>
        </div>

        <SolutionsCallout />
      </div>
    </section>
  );
}
