'use client';

import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stacks-purple/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to build on <span className="text-stacks-orange">Stacks</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the future of Bitcoin layers.
            Get started in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-4 bg-black/50 border border-white/10 px-5 py-3 rounded-xl font-mono text-sm text-gray-300">
              <span className="text-green-400">$</span>
              npx create-stacks-app my-dapp
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm">
              Start Building <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
