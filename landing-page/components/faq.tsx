"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Create Stacks App?",
    answer:
      "Create Stacks App is a CLI tool designed to jumpstart dApp development on the Stacks blockchain. It provides a pre-configured monorepo with your choice of frontend (Next.js, React, Vue, Vite) and production-ready smart contract templates.",
  },
  {
    question: "Do I need Clarinet installed?",
    answer:
      "Yes, we recommend having Clarinet installed as it's the core tool for Clarity development. Create Stacks App integrates seamlessly with Clarinet for contract testing and deployment.",
  },
  {
    question: "Which frontend frameworks are supported?",
    answer:
      "Currently, we support Next.js (App Router), React (Vite), and Vue (Vite). All templates come with Stacks.js and wallet integration (Leather/Xverse) pre-installed.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Absolutely. Create Stacks App is open-source and free to use for both personal and commercial projects. We welcome community contributions!",
  },
  {
    question: "How do I deploy my contracts?",
    answer:
      "The scaffolded project includes deployment scripts in the contracts directory. You can deploy to local devnet, testnet, or mainnet by following the instructions in the generated README.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 border-t border-gray-900 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about the toolkit.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-900 rounded-2xl bg-[#050505] overflow-hidden transition-all duration-300 hover:border-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-gray-200">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-stacks-orange shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-400 font-light leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
