import { useState, useEffect, useCallback } from "react";
import {
  connect,
  disconnect,
  isConnected,
  getLocalStorage,
} from "@stacks/connect";
import { Header } from "./components/Header";
import { CounterInteraction } from "./components/CounterInteraction";

type NetworkName = "mainnet" | "testnet" | "devnet";
const networkName: NetworkName =
  (import.meta.env.VITE_NETWORK as NetworkName) || "devnet";

function App() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (isConnected()) {
      const storage = getLocalStorage();
      const stxAddr = storage?.addresses?.stx?.[0]?.address ?? null;
      setAddress(stxAddr);
    }
  }, []);

  const handleConnect = useCallback(async () => {
    try {
      const result = await connect();
      const stxAddress =
        result.addresses?.find((a) => a.symbol === "STX")?.address ||
        result.addresses?.[0]?.address ||
        null;
      setAddress(stxAddress);
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnect();
    setAddress(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg font-outfit">
      <Header
        address={address}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <main className="flex-1 container mx-auto px-4 py-20 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hiro-orange/10 via-brand-purple/10 to-hiro-orange/10 border border-white/10 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-hiro-orange animate-pulse shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
              Powered by Stacks v8
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Build on
            </span>
            <span className="bg-gradient-to-r from-hiro-orange to-brand-purple bg-clip-text text-transparent">
              {" "}
              Bitcoin
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            The premium scaffold for Stacks developers. Start building next-gen
            Bitcoin applications with Clarity, React, and Vite.
          </p>
        </div>

        {/* Counter Component */}
        <div className="mb-24 px-4">
          <CounterInteraction
            network={networkName}
            isConnected={!!address}
            senderAddress={address}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🔗",
              title: "Smart Contracts",
              desc: "Write, deploy, and interact with predictable Clarity contracts.",
              command: "contracts/counter.clar",
              color: "orange",
            },
            {
              icon: "🧪",
              title: "Rapid Testing",
              desc: "Validate logic with the new Clarinet SDK and Vitest runner.",
              command: "pnpm test",
              color: "purple",
            },
            {
              icon: "🚀",
              title: "Seamless Deploy",
              desc: "Push your innovation to testnet or mainnet with one command.",
              command: "pnpm deploy:testnet",
              color: "orange",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className={`card ${feature.color === "orange" ? "card-glow-orange" : "card-glow-purple"} group`}
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {feature.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5">
                <code className="text-[11px] bg-white/[0.03] px-3 py-1.5 rounded-lg text-hiro-orange font-mono border border-white/5 group-hover:border-hiro-orange/30 transition-colors">
                  {feature.command}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Network Status */}
        <div className="py-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/[0.02] border border-white/10 rounded-full text-sm font-medium text-gray-400 backdrop-blur-sm shadow-xl">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                networkName === "mainnet"
                  ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  : "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
              }`}
            ></span>
            <span className="opacity-80">Currently connected to</span>
            <span className="text-white uppercase tracking-widest text-[11px]">
              {networkName}
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.03] py-12 text-center bg-black/20">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          Made for the Stacks ecosystem by
          <a
            href="https://github.com/michojekunle/create-stacks-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-hiro-orange transition-colors font-semibold"
          >
            Create Stacks App
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
