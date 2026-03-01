"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ChevronRight } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export function Hero() {
  const command = "npx @devvmichael/create-stacks-app my-dapp";

  return (
    <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-stacks-orange text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stacks-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-stacks-orange"></span>
            </span>
            <span>Version 1.0 is Live</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Build Stacks Apps
            </span>
            <br />
            <span className="text-stacks-orange">Faster Than Ever</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl leading-relaxed">
            The ultimate CLI toolkit to scaffold production-ready{" "}
            <span className="text-white font-medium underline decoration-stacks-orange/30 underline-offset-4">
              Stacks
            </span>{" "}
            applications. Choose your frontend, pick a template, and start
            building in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center mb-12">
            <div className="group flex items-center justify-between gap-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-2xl font-mono text-sm text-gray-300 w-full sm:w-auto shadow-[0_0_50px_-12px_rgba(255,107,0,0.2)] hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="text-stacks-orange font-bold animate-pulse">
                  {">"}
                </span>
                <span className="text-gray-100 tracking-tight">{command}</span>
              </div>
              <CopyButton text={command} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#getting-started"
              className="bg-white text-black px-10 py-5 rounded-2xl font-bold shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-3 text-base group"
            >
              Get Started{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl font-bold border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-base flex items-center justify-center gap-3 shadow-sm group"
            >
              <Github className="w-5 h-5" /> Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-stacks-purple/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-stacks-orange/10 blur-[100px] rounded-full" />
    </section>
  );
}
