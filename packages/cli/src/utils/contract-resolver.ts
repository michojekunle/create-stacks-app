export const CONTRACT_MAP: Record<string, string> = {
  counter: "counter/counter",
  token: "token/token",
  nft: "nft/nft",
  "sip010-trait": "defi/sip010-trait",
  "staking-pool": "defi/staking-pool",
  "nft-trait": "marketplace/nft-trait",
  marketplace: "marketplace/nft-marketplace",
};

export function resolveContractDependencies(contracts: string[]): string[] {
  const contractsToInstall = new Set<string>(contracts);

  // Auto-include dependencies
  if (
    contractsToInstall.has("token") ||
    contractsToInstall.has("staking-pool")
  ) {
    contractsToInstall.add("sip010-trait");
    if (contractsToInstall.has("staking-pool")) {
      contractsToInstall.add("token");
    }
  }
  if (contractsToInstall.has("nft") || contractsToInstall.has("marketplace")) {
    contractsToInstall.add("nft-trait");
    if (contractsToInstall.has("marketplace")) {
      contractsToInstall.add("nft");
    }
  }

  return Array.from(contractsToInstall);
}
