"use client";

import { useState } from "react";
import { callContract } from "@/lib/stacks";
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

  const call = async (functionArgs: string[] = []) => {
    if (!address) {
      throw new Error("Wallet not connected");
    }

    setIsLoading(true);
    setError(null);

    try {
      // Using @stacks/connect v8 request("stx_callContract", params)
      const result = await callContract({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        network: contract.network,
      });

      // v8 returns { txid?: string, transaction?: string }
      if (result?.txid) {
        setTxId(result.txid);
        console.log("Transaction submitted:", result.txid);
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
