"use client";

import { ChevronRight, Rocket } from "lucide-react";
import { CopyButton } from "./copy-button";
import { motion } from "framer-motion";

export function CTA() {
  const command = "npx @devvmichael/create-stacks-app my-dapp";

  return (
    <section className="py-32 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-stacks-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-3 rounded-2xl bg-stacks-orange/10 mb-8"
          >
            <Rocket className="w-6 h-6 text-stacks-orange" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">
            Ready to Build Your <br />
            <span className="text-stacks-orange">Next Big Thing?</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
            Join developers building the future of the decentralized web on
            Stacks. Get started in seconds with our powerful CLI.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center justify-between gap-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-2xl font-mono text-sm text-gray-300 w-full md:w-auto shadow-2xl">
              <div className="flex items-center gap-4">
                <span className="text-stacks-orange font-bold font-mono">
                  {">"}
                </span>
                <span className="text-gray-100">{command}</span>
              </div>
              <CopyButton text={command} />
            </div>

            <a
              href="/docs"
              className="bg-white text-black px-10 py-4.5 rounded-2xl font-bold shadow-xl hover:-translate-y-1 hover:shadow-white/10 transition-all flex items-center gap-3 text-base whitespace-nowrap group"
            >
              Start Building{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm font-medium uppercase tracking-[0.2em]">
            Free & Open Source
          </p>
        </div>
      </div>
    </section>
  );
}
