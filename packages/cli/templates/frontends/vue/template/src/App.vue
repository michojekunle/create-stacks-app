<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import AppHeader from './components/AppHeader.vue';
import CounterInteraction from './components/CounterInteraction.vue';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const network =
  import.meta.env.VITE_NETWORK === 'mainnet'
    ? new StacksMainnet()
    : new StacksTestnet();

const address = ref<string | null>(null);

onMounted(() => {
  if (userSession.isUserSignedIn()) {
    const userData = userSession.loadUserData();
    const networkKey = import.meta.env.VITE_NETWORK === 'mainnet' ? 'mainnet' : 'testnet';
    address.value = userData.profile.stxAddress[networkKey];
  }
});

function handleConnect() {
  showConnect({
    appDetails: {
      name: 'Stacks App',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function handleDisconnect() {
  userSession.signUserOut('/');
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader
      :address="address"
      @connect="handleConnect"
      @disconnect="handleDisconnect"
    />

    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold">Welcome to Your Stacks App</h1>
        <p class="text-lg text-gray-400">
          A full-stack Stacks blockchain application
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CounterInteraction
          :network="network"
          :is-connected="!!address"
          :sender-address="address"
        />
      </div>

      <div class="mt-12 text-center">
        <h2 class="mb-4 text-2xl font-bold">Get Started</h2>
        <div class="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
          <div class="card">
            <h3 class="font-semibold mb-2">📝 Edit Contracts</h3>
            <p class="text-sm text-gray-400">
              Modify contracts in <code class="bg-gray-800 px-1 rounded">contracts/</code>
            </p>
          </div>
          <div class="card">
            <h3 class="font-semibold mb-2">🧪 Run Tests</h3>
            <p class="text-sm text-gray-400">
              Run <code class="bg-gray-800 px-1 rounded">npm run test</code>
            </p>
          </div>
          <div class="card">
            <h3 class="font-semibold mb-2">🚀 Deploy</h3>
            <p class="text-sm text-gray-400">
              Run <code class="bg-gray-800 px-1 rounded">npm run deploy:testnet</code>
            </p>
          </div>
        </div>
      </div>
    </main>

    <footer class="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
      Built with Create Stacks App
    </footer>
  </div>
</template>
