'use client';

import { useConnect } from '@stacks/connect-react';
import { useStacks } from '@/hooks/use-stacks';

export function ConnectButton() {
  const { authenticate } = useConnect();
  const { userSession, address, isLoading } = useStacks();

  const handleConnect = () => {
    authenticate();
  };

  const handleDisconnect = () => {
    userSession.signUserOut('/');
  };

  if (isLoading) {
    return (
      <button className="btn-secondary opacity-50" disabled>
        Loading...
      </button>
    );
  }

  if (address) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button onClick={handleDisconnect} className="btn-secondary text-sm">
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleConnect} className="btn-primary">
      Connect Wallet
    </button>
  );
}
