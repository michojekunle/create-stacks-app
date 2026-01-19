import {
  connect,
  disconnect,
  isConnected,
  getLocalStorage,
  request,
} from "@stacks/connect";
import { STACKS_TESTNET, STACKS_MAINNET } from "@stacks/network";

// Network configuration
export const network =
  process.env.NEXT_PUBLIC_NETWORK === "mainnet"
    ? STACKS_MAINNET
    : STACKS_TESTNET;

// Get the connected user's address from local storage
export function getConnectedAddress(): string | null {
  const storage = getLocalStorage();
  if (!storage) return null;

  const networkType =
    process.env.NEXT_PUBLIC_NETWORK === "mainnet" ? "mainnet" : "testnet";
  return storage.addresses?.[networkType] || null;
}

// Check if user is connected
export function checkIsConnected(): boolean {
  return isConnected();
}

// Connect wallet
export async function connectWallet(): Promise<string | null> {
  try {
    const response = await connect();
    return response.addresses?.[0]?.address || null;
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    return null;
  }
}

// Disconnect wallet
export function disconnectWallet(): void {
  disconnect();
}

// Get explorer link
export function getExplorerLink(txId: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_NETWORK === "mainnet"
      ? "https://explorer.stacks.co"
      : "https://explorer.stacks.co/?chain=testnet";
  return `${baseUrl}/txid/${txId}`;
}

// Export request for contract calls
export { request };
