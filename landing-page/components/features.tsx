"use client";

import { Zap, Shield, Code2, Box, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Go from zero to full-stack dApp in under 2 minutes with a single command.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Secure, audited smart contract templates for Tokens, NFTs, and more.",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    description:
      "Built with Next.js 14, TypeScript, Tailwind CSS, and Stacks.js.",
  },
  {
    icon: Box,
    title: "Monorepo Ready",
    description: "Organized structure perfect for scaling your application.",
  },
  {
    icon: Smartphone,
    title: "Wallet Connect",
    description: "Pre-configured integration with Leather and Xverse wallets.",
  },
  {
    icon: Globe,
    title: "Multi-Network",
    description: "Seamless deployment scripts for Testnet and Mainnet.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Stop wasting time on configuration. Focus on building your dApp with
            our opinionated, battle-tested stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-900 hover:border-gray-600 transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-white mb-4 group-hover:text-stacks-orange transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
