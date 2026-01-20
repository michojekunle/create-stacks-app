export default function DocsPage() {
  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Complete guide to building production-ready Stacks applications with
          Create Stacks App.
        </p>
      </div>

      <section id="getting-started" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-blue-500">#</span> Getting Started
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Create Stacks App allows you to scaffold a new project in seconds. The
          CLI tool handles project structure, dependencies, and now
          **automatically checks and installs Clarinet** if missing.
        </p>

        <div className="bg-[#0c0c0c] border border-gray-800 rounded-xl p-6 font-mono text-sm relative group overflow-hidden">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-green-400">$</span>
            npx @devvmichael/create-stacks-app my-dapp
          </div>
          <div className="mt-4 text-gray-500">
            <div className="flex gap-2">
              <span className="text-blue-400">?</span>
              <span>Select smart contracts:</span>
            </div>
            <div className="pl-4 text-gray-400">
              ◉ Counter (Simple state management)
              <br />
              ◯ SIP-010 Token
              <br />◯ SIP-009 NFT
            </div>
          </div>
        </div>
      </section>

      <section id="structure" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-blue-500">#</span> Project Structure
        </h2>
        <p className="text-gray-400">
          Your generated project follows a strict monorepo structure designed
          for scalability:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6 bg-[#0c0c0c] hover:border-blue-500/30 transition-colors">
            <h3 className="font-bold text-white mb-2 font-mono">contracts/</h3>
            <p className="text-sm text-gray-400">
              Contains all Clarity smart contracts. Each template (Counter,
              Token, NFT) generates its own folder here.
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6 bg-[#0c0c0c] hover:border-blue-500/30 transition-colors">
            <h3 className="font-bold text-white mb-2 font-mono">frontend/</h3>
            <p className="text-sm text-gray-400">
              The application logic (Next.js/React/Vue). Contains separate
              pages, components, and Stacks hooks.
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6 bg-[#0c0c0c] hover:border-blue-500/30 transition-colors">
            <h3 className="font-bold text-white mb-2 font-mono">tests/</h3>
            <p className="text-sm text-gray-400">
              Vitest + Clarinet SDK tests for your smart contracts. Run with{" "}
              <code className="bg-gray-800 px-1 py-0.5 rounded text-xs">
                npm test
              </code>
              .
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6 bg-[#0c0c0c] hover:border-blue-500/30 transition-colors">
            <h3 className="font-bold text-white mb-2 font-mono">
              Clarinet.toml
            </h3>
            <p className="text-sm text-gray-400">
              Configuration for the Stacks blockchain environment, networks, and
              contract dependencies.
            </p>
          </div>
        </div>
      </section>

      <section id="hooks" className="scroll-mt-24 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-blue-500">#</span> Stacks Hooks (v8 API)
          </h2>
          <p className="text-gray-400 mb-6">
            We use the latest <strong>Stacks Connect v8</strong> API. No more
            legacy providers or complex session management.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0c0c0c] border border-gray-800 rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-gray-800 bg-gray-900/30 flex justify-between items-center">
              <span className="text-sm font-mono text-gray-400">
                use-stacks.ts
              </span>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                Authentication
              </span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                {`// Simplified authentication with Stacks Connect v8
export function useStacks() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = async () => {
    // Direct call - no window.open needed
    const response = await showConnect({
      appDetails: { name: 'My App', icon: '...' }
    });
    setAddress(response.addresses[0].address);
  };

  return { address, connect, disconnect: disconnectWallet };
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-gray-800 bg-gray-900/30 flex justify-between items-center">
              <span className="text-sm font-mono text-gray-400">
                use-contract-call.ts
              </span>
              <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                Transactions
              </span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                {`// Type-safe contract calls using 'request' API
export function useContractCall() {
  const call = async (functionName: string, args: any[]) => {
    await request('stx_callContract', {
      contract: 'ST1....counter',
      functionName,
      functionArgs: args,
      postConditions: []
    });
  };

  return { call };
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-blue-500">#</span> Features
        </h2>
        <p className="text-gray-400">
          Explore the full capabilities of Create Stacks App.
        </p>

        <div className="flex gap-4">
          <a
            href="/#features"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
          >
            View All Features
          </a>
          <a
            href="/#templates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg text-sm font-bold transition-colors"
          >
            Browse Templates
          </a>
        </div>
      </section>
    </div>
  );
}
