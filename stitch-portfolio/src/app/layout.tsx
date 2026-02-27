import type { Metadata } from "next";
import { Chakra_Petch, Rajdhani } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morsalin Islam Alvee | Full-Stack Developer & AI Specialist",
  description: "Passionate Fullstack Developer & AI Specialist crafting intelligent digital universes.",
  keywords: ["Full-Stack Developer", "AI Specialist", "Next.js", "Portfolio", "Alvee0033"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${chakraPetch.variable} ${rajdhani.variable} font-sans antialiased text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
