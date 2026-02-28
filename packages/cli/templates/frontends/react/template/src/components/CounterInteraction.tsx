import { useState, useEffect, useCallback } from "react";
import { request } from "@stacks/connect";

interface CounterInteractionProps {
  network: string;
  isConnected: boolean;
  senderAddress: string | null;
}

const contractAddress =
  import.meta.env.VITE_CONTRACT_ADDRESS ||
  "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
const contractName = "counter";

// Helper to determine API base URL from network name
function getApiBase(network: string): string {
  switch (network) {
    case "mainnet":
      return "https://api.mainnet.hiro.so";
    case "testnet":
      return "https://api.testnet.hiro.so";
    default:
      return "http://localhost:3999";
  }
}

export function CounterInteraction({
  network,
  isConnected,
  senderAddress,
}: CounterInteractionProps) {
  const [counter, setCounter] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  const fetchCounter = useCallback(async () => {
    try {
      const apiBase = getApiBase(network);
      const url = `${apiBase}/v2/contracts/call-read/${contractAddress}/${contractName}/get-counter`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: contractAddress,
          arguments: [],
        }),
      });

      if (!res.ok) throw new Error(`API error: ${res.statusText}`);
      const data = await res.json();

      if (data.okay && data.result) {
        const hex = data.result.slice(4);
        const value = parseInt(hex, 16);
        setCounter(isNaN(value) ? 0 : value);
      } else {
        setCounter(0);
      }
    } catch (error) {
      console.error("Failed to fetch counter:", error);
      setCounter(0);
    } finally {
      setIsLoading(false);
    }
  }, [network]);

  useEffect(() => {
    fetchCounter();
  }, [fetchCounter]);

  const handleIncrement = useCallback(async () => {
    if (!senderAddress) return;
    setIsIncrementing(true);
    try {
      const result = await request("stx_callContract", {
        contract: `${contractAddress}.${contractName}`,
        functionName: "increment",
        functionArgs: [],
        network,
      });
      console.log("Increment tx:", result?.txid);
      setTimeout(fetchCounter, 3000);
    } catch (error) {
      console.error("Increment failed:", error);
    } finally {
      setIsIncrementing(false);
    }
  }, [senderAddress, network, fetchCounter]);

  const handleDecrement = useCallback(async () => {
    if (!senderAddress) return;
    setIsDecrementing(true);
    try {
      const result = await request("stx_callContract", {
        contract: `${contractAddress}.${contractName}`,
        functionName: "decrement",
        functionArgs: [],
        network,
      });
      console.log("Decrement tx:", result?.txid);
      setTimeout(fetchCounter, 3000);
    } catch (error) {
      console.error("Decrement failed:", error);
    } finally {
      setIsDecrementing(false);
    }
  }, [senderAddress, network, fetchCounter]);

  return (
    <div className="card card-glow-orange max-w-xl mx-auto">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Counter Interaction
          </h2>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-mono uppercase tracking-widest">
            {contractName}.clar
          </div>
        </div>

        <div className="mb-10 text-center py-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl">
          <div className="text-8xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent mb-2">
            {isLoading ? "..." : counter}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            Current counter value
          </p>
        </div>

        {isConnected ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleDecrement}
              disabled={isDecrementing || counter === 0}
              className="btn-secondary disabled:opacity-30 flex items-center justify-center gap-2"
            >
              <span className="text-lg">−</span>
              {isDecrementing ? "..." : "Decrement"}
            </button>
            <button
              onClick={handleIncrement}
              disabled={isIncrementing}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <span className="text-lg">+</span>
              {isIncrementing ? "..." : "Increment"}
            </button>
          </div>
        ) : (
          <div className="text-center p-4 bg-hiro-orange/5 border border-hiro-orange/10 rounded-2xl">
            <p className="text-sm text-hiro-orange/80 font-medium">
              Connect your wallet to interact with this contract
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
