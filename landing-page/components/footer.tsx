export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-stacks-purple to-stacks-orange" />
            <span className="font-bold text-lg">Create Stacks App</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2024 Create Stacks App. MIT License.
          </div>
        </div>
      </div>
    </footer>
  );
}
