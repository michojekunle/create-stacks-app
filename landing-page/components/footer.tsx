export function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500" />
            <span className="font-medium">Create Stacks App</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="/docs" className="hover:text-white transition-colors">
              Docs
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/stacks"
              className="hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/michojekunle"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>

          <div className="text-sm text-gray-500">© 2025 MIT License</div>
        </div>
      </div>
    </footer>
  );
}
