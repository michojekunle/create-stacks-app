"use client";

import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx @devvmichael/create-stacks-app my-dapp";

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
                Create <span className="gradient-text">Stacks</span> App
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                The fastest way to build production-ready Stacks blockchain
                applications. Scaffold smart contracts, frontend, and tooling in
                seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a
                  href="#getting-started"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/docs"
                  className="border border-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-600 hover:text-white transition-colors text-sm flex items-center justify-center"
                >
                  Documentation
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start text-sm text-gray-500">
                <p>Open source · MIT License</p>
                <span className="w-1 h-1 rounded-full bg-gray-800" />
                <a
                  href="https://github.com/michojekunle/create-stacks-app/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 group"
                >
                  Contribute
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Glow effect behind terminal */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 rounded-2xl blur-xl opacity-70" />

              {/* Terminal container */}
              <div className="relative bg-[#0c0c0c] rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-blue-500/10">
                {/* Terminal header with macOS style buttons */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#0c0c0c]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-500 font-mono">
                      ~/projects — zsh
                    </span>
                  </div>
                  <div className="w-[52px]" /> {/* Spacer for symmetry */}
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm leading-relaxed bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
                  <div className="flex justify-between items-center mb-4 group">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400 font-semibold">
                        projects
                      </span>
                      <span className="text-gray-300">{command}</span>
                    </div>
                    <button
                      onClick={copyCommand}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-800 rounded-lg"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-gray-400"
                    >
                      <span className="text-cyan-400">?</span> Project name:{" "}
                      <span className="text-white font-medium">my-dapp</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-gray-400"
                    >
                      <span className="text-cyan-400">?</span> Frontend
                      framework:{" "}
                      <span className="text-white font-medium">Next.js</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-gray-400"
                    >
                      <span className="text-cyan-400">?</span> Smart contracts:{" "}
                      <span className="text-white font-medium">
                        Counter, Token, NFT
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                      className="pt-2"
                    >
                      <span className="text-yellow-400">⚡</span>{" "}
                      <span className="text-gray-500">
                        Installing dependencies...
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.2 }}
                      className="pt-2 text-green-400 font-medium"
                    >
                      ✓ Project created successfully!
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                      className="pt-4 border-t border-gray-800 mt-4"
                    >
                      <div className="text-gray-500 text-xs mb-2">
                        Next steps:
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-green-400">➜</span>
                        <span className="text-blue-400">my-dapp</span>
                        <span>npm run dev</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
