<script setup lang="ts">
defineProps<{
  address: string | null;
}>();

const emit = defineEmits<{
  connect: [];
  disconnect: [];
}>();
</script>

<template>
  <header class="border-b border-gray-800">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2">
        <svg
          class="w-8 h-8 text-stacks-purple"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 0L3 8v16l13 8 13-8V8L16 0zm0 4l9 5.5v11L16 26l-9-5.5v-11L16 4z" />
        </svg>
        <span class="font-bold text-xl">Stacks App</span>
      </a>

      <div v-if="address" class="flex items-center gap-3">
        <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">
          {{ address.slice(0, 6) }}...{{ address.slice(-4) }}
        </span>
        <button @click="emit('disconnect')" class="btn-secondary text-sm">
          Disconnect
        </button>
      </div>
      <button v-else @click="emit('connect')" class="btn-primary">
        Connect Wallet
      </button>
    </div>
  </header>
</template>
