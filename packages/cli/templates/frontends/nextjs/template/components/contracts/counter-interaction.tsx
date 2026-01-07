'use client';

import { useState, useEffect } from 'react';
import { useContractCall } from '@/hooks/use-contract-call';
import { useContractRead } from '@/hooks/use-contract-read';
import { counterContract } from '@/lib/contracts';
import { useStacks } from '@/hooks/use-stacks';

export function CounterInteraction() {
  const { isConnected } = useStacks();
  const { data: counter, isLoading: isLoadingCounter, refetch } = useContractRead(
    counterContract,
    'get-counter'
  );
  const { call: increment, isLoading: isIncrementing } = useContractCall(
    counterContract,
    'increment'
  );
  const { call: decrement, isLoading: isDecrementing } = useContractCall(
    counterContract,
    'decrement'
  );

  const handleIncrement = async () => {
    try {
      await increment([]);
      // Refetch after a delay to allow transaction to process
      setTimeout(refetch, 2000);
    } catch (error) {
      console.error('Increment failed:', error);
    }
  };

  const handleDecrement = async () => {
    try {
      await decrement([]);
      setTimeout(refetch, 2000);
    } catch (error) {
      console.error('Decrement failed:', error);
    }
  };

  const counterValue = counter?.value ?? 0;

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">Counter Contract</h2>
      
      <div className="mb-6 text-center">
        <div className="text-6xl font-bold text-stacks-purple">
          {isLoadingCounter ? '...' : counterValue.toString()}
        </div>
        <p className="text-sm text-gray-500 mt-2">Current count</p>
      </div>

      {isConnected ? (
        <div className="flex gap-2">
          <button
            onClick={handleDecrement}
            disabled={isDecrementing || counterValue === 0}
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
