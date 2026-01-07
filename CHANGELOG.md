# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-01-07

### Added

- Initial release
- **CLI Commands**
  - `create-stacks-app [name]` - Create new project with interactive prompts
  - `create-stacks-app add contract <name>` - Add contracts to existing project
  - `create-stacks-app add component <name>` - Add components to existing project
  - `create-stacks-app deploy <network>` - Deploy contracts to testnet/mainnet
- **Smart Contract Templates**
  - Counter - Simple state management example
  - Token - SIP-010 fungible token
  - NFT - SIP-009 non-fungible token with marketplace
- **Frontend Templates**
  - Next.js with TypeScript and Tailwind CSS
  - React + Vite with TypeScript and Tailwind CSS
  - Vue + Vite with TypeScript and Tailwind CSS
- **Stacks.js Integration**
  - Wallet connect functionality
  - Contract call hooks
  - Read-only function hooks
- **Development Features**
  - Clarinet devnet integration
  - Hot reload for frontend
  - Contract testing with Clarinet SDK
- **CI/CD**
  - GitHub Actions for CI
  - Automated npm publishing on release
