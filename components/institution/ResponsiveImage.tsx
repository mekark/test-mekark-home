import { getImageProps } from "next/image";
import { preload } from "react-dom";

const MOBILE_MEDIA = "(max-width: 767px)";
const DESKTOP_MEDIA = "(min-width: 768px)";

type ResponsiveImageProps = {
  /** Full-size source, served through the Next.js image optimizer. */
  src: string;
  /** Pre-compressed phone variant, served as-is. */
  mobileSrc: string;
  alt: string;
  sizes: string;
  quality?: number;
  className?: string;
  /** Above-the-fold (LCP) image: preloaded for the matching viewport. */
  priority?: boolean;
};

/**
 * Fill-style image that swaps in a small pre-compressed file on phones.
 * Only one candidate is downloaded, and only that one is preloaded.
 */
export function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  sizes,
  quality,
  className,
  priority = false,
}: ResponsiveImageProps) {
  const { props: desktop } = getImageProps({
    src,
    alt,
    sizes,
    quality,
    className,
    fill: true,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
  });
  const { props: mobile } = getImageProps({
    src: mobileSrc,
    alt,
    fill: true,
    unoptimized: true,
  });

  if (priority) {
    preload(mobile.src, {
      as: "image",
      fetchPriority: "high",
      media: MOBILE_MEDIA,
    });
    preload(desktop.src, {
      as: "image",
      fetchPriority: "high",
      imageSrcSet: desktop.srcSet,
      imageSizes: sizes,
      media: DESKTOP_MEDIA,
    });
  }

  const { srcSet: desktopSrcSet, ...img } = desktop;

  return (
    <picture>
      <source media={MOBILE_MEDIA} srcSet={mobile.src} />
      <source media={DESKTOP_MEDIA} srcSet={desktopSrcSet} sizes={sizes} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...img} />
    </picture>
  );
}
