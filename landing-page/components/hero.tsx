"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export function Hero() {
  const command = "npx @devvmichael/create-stacks-app my-dapp";

  return (
    <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      <div className="absolute inset-0 hero-glow" />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-white/5 text-stacks-orange text-xs font-medium uppercase tracking-widest backdrop-blur-sm">
            <span>Clarinet Integrated</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text drop-shadow-sm">
              Create Stacks App
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl leading-relaxed">
            The fastest pipeline to build production-ready{" "}
            <span className="text-gray-200">Stacks</span> applications. Scaffold
            your next Web3 project in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10">
            <div className="flex items-center justify-between gap-6 bg-[#0c0c0c]/80 backdrop-blur-md border border-gray-800 px-6 py-4 rounded-xl font-mono text-sm text-gray-300 w-full sm:w-auto shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-stacks-orange">$</span>
                <span className="text-gray-100">{command}</span>
              </div>
              <CopyButton text={command} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#getting-started"
              className="bg-white text-black px-8 py-4 rounded-xl font-medium shadow-lg hover:-translate-y-0.5 hover:shadow-white/10 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/docs"
              className="px-8 py-4 rounded-xl font-medium border border-gray-800 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm flex items-center justify-center shadow-sm"
            >
              Read Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
