import { CopyButton } from "@/components/copy-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Comprehensive documentation for Create Stacks App. Learn how to scaffold, develop, and deploy full-stack applications on the Stacks blockchain.",
  alternates: {
    canonical: "https://create-stacksapp.vercel.app/docs",
  },
  openGraph: {
    title: "Documentation | Create Stacks App",
    description:
      "Comprehensive documentation for Create Stacks App. Learn how to scaffold, develop, and deploy full-stack applications on the Stacks blockchain.",
    url: "https://create-stacksapp.vercel.app/docs",
    images: [
      {
        url: "/api/og?title=Official%20Documentation&description=Learn%20how%20to%20scaffold,%20develop,%20and%20deploy%20full-stack%20applications%20on%20the%20Stacks%20blockchain.",
        width: 1200,
        height: 630,
        alt: "Create Stacks App Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | Create Stacks App",
    description:
      "Comprehensive documentation for Create Stacks App. Learn how to scaffold, develop, and deploy full-stack applications on the Stacks blockchain.",
    images: [
      "/api/og?title=Official%20Documentation&description=Learn%20how%20to%20scaffold,%20develop,%20and%20deploy%20full-stack%20applications%20on%20the%20Stacks%20blockchain.",
    ],
  },
};

function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl font-mono text-sm relative overflow-hidden w-full max-w-3xl shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-white/5" />
            <span className="w-3 h-3 rounded-full bg-white/5" />
            <span className="w-3 h-3 rounded-full bg-white/5" />
          </div>
          {title && (
            <span className="text-[11px] text-gray-500 font-mono uppercase tracking-widest">
              {title}
            </span>
          )}
        </div>
        <CopyButton text={code} className="text-gray-500" />
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
          {code}
        </pre>
      </div>
    </div>
  );
}

