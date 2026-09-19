import { BackgroundWatermark } from "@/components/engineering/BackgroundWatermark";
import { EngineeringNumbersContent } from "@/components/engineering/EngineeringNumbersContent";
import { ProductionCapacity } from "@/components/engineering/ProductionCapacity";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function EngineeringNumbersSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-mekark-white text-black">
      <BackgroundWatermark />

      <SectionContainer
        macFullBleed
        className="relative pb-8 pt-8 font-[family-name:var(--font-manrope)] sm:pb-16 sm:pt-14 lg:pb-[70px] lg:pt-[61px] xl:pb-[46px] xl:pt-[46px] 2xl:pb-[70px] 2xl:pt-[61px]"
      >
        <div className="relative xl:px-[clamp(1.5rem,5vw,5rem)] 2xl:px-0">
          <EngineeringNumbersContent />
          <ProductionCapacity />
        </div>
      </SectionContainer>
    </section>
  );
}
