import Image from "next/image";
import {
  DESKTOP_HERO_MEDIA_CLASS,
  HERO_MEDIA_SIZES,
  MOBILE_HERO_MEDIA_CLASS,
} from "@/components/hero/hero-data";

type HeroPosterProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/** Server-rendered LCP poster — paints in initial HTML before client hydration. */
export function HeroPoster({ src, alt, priority = false }: HeroPosterProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      sizes={HERO_MEDIA_SIZES}
      className={`${MOBILE_HERO_MEDIA_CLASS} origin-center ${DESKTOP_HERO_MEDIA_CLASS}`}
    />
  );
}
