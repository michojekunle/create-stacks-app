"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Code2, Box, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Go from zero to full-stack dApp in under 2 minutes with a single command. Environment variables and dependencies pre-configured.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Secure, audited smart contract templates for Tokens, NFTs, and more. Built with security best practices and Clarity standards.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    description:
      "Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and the latest Stacks.js libraries.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Box,
    title: "Monorepo Structure",
    description:
      "Organized Turborepo structure perfect for scaling. Keep your contracts and frontend in one place.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Smartphone,
    title: "Wallet Connect",
    description:
      "Pre-configured integration with Leather and Xverse wallets. Simple hooks for authentication and signing.",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    icon: Globe,
    title: "Multi-Network",
    description:
      "Seamless deployment scripts for Devnet, Testnet and Mainnet. Switch environments with a single flag.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 border-t border-gray-900 bg-black relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-stacks-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight"
          >
            The Ultimate{" "}
            <span className="text-stacks-orange">Developer Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Stop wasting time on configuration. Focus on building your dApp with
            our opinionated, battle-tested stack.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group"
            >
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
