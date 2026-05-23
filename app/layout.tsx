import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vedant Yede — Frontend Developer",
  description:
    "Senior Frontend Developer with 5+ years of experience in React, Next.js, TypeScript, and Redux. Based in Pune, India.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Vedant Yede",
    "Pune",
  ],
  authors: [{ name: "Vedant Yede" }],
  openGraph: {
    title: "Vedant Yede — Frontend Developer",
    description:
      "Senior Frontend Developer with 5+ years of experience building high-performance, scalable, accessible web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
