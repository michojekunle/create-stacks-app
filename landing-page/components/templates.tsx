"use client";

import { motion } from "framer-motion";
import {
  Coins,
  Layers,
  Image as ImageIcon,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const templates = [
  {
    icon: Layers,
    title: "Counter",
    description:
      "Simple state management example. Perfect for learning the basics of Clarity and Stacks data storage.",
    tags: ["Beginner", "State"],
  },
  {
    icon: Coins,
    title: "SIP-010 Token",
    description:
      "Full fungible token standard implementation with mint, burn, and transfer functionality.",
    tags: ["DeFi", "Standard"],
  },
  {
    icon: ImageIcon,
    title: "SIP-009 NFT",
    description:
      "Non-fungible token standard with metadata, royalties, and marketplace integration hooks.",
    tags: ["NFT", "Standard"],
  },
  {
    icon: Briefcase,
    title: "NFT Marketplace",
    description:
      "Complete marketplace architecture with listing, buying, selling, and price discovery.",
    tags: ["Advanced", "Full Stack"],
  },
  {
    icon: TrendingUp,
    title: "DeFi Dashboard",
    description:
      "Yield farming dashboard with staking pools, reward calculation, and TVL tracking.",
    tags: ["Advanced", "DeFi"],
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-24 border-t border-gray-900 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight"
          >
            Starter <span className="text-stacks-orange">Templates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Choose from our growing library of production-ready templates. All
            templates are Clarinet-ready and easy to customize.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:bg-stacks-orange/10 group-hover:text-stacks-orange transition-all duration-300">
                <template.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {template.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {template.description}
              </p>

              <div className="flex gap-2 mt-auto">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
