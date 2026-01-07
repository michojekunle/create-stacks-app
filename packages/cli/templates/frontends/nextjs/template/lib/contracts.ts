import { network } from './stacks';
import type { StacksNetwork } from '@stacks/network';

export interface ContractConfig {
  address: string;
  name: string;
  network: StacksNetwork;
}

// Contract address from environment or default devnet address
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';

export const counterContract: ContractConfig = {
  address: contractAddress,
  name: 'counter',
  network,
};

export const tokenContract: ContractConfig = {
  address: contractAddress,
  name: 'token',
  network,
};

export const nftContract: ContractConfig = {
  address: contractAddress,
  name: 'nft',
  network,
};
