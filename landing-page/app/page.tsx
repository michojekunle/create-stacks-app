import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Stacks App | Build Stacks Apps Faster",
  description:
    "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js, React, or Vue and Clarinet-tested smart contracts in seconds.",
  keywords: [
    "stacks",
    "blockchain",
    "web3",
    "scaffold",
    "generator",
    "cli",
    "next.js",
    "react",
    "vue",
    "clarity",
    "smart contracts",
    "create-stacks-app",
    "@devvmichael/create-stacks-app",
  ],
  authors: [{ name: "Michael Ojekunle" }],
  openGraph: {
    title: "Create Stacks App | Build Stacks Apps Faster",
    description:
      "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js, React, or Vue and Clarinet-tested smart contracts in seconds.",
    url: "https://create-stacksapp.vercel.app",
    siteName: "Create Stacks App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Create Stacks App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Stacks App | Build Stacks Apps Faster",
    description:
      "The fastest way to build full-stack applications on Stacks blockchain.",
    images: ["/og-image.png"],
    creator: "@michojekunle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-stacks-purple/30">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-white" />
            <span className="font-medium tracking-tight">
              Create <span className="text-gray-400">Stacks</span> App
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              className="text-white hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <CTA />
      <Footer />
    </main>
  );
}
