"use client";

import { ChevronRight, Rocket } from "lucide-react";
import { CopyButton } from "./copy-button";
import { motion } from "framer-motion";

export function CTA() {
  const command = "npx @devvmichael/create-stacks-app my-dapp";

  return (
    <section className="py-32 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-stacks-orange/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex p-3.5 rounded-2xl bg-stacks-orange/10 mb-8"
          >
            <Rocket className="w-6 h-6 text-stacks-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter"
          >
            Ready to Build Your <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-stacks-orange to-orange-400">
              Next Big Thing?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Join developers building the future of the decentralized web on
            Stacks. Scaffold your dApp in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <div className="flex items-center justify-between gap-6 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] px-5 py-3.5 rounded-2xl font-mono text-sm text-gray-300 w-full md:w-auto shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-stacks-orange font-bold text-xs">$</span>
                <span className="text-gray-200 text-[13px]">{command}</span>
              </div>
              <CopyButton text={command} />
            </div>

            <a
              href="/docs"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-white/10 transition-all flex items-center gap-2.5 text-sm whitespace-nowrap group"
            >
              Start Building
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-gray-600 text-xs font-bold uppercase tracking-[0.25em]"
          >
            Free & Open Source · MIT Licensed
          </motion.p>
        </div>
      </div>
    </section>
  );
}
