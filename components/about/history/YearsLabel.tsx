"use client";

type YearsLabelProps = {
  className?: string;
};

export function YearsLabel({ className }: YearsLabelProps) {
  return (
    <svg
      viewBox="0 0 92 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      overflow="visible"
      className={className}
      aria-hidden
    >
      <defs>
        <path
          id="history-years-curve"
          d="M 20 76 A 30 30 0 0 1 76 64"
        />
      </defs>
      <text
        fill="white"
        fontFamily="Manrope, sans-serif"
        fontSize="8.8"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        <textPath
          href="#history-years-curve"
          xlinkHref="#history-years-curve"
          startOffset="50%"
          textAnchor="middle"
        >
          YEARS
        </textPath>
      </text>
    </svg>
  );
}
