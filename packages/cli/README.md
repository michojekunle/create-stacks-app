# @devvmichael/create-stacks-app

The fastest way to build full-stack applications on Stacks blockchain.

[![npm version](https://badge.fury.io/js/@devvmichael%2Fcreate-stacks-app.svg)](https://www.npmjs.com/package/@devvmichael/create-stacks-app)
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
- ⚛️ **Modern frontend frameworks** - Next.js, React, or Vue
- 🔗 **Pre-configured Stacks.js** - Wallet connect, contract calls ready to go
- 🎨 **Tailwind CSS styling** - Beautiful UI out of the box
- 🧪 **Testing setup included** - Clarinet SDK tests for contracts
- 📦 **Deployment scripts** - One-command deploy to testnet/mainnet

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

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) first.

## Community

- [Stacks Discord](https://discord.gg/stacks)
- [Stacks Forum](https://forum.stacks.org)
- [Twitter @Stacks](https://twitter.com/stacks)

## Author

**Michael Ojekunle** - [@michojekunle](https://github.com/michojekunle)

## License

MIT © Michael Ojekunle
