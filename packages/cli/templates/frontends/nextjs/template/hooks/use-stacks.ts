'use client';

import { useEffect, useState } from 'react';
import { userSession } from '@/lib/stacks';

export function useStacks() {
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();
      // Use testnet address by default, mainnet in production
      const network = process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? 'mainnet' : 'testnet';
      setAddress(userData.profile.stxAddress[network]);
    }
    setIsLoading(false);
  }, []);

  return {
    userSession,
    address,
    isLoading,
    isConnected: !!address,
  };
}
