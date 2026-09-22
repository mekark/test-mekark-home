/** Civil mobile typography & spacing — reuse on PEB and other service pages. */

export const MOBILE_HERO_TITLE_CLASS =
  "mx-auto max-w-[358px] text-[30px] leading-[35px]";

/** Service mobile hero description — Figma: 14px, Manrope regular, #4a4644, centered. */
export const MOBILE_HERO_DESCRIPTION_CLASS =
  "relative mx-auto inline-block w-full max-w-[358px] text-center font-manrope !text-sm !font-normal !leading-normal !text-[#4a4644]";

/** Service mobile hero title — Figma export: 30px / 35px, Manrope bold, #161616. */
export const SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS =
  "mx-auto w-full max-w-[358px] !text-[30px] !font-bold !leading-[35px] font-manrope text-[#161616] text-center";

/** PEB mobile hero title — Figma export: 30px / 35px, Manrope bold, #161616. */
export const PEB_MOBILE_HERO_TITLE_CLASS = SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS;

/** Multi-storey mobile hero title — same Figma title token. */
export const MULTI_STOREY_MOBILE_HERO_TITLE_CLASS =
  SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS;

export const PEB_MOBILE_HERO_DESCRIPTION_CLASS =
  "mx-auto max-w-[358px] !leading-[22px] text-[#666]";

/** PEB Why Choose — Figma 7385:819 description. */
export const PEB_WHY_CHOOSE_DESCRIPTION_CLASS =
  "w-full text-center font-manrope text-sm font-normal leading-[22px] text-[#111]";

/** Legacy alias for shared mobile-only blocks. */
export const PEB_WHY_CHOOSE_DESCRIPTION_MOBILE_CLASS =
  "max-lg:relative max-lg:inline-block max-lg:w-full max-lg:text-center max-lg:font-manrope max-lg:text-sm max-lg:font-normal max-lg:leading-[22px] max-lg:text-[#111]";

export const MOBILE_SECTION_TITLE_CENTER_CLASS =
  "font-manrope text-[28px] font-bold leading-[36px] text-[#111] text-center";

export const MOBILE_SECTION_TITLE_LEFT_CLASS =
  "font-manrope text-[28px] font-bold leading-[32px] text-[#111]";

export const MOBILE_INTRO_BODY_CLASS =
  "font-manrope text-sm font-normal leading-normal text-[#111] text-left";

/** End-to-end intro title — Figma mobile: 28px / 32px, 341px max-width. */
export const MOBILE_END_TO_END_TITLE_CLASS =
  "max-lg:!max-w-[341px] max-lg:!text-[28px] max-lg:!leading-8 max-lg:!font-bold max-lg:!tracking-normal";

export const MOBILE_CARD_CLASS =
  "flex w-full flex-col items-start gap-4 rounded-[20px] border border-solid border-[#e7e3e1] bg-white p-4 drop-shadow-[0px_6px_9px_rgba(0,0,0,0.03)]";

export const MOBILE_CARD_TITLE_CLASS =
  "font-manrope text-[18px] font-bold leading-[21px] text-[#3c3938]";

export const MOBILE_CARD_BODY_CLASS =
  "font-manrope text-sm font-normal leading-normal text-[#555]";

export const MOBILE_SOLUTIONS_CONTAINER_CLASS =
  "relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-start gap-6 px-5 py-8 sm:px-8 lg:hidden";

export const MOBILE_SOLUTIONS_GRID_CLASS =
  "flex w-full flex-col gap-[14px]";

export const MOBILE_SOLUTIONS_IMAGE_CLASS =
  "relative h-[180px] w-full shrink-0 overflow-hidden rounded-[16px]";

export const MOBILE_FEATURE_NUMBER_CLASS =
  "font-montserrat text-[40px] font-extrabold leading-[48px] tracking-[-2px] text-[#e50818]";

export const MOBILE_FEATURE_TITLE_CLASS =
  "font-manrope text-[18px] font-bold leading-[22px] text-[#3c3938]";

export const MOBILE_FEATURE_BODY_CLASS =
  "font-manrope text-sm font-normal leading-[22px] text-[#3c3938]";

/** PEB Why Choose benefit row — Figma 7385:827+. */
export const PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS =
  "flex w-full items-start gap-4 py-4 pr-4 drop-shadow-[0px_8px_12px_rgba(0,0,0,0.06)]";

export const MOBILE_PROCESS_TYPOGRAPHY = {
  headlineClass: MOBILE_SECTION_TITLE_CENTER_CLASS,
  stepLabelClass:
    "font-montserrat text-xs font-bold tracking-[1.5px] text-[#e50818]",
  stepTitleClass:
    "font-manrope text-[18px] font-bold leading-[21px] text-[#3c3938]",
  stepBodyClass: MOBILE_CARD_BODY_CLASS,
} as const;

export const MOBILE_MID_CTA = {
  cardClass:
    "relative mx-auto h-[478px] w-full max-w-[358px] overflow-hidden rounded-[20px] bg-[linear-gradient(94.75deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:hidden",
  contentClass: "absolute inset-x-6 top-6 z-10 flex flex-col gap-[18px]",
  titleClass:
    "w-full max-w-[320px] font-manrope text-[28px] font-extrabold leading-[32px] text-white",
  descriptionClass:
    "font-manrope text-sm font-medium leading-normal text-[#ccc6c6]",
  buttonClass:
    "flex w-full cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-6 py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]",
} as const;

export const MOBILE_FAQ_SECTION_CLASS =
  "relative box-border flex w-full flex-col items-start overflow-hidden bg-white px-4 py-8 text-left font-manrope text-[#111] lg:px-[106.7px] lg:py-[93.3px] lg:text-[53.33px]";

export const MOBILE_FAQ_TITLE_CLASS =
  "relative w-full max-w-[1480px] text-center font-manrope text-[28px] font-bold leading-[36px] text-[#111] lg:h-[66px] lg:text-[53.33px] lg:leading-[65.33px] lg:tracking-[-1.33px]";

export const MOBILE_FAQ_CARD_CLASS =
  "flex w-full flex-col self-stretch overflow-hidden rounded-[12px] border border-solid border-[#E3E4E7] bg-white p-4 lg:rounded-[20.78px] lg:p-0 lg:px-[24.9px]";

export const MOBILE_FAQ_NUMBER_CLASS =
  "w-6 shrink-0 font-montserrat text-sm font-bold leading-[16.624px] tracking-[-0.4675px] text-[#E60F1A] lg:w-auto lg:text-num-16 lg:leading-[16.62px] lg:tracking-[-0.47px]";

export const MOBILE_FAQ_QUESTION_CLASS =
  "font-manrope text-base font-medium leading-normal text-[#101116] lg:text-[18.67px] lg:font-semibold lg:leading-[26.67px] lg:tracking-[-0.47px]";

export const MOBILE_FAQ_ANSWER_CLASS =
  "pb-0 pl-9 pr-0 font-manrope text-sm font-normal leading-normal text-[#53555B] lg:pb-[20.8px] lg:pl-[calc(1em+16.6px)] lg:pr-2 lg:text-num-16 lg:leading-[1.65] lg:text-dimgray";
