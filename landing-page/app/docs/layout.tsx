import Link from 'next/link';

const docsNav = [
  { href: '#getting-started', label: 'Getting Started' },
  { href: '#navigation', label: 'Project Navigation' },
  { href: '#hooks', label: 'Ready-Made Hooks' },
  { href: '#features', label: 'Features Overview' },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/5 bg-black/50 backdrop-blur-md z-50 flex items-center justify-between px-6">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-stacks-purple to-stacks-orange" />
            Create Stacks App
          </Link>
          <div className="flex items-center gap-4">
             <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
             <span className="text-sm text-gray-600">|</span>
             <span className="text-sm text-white font-medium">Documentation</span>
          </div>
      </nav>
      
      <div className="flex pt-16">
        <aside className="w-64 fixed top-16 bottom-0 left-0 border-r border-white/10 p-6 hidden md:block overflow-y-auto bg-black/20">
          <h5 className="font-bold mb-4 text-xs text-gray-500 uppercase tracking-wider">Contents</h5>
          <ul className="space-y-3">
            {docsNav.map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-gray-400 hover:text-stacks-purple transition-colors block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        
        <main className="flex-1 md:ml-64 px-6 py-12 lg:px-12 lg:py-16 max-w-5xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
