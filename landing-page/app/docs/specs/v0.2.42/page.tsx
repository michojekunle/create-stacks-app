import Link from "next/link";

export default function Spec0242Page() {
  return (
    <div className="space-y-16 mt-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stacks-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Specification — v0.2.42
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Professional DX & DeFi
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
          Technical specification for the DeFi templates, testing suites, and Tailwind CSS v4 migration.
        </p>
      </div>

      {/* Main Focus */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            01
          </span>
          DeFi & Asset Templates
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Introduction of production-ready smart contract templates that expand the ecosystem beyond simple tokens.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl pt-4">
           <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.01]">
              <h3 className="font-bold text-white mb-2">staking-pool.clar</h3>
              <p className="text-sm text-gray-400 font-light">
                 Implements reward distribution and unlock logic for SIP-010 token staking.
              </p>
           </div>
           <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.01]">
              <h3 className="font-bold text-white mb-2">nft-marketplace.clar</h3>
              <p className="text-sm text-gray-400 font-light">
                 Implements listing, bidding, and purchase logic for SIP-009 NFT trading.
              </p>
           </div>
        </div>
      </section>

      {/* DX Specification */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            02
          </span>
          Developer Experience (DX)
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Standardizing the testing and building pipelines using Clarinet SDK and Vitest.
        </p>
        <pre className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 font-mono text-sm text-gray-400 overflow-x-auto">
{`// vitest-contracts.config.ts
import { defineConfig } from "vitest/config";
import { vitestEnvironmentClarinet } from "vitest-environment-clarinet";

export default defineConfig({
  test: {
    environment: "clarinet",
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
});`}
        </pre>
      </section>

      {/* Navigation */}
       <div className="pt-12 border-t border-white/5">
        <Link href="/docs/changelog" className="text-sm text-gray-500 hover:text-white transition-colors">
           ← Back to Changelog
        </Link>
      </div>
    </div>
  );
}
