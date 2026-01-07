<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { openContractCall } from '@stacks/connect';
import { callReadOnlyFunction, cvToValue } from '@stacks/transactions';
import type { StacksNetwork } from '@stacks/network';

const props = defineProps<{
  network: StacksNetwork;
  isConnected: boolean;
  senderAddress: string | null;
}>();

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const contractName = 'counter';

const counter = ref<number | null>(null);
const isLoading = ref(true);
const isIncrementing = ref(false);
const isDecrementing = ref(false);

async function fetchCounter() {
  try {
    const result = await callReadOnlyFunction({
      contractAddress,
      contractName,
      functionName: 'get-counter',
      functionArgs: [],
      network: props.network,
      senderAddress: contractAddress,
    });
    const value = cvToValue(result);
    counter.value = value?.value ?? 0;
  } catch (error) {
    console.error('Failed to fetch counter:', error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchCounter();
});

async function handleIncrement() {
  if (!props.senderAddress) return;
  isIncrementing.value = true;
  try {
    await openContractCall({
      contractAddress,
      contractName,
      functionName: 'increment',
      functionArgs: [],
      network: props.network,
      onFinish: () => {
        setTimeout(fetchCounter, 2000);
      },
    });
  } catch (error) {
    console.error('Increment failed:', error);
  } finally {
    isIncrementing.value = false;
  }
}

async function handleDecrement() {
  if (!props.senderAddress) return;
  isDecrementing.value = true;
  try {
    await openContractCall({
      contractAddress,
      contractName,
      functionName: 'decrement',
      functionArgs: [],
      network: props.network,
      onFinish: () => {
        setTimeout(fetchCounter, 2000);
      },
    });
  } catch (error) {
    console.error('Decrement failed:', error);
  } finally {
    isDecrementing.value = false;
  }
}
</script>

<template>
  <div class="card">
    <h2 class="text-2xl font-bold mb-4">Counter Contract</h2>

    <div class="mb-6 text-center">
      <div class="text-6xl font-bold text-stacks-purple">
        {{ isLoading ? '...' : counter }}
      </div>
      <p class="text-sm text-gray-500 mt-2">Current count</p>
    </div>

    <template v-if="isConnected">
      <div class="flex gap-2">
        <button
          @click="handleDecrement"
          :disabled="isDecrementing || counter === 0"
          class="btn-secondary flex-1 disabled:opacity-50"
        >
          {{ isDecrementing ? 'Processing...' : '− Decrement' }}
        </button>
        <button
          @click="handleIncrement"
          :disabled="isIncrementing"
          class="btn-primary flex-1 disabled:opacity-50"
        >
          {{ isIncrementing ? 'Processing...' : '+ Increment' }}
        </button>
      </div>
    </template>
    <p v-else class="text-center text-gray-500">
      Connect your wallet to interact with the contract
    </p>
  </div>
</template>
