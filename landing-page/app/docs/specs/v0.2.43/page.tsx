import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export default function Spec0243Page() {
  return (
    <div className="space-y-16 mt-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stacks-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Specification — v0.2.43
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          sBTC & SDK v8.x
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
          The technical specification document for the sBTC integration and Stacks.js v8.x architecture.
        </p>
      </div>

      {/* Overview */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            01
          </span>
          Protocol Overview
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          v0.2.43 introduces the core sBTC protocol handling into the CLI generator. The specification focuses on bridging Bitcoin onto Stacks using the sBTC Peg-in flow.
        </p>
      </section>

      {/* Key Components */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            02
          </span>
          New Components
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
           <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.01]">
              <h3 className="font-bold text-white mb-2">use-sbtc-balance.ts</h3>
              <p className="text-sm text-gray-400 font-light">
                 A standard hook that leverages the Hiro API read-only endpoints to fetch the sBTC balance from the official SIP-010 contract on testnet/mainnet.
              </p>
           </div>
           <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.01]">
              <h3 className="font-bold text-white mb-2">use-sbtc-deposit.ts</h3>
              <p className="text-sm text-gray-400 font-light">
                 Handles the complex P2TR address construction, Bitcoin transfer signing via Stacks Connect, and notification through the Emily API.
              </p>
           </div>
        </div>
      </section>

      {/* Integration Spec */}
      <section className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            03
          </span>
          Integration Specification
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          The CLI now injects the following configuration during the project build process if sBTC features are used:
        </p>
        <pre className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 font-mono text-sm text-gray-400">
{`// sBTC Contract Identity
const SBTC_CONTRACT = "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4";

// sBTC API Endpoint (Emily)
const SBTC_API_TESTNET = "https://api.testnet.hiro.so";
const SBTC_API_MAINNET = "https://api.mainnet.hiro.so";`}
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
