interface HeaderProps {
  address: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function Header({ address, onConnect, onDisconnect }: HeaderProps) {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <svg
            className="w-8 h-8 text-stacks-purple"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 0L3 8v16l13 8 13-8V8L16 0zm0 4l9 5.5v11L16 26l-9-5.5v-11L16 4z" />
          </svg>
          <span className="font-bold text-xl">Stacks App</span>
        </a>

        {address ? (
          <div className="flex items-center gap-3">
            <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>
            <button onClick={onDisconnect} className="btn-secondary text-sm">
              Disconnect
            </button>
          </div>
        ) : (
          <button onClick={onConnect} className="btn-primary">
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
