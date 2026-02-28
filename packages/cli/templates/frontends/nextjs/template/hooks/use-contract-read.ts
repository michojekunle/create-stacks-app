"use client";

import { useEffect, useState, useCallback } from "react";
import { callReadOnly } from "@/lib/stacks";
import type { ContractConfig } from "@/lib/contracts";

export function useContractRead(
  contract: ContractConfig,
  functionName: string,
  functionArgs: string[] = [],
) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await callReadOnly({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        senderAddress: contract.address,
      });

      // The Hiro API returns { okay: true, result: "0x..." } for read-only calls
      setData(result);
    } catch (err) {
      setError(err as Error);
      console.error("Contract read error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [
    contract.address,
    contract.name,
    functionName,
    JSON.stringify(functionArgs),
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}