function InfoCard({
  tag,
  desc,
  accent,
}: {
  tag: string;
  desc: string;
  accent?: string;
}) {
  return (
    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-200 group">
      <h3
        className={`font-bold text-sm font-mono inline-block px-3 py-1 rounded-lg mb-3 ${
          accent || "bg-white/5 text-stacks-orange"
        }`}
      >
        {tag}
      </h3>
      <p className="text-sm text-gray-400 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

export default function DocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Create Stacks App Documentation",
    description:
      "Comprehensive documentation for Create Stacks App. Learn how to scaffold, develop, and deploy full-stack applications on the Stacks blockchain.",
    author: {
      "@type": "Person",
      name: "Michael Ojekunle",
      url: "https://twitter.com/devvmichael",
    },
    publisher: {
      "@type": "Organization",
      name: "Create Stacks App",
    },
  };

  return (
    <div className="space-y-20 mt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stacks-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Documentation
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
          Everything you need to build next-generation Stacks blockchain
          applications. From initial setup to production deployment.
        </p>
      </div>

      {/* Getting Started */}
      <section id="getting-started" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            01
          </span>
          Getting Started
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Create Stacks App provides the fastest pipeline for scaffolding
          full-stack Stacks applications. A single command sets up your entire
          project with your choice of frontend framework, smart contract
          templates, and testing infrastructure powered by Clarinet and Vitest.
        </p>

        <CodeBlock
          title="Terminal"
          code="npx @devvmichael/create-stacks-app my-dapp"
        />

        <p className="text-gray-500 text-sm font-light">
          The CLI will walk you through selecting a frontend framework, which
          contracts to include, whether to use TypeScript and Tailwind CSS, and
          your preferred package manager.
        </p>

        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 max-w-3xl">
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            <strong className="text-white">Non-interactive mode:</strong> Skip
            prompts with the{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              -y
            </code>{" "}
            flag to use all defaults (Next.js + Counter contract + TypeScript +
            Tailwind):
          </p>
          <CodeBlock
            title="Quick Mode"
            code="npx @devvmichael/create-stacks-app my-dapp -y"
          />
        </div>
      </section>

      {/* Prerequisites */}
      <section id="prerequisites" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            02
          </span>
          Prerequisites
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Before getting started, make sure you have the following tools
          installed on your machine:
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <InfoCard
            tag="Node.js ≥ 18"
            desc="Required for running the CLI and frontend dev server. Download from nodejs.org."
          />
          <InfoCard
            tag="Clarinet"
            desc="Hiro's development tool for Clarity smart contracts. Required for contract testing and deployment."
          />
          <InfoCard
            tag="npm / pnpm / yarn"
            desc="Any Node.js package manager. The CLI will let you choose during scaffolding. pnpm is recommended."
          />
          <InfoCard
            tag="Git"
            desc="Version control for your project. The CLI can optionally initialize a git repo during scaffolding."
          />
        </div>

        <div className="bg-stacks-orange/5 border border-stacks-orange/10 rounded-2xl p-5 max-w-3xl">
          <p className="text-sm text-stacks-orange font-medium mb-1">
            💡 Clarinet Installation
          </p>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Install Clarinet via Homebrew on macOS:{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              brew install clarinet
            </code>{" "}
            or follow the{" "}
            <a
              href="https://docs.hiro.so/clarinet/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stacks-orange underline underline-offset-2"
            >
              official installation guide
            </a>
            .
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            03
          </span>
          Quick Start
        </h2>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          After scaffolding your project, follow these steps to start
          developing:
        </p>

        <CodeBlock title="Step 1 — Navigate" code={`cd my-dapp`} />
        <CodeBlock title="Step 2 — Install Dependencies" code={`npm install`} />
        <CodeBlock
          title="Step 3 — Start Frontend"
          code={`# Start the frontend dev server
cd frontend
npm run dev`}
        />
        <CodeBlock
          title="Step 4 — Start Clarinet Devnet (separate terminal)"
          code={`# From project root
cd contracts
clarinet devnet start`}
        />

        <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
          Your frontend will be available at{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            http://localhost:3000
          </code>{" "}
          (Next.js) or{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            http://localhost:5173
          </code>{" "}
          (React + Vite).
        </p>
      </section>

      {/* Architecture */}
      <section id="structure" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            04
          </span>
          Architecture Overview
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Projects are scaffolded with a clean separation between your frontend
          framework and Clarity smart contracts. Each part can be developed,
          tested, and deployed independently.
        </p>

        <CodeBlock
          title="Project Tree"
          code={`my-dapp/
├── contracts/                # Clarity smart contracts
│   ├── contracts/            # .clar contract files
│   │   └── counter.clar      # Selected contract template(s)
│   ├── tests/                # Vitest + Clarinet SDK tests
│   │   └── counter.test.ts
│   ├── Clarinet.toml         # Clarinet configuration
│   ├── settings/
│   │   ├── Devnet.toml       # Devnet wallet/settings
│   │   └── Simnet.toml       # Simnet settings (for tests)
│   ├── deployments/
│   │   └── default.simnet-plan.yaml
│   └── package.json          # Test runner scripts
├── frontend/                 # Your chosen framework
│   ├── app/                  # Pages & routes (Next.js)
│   ├── components/           # UI components
│   ├── hooks/                # Stacks Connect v8 hooks
│   │   ├── use-stacks.ts     # Wallet connection
│   │   ├── use-contract-read.ts  # Read-only calls
│   │   └── use-contract-call.ts  # Public function calls
│   ├── lib/
│   │   ├── stacks.ts         # Core Stacks utilities
│   │   └── contracts.ts      # Contract config definitions
│   ├── .env                  # Network config (devnet default)
│   ├── .env.example          # Env template
│   └── package.json
├── .editorconfig
├── .prettierrc
├── .gitignore
└── README.md`}
        />
      </section>

      {/* Contracts */}
      <section id="contracts" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            05
          </span>
          Smart Contracts
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Smart contracts are written in{" "}
          <a
            href="https://docs.stacks.co/clarity/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stacks-orange underline underline-offset-2"
          >
            Clarity
          </a>
          , a decidable language for the Stacks blockchain. Each template
          includes a fully tested contract.
        </p>

        <CodeBlock
          title="contracts/contracts/counter.clar"
          code={`;; Counter Contract
;; A simple contract demonstrating state management in Clarity

;; Data variables
(define-data-var counter uint u0)
(define-data-var owner principal tx-sender)

;; Error codes
(define-constant ERR-NOT-OWNER (err u403))

;; Increment the counter by 1
(define-public (increment)
  (ok (var-set counter (+ (var-get counter) u1))))

;; Decrement the counter by 1
(define-public (decrement)
  (let ((current (var-get counter)))
    (asserts! (> current u0) (err u400))
    (ok (var-set counter (- current u1)))))

;; Reset the counter to 0 (owner only)
(define-public (reset)
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-OWNER)
    (ok (var-set counter u0))))

;; Set the counter to a specific value (owner only)
(define-public (set-counter (value uint))
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-OWNER)
    (ok (var-set counter value))))

;; Read-only functions
(define-read-only (get-counter)
  (ok (var-get counter)))

(define-read-only (get-owner)
  (ok (var-get owner)))`}
        />
      </section>

      {/* Frontend */}
      <section id="frontend" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            06
          </span>
          Frontend Frameworks
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Choose from two frontend frameworks during scaffolding. Both come
          pre-configured with{" "}
          <strong className="text-white">@stacks/connect v8</strong>,{" "}
          TypeScript, and Tailwind CSS v4.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <InfoCard
            tag="Next.js (Recommended)"
            desc="Next.js 15 with App Router, React 19, server components. Includes dedicated hooks/ and lib/ directories with full Stacks integration."
          />
          <InfoCard
            tag="React + Vite"
            desc="React 19 SPA with Vite 6 and HMR. All Stacks logic is self-contained in App.tsx with inline connection management."
          />
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 max-w-3xl">
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            💡 The Next.js template extracts Stacks logic into reusable hooks ({" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              useStacks
            </code>
            ,{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              useContractRead
            </code>
            ,{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              useContractCall
            </code>
            ) and a shared{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              lib/stacks.ts
            </code>{" "}
            utility library. The React template keeps everything inline for
            simplicity.
          </p>
        </div>
      </section>

      {/* Hooks */}
      <section id="hooks" className="scroll-mt-24 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
              07
            </span>
            Stacks Connect v8 Hooks
          </h2>
          <p className="text-gray-400 font-light max-w-3xl mb-6 leading-relaxed">
            The Next.js template includes three pre-built hooks that wrap{" "}
            <strong className="text-white">@stacks/connect v8</strong> APIs.
            These hooks use a shared{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              lib/stacks.ts
            </code>{" "}
            utility library that handles wallet connection, read-only calls via
            the Hiro API, and contract calls via the{" "}
            <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
              request()
            </code>{" "}
            method.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl">
          {/* useStacks hook */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              useStacks() — Wallet Connection
            </h3>
            <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
              Manages wallet state using the v8{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                connect()
              </code>{" "}
              API. Supports both Leather and Xverse wallets. The hook persists
              connection state in localStorage via{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                isConnected()
              </code>{" "}
              and{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                getLocalStorage()
              </code>
              .
            </p>
            <CodeBlock
              title="hooks/use-stacks.ts"
              code={`"use client";

import { useState, useEffect, useCallback } from "react";
import {
  connectWallet,
  disconnectWallet,
  checkIsConnected,
  getConnectedAddress,
} from "@/lib/stacks";

export function useStacks() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check connection on mount
  useEffect(() => {
    const connected = checkIsConnected();
    setIsConnected(connected);
    if (connected) {
      setAddress(getConnectedAddress());
    }
  }, []);

  const handleConnect = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await connectWallet();
      // v8 connect() returns { addresses: AddressEntry[] }
      const stxAddress =
        result.addresses?.find((a) => a.symbol === "STX")?.address ||
        result.addresses?.[0]?.address ||
        null;
      setAddress(stxAddress);
      setIsConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnectWallet();
    setAddress(null);
    setIsConnected(false);
  }, []);

  return { isConnected, address, isLoading,
    connect: handleConnect, disconnect: handleDisconnect };
}`}
            />
          </div>

          {/* useContractRead hook */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              useContractRead() — Read-Only Calls
            </h3>
            <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
              Reads contract state via the Hiro API (
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                /v2/contracts/call-read/
              </code>
              ). No wallet connection required. Uses the{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                ContractConfig
              </code>{" "}
              type from{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                lib/contracts.ts
              </code>
              .
            </p>
            <CodeBlock
              title="hooks/use-contract-read.ts"
              code={`"use client";

import { useEffect, useState, useCallback } from "react";
import { callReadOnly } from "@/lib/stacks";
import type { ContractConfig } from "@/lib/contracts";

export function useContractRead(
  contract: ContractConfig,
  functionName: string,
  functionArgs: string[] = [],
) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await callReadOnly({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        senderAddress: contract.address,
      });
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [contract.address, contract.name, functionName]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}`}
            />
          </div>

          {/* useContractCall hook */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              useContractCall() — Public Function Calls
            </h3>
            <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
              Calls public contract functions through the user&apos;s wallet
              using the v8{" "}
              <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
                request(&quot;stx_callContract&quot;)
              </code>{" "}
              method. Returns the transaction ID on success.
            </p>
            <CodeBlock
              title="hooks/use-contract-call.ts"
              code={`"use client";

import { useState } from "react";
import { callContract } from "@/lib/stacks";
import { useStacks } from "./use-stacks";
import type { ContractConfig } from "@/lib/contracts";

export function useContractCall(
  contract: ContractConfig,
  functionName: string,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [txId, setTxId] = useState<string | null>(null);
  const { address } = useStacks();

  const call = async (functionArgs: string[] = []) => {
    if (!address) throw new Error("Wallet not connected");
    setIsLoading(true);
    try {
      // Uses @stacks/connect v8 request("stx_callContract", params)
      const result = await callContract({
        contractAddress: contract.address,
        contractName: contract.name,
        functionName,
        functionArgs,
        network: contract.network,
      });
      if (result?.txid) {
        setTxId(result.txid);
      }
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { call, isLoading, error, txId };
}`}
            />
          </div>
        </div>
      </section>

      {/* Contract Config */}
      <section id="contract-calls" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            08
          </span>
          Contract Configuration
        </h2>
        <p className="text-gray-400 font-light max-w-3xl mb-6 leading-relaxed">
          Contracts are configured in{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            lib/contracts.ts
          </code>{" "}
          using the{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            ContractConfig
          </code>{" "}
          interface. The address defaults to the Clarinet devnet deployer.
        </p>

        <CodeBlock
          title="lib/contracts.ts"
          code={`import { networkName } from "./stacks";

export interface ContractConfig {
  address: string;
  name: string;
  network: string;
}

const contractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";

export const counterContract: ContractConfig = {
  address: contractAddress,
  name: "counter",
  network: networkName,
};

export const tokenContract: ContractConfig = {
  address: contractAddress,
  name: "token",
  network: networkName,
};

export const nftContract: ContractConfig = {
  address: contractAddress,
  name: "nft",
  network: networkName,
};`}
        />

        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Use these configs with the hooks:
        </p>
        <CodeBlock
          title="Example Usage"
          code={`import { useContractRead } from "@/hooks/use-contract-read";
import { useContractCall } from "@/hooks/use-contract-call";
import { counterContract } from "@/lib/contracts";

// Read the counter value
const { data, isLoading } = useContractRead(counterContract, "get-counter");

// Call increment
const { call, txId } = useContractCall(counterContract, "increment");
await call(); // Opens wallet for signing`}
        />
      </section>

      {/* Testing */}
      <section id="testing" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            09
          </span>
          Testing
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Contracts are tested using{" "}
          <strong className="text-white">Vitest</strong> with the{" "}
          <strong className="text-white">Clarinet SDK</strong>. The global{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            simnet
          </code>{" "}
          object is injected by the Clarinet test runner and provides methods
          for simulating blockchain interactions.
        </p>

        <CodeBlock title="Run Contract Tests" code={`cd contracts\nnpm test`} />

        <CodeBlock
          title="contracts/tests/counter.test.ts"
          code={`import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;

describe("Counter Contract", () => {
  it("should start at zero", () => {
    const result = simnet.callReadOnlyFn(
      "counter", "get-counter", [], deployer
    );
    expect(result.result).toBeOk(Cl.uint(0));
  });

  it("should increment counter by 1", () => {
    const block = simnet.callPublicFn(
      "counter", "increment", [], deployer
    );
    expect(block.result).toBeOk(Cl.bool(true));

    const result = simnet.callReadOnlyFn(
      "counter", "get-counter", [], deployer
    );
    expect(result.result).toBeOk(Cl.uint(1));
  });

  it("should prevent non-owner from resetting", () => {
    const block = simnet.callPublicFn(
      "counter", "reset", [], wallet1
    );
    expect(block.result).toBeErr(Cl.uint(403));
  });
});`}
        />
      </section>

      {/* Deployment */}
      <section id="deployment" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            10
          </span>
          Deployment
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          There are two ways to deploy contracts: using the built-in CLI{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            deploy
          </code>{" "}
          command, or using Clarinet directly.
        </p>

        <h3 className="text-lg font-bold text-white">CLI Deploy Command</h3>
        <CodeBlock
          title="Deploy via CLI"
          code={`# Deploy to testnet
npx @devvmichael/create-stacks-app deploy testnet

# Deploy to mainnet
npx @devvmichael/create-stacks-app deploy mainnet

# With a specific private key
npx @devvmichael/create-stacks-app deploy testnet --private-key <key>`}
        />

        <h3 className="text-lg font-bold text-white">Clarinet Devnet</h3>
        <CodeBlock
          title="Start Local Devnet"
          code={`cd contracts
clarinet devnet start`}
        />
      </section>

      {/* Networks */}
      <section id="networks" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            11
          </span>
          Network Configuration
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          The scaffolded frontend reads the network from environment variables.
          The{" "}
          <code className="text-stacks-orange bg-white/5 px-1.5 py-0.5 rounded">
            lib/stacks.ts
          </code>{" "}
          utility automatically resolves the correct API URL for each network.
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
          <InfoCard
            tag="Devnet"
            desc="Local blockchain via Clarinet. API at localhost:3999. Free STX, instant blocks."
          />
          <InfoCard
            tag="Testnet"
            desc="Public test network via api.testnet.hiro.so. Free testnet STX available from faucet."
          />
          <InfoCard
            tag="Mainnet"
            desc="Production network via api.mainnet.hiro.so. Real STX required for transactions."
          />
        </div>

        <CodeBlock
          title=".env (Next.js)"
          code={`# Network: devnet | testnet | mainnet
NEXT_PUBLIC_NETWORK=devnet

# Contract deployer address (default: Clarinet devnet deployer)
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM`}
        />

        <CodeBlock
          title=".env (React + Vite)"
          code={`# Network: devnet | testnet | mainnet
VITE_NETWORK=devnet

# Contract deployer address
VITE_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM`}
        />
      </section>

      {/* CLI Commands */}
      <section id="cli-commands" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            12
          </span>
          CLI Commands
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          The CLI provides three commands for the full development lifecycle.
        </p>

        <h3 className="text-lg font-bold text-white">create (default)</h3>
        <p className="text-gray-400 text-sm font-light mb-3 max-w-3xl">
          Scaffold a new project with an interactive wizard.
        </p>
        <CodeBlock
          title="Create Command"
          code={`npx @devvmichael/create-stacks-app [project-name] [options]

Options:
  -t, --template <name>      Frontend template (nextjs, react)
  -c, --contracts <list>     Contracts to include (counter,token,nft)
  --typescript / --no-typescript
  --tailwind / --no-tailwind
  --no-git                   Skip Git initialization
  --package-manager <pm>     npm, pnpm, or yarn
  --skip-install             Skip dependency installation
  -y, --yes                  Skip prompts, use defaults`}
        />

        <h3 className="text-lg font-bold text-white">add</h3>
        <p className="text-gray-400 text-sm font-light mb-3 max-w-3xl">
          Add a contract or component to an existing project.
        </p>
        <CodeBlock
          title="Add Command"
          code={`npx @devvmichael/create-stacks-app add <type> <name>

Options:
  --sip010        Create a SIP-010 fungible token contract
  --sip009        Create a SIP-009 NFT contract
  -t, --template  Use a specific template (marketplace, defi)

Examples:
  npx @devvmichael/create-stacks-app add contract my-token --sip010
  npx @devvmichael/create-stacks-app add contract my-nft --sip009`}
        />

        <h3 className="text-lg font-bold text-white">deploy</h3>
        <p className="text-gray-400 text-sm font-light mb-3 max-w-3xl">
          Deploy contracts to testnet or mainnet.
        </p>
        <CodeBlock
          title="Deploy Command"
          code={`npx @devvmichael/create-stacks-app deploy <network>

Options:
  --private-key <key>  Private key (or set STACKS_PRIVATE_KEY env var)

Examples:
  npx @devvmichael/create-stacks-app deploy testnet
  npx @devvmichael/create-stacks-app deploy mainnet --private-key <key>`}
        />
      </section>

      {/* Templates */}
      <section id="templates" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            13
          </span>
          Available Templates
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Choose from five contract templates during scaffolding. You can select
          multiple contracts at once.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <InfoCard
            tag="Counter (default)"
            desc="Simple state management with owner-gated reset. Demonstrates data variables, error handling, and access control."
          />
          <InfoCard
            tag="SIP-010 Token"
            desc="Full fungible token standard. Includes mint, burn, transfer, and balance queries following the SIP-010 specification."
          />
          <InfoCard
            tag="SIP-009 NFT"
            desc="Non-fungible token standard. Minting, metadata, transfer, and ownership queries following SIP-009."
          />
          <InfoCard
            tag="Staking Pool (DeFi)"
            desc="DeFi staking example with a SIP-010 trait dependency. Demonstrates multi-contract architecture."
          />
          <InfoCard
            tag="NFT Marketplace"
            desc="Trading marketplace with listing, buying, and selling. Includes NFT trait and a companion SIP-009 contract."
          />
        </div>
      </section>

      {/* Custom Templates */}
      <section id="custom-templates" className="scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-xs font-mono text-stacks-orange bg-stacks-orange/10 px-2.5 py-1 rounded-lg">
            14
          </span>
          Contributing
        </h2>
        <p className="text-gray-400 font-light max-w-3xl leading-relaxed">
          Want to contribute a new template or improve the CLI?{" "}
          <a
            href="https://github.com/michojekunle/create-stacks-app/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stacks-orange underline underline-offset-2"
          >
            Check out the contributing guide
          </a>{" "}
          for instructions on how to add new contract templates, frontend
          configurations, or CLI features.
        </p>
      </section>

      {/* CTA */}
      <section className="scroll-mt-24 space-y-6 pb-12">
        <div className="bg-gradient-to-br from-stacks-orange/10 to-transparent border border-stacks-orange/10 rounded-2xl p-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to start building?
          </h2>
          <p className="text-gray-400 font-light mb-6">
            Scaffold your first Stacks dApp in seconds and join the growing
            ecosystem of Stacks developers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/#templates"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-xl text-sm font-bold hover:-translate-y-0.5 transition-all shadow-lg shadow-white/10"
            >
              Browse Templates
            </a>
            <a
              href="https://github.com/michojekunle/create-stacks-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 rounded-xl text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
