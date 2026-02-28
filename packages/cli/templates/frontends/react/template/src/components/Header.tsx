interface HeaderProps {
  address: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function Header({ address, onConnect, onDisconnect }: HeaderProps) {
  return (
    <header className="nav-blur">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-hiro-orange to-brand-purple rounded-xl flex items-center justify-center shadow-xl shadow-hiro-orange/20 group-hover:scale-110 transition-all duration-300">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12M12 22L2 17L12 12M12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7L12 12L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60"
              />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Stacks App
          </span>
        </a>

        {address ? (
          <div className="flex items-center gap-4">
            <span className="text-sm bg-white/5 border border-white/10 px-4 py-1.5 rounded-full font-medium text-white/90">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>
            <button
              onClick={onDisconnect}
              className="btn-secondary text-sm !py-1.5 !px-4"
            >
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
