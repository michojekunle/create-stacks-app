'use client';

import { ConnectButton } from '@/components/wallet/connect-button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="w-8 h-8 text-stacks-purple"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 0L3 8v16l13 8 13-8V8L16 0zm0 4l9 5.5v11L16 26l-9-5.5v-11L16 4z" />
          </svg>
          <span className="font-bold text-xl">Stacks App</span>
        </Link>
        <ConnectButton />
      </div>
    </header>
  );
}
