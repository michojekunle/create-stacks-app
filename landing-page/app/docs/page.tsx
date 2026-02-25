import { CopyButton } from "@/components/copy-button";

export default function DocsPage() {
  return (
    <div className="space-y-16 mt-8">
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-stacks-orange to-stacks-orange drop-shadow-sm">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
          Everything you need to build next-generation Stacks applications.
        </p>
      </div>

      <section id="getting-started" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-gray-900 pb-2">
          <span className="text-stacks-orange">01.</span> Getting Started
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Create Stacks App provides the fastest pipeline for scaffolding
          full-stack Stacks apps. Run the scaffolding command to setup Next.js,
          React or Vue, alongside Clarity contracts. Clarinet is automatically
          detected and installed if missing.
        </p>

        <div className="bg-[#0c0c0c] border border-gray-800 rounded-xl font-mono text-sm relative overflow-hidden flex flex-col w-full max-w-3xl shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-800/80 bg-gray-900/30">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <CopyButton
              text="npx @devvmichael/create-stacks-app my-dapp"
              className="text-gray-400 bg-black/20"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-500">➜</span>
              <span className="text-white">~</span>
              npx @devvmichael/create-stacks-app my-dapp
            </div>
          </div>
        </div>
      </section>

      <section id="structure" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-gray-900 pb-2">
          <span className="text-stacks-orange">02.</span> Architecture Structure
        </h2>
        <p className="text-gray-400 font-light max-w-3xl">
          Projects are structured effectively to decouple frontend frameworks
          off the smart contracts, linked together via Clarinet orchestration.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {[
            {
              tag: "contracts/",
              desc: "Contains Clarity smart contracts (Counter, Token, NFT).",
            },
            {
              tag: "frontend/",
              desc: "Next.js, React, or Vue applications and Stacks connect hooks.",
            },
            { tag: "tests/", desc: "Vitest + Clarinet SDK typescript tests." },
            {
              tag: "Clarinet.toml",
              desc: "Network definitions and deployment environment vars.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-900 rounded-xl p-5 bg-black/20 hover:border-gray-700 hover:bg-[#0c0c0c] transition-colors"
            >
              <h3 className="font-semibold text-white mb-1 font-mono text-sm inline-block px-2 py-1 bg-white/5 rounded">
                {item.tag}
              </h3>
              <p className="text-sm text-gray-500 mt-3 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="hooks" className="scroll-mt-24 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
            <span className="text-stacks-orange">03.</span> Connect v8 Hooks
          </h2>
          <p className="text-gray-400 font-light max-w-3xl mb-6">
            Out of the box support for <strong>Stacks Connect v8</strong> APIs,
            stripping away older legacy window providers.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          <div className="bg-[#0c0c0c] border border-gray-800 rounded-xl overflow-hidden shadow-lg group">
            <div className="px-4 py-3 border-b border-gray-800 bg-gray-900/40 flex justify-between items-center transition-colors">
              <span className="text-sm font-mono text-gray-400">
                Authentication
              </span>
              <CopyButton
                text={`import { showConnect } from "@stacks/connect";\n\nawait showConnect({\n  appDetails: { name: 'My App', icon: '...' }\n});`}
              />
            </div>
            <div className="p-5 overflow-x-auto bg-black/40">
              <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                {`import { showConnect } from "@stacks/connect";

export async function connectWallet() {
  await showConnect({
    appDetails: { name: 'My App', icon: '...' }
  });
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-stacks-orange">04.</span> Ready?
        </h2>

        <div className="flex gap-4">
          <a
            href="/#templates"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-white/10"
          >
            Browse Scaffolds
          </a>
        </div>
      </section>
    </div>
  );
}
