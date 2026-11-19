import type { Metadata } from "next";
import { dmSans, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tetiana Marienkova — UI/UX Designer & Front-end Developer",
  description:
    "I design and build websites for companies and entrepreneurs, so their services are easy to understand, find and choose online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
