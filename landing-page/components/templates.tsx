"use client";

import {
  Coins,
  Layers,
  Image as ImageIcon,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const templates = [
  {
    icon: Layers,
    title: "Counter",
    description:
      "Simple state management example. Perfect for learning the basics of Clarity.",
    tags: ["Beginner", "State"],
  },
  {
    icon: Coins,
    title: "SIP-010 Token",
    description:
      "Full fungible token standard implementation with mint/burn functionality.",
    tags: ["DeFi", "Standard"],
  },
  {
    icon: ImageIcon,
    title: "SIP-009 NFT",
    description:
      "Non-fungible token standard with metadata and marketplace integration.",
    tags: ["NFT", "Standard"],
  },
  {
    icon: Briefcase,
    title: "NFT Marketplace",
    description:
      "Complete marketplace with listing, buying, and selling functionality.",
    tags: ["Advanced", "Full Stack"],
  },
  {
    icon: TrendingUp,
    title: "DeFi Dashboard",
    description:
      "Yield farming dashboard with staking pools and reward calculation.",
    tags: ["Advanced", "DeFi"],
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-24 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Templates</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose from our growing library of production-ready templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-gray-900 hover:border-blue-500/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                <template.icon className="w-5 h-5 text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {template.description}
              </p>

              <div className="flex gap-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-gray-900 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
