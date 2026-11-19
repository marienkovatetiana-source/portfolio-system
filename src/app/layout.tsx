import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tetiana Marienkova — Portfolio",
  description:
    "UI/UX Designer & Front-end Developer. Websites for companies and entrepreneurs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
