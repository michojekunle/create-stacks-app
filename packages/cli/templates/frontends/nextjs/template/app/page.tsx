import { CounterInteraction } from '@/components/contracts/counter-interaction';

export default function Home() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Stacks App</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A full-stack Stacks blockchain application
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CounterInteraction />
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
          <div className="card">
            <h3 className="font-semibold mb-2">📝 Edit Contracts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Modify contracts in <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">contracts/</code>
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">🧪 Run Tests</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Run <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">npm run test</code>
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">🚀 Deploy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Run <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">npm run deploy:testnet</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
