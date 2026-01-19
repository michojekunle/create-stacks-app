import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Templates } from "@/components/templates";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

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
    url: "https://create-stacks-app.com",
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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-stacks-purple to-stacks-orange" />
            <span className="font-bold text-lg">Create Stacks App</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#templates" className="hover:text-white transition-colors">
              Templates
            </a>
            <a href="/docs" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              className="text-white hover:text-stacks-purple transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Templates />
      <CTA />
      <Footer />
    </main>
  );
}
