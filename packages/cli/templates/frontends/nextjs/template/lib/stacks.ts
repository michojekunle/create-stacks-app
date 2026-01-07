import { AppConfig, UserSession } from '@stacks/connect';
import { StacksTestnet, StacksMainnet } from '@stacks/network';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export const network =
  process.env.NEXT_PUBLIC_NETWORK === 'mainnet'
    ? new StacksMainnet()
    : new StacksTestnet();

export function getExplorerLink(txId: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_NETWORK === 'mainnet'
      ? 'https://explorer.stacks.co'
      : 'https://explorer.stacks.co/?chain=testnet';
  return `${baseUrl}/txid/${txId}`;
}
