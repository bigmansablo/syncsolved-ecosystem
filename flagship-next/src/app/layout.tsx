import type { Metadata } from "next";
import { Inter, Outfit, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velocity Architecture — THE EXIT FROM DEPENDENCY",
  description: "We encode founder expertise into autonomous deterministic infrastructure for founder-dependent businesses. Fixed assets that compound while you sleep.",
  keywords: ["Velocity Architecture", "Business Autonomy", "Founder Detachment", "Deterministic Infrastructure", "SyncSolved"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${robotoMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
