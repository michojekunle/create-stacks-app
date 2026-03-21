import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Create Stacks App",
  description:
    "History of all versions and updates for the Create Stacks App CLI and ecosystem.",
};

const versions = [
  {
    tag: "v0.2.43",
    date: "2026-03-21",
    title: "The sBTC & UI Update",
    highlights: [
      "Native sBTC integration (Peg-in/Peg-out flow logic)",
      "New `useSbtcBalance` and `useSbtcDeposit` hooks",
      "Optional shadcn/ui component library injection",
      "Enhanced CLI conditional scaffolding logic",
    ],
    changelog: `### Added
- **sBTC Integration**: Native support for Bitcoin-backed assets (sBTC) out of the box.
- **useSbtcBalance Hook**: Pre-configured hook to instantly fetch a user's sBTC balance.
- **useSbtcDeposit Hook**: End-to-end peg-in flow handling (P2TR, BTC transfer, Emily API).
- **shadcn/ui Support**: Optional shadcn/ui selection during CLI setup.

### Changed
- **sBTC Library**: Generated projects now include the \`sbtc\` npm package by default.
- **CLI Prompts**: Updated generator flow for UI framework selection.

### Fixed
- **Dependency Sync**: Locked Stacks.js v8+ and sBTC alpha dependencies for stability.
- **Flag Handling**: Fixed CLI bug where --no flags didn't skip dependent prompts.`,
  },
  {
    tag: "v0.2.42",
    date: "2026-02-28",
    title: "DeFi & Professional DX",
    highlights: [
      "Staking Pool & NFT Marketplace templates",
      "Vitest + Clarinet SDK testing suite",
      "Tailwind CSS v4 upgrade",
      "Explicit string network identifiers (v7+ standards)",
    ],
    changelog: `### Added
- **Contract Verification Rig**: Monorepo-wide contract testing suite.
- **New Templates**: Added Staking Pool and NFT Marketplace templates.
- **Intelligent Dependency Resolution**: Automated SIP trait inclusion.

### Changed
- **Ecosystem Upgrade**: Migrated to modern @stacks namespace.
- **Tailwind CSS v4**: Fully upgraded all frontend templates.

### Fixed
- **Contract Logic**: Resolved bugs in staking and marketplace templates.
- **Token Overflow**: Fixed SupplyOverflow bug in Token template.`,
  },
];

export default function ChangelogPage() {
  return (
    <>
      <div className="space-y-20 mt-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stacks-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Changelog
          </div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Releases
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
          The history of Create Stacks App and its journey to becoming the de
          facto scaffolding tool for Bitcoin L2 developers.
        </p>
      </div>

      <div className="space-y-24">
        {versions.map((v) => (
          <section key={v.tag} className="scroll-mt-24 space-y-10 group">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
                    {v.tag}
                  </span>
                  <span className="text-gray-500 text-sm font-mono tracking-widest">
                    {v.date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight group-hover:text-stacks-orange transition-colors duration-300">
                  {v.title}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                Release stable
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Highlights */}
              <div className="space-y-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Key Highlights
                </h4>
                <ul className="space-y-4">
                  {v.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 font-light leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stacks-orange shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Log */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 font-mono text-[13px] text-gray-400 leading-loose space-y-6 shadow-2xl relative overflow-hidden prose prose-invert prose-compact max-w-none">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">
                    changelog.md
                  </span>
                </div>
                <div className="whitespace-pre-wrap">{v.changelog}</div>
              </div>
            </div>

            {/* Spec Link */}
            <div className="pt-4 border-t border-white/5 flex justify-end">
              <Link
                href={`/docs/specs/${v.tag}`}
                className="text-xs text-stacks-orange hover:text-white transition-all flex items-center gap-2 group/link"
              >
                View Specification Document
                <span className="group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
