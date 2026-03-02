"use client";

import { Logo } from "@/components/logo";
import { Github, Twitter, MessageCircle, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Templates", href: "/#templates" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Getting Started", href: "/docs#getting-started" },
    { label: "API Hooks", href: "/docs#hooks" },
    {
      label: "Changelog",
      href: "https://github.com/michojekunle/create-stacks-app/releases",
    },
  ],
  community: [
    {
      label: "GitHub",
      href: "https://github.com/michojekunle/create-stacks-app",
    },
    { label: "Twitter", href: "https://twitter.com/devvmichael" },
    { label: "Stacks Discord", href: "https://discord.gg/stacks" },
    {
      label: "Contribute",
      href: "https://github.com/michojekunle/create-stacks-app/blob/main/CONTRIBUTING.md",
    },
  ],
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/michojekunle/create-stacks-app",
    label: "GitHub",
  },
  { icon: Twitter, href: "https://twitter.com/devvmichael", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/stacks", label: "Discord" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-stacks-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="w-7 h-7 text-stacks-orange" />
              <span className="font-bold text-lg tracking-tight">
                Create <span className="text-stacks-orange">Stacks</span> App
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm mb-6">
              The fastest way to scaffold production-ready Stacks blockchain
              applications. Open-source and built for developers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Create Stacks App. MIT License.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-stacks-orange" /> by{" "}
            <a
              href="https://twitter.com/devvmichael"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              @devvmichael
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
