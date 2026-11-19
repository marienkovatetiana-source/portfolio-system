import { DM_Sans, Inter } from "next/font/google";

// Display / UI font: headings, buttons, menu, badges.
// DM Sans has no Cyrillic subset on Google Fonts, so Cyrillic text in this
// font falls back to the system font (the site's first screen is English).
export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Text font: descriptions, captions, numbers.
// Cyrillic is requested explicitly: next/font loads Latin only by default.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});
