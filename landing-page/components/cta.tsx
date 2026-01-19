"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to build?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get started in seconds with a single command.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 px-5 py-3 rounded-lg font-mono text-sm text-gray-300">
              <span className="text-blue-400">$</span>
              npx @devvmichael/create-stacks-app my-dapp
            </div>
            <a
              href="/docs"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              Start Building <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
