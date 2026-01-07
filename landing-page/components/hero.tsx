'use client';

import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = 'npx create-stacks-app my-dapp';

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Create <span className="gradient-text">Stacks App</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                The fastest way to build production-ready Stacks blockchain applications.
                Scaffold smart contracts, frontend, and tooling in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <a href="/docs" className="bg-gray-900 text-white border border-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors text-sm flex items-center">
                  View Documentation
                </a>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-black" />
                  ))}
                </div>
                <p>Trusted by 1000+ developers</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1E1E1E] rounded-xl border border-gray-800 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#252525]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-2 text-xs text-gray-400 font-mono">bash</div>
              </div>
              
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex justify-between items-center mb-4 group">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">{command}</span>
                  </div>
                  <button
                    onClick={copyCommand}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-800 rounded"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>

                <div className="space-y-2 text-gray-400">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-blue-400">?</span> Project name: <span className="text-white">my-dapp</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="text-blue-400">?</span> Frontend framework: <span className="text-white">Next.js</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <span className="text-blue-400">?</span> Smart contracts: <span className="text-white">Counter, Token, NFT</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="pt-4 text-green-400"
                  >
                    ✓ Project created successfully!
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                  >
                    <span className="text-blue-400">Ready to build?</span>
                    <br />
                    $ cd my-dapp
                    <br />
                    $ npm run dev
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
