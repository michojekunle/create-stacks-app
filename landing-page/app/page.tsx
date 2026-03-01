import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { Features } from "@/components/features";
import { Templates } from "@/components/templates";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { TechStack } from "@/components/tech-stack";

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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-white" />
            <span className="font-bold tracking-tight text-xl">
              Create <span className="text-stacks-orange">Stacks</span> App
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Templates
            </a>
            <a
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <TechStack />
      <Features />
      <HowItWorks />
      <Templates />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
