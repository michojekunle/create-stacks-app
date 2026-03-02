# @devvmichael/create-stacks-app

The fastest way to build full-stack applications on Stacks blockchain.

[![npm version](https://badge.fury.io/js/@devvmichael%2Fcreate-stacks-app.svg)](https://www.npmjs.com/package/@devvmichael/create-stacks-app)
[![CI](https://github.com/michojekunle/create-stacks-app/actions/workflows/ci.yml/badge.svg)](https://github.com/michojekunle/create-stacks-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Start

```bash
npx @devvmichael/create-stacks-app my-dapp
cd my-dapp
npm run dev
```

## Features

- 🚀 **One-command project setup** - Get started in seconds
- 📝 **Smart contract templates** - Counter, Token (SIP-010), NFT (SIP-009)
- ⚛️ **Modern frontend frameworks** - Next.js or React
- 🔗 **Pre-configured Stacks.js** - Wallet connect, contract calls ready to go
- 🎨 **Tailwind CSS styling** - Beautiful UI out of the box
- 🧪 **Testing setup included** - Clarinet SDK tests for contracts
- 📦 **Deployment scripts** - One-command deploy to testnet/mainnet

### 🗺 Roadmap

- [x] **Interactive CLI** - One-command scaffolding with `npx`
- [x] **Stacks Connect v8** - Modern wallet connection integration
- [x] **Custom Hooks** - `useStacks`, `useContractRead`, `useContractCall`
- [x] **Contract Templates** - SIP-010, SIP-009, Marketplace, Staking
- [x] **Testing Suite** - Vitest + Clarinet SDK pre-configured
- [x] **CLI Add Command** - Add contracts to existing projects
- [x] **CLI Deploy Command** - One-command testnet/mainnet deployment
- [ ] **sBTC Integration** - Native support for Bitcoin-backed assets
- [ ] **Type Generation** - End-to-end type safety from Clarity code
- [ ] **Turborepo Scaffold** - High-performance monorepo option
- [ ] **Shadcn/UI** - Optional UI component library injection
- [ ] **CI/CD Pipelines** - Auto-generated GitHub Actions
- [ ] **AI Boilerplate** - Experimental `--ai` flag for contract generation

See the full [3-6 Month Roadmap](ROADMAP.md) for more details.

## Installation

```bash
# Using npx (recommended)
npx @devvmichael/create-stacks-app my-dapp

# Or install globally
npm install -g @devvmichael/create-stacks-app
create-stacks-app my-dapp
```

## Usage

### Interactive Mode

Simply run without arguments for interactive prompts:

```bash
npx @devvmichael/create-stacks-app
```

### Command Line Options

```bash
npx @devvmichael/create-stacks-app my-dapp [options]

Options:
  -t, --template <name>      Frontend template: nextjs, react, vue
  -c, --contracts <list>     Contracts to include: counter,token,nft
  --typescript               Use TypeScript (default: true)
  --no-typescript            Use JavaScript
  --tailwind                 Include Tailwind CSS (default: true)
  --no-git                   Skip Git initialization
  --package-manager <pm>     Package manager: npm, pnpm, yarn
  --skip-install             Skip dependency installation
  -y, --yes                  Skip prompts, use defaults
```

### Example Commands

```bash
# Create with all defaults
npx @devvmichael/create-stacks-app my-dapp -y

# Create with React and all contracts
npx @devvmichael/create-stacks-app my-dapp -t react -c counter,token,nft

# Create with npm instead of pnpm
npx @devvmichael/create-stacks-app my-dapp --package-manager npm
```

## Adding to Existing Projects

### Add a Contract

```bash
# Add a new contract
npx @devvmichael/create-stacks-app add contract my-contract

# Add a SIP-010 token contract
npx @devvmichael/create-stacks-app add contract my-token --sip010

# Add a SIP-009 NFT contract
npx @devvmichael/create-stacks-app add contract my-nft --sip009
```

### Add a Component

```bash
npx @devvmichael/create-stacks-app add component my-component
```

## Deployment

### Deploy to Testnet

```bash
npm run deploy:testnet
# or
npx @devvmichael/create-stacks-app deploy testnet
```

### Deploy to Mainnet

```bash
npm run deploy:mainnet
# or
npx @devvmichael/create-stacks-app deploy mainnet
```

## Project Structure

Generated projects have the following structure:

```
my-dapp/
├── contracts/           # Clarity smart contracts
│   └── counter.clar
├── tests/               # Contract tests
│   └── counter.test.ts
├── frontend/            # Frontend application
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   ├── hooks/           # Stacks.js hooks
│   └── lib/             # Utilities and config
├── deployments/         # Deployment configurations
├── scripts/             # Utility scripts
├── Clarinet.toml        # Clarinet configuration
└── package.json
```

## Available Scripts

In a generated project:

| Script                   | Description                          |
| ------------------------ | ------------------------------------ |
| `npm run dev`            | Start dev server (frontend + devnet) |
| `npm run test`           | Run contract tests with Clarinet     |
| `npm run build`          | Build frontend for production        |
| `npm run deploy:testnet` | Deploy contracts to testnet          |
| `npm run deploy:mainnet` | Deploy contracts to mainnet          |

## Smart Contract Templates

### Counter

Simple state management example demonstrating:

- Data variables
- Public functions
- Read-only functions
- Owner-only access control

### Token (SIP-010)

Full SIP-010 compliant fungible token with:

- Transfer, mint, and burn functionality
- Token URI support
- Owner administration

### NFT (SIP-009)

Full SIP-009 compliant NFT with:

- Mint and transfer
- Token metadata
- Built-in marketplace (list, buy, unlist)

## Requirements

- **Node.js** 18.0 or higher
- **pnpm** (recommended) or npm/yarn
- **Clarinet** - [Install here](https://github.com/hirosystems/clarinet)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) first.

```bash
# Clone the repo
git clone https://github.com/michojekunle/create-stacks-app.git
cd create-stacks-app

# Install dependencies
pnpm install

# Build
pnpm build

# Test locally
node packages/cli/dist/index.js my-test-project
```

## Community

- [Stacks Discord](https://discord.gg/stacks)
- [Stacks Forum](https://forum.stacks.org)
- [Twitter @Stacks](https://twitter.com/stacks)

## License

MIT © [A M D](https://x.com/devvmichael)
