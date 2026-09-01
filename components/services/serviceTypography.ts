/** Responsive body copy sizes (Manrope regular). */
export const SERVICE_BODY_TEXT_SIZES =
  "font-manrope text-[14px] font-normal leading-[22px] sm:text-[17px] sm:leading-[26px] lg:text-num-18_67 lg:leading-[26px]";

/** Standard body copy on light backgrounds (Civil WhyChooseMekark reference). */
export const SERVICE_BODY_TEXT_CLASS = `${SERVICE_BODY_TEXT_SIZES} text-black`;

/** Why Choose Mekark feature descriptions — Montserrat 16px / 25.33px / grey #555 (Figma grey/33). */
export const SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS =
  "font-montserrat text-base font-normal leading-num-25_33 text-[#555] text-left";

/** @deprecated Use SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS */
export const SERVICE_PEB_BENEFIT_DESCRIPTION_CLASS =
  SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS;

/** Figma intro title — 53.33px / 58.67px / -1.33px tracking (Multi-Storey reference). */
export const SERVICE_INTRO_TITLE_FIGMA_CLASS =
  "!font-bold !text-gray !text-[26px] !leading-[32px] !tracking-[-0.8px] sm:!text-[36px] sm:!leading-[42px] sm:!tracking-[-1px] lg:!text-[53.33px] lg:!leading-[58.67px] lg:!tracking-[-1.33px] lg:max-w-[977px]";

/** Mid-CTA title length — longer copy uses smaller clamp values. */
export type ServiceMidCtaTitleSize = "short" | "medium" | "long";

/** Responsive mid-CTA title sizes (Solar reference: 2.4vw desktop, ~1.45rem mobile). */
export const SERVICE_MID_CTA_TITLE_SIZE_CLASS: Record<
  ServiceMidCtaTitleSize,
  string
> = {
  short:
    "text-[clamp(1.3rem,4vw,1.5rem)] leading-[1.2] sm:text-[clamp(1.4rem,4.2vw,1.6rem)] lg:text-[clamp(1.4rem,2.05vw,2.65rem)] lg:leading-[1.2]",
  medium:
    "text-[clamp(1.25rem,3.7vw,1.45rem)] leading-[1.2] sm:text-[clamp(1.35rem,4vw,1.55rem)] lg:text-[clamp(1.4rem,2.15vw,2.55rem)] lg:leading-[1.2]",
  long:
    "text-[clamp(1.1rem,3.2vw,1.35rem)] leading-[1.2] sm:text-[clamp(1.2rem,3.4vw,1.45rem)] lg:text-[clamp(1.25rem,1.9vw,2.35rem)] lg:leading-[1.2]",
};
