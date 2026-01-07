import { useState, useEffect, useCallback } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import { Header } from './components/Header';
import { CounterInteraction } from './components/CounterInteraction';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const network =
  import.meta.env.VITE_NETWORK === 'mainnet'
    ? new StacksMainnet()
    : new StacksTestnet();

function App() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      const networkKey = import.meta.env.VITE_NETWORK === 'mainnet' ? 'mainnet' : 'testnet';
      setAddress(userData.profile.stxAddress[networkKey]);
    }
  }, []);

  const handleConnect = useCallback(() => {
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
  }, []);

  const handleDisconnect = useCallback(() => {
    userSession.signUserOut('/');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        address={address}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Your Stacks App</h1>
          <p className="text-lg text-gray-400">
            A full-stack Stacks blockchain application
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CounterInteraction
            network={network}
            isConnected={!!address}
            senderAddress={address}
          />
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="font-semibold mb-2">📝 Edit Contracts</h3>
              <p className="text-sm text-gray-400">
                Modify contracts in <code className="bg-gray-800 px-1 rounded">contracts/</code>
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">🧪 Run Tests</h3>
              <p className="text-sm text-gray-400">
                Run <code className="bg-gray-800 px-1 rounded">npm run test</code>
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">🚀 Deploy</h3>
              <p className="text-sm text-gray-400">
                Run <code className="bg-gray-800 px-1 rounded">npm run deploy:testnet</code>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        Built with Create Stacks App
      </footer>
    </div>
  );
}

export default App;
