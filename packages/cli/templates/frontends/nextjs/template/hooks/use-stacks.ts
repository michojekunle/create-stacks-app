"use client";

import { useState, useEffect, useCallback } from "react";
import {
  connectWallet,
  disconnectWallet,
  checkIsConnected,
  getConnectedAddress,
} from "@/lib/stacks";

export function useStacks() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check connection on mount
  useEffect(() => {
    const connected = checkIsConnected();
    setIsConnected(connected);
    if (connected) {
      setAddress(getConnectedAddress());
    }
  }, []);

  const handleConnect = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await connectWallet();
      // v8 connect() returns { addresses: AddressEntry[] }
      const stxAddress =
        result.addresses?.find((a) => a.symbol === "STX")?.address ||
        result.addresses?.[0]?.address ||
        null;
      setAddress(stxAddress);
      setIsConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnectWallet();
    setAddress(null);
    setIsConnected(false);
  }, []);

  return {
    isConnected,
    address,
    isLoading,
    connect: handleConnect,
    disconnect: handleDisconnect,
  };
}
