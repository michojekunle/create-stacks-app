'use client';

import { useEffect, useState, useCallback } from 'react';
import { callReadOnlyFunction, cvToValue } from '@stacks/transactions';
import type { ContractConfig } from '@/lib/contracts';

export function useContractRead(
  contract: ContractConfig,
  functionName: string,
  functionArgs: any[] = []
) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await callReadOnlyFunction({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        network: contract.network,
        senderAddress: contract.address,
      });

      setData(cvToValue(result));
    } catch (err) {
      setError(err as Error);
      console.error('Contract read error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [contract.address, contract.name, contract.network, functionName, functionArgs]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}
