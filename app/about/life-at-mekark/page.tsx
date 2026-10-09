import type { Metadata } from "next";
import { LifeAtMekarkPage } from "@/components/about/life-at-mekark/LifeAtMekarkPage";
import dynamic from "next/dynamic";
import { RenderWhenNearViewport } from "@/components/ui/RenderWhenNearViewport";

const FooterSection = dynamic(() =>
  import("@/components/footer/FooterSection").then((mod) => mod.FooterSection),
);

export const metadata: Metadata = {
  title: "Life at Mekark — Mekark",
  description:
    "A glimpse into the people, moments, and everyday hustle that make Mekark what it is — explore our culture, team moments, and what makes working here special.",
};

export default function LifeAtMekarkRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <LifeAtMekarkPage />
      <RenderWhenNearViewport>
        <FooterSection />
      </RenderWhenNearViewport>
    </div>
  );
}
