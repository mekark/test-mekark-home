import type { Metadata } from "next";

export const SITE_URL = "https://www.mekark.com";

export function createPageMetadata({
  title,
  description,
  pathname,
  canonicalUrl,
}: {
  title: string;
  description: string;
  pathname?: string;
  canonicalUrl?: string;
}): Metadata {
  const canonical =
    canonicalUrl ?? (pathname ? `${SITE_URL}${pathname}` : undefined);

  return {
    title: { absolute: title },
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
  };
}
