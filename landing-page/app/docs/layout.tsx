import Link from "next/link";
import { Logo } from "@/components/logo";

const docsNav = [
  {
    title: "Getting Started",
    items: [
      { href: "#getting-started", label: "Installation" },
      { href: "#prerequisites", label: "Prerequisites" },
      { href: "#quick-start", label: "Quick Start" },
    ],
  },
  {
    title: "Project Structure",
    items: [
      { href: "#structure", label: "Architecture Overview" },
      { href: "#contracts", label: "Smart Contracts" },
      { href: "#frontend", label: "Frontend Frameworks" },
    ],
  },
  {
    title: "Development",
    items: [
      { href: "#hooks", label: "Stacks Connect v8 Hooks" },
      { href: "#contract-calls", label: "Contract Configuration" },
      { href: "#testing", label: "Testing" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { href: "#deployment", label: "Deploy Contracts" },
      { href: "#networks", label: "Network Configuration" },
    ],
  },
  {
    title: "CLI Reference",
    items: [{ href: "#cli-commands", label: "All Commands" }],
  },
  {
    title: "Templates",
    items: [
      { href: "#templates", label: "Available Templates" },
      { href: "#custom-templates", label: "Contributing" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/5 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-between px-6">
        <Link href="/" className="font-bold text-lg flex items-center gap-2.5">
          <Logo className="w-7 h-7 text-stacks-orange" />
          <span className="tracking-tight text-white">
            Create <span className="text-stacks-orange">Stacks</span> App
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-sm text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stacks-orange" />
            Documentation
          </span>
          <a
            href="https://github.com/michojekunle/create-stacks-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="w-72 fixed top-16 bottom-0 left-0 border-r border-white/5 p-6 hidden lg:block overflow-y-auto bg-black">
          <nav className="space-y-8">
            {docsNav.map((section) => (
              <div key={section.title}>
                <h5 className="font-bold mb-3 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                  {section.title}
                </h5>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors block px-3 py-1.5 rounded-lg hover:bg-white/5 -mx-3"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/5">
            <a
              href="https://twitter.com/devvmichael"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Built by @devvmichael
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 px-6 py-12 lg:px-16 lg:py-16 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
