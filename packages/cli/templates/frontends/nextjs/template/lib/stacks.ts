import {
  connect,
  request,
  disconnect,
  isConnected,
  getLocalStorage,
} from "@stacks/connect";
import type { StorageData } from "@stacks/connect";
                                        
// Network configuration — use string network names as per @stacks/network v7+
// Stacks.js v7+ accepts plain string literals: "mainnet" | "testnet" | "devnet" | "mocknet"
export type NetworkName = "mainnet" | "testnet" | "devnet";

export const networkName: NetworkName =
  (process.env.NEXT_PUBLIC_NETWORK as NetworkName) || "devnet";

/**
 * Connect wallet using @stacks/connect v8 `connect()`.
 * This is an alias for `request({ forceWalletSelect: true }, 'getAddresses')`.
 * It automatically caches the user's addresses in localStorage.
 * @returns The list of address entries from the wallet.
 */
export async function connectWallet() {
  const result = await connect();
  return result;
}

/**
 * Disconnect wallet — clears session data and localStorage.
 */
export function disconnectWallet(): void {
  disconnect();
}

/**
 * Check if user is currently connected.
 * Uses @stacks/connect's built-in localStorage check.
 */
export function checkIsConnected(): boolean {
  return isConnected();
}

/**
 * Get the connected STX address from localStorage.
 * In v8, localStorage stores addresses as `{ stx: [{address, symbol}], btc: [...] }`.
 */
export function getConnectedAddress(): string | null {
  const storage: StorageData | null = getLocalStorage();
  if (!storage?.addresses?.stx?.length) return null;
  return storage.addresses.stx[0].address;
}

/**
 * Call a read-only contract function via the Stacks API.
 * This does NOT require a wallet — it reads from the blockchain directly.
 */
export async function callReadOnly(options: {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs?: string[];
  senderAddress?: string;
}) {
  const {
    contractAddress,
    contractName,
    functionName,
    functionArgs = [],
    senderAddress,
  } = options;
  const apiBase =
    networkName === "mainnet"
      ? "https://api.mainnet.hiro.so"
      : networkName === "testnet"
        ? "https://api.testnet.hiro.so"
        : "http://localhost:3999";

  const url = `${apiBase}/v2/contracts/call-read/${contractAddress}/${contractName}/${functionName}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: senderAddress || contractAddress,
      arguments: functionArgs,
    }),
  });

  if (!res.ok) throw new Error(`Read-only call failed: ${res.statusText}`);
  return res.json();
}

/**
 * Call a public contract function via the wallet using @stacks/connect v8 `request()`.
 * The `request("stx_callContract", params)` is the standard v8 method.
 */
export async function callContract(options: {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs?: string[];
  network?: string;
}) {
  const {
    contractAddress,
    contractName,
    functionName,
    functionArgs = [],
    network,
  } = options;
  const result = await request("stx_callContract", {
    contract: `${contractAddress}.${contractName}`,
    functionName,
    functionArgs,
    network: network || networkName,
  });
  return result;
}

/**
 * Get explorer link for a transaction.
 */
export function getExplorerLink(txId: string): string {
  switch (networkName) {
    case "mainnet":
      return `https://explorer.hiro.so/txid/${txId}?chain=mainnet`;
    case "testnet":
      return `https://explorer.hiro.so/txid/${txId}?chain=testnet`;
    default:
      return `https://explorer.hiro.so/txid/${txId}?chain=testnet&api=http://localhost:3999`;
  }
}
