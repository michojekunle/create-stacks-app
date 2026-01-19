import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Create Stacks App - Build Stacks dApps in Minutes",
  description:
    "The fastest way to build production-ready Stacks blockchain applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
