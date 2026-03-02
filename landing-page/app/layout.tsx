import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://create-stacksapp.vercel.app"),
  title: {
    template: "%s | Create Stacks App",
    default: "Create Stacks App - Build Stacks dApps in Minutes",
  },
  description:
    "The fastest way to build production-ready Stacks blockchain applications with Clarinet, Next.js, and React.",
  applicationName: "Create Stacks App",
  authors: [
    { name: "Michael Ojekunle", url: "https://twitter.com/devvmichael" },
  ],
  creator: "Michael Ojekunle",
  publisher: "Create Stacks App",
  keywords: ["stacks", "blockchain", "web3", "scaffold", "cli", "next.js"],
  robots: {
    index: true,
    follow: true,
  },
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
