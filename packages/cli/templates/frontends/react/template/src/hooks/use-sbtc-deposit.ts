import { useState, useCallback } from "react";
import { request } from "@stacks/connect";
import {
  buildSbtcDepositAddress,
  MAINNET,
  TESTNET,
  SbtcApiClientMainnet,
  SbtcApiClientTestnet,
} from "sbtc";

export function useSbtcDeposit(
  networkName: "mainnet" | "testnet" | "devnet" = "devnet",
) {
  const [isDepositing, setIsDepositing] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [depositResult, setDepositResult] = useState<any>(null);

  const depositSbtc = useCallback(
    async (stacksAddress: string, btcPublicKey: string, amountSats: number) => {
      setIsDepositing(true);
      setError(null);
      setDepositResult(null);

      try {
        const isMainnet = networkName === "mainnet";
        const network = isMainnet ? MAINNET : TESTNET;
        // In a true devnet environment we would need a local client, but for now we fallback to testnet logic
        const client = isMainnet
          ? new SbtcApiClientMainnet()
          : new SbtcApiClientTestnet();

        // 1. Build the sBTC deposit address
        const signersPublicKey = await client.fetchSignersPublicKey();
        const deposit = buildSbtcDepositAddress({
          stacksAddress,
          signersPublicKey,
          reclaimLockTime: isMainnet ? 950 : 700,
          reclaimPublicKey: btcPublicKey,
          network,
          maxSignerFee: 4000,
        });

        // 2. Sign and broadcast the transaction to the deposit address
        const result = await request("sendTransfer", {
          recipients: [
            {
              address: deposit.address,
              amount: amountSats,
            },
          ],
        });

        // Wait a few seconds for the transaction to hit the mempool
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Fetch the transaction hex
        const transaction = await client.fetchTxHex(result.txid);

        // 3. Notify the sBTC signers
        const response = await client.notifySbtc({ transaction, ...deposit });

        setDepositResult({
          txid: result.txid,
          notifyResponse: response,
          depositAddress: deposit.address,
        });

        return response;
      } catch (err) {
        console.error("sBTC Deposit failed:", err);
        setError(err as Error);
        throw err;
      } finally {
        setIsDepositing(false);
      }
    },
    [networkName],
  );

  return {
    depositSbtc,
    isDepositing,
    error,
    depositResult,
  };
}
