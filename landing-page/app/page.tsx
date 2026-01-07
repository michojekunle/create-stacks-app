import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Templates } from '@/components/templates';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-stacks-purple/30">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-stacks-purple to-stacks-orange" />
            <span className="font-bold text-lg">Create Stacks App</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#templates" className="hover:text-white transition-colors">Templates</a>
            <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://github.com/michojekunle/create-stacks-app" className="text-white hover:text-stacks-purple transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Templates />
      <CTA />
      <Footer />
    </main>
  );
}
