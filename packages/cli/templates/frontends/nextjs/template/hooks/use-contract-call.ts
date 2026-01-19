"use client";

import { useState } from "react";
import { request } from "@/lib/stacks";
import { useStacks } from "./use-stacks";
import type { ContractConfig } from "@/lib/contracts";

export function useContractCall(
  contract: ContractConfig,
  functionName: string,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [txId, setTxId] = useState<string | null>(null);
  const { address } = useStacks();

  const call = async (functionArgs: any[] = []) => {
    if (!address) {
      throw new Error("Wallet not connected");
    }

    setIsLoading(true);
    setError(null);

    try {
      // Using Stacks Connect v8 request API
      const result = await request("stx_callContract", {
        contract: `${contract.address}.${contract.name}`,
        functionName,
        functionArgs,
      });

      if (result?.txId) {
        setTxId(result.txId);
        console.log("Transaction submitted:", result.txId);
      }

      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    call,
    isLoading,
    error,
    txId,
  };
}
