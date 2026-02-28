import { networkName } from "./stacks";

export interface ContractConfig {
  address: string;
  name: string;
  network: string;
}

// Contract address from environment or default devnet address
const contractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";

export const counterContract: ContractConfig = {
  address: contractAddress,
  name: "counter",
  network: networkName,
};

export const tokenContract: ContractConfig = {
  address: contractAddress,
  name: "token",
  network: networkName,
};

export const nftContract: ContractConfig = {
  address: contractAddress,
  name: "nft",
  network: networkName,
};
