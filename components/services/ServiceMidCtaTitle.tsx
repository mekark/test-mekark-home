import {
  SERVICE_MID_CTA_TITLE_SIZE_CLASS,
  SERVICE_MID_CTA_TITLE_SIZE_CLASS_SCALED,
  type ServiceMidCtaTitleSize,
} from "@/components/services/serviceTypography";

type ServiceMidCtaTitleProps = {
  id?: string;
  line1: string;
  line2: string;
  size?: ServiceMidCtaTitleSize;
  className?: string;
  /** Skip iMac xl shrinks when parent uses DesignScale. */
  scaledCanvas?: boolean;
};

/** Two-line mid-CTA headline: white line 1, black line 2 (Solar reference). */
export function ServiceMidCtaTitle({
  id,
  line1,
  line2,
  size = "medium",
  className = "",
  scaledCanvas = false,
}: ServiceMidCtaTitleProps) {
  const sizeClass = scaledCanvas
    ? SERVICE_MID_CTA_TITLE_SIZE_CLASS_SCALED[size]
    : SERVICE_MID_CTA_TITLE_SIZE_CLASS[size];

  return (
    <h2
      id={id}
      className={`w-fit max-w-full font-extrabold ${sizeClass} ${className}`.trim()}
    >
      <span className="block whitespace-nowrap text-white">{line1}</span>
      <span className="block whitespace-nowrap text-black">{line2}</span>
    </h2>
  );
}
