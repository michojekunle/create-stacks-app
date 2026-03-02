"use client";

import { motion } from "framer-motion";
import { Github, ChevronRight, Sparkles } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export function Hero() {
  const command = "npx @devvmichael/create-stacks-app my-dapp";

  return (
    <section className="relative pt-28 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[92vh]">
      {/* Background */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur-xl shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-stacks-orange" />
            <span className="text-stacks-orange">Open Source CLI Tool</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30">
              Build on Stacks.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-stacks-orange to-orange-400">
              Ship Faster.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 font-light mb-14 max-w-2xl leading-relaxed">
            Scaffold production-ready Stacks dApps with a single command.
            Pre-configured with your favorite frontend, Clarity contracts,
            wallet integration, and testing — all out of the box.
          </p>

          {/* Command */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center mb-12">
            <div className="group flex items-center justify-between gap-6 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] px-5 py-3.5 rounded-2xl font-mono text-sm text-gray-300 w-full sm:w-auto shadow-[0_0_80px_-20px_rgba(255,85,0,0.15)] hover:border-white/15 transition-all duration-500">
              <div className="flex items-center gap-3">
                <span className="text-stacks-orange font-bold text-xs">$</span>
                <span className="text-gray-200 tracking-tight text-[13px]">
                  {command}
                </span>
              </div>
              <CopyButton text={command} />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/docs"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold shadow-[0_16px_40px_-12px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.35)] transition-all flex items-center justify-center gap-2.5 text-sm group"
            >
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl font-bold border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm flex items-center justify-center gap-2.5 shadow-sm group"
            >
              <Github className="w-4 h-4" /> Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-stacks-purple/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-stacks-orange/8 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
