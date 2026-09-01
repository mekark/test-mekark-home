import type { ReactNode } from "react";

type ServiceMidCtaLineProps = {
  className?: string;
  /** Stretch with the copy block on mobile; fixed 264px on desktop. */
  stretch?: boolean;
};

const BASE_CLASS =
  "pointer-events-none shrink-0 border-r-[2.7px] border-solid border-white box-border w-0";

/** Figma mid-CTA left divider — 2.7px white, 264px height. */
export function ServiceMidCtaLine({
  className = "",
  stretch = false,
}: ServiceMidCtaLineProps) {
  return (
    <span
      aria-hidden
      className={
        stretch
          ? `${BASE_CLASS} absolute inset-y-0 left-0 ${className}`.trim()
          : `${BASE_CLASS} h-[264px] ${className}`.trim()
      }
    />
  );
}

/** Copy block with standardized left divider and padding. */
export function ServiceMidCtaCopy({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col pl-4 sm:pl-5 lg:pl-7 ${className}`.trim()}>
      <ServiceMidCtaLine stretch />
      {children}
    </div>
  );
}
