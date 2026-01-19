"use client";

import { useEffect, useState, useCallback } from "react";
import {
  getConnectedAddress,
  checkIsConnected,
  connectWallet,
  disconnectWallet,
} from "@/lib/stacks";

export function useStacks() {
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check connection status on mount
  useEffect(() => {
    const connectedAddress = getConnectedAddress();
    setAddress(connectedAddress);
    setIsLoading(false);
  }, []);

  // Connect handler
  const connect = useCallback(async () => {
    setIsLoading(true);
    const connectedAddress = await connectWallet();
    setAddress(connectedAddress);
    setIsLoading(false);

    // Reload to sync state
    if (connectedAddress) {
      window.location.reload();
    }
  }, []);

  // Disconnect handler
  const disconnect = useCallback(() => {
    disconnectWallet();
    setAddress(null);
    window.location.reload();
  }, []);

  return {
    address,
    isLoading,
    isConnected: !!address && checkIsConnected(),
    connect,
    disconnect,
  };
}
