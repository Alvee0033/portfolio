import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

import BackgroundGrid from "@/components/BackgroundGrid";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morsalin Islam Alvee - Portfolio",
  description: "Full-Stack Developer & AI Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased bg-dark-bg text-white relative`}
      >
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
