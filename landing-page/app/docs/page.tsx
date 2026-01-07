export default function DocsPage() {
  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Complete guide to building production-ready Stacks applications with Create Stacks App.
        </p>
      </div>

      <section id="getting-started" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-stacks-purple">#</span> Getting Started
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Create Stacks App allows you to scaffold a new project in seconds. The CLI tool handles everything from project structure to smart contract integration.
        </p>
        
        <div className="bg-[#1E1E1E] border border-white/10 rounded-xl p-6 font-mono text-sm relative group">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-green-400">$</span>
            npx create-stacks-app my-dapp
          </div>
        </div>
      </section>

      <section id="navigation" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-stacks-purple">#</span> Project Navigation
        </h2>
        <p className="text-gray-400">
          Your generated project follows a strict monorepo-friendly structure designed for scalability.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="font-bold text-white mb-2">contracts/</h3>
            <p className="text-sm text-gray-400">
              Contains all your Clarity smart contracts. Each template (Counter, Token, NFT) generates its own file/folder here.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="font-bold text-white mb-2">frontend/</h3>
            <p className="text-sm text-gray-400">
              The Next.js, React, or Vue application. Contains your pages, components, and hooks.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="font-bold text-white mb-2">tests/</h3>
            <p className="text-sm text-gray-400">
              Vtest + Clarinet SDK tests for your smart contracts. Run with <code className="bg-black/50 px-1 py-0.5 rounded text-xs">npm test</code>.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="font-bold text-white mb-2">Clarinet.toml</h3>
            <p className="text-sm text-gray-400">
              Configuration for the Stacks blockchain environment and contract dependencies.
            </p>
          </div>
        </div>
      </section>

      <section id="hooks" className="scroll-mt-24 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-stacks-purple">#</span> Ready-Made Hooks
          </h2>
          <p className="text-gray-400 mb-6">
            We include pre-built hooks for common Stacks interactions. These are designed to be plug-and-play but easily customizable. 
            Find them in <code className="text-stacks-orange bg-white/5 px-2 py-1 rounded">frontend/hooks/</code>.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1E1E1E] border border-white/10 rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <span className="text-sm font-mono text-gray-400">use-stacks.ts</span>
              <span className="text-xs text-green-400">Authentication</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-300 leading-relaxed">
{`export function useStacks() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Automatically loads user session data if signed in
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      // Supports switching between testnet/mainnet addresses
      const network = process.env.NEXT_PUBLIC_NETWORK || 'testnet';
      setAddress(userData.profile.stxAddress[network]);
    }
  }, []);

  return { address, isConnected: !!address };
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1E1E1E] border border-white/10 rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <span className="text-sm font-mono text-gray-400">use-contract-call.ts</span>
              <span className="text-xs text-blue-400">Transactions</span>
            </div>
            <div className="p-4 overflow-x-auto">
               <pre className="text-sm font-mono text-gray-300 leading-relaxed">
{`export function useContractCall() {
  const { doContractCall } = useConnect();

  // Abstracted helper for typesafe calls
  const call = async (functionName: string, args: any[]) => {
    await doContractCall({
      contractAddress: CONFIG.CONTRACT_ADDRESS,
      contractName: CONFIG.CONTRACT_NAME,
      functionName,
      functionArgs: args,
      // ... settings
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
          <span className="text-stacks-purple">#</span> Features
        </h2>
        <p className="text-gray-400">
          Explore the full capabilities of Create Stacks App on our landing page.
        </p>
        
        <div className="flex gap-4">
          <a href="/#features" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-colors">
            View All Features
          </a>
          <a href="/#templates" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 rounded-lg text-sm font-bold transition-colors">
            Browse Templates
          </a>
        </div>
      </section>
      
      <div className="border-t border-white/10 pt-12 mt-12">
        <p className="text-gray-500 text-sm">
          Have questions? Join our <a href="#" className="text-stacks-orange hover:underline">Discord</a> community.
        </p>
      </div>
    </div>
  );
}
