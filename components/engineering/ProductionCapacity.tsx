import { ProductionDescription } from "@/components/engineering/ProductionDescription";
import { ProductionPlaque } from "@/components/engineering/ProductionPlaque";

export function ProductionCapacity() {
  return (
    <div className="mt-4 grid w-full min-w-0 grid-cols-1 items-center gap-4 sm:mt-6 sm:gap-6 lg:mt-8 xl:mt-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(18rem,1fr)] xl:items-stretch xl:gap-8 2xl:mt-8 2xl:grid-cols-[minmax(0,1.25fr)_minmax(22rem,1fr)] 2xl:gap-12">
      <ProductionPlaque />
      <ProductionDescription />
    </div>
  );
}
