"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getPageTitle } from "@/lib/page-titles";

/**
 * Keeps `document.title` aligned with the active route after hydration.
 * Production prefetch/GTM can briefly overwrite head metadata with another page (often Civil).
 */
export function PageTitleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const expectedTitle = getPageTitle(pathname);
    if (!expectedTitle) {
      return;
    }

    const applyTitle = () => {
      if (document.title !== expectedTitle) {
        document.title = expectedTitle;
      }
    };

    applyTitle();

    const titleElement = document.querySelector("title");
    const observer = new MutationObserver(applyTitle);
    if (titleElement) {
      observer.observe(titleElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    const timeoutIds = [
      window.setTimeout(applyTitle, 0),
      window.setTimeout(applyTitle, 100),
      window.setTimeout(applyTitle, 500),
      window.setTimeout(applyTitle, 1500),
    ];

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [pathname]);

  return null;
}
