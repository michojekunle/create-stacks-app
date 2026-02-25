"use client";

import { ArrowRight } from "lucide-react";
import { CopyButton } from "./copy-button";

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
            <div className="flex items-center justify-between gap-4 bg-[#0c0c0c] border border-gray-800 px-5 py-3 rounded-xl font-mono text-sm text-gray-300 w-full sm:w-auto shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-stacks-orange">$</span>
                npx @devvmichael/create-stacks-app my-dapp
              </div>
              <CopyButton text="npx @devvmichael/create-stacks-app my-dapp" />
            </div>
            <a
              href="/docs"
              className="bg-white text-black px-8 py-3.5 rounded-xl font-medium shadow-lg hover:opacity-90 hover:shadow-white/10 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm whitespace-nowrap"
            >
              Start Building <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
