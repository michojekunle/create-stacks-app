import { CounterInteraction } from "@/components/contracts/counter-interaction";

export default function Home() {
  return (
    <div className="space-y-24 py-20 pb-40">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[120px] sm:-top-80 pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-hiro-orange/20 to-brand-purple/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.187rem]"></div>
        </div>

        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hiro-orange shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Next.js + Clarity v2.0
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-hiro-orange via-brand-purple to-hiro-orange bg-clip-text text-transparent">
              on Stacks
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
            Elevate your Stacks development experience. A premium full-stack
            scaffold engineered for speed, security, and aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="btn-primary min-w-[180px]">
              Start Building
            </button>
            <button className="btn-secondary min-w-[180px]">
              Developer Docs
            </button>
          </div>
        </div>
      </div>

      {/* Contract Interaction */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Live Contract Interaction
          </h2>
          <p className="text-white/40 max-w-lg">
            Interact with your deployed smart contracts in real-time using our
            pre-built specialized hooks.
          </p>
        </div>
        <CounterInteraction />
      </div>

      {/* Quick Start Guide */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Ecosystem Quickstart
          </h2>
          <p className="text-white/40 max-w-lg">
            Everything you need to ship production-ready Bitcoin applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: "📝",
              title: "Edit Contracts",
              desc: "Modify your Clarity smart contracts in the root directory with instant feedback.",
              link: "contracts/",
              color: "orange",
            },
            {
              icon: "🧪",
              title: "Clarinet SDK Tests",
              desc: "Validate complex logic with automated tests using the next-gen Clarinet SDK.",
              link: "pnpm test",
              color: "purple",
            },
            {
              icon: "🚀",
              title: "Deploy Live",
              desc: "Push your contracts to the Stacks testnet or mainnet with automated plans.",
              link: "pnpm deploy:testnet",
              color: "orange",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`card ${item.color === "orange" ? "card-glow-orange" : "card-glow-purple"} group hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hiro-orange/10 transition-all duration-500">
                <span className="text-3xl transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/40 leading-relaxed mb-8 text-sm font-light">
                {item.desc}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <code className="text-[11px] bg-black/40 px-3 py-1.5 rounded-lg text-hiro-orange font-mono border border-white/5">
                  {item.link}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
