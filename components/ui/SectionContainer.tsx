import type { ReactNode } from "react";
import {
  SECTION_CONTAINER_CLASS,
  SECTION_MAC_FULL_BLEED_CLASS,
} from "@/lib/sectionLayout";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  macFullBleed?: boolean;
};

export function SectionContainer({
  children,
  className,
  macFullBleed = false,
}: SectionContainerProps) {
  return (
    <div
      className={[
        SECTION_CONTAINER_CLASS,
        macFullBleed ? SECTION_MAC_FULL_BLEED_CLASS : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
