import {
  SERVICE_MID_CTA_TITLE_SIZE_CLASS,
  type ServiceMidCtaTitleSize,
} from "@/components/services/serviceTypography";

type ServiceMidCtaTitleProps = {
  id?: string;
  line1: string;
  line2: string;
  size?: ServiceMidCtaTitleSize;
  className?: string;
};

/** Two-line mid-CTA headline: white line 1, black line 2 (Solar reference). */
export function ServiceMidCtaTitle({
  id,
  line1,
  line2,
  size = "medium",
  className = "",
}: ServiceMidCtaTitleProps) {
  return (
    <h2
      id={id}
      className={`w-fit max-w-full font-extrabold ${SERVICE_MID_CTA_TITLE_SIZE_CLASS[size]} ${className}`.trim()}
    >
      <span className="block whitespace-nowrap text-white">{line1}</span>
      <span className="block whitespace-nowrap text-black">{line2}</span>
    </h2>
  );
}
