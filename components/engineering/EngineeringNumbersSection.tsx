import { BackgroundWatermark } from "@/components/engineering/BackgroundWatermark";
import { EngineeringNumbersContent } from "@/components/engineering/EngineeringNumbersContent";
import { ProductionCapacity } from "@/components/engineering/ProductionCapacity";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function EngineeringNumbersSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-[#f5f5f5] text-black lg:bg-mekark-white">
      <BackgroundWatermark />

      <SectionContainer
        macFullBleed
        className="relative px-5 py-8 font-[family-name:var(--font-manrope)] lg:bg-mekark-white lg:px-[var(--section-padding-x)] lg:pb-[70px] lg:pt-[61px] xl:pb-[46px] xl:pt-[46px] 2xl:pb-[70px] 2xl:pt-[61px]"
      >
        <div className="relative flex flex-col items-center gap-5 lg:block xl:px-[clamp(1.5rem,5vw,5rem)] 2xl:px-0">
          <EngineeringNumbersContent />
          <ProductionCapacity />
        </div>
      </SectionContainer>
    </section>
  );
}
