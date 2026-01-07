'use client';

import { Zap, Shield, Code2, Box, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Go from zero to full-stack dApp in under 2 minutes with a single command.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Secure, audited smart contract templates for Tokens, NFTs, and more.',
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Built with Next.js 14, TypeScript, Tailwind CSS, and Stacks.js.',
  },
  {
    icon: Box,
    title: 'Monorepo Ready',
    description: 'Organized structure perfect for scaling your application.',
  },
  {
    icon: Smartphone,
    title: 'Wallet Connect',
    description: 'Pre-configured integration with Leather and Xverse wallets.',
  },
  {
    icon: Globe,
    title: 'Multi-Network',
    description: 'Seamless deployment scripts for Testnet and Mainnet.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">ship faster</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop wasting time on configuration. Focus on building your dApp with our
            opinionated, battle-tested stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-stacks-purple/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-stacks-purple mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
