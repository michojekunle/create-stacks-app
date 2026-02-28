"use client";

import { useState, useCallback } from "react";
import { useContractCall } from "@/hooks/use-contract-call";
import { useContractRead } from "@/hooks/use-contract-read";
import { counterContract } from "@/lib/contracts";
import { useStacks } from "@/hooks/use-stacks";

export function CounterInteraction() {
  const { isConnected } = useStacks();
  const {
    data: counterData,
    isLoading: isLoadingCounter,
    refetch,
  } = useContractRead(counterContract, "get-counter");
  const { call: increment, isLoading: isIncrementing } = useContractCall(
    counterContract,
    "increment",
  );
  const { call: decrement, isLoading: isDecrementing } = useContractCall(
    counterContract,
    "decrement",
  );

  const parseCounterValue = (data: any): number => {
    if (!data?.okay || !data?.result) return 0;
    try {
      const hex = data.result.slice(4);
      const value = parseInt(hex, 16);
      return isNaN(value) ? 0 : value;
    } catch {
      return 0;
    }
  };

  const counterValue = parseCounterValue(counterData);

  const handleIncrement = async () => {
    try {
      await increment([]);
      setTimeout(refetch, 3000);
    } catch (error) {
      console.error("Increment failed:", error);
    }
  };

  const handleDecrement = async () => {
    try {
      await decrement([]);
      setTimeout(refetch, 3000);
    } catch (error) {
      console.error("Decrement failed:", error);
    }
  };

  return (
    <div className="card card-glow-orange max-w-xl mx-auto">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Counter Interaction
          </h2>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-mono uppercase tracking-widest">
            {counterContract.name}.clar
          </div>
        </div>

        <div className="mb-10 text-center py-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl">
          <div className="text-8xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent mb-2">
            {isLoadingCounter ? "..." : counterValue.toString()}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            Current counter value
          </p>
        </div>

        {isConnected ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleDecrement}
              disabled={isDecrementing || counterValue === 0}
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
