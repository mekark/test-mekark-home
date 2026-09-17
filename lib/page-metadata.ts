import type { Metadata } from "next";

export const SITE_URL = "https://www.mekark.com";

export function createPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
  };
}
