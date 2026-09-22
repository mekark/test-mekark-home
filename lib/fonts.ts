import { Manrope, Montserrat } from "next/font/google";

/** Primary site font — variable woff2 (400–800) in a single file. */
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

/** Accent numbers on service/industry pages only — loaded via route layouts. */
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});
