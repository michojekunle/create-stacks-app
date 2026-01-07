'use client';

import { Coins, Layers, Image as ImageIcon, Briefcase, TrendingUp } from 'lucide-react';

const templates = [
  {
    icon: Layers,
    title: 'Counter',
    description: 'Simple state management example. Perfect for learning the basics of Clarity.',
    tags: ['Beginner', 'State'],
  },
  {
    icon: Coins,
    title: 'SIP-010 Token',
    description: 'Full fungible token standard implementation with mint/burn functionality.',
    tags: ['DeFi', 'Standard'],
  },
  {
    icon: ImageIcon,
    title: 'SIP-009 NFT',
    description: 'Non-fungible token standard with metadata and marketplace integration.',
    tags: ['NFT', 'Standard'],
  },
  {
    icon: Briefcase,
    title: 'NFT Marketplace',
    description: 'Complete marketplace with listing, buying, and selling functionality.',
    tags: ['Advanced', 'Full Stack'],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: 'DeFi Dashboard',
    description: 'Yield farming dashboard with staking pools and reward calculation.',
    tags: ['Advanced', 'DeFi'],
    highlight: true,
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Start with a <span className="gradient-text">Template</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our growing library of production-ready templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <div
              key={i}
              className={`group p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                template.highlight
                  ? 'bg-white/5 border-stacks-purple/50 shadow-lg shadow-stacks-purple/10'
                  : 'bg-black/20 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${template.highlight ? 'bg-stacks-purple text-white' : 'bg-white/10 text-gray-400'}`}>
                  <template.icon className="w-6 h-6" />
                </div>
                {template.highlight && (
                  <span className="text-xs font-bold bg-stacks-purple/20 text-stacks-purple px-2 py-1 rounded-full border border-stacks-purple/20">
                    NEW
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-stacks-orange transition-colors">
                {template.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {template.description}
              </p>
              
              <div className="flex gap-2">
                {template.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/5">
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
