"use client";

import { useStacks } from "@/hooks/use-stacks";

export function ConnectButton() {
  const { address, isLoading, isConnected, connect, disconnect } = useStacks();

  if (isLoading) {
    return (
      <button className="btn-secondary opacity-50" disabled>
        Loading...
      </button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button onClick={disconnect} className="btn-secondary text-sm">
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button onClick={connect} className="btn-primary">
      Connect Wallet
    </button>
  );
}
