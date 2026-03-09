"use client";

import { useEffect, useState, useCallback } from "react";
import { callReadOnly } from "@/lib/stacks";
import { cvToHex, principalCV, hexToCV, cvToJSON } from "@stacks/transactions";

// The sBTC token contract address on testnet/devnet
const SBTC_CONTRACT = "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4";

export function useSbtcBalance(address: string | null) {
  const [balance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!address) {
      setBalance(0);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await callReadOnly({
        contractAddress: SBTC_CONTRACT,
        contractName: "sbtc-token",
        functionName: "get-balance",
        functionArgs: [cvToHex(principalCV(address))],
        senderAddress: address,
      });

      if (result.okay && result.result) {
        const cv = hexToCV(result.result);
        const parsed = cvToJSON(cv);

        // get-balance returns `(response uint uint)`
        // if success, parsed.success is true, and parsed.value.value is the balance string
        if (parsed.success && parsed.value && parsed.value.value) {
          setBalance(parseInt(parsed.value.value, 10));
        } else {
          setBalance(0);
        }
      } else {
        setBalance(0);
      }
    } catch (err) {
      setError(err as Error);
      console.error("sBTC balance read error:", err);
      setBalance(0);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return {
    balance,
    isLoading,
    error,
    refetch: fetchBalance,
  };
}
