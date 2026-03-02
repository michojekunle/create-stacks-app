import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { Templates } from "@/components/templates";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { TechStack } from "@/components/tech-stack";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://create-stacksapp.vercel.app"),
  title: "Create Stacks App | Build Stacks Apps Faster",
  description:
    "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js or React and Clarinet-tested smart contracts in seconds.",
  keywords: [
    "stacks",
    "blockchain",
    "web3",
    "scaffold",
    "generator",
    "cli",
    "next.js",
    "react",
    "clarity",
    "smart contracts",
    "create-stacks-app",
    "@devvmichael/create-stacks-app",
  ],
  authors: [{ name: "Michael Ojekunle" }],
  openGraph: {
    title: "Create Stacks App | Build Stacks Apps Faster",
    description:
      "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js or React and Clarinet-tested smart contracts in seconds.",
    url: "https://create-stacksapp.vercel.app",
    siteName: "Create Stacks App",
    images: [
      {
        url: "/api/og",
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
      "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js or React and Clarinet-tested smart contracts in seconds.",
    images: ["/api/og"],
    creator: "@devvmichael",
  },
  alternates: {
    canonical: "https://create-stacksapp.vercel.app",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Create Stacks App",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "The fastest way to build full-stack applications on Stacks blockchain. Get started with Next.js or React and Clarinet-tested smart contracts in seconds.",
    creator: {
      "@type": "Person",
      name: "Michael Ojekunle",
      url: "https://twitter.com/devvmichael",
    },
    operatingSystem: "Any",
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-stacks-orange/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
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
