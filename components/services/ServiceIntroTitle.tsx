type ServiceIntroTitleProps = {
  beforeRed: string;
  redPart: string;
  className?: string;
  id?: string;
  /** When false, keeps the red phrase on the same line as the lead text. */
  redOnNewLine?: boolean;
  /** Gray text on line 2 before the red phrase (requires redOnNewLine). */
  line2Prefix?: string;
  /**
   * When true, skip PEB iMac (`xl:`) shrinks — parent uses CSS scale
   * (Civil DesignScale) so typography stays at the 1920 Figma size.
   */
  scaledCanvas?: boolean;
};

function getTitleStyles(beforeRed: string, scaledCanvas: boolean) {
  const len = beforeRed.length;

  if (len <= 32) {
    return scaledCanvas
      ? {
          size: "!text-[26px] sm:!text-[40px] lg:!text-[52px]",
          width: "!max-w-[11em] lg:!max-w-[12em]",
        }
      : {
          size: "!text-[26px] sm:!text-[40px] lg:!text-[52px] xl:!text-[40px] xl:!leading-[44px] 2xl:!text-[52px] 2xl:!leading-[1.18]",
          width: "!max-w-[11em] lg:!max-w-[12em] xl:!max-w-[10em] 2xl:!max-w-[12em]",
        };
  }
  if (len <= 42) {
    return scaledCanvas
      ? {
          size: "!text-[24px] sm:!text-[36px] lg:!text-[48px]",
          width: "!max-w-[11em] lg:!max-w-[12.5em]",
        }
      : {
          size: "!text-[24px] sm:!text-[36px] lg:!text-[48px] xl:!text-[36px] xl:!leading-[44px] 2xl:!text-[48px] 2xl:!leading-[1.18]",
          width: "!max-w-[11em] lg:!max-w-[12.5em] xl:!max-w-[10.5em] 2xl:!max-w-[12.5em]",
        };
  }
  if (len <= 52) {
    return scaledCanvas
      ? {
          size: "!text-[22px] sm:!text-[32px] lg:!text-[42px]",
          width: "!max-w-[11.5em] lg:!max-w-[13em]",
        }
      : {
          size: "!text-[22px] sm:!text-[32px] lg:!text-[42px] xl:!text-[32px] 2xl:!text-[42px]",
          width: "!max-w-[11.5em] lg:!max-w-[13em] xl:!max-w-[11em] 2xl:!max-w-[13em]",
        };
  }
  return scaledCanvas
    ? {
        size: "!text-[20px] sm:!text-[30px] lg:!text-[38px]",
        width: "!max-w-[12em] lg:!max-w-[13.5em]",
      }
    : {
        size: "!text-[20px] sm:!text-[30px] lg:!text-[38px] xl:!text-[30px] 2xl:!text-[38px]",
        width: "!max-w-[12em] lg:!max-w-[13.5em] xl:!max-w-[11.5em] 2xl:!max-w-[13.5em]",
      };
}

export function ServiceIntroTitle({
  beforeRed,
  redPart,
  className = "",
  id,
  redOnNewLine = true,
  line2Prefix,
  scaledCanvas = false,
}: ServiceIntroTitleProps) {
  const { size, width } = getTitleStyles(beforeRed, scaledCanvas);

  return (
    <h2
      id={id}
      className={`text-left font-manrope !font-semibold !leading-[1.18] tracking-[-0.03em] !text-gray ${size} ${redOnNewLine ? "!max-w-none" : width} ${className}`}
    >
      {redOnNewLine ? (
        line2Prefix ? (
          <>
            <span className="block lg:whitespace-nowrap">{beforeRed.trimEnd()}</span>
            <span className="block lg:whitespace-nowrap">
              {line2Prefix}
              <span className="text-red">{redPart}</span>
            </span>
          </>
        ) : (
          <>
            <span>{beforeRed.trimEnd()}</span>
            <br />
            <span className="text-red">{redPart}</span>
          </>
        )
      ) : (
        <>
          <span>{beforeRed}</span>
          <span className="text-red">{redPart}</span>
        </>
      )}
    </h2>
  );
}
