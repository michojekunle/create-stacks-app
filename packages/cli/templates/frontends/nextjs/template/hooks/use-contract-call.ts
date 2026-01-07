'use client';

import { useState } from 'react';
import { openContractCall } from '@stacks/connect';
import { useStacks } from './use-stacks';
import type { ContractConfig } from '@/lib/contracts';

export function useContractCall(contract: ContractConfig, functionName: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [txId, setTxId] = useState<string | null>(null);
  const { address } = useStacks();

  const call = async (functionArgs: any[] = []) => {
    if (!address) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      await openContractCall({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        network: contract.network,
        postConditions: [],
        onFinish: (data) => {
          setTxId(data.txId);
          console.log('Transaction submitted:', data.txId);
        },
        onCancel: () => {
          setIsLoading(false);
        },
      });
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    call,
    isLoading,
    error,
    txId,
  };
}
