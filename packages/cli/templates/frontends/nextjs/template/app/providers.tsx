'use client';

import { ReactNode } from 'react';
import { Connect } from '@stacks/connect-react';
import { userSession } from '@/lib/stacks';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const appDetails = {
    name: 'Stacks App',
    icon: typeof window !== 'undefined' ? window.location.origin + '/logo.svg' : '/logo.svg',
  };

  return (
    <Connect
      authOptions={{
        appDetails,
        redirectTo: '/',
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      {children}
    </Connect>
  );
}
