import { useState, useEffect, useCallback } from "react";
import { cvToHex, principalCV, hexToCV, cvToJSON } from "@stacks/transactions";

const SBTC_CONTRACT = "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4";

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

export function useSbtcBalance(
  address: string | null,
  network: string = "devnet",
) {
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
      const apiBase = getApiBase(network);
      const url = `${apiBase}/v2/contracts/call-read/${SBTC_CONTRACT}/sbtc-token/get-balance`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: address,
          arguments: [cvToHex(principalCV(address))],
        }),
      });

      if (!res.ok) throw new Error(`API error: ${res.statusText}`);
      const data = await res.json();

      if (data.okay && data.result) {
        const cv = hexToCV(data.result);
        const parsed = cvToJSON(cv);

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
      console.error("Failed to fetch sBTC balance:", err);
      setBalance(0);
    } finally {
      setIsLoading(false);
    }
  }, [address, network]);

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
