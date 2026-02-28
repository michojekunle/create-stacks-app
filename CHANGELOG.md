# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.42] - 2026-02-28

### Added

- **Contract Verification Rig**: Established a monorepo-wide contract testing suite using `@stacks/clarinet-sdk` and Vitest.
- **New Templates**: Added production-ready smart contract templates for **Staking Pool** (DeFi) and **NFT Marketplace** (Asset Trading).
- **Intelligent Dependency Resolution**: The CLI now automatically detects and includes required SIP traits (SIP-009, SIP-010) when complex contracts are selected.
- **Automated Validation**: Integrated `test:contracts` script into the CLI prepublish flow to ensure template integrity.

### Changed

- **Ecosystem Upgrade**: Migrated from legacy `@hirosystems` packages to modern `@stacks` namespace across all templates and tools.
- **Tailwind CSS v4**: Fully upgraded all frontend templates to the latest Tailwind CSS v4 standard for improved performance and modern styling.
- **Modern Networking**: Standardized `stacks.ts` to use explicit string network identifiers (`mainnet`, `testnet`, `devnet`) as per v7+ standards.

### Fixed

- **Contract Logic**: Resolved critical bugs in `staking-pool` and `nft-marketplace` contract templates where improper `as-contract` usage caused unauthorized transfer errors.
- **Token Overflow**: Fixed a `SupplyOverflow` bug in the Token template and removed artificial supply caps for better flexibility.
- **Import Standardization**: Standardized all internal contract trait imports to use relative paths, ensuring compatibility across different developer environments.

## [0.2.41] - 2026-02-28

### Added

- **UI Refresh**: Introduced a premium, Hiro-inspired dark-first aesthetic for Next.js and React templates.
- **Glassmorphism**: Added modern glass effect UI components (cards, headers, buttons).
- **Hiro Design Tokens**: Integrated Hiro orange and brand color palettes into Tailwind configuration.
- **Dynamic Package Manager Support**: Projects now generate script commands (npm/pnpm/yarn) based on the user's selected package manager.

### Changed

- **Vue.js Template Removal**: Temporarily removed the Vue.js template to focus on refining React and Next.js experiences.
- **Improved README**: Refined the generated `README.md` with better guidance and a more polished look.

### Fixed

- **Clarinet Initialization**: Replaced brittle `echo "n"` pipe with the native `--disable-telemetry` flag, resolving a common hang during project scaffolding.
- **Root Script Errors**: Corrected hardcoded `npm` calls in root `package.json` to respect the user's package manager choice.

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
