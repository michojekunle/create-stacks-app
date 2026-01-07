import { useState, useEffect, useCallback } from 'react';
import { openContractCall } from '@stacks/connect';
import { callReadOnlyFunction, cvToValue } from '@stacks/transactions';
import type { StacksNetwork } from '@stacks/network';

interface CounterInteractionProps {
  network: StacksNetwork;
  isConnected: boolean;
  senderAddress: string | null;
}

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const contractName = 'counter';

export function CounterInteraction({ network, isConnected, senderAddress }: CounterInteractionProps) {
  const [counter, setCounter] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  const fetchCounter = useCallback(async () => {
    try {
      const result = await callReadOnlyFunction({
        contractAddress,
        contractName,
        functionName: 'get-counter',
        functionArgs: [],
        network,
        senderAddress: contractAddress,
      });
      const value = cvToValue(result);
      setCounter(value?.value ?? 0);
    } catch (error) {
      console.error('Failed to fetch counter:', error);
    } finally {
      setIsLoading(false);
    }
  }, [network]);

  useEffect(() => {
    fetchCounter();
  }, [fetchCounter]);

  const handleIncrement = async () => {
    if (!senderAddress) return;
    setIsIncrementing(true);
    try {
      await openContractCall({
        contractAddress,
        contractName,
        functionName: 'increment',
        functionArgs: [],
        network,
        onFinish: () => {
          setTimeout(fetchCounter, 2000);
        },
      });
    } catch (error) {
      console.error('Increment failed:', error);
    } finally {
      setIsIncrementing(false);
    }
  };

  const handleDecrement = async () => {
    if (!senderAddress) return;
    setIsDecrementing(true);
    try {
      await openContractCall({
        contractAddress,
        contractName,
        functionName: 'decrement',
        functionArgs: [],
        network,
        onFinish: () => {
          setTimeout(fetchCounter, 2000);
        },
      });
    } catch (error) {
      console.error('Decrement failed:', error);
    } finally {
      setIsDecrementing(false);
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">Counter Contract</h2>

      <div className="mb-6 text-center">
        <div className="text-6xl font-bold text-stacks-purple">
          {isLoading ? '...' : counter}
        </div>
        <p className="text-sm text-gray-500 mt-2">Current count</p>
      </div>

      {isConnected ? (
        <div className="flex gap-2">
          <button
            onClick={handleDecrement}
            disabled={isDecrementing || counter === 0}
            className="btn-secondary flex-1 disabled:opacity-50"
          >
            {isDecrementing ? 'Processing...' : '− Decrement'}
          </button>
          <button
            onClick={handleIncrement}
            disabled={isIncrementing}
            className="btn-primary flex-1 disabled:opacity-50"
          >
            {isIncrementing ? 'Processing...' : '+ Increment'}
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Connect your wallet to interact with the contract
        </p>
      )}
    </div>
  );
}
