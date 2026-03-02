"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Terminal,
    title: "1. Scaffold",
    description:
      "Initialize your project with a single npx command. Pick your frontend framework and contract templates interactively.",
    code: "npx @devvmichael/create-stacks-app my-dapp",
  },
  {
    icon: Code2,
    title: "2. Develop",
    description:
      "Write Clarity smart contracts and build your frontend with pre-configured hooks, wallet integration, and Tailwind CSS.",
    code: "cd my-dapp && npm run dev",
  },
  {
    icon: Rocket,
    title: "3. Deploy",
    description:
      "Test contracts with Clarinet SDK and deploy to testnet or mainnet using the built-in CLI deploy command.",
    code: "npx @devvmichael/create-stacks-app deploy testnet",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 border-t border-gray-900 bg-black/50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
            How it <span className="text-stacks-orange">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Go from an idea to a live dApp in record time with our streamlined
            developer workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-gray-800 w-fit group-hover:bg-stacks-orange/10 group-hover:border-stacks-orange/20 transition-all duration-300">
                <step.icon className="w-8 h-8 text-white group-hover:text-stacks-orange transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                {step.description}
              </p>
              <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 font-mono text-sm text-gray-500 overflow-x-auto">
                <span className="text-stacks-orange mr-2">$</span>
                {step.code}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-stacks-orange/5 blur-[100px] -mr-32 -mt-32 rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Built-in Best Practices
              </h3>
              <div className="space-y-4">
                {[
                  "TypeScript first development",
                  "Stacks Connect v8 wallet hooks",
                  "Contract testing with Clarinet SDK + Vitest",
                  "Wallet integration out of the box",
                  "CLI commands for add & deploy",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-stacks-orange shrink-0" />
                    <span className="text-gray-300 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#050505] rounded-xl border border-gray-800 p-2 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] text-gray-600 font-mono uppercase tracking-widest ml-4">
                  Terminal - Create Stacks App
                </div>
              </div>
              <div className="p-4 font-mono text-xs md:text-sm text-gray-400 leading-relaxed overflow-x-auto">
                <div className="flex gap-3">
                  <span className="text-green-500">?</span>
                  <span>Project name:</span>
                  <span className="text-stacks-orange">my-dapp</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500">?</span>
                  <span>Select a frontend framework:</span>
                  <span className="text-stacks-orange">Next.js</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500">?</span>
                  <span>Select contracts:</span>
                  <span className="text-stacks-orange">Counter, Token</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500">?</span>
                  <span>Package manager:</span>
                  <span className="text-stacks-orange">pnpm</span>
                </div>
                <div className="mt-4 text-gray-600">Scaffolding project...</div>
                <div className="text-green-500">
                  ✔ Done! Your dApp is ready at ./my-dapp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
