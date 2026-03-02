# create-stacks-app Roadmap (Next 3-6 Months)

This roadmap outlines the long-term vision and development timeline for `create-stacks-app`. As the Stacks ecosystem grows with the Nakamoto Release and sBTC, `create-stacks-app` aims to be the _de facto_ scaffolding tool for all developers entering the space.

Our goal is to lower the barrier to entry, standardize best practices, and fast-track innovation by providing world-class Developer Experience (DX) out of the box.

---

## 🎯 Phase 1: Core Ecosystem Alignment (Month 1-2)

_Focus: Upgrading the foundational templates to support the biggest upcoming Stacks narratives._

- [ ] **Nakamoto-Ready Templates:** Implement frontend templates that showcase optimistic UI updates and gracefully handle the new ~5 second block times.
- [ ] **sBTC-Ready Applications:** Create templates specifically designed to handle trustless Bitcoin deposits and withdrawals (sBTC) out of the box.
- [ ] **Advanced Smart Contract Boilerplates:** Expand beyond simple Counter and Token templates. Introduce DAOs (ExecutorDAO standard), automated market makers (AMMs), staking pools, and Multi-sig wallet boilerplates.

## 🛠 Phase 2: Professional Developer Experience (DX) (Month 3-4)

_Focus: Tooling that scales from hackathons to enterprise production._

- [ ] **Stacks.js Type Generation:** Automatically configure scripts that generate TypeScript types directly from the Clarity smart contracts, providing 100% end-to-end type safety between the frontend and the blockchain.
- [ ] **Monorepo Architecture (Turborepo):** Introduce a `--monorepo` flag that creates a Turborepo workspace, keeping the API, frontend, and Clarinet workspace strictly separated but easily manageable.
- [ ] **Pre-configured CI/CD Pipelines:** Auto-generate GitHub Actions `.yml` files that automatically run Clarinet tests on push and suggest deployments to Vercel/Netlify.

## 🎨 Phase 3: Modern UI & Web3 Integrations (Month 4-5)

_Focus: Helping developers ship beautiful, functional dApps faster._

- [ ] **UI Framework Options:** Allow developers to inject popular styling libraries on setup (e.g., `create-stacks-app --tailwind --shadcn`).
- [x] **Pre-built Web3 Components:** Generate frontends with a working, beautifully styled `<ConnectWallet />` button that natively handles Leather, and Xverse wallets perfectly.
- [x] **Custom React Hooks Integration:** Provide well-documented, boilerplate custom hooks like `useStacks()`, `useContractCall()`, and `useContractRead()`.
- [ ] **useSbtcBalance() Hook:** Support for upcoming sBTC integration.

## 🤖 Phase 4: Innovation & Edge Features (Month 5-6)

_Focus: Pushing the boundaries of what a CLI scaffolding tool can do._

- [ ] **React Native / Expo Support:** Introduce an option to scaffold mobile applications for the Stacks ecosystem, expanding beyond just web apps.
- [ ] **AI Smart Contract Scaffolding:** Add an experimental `--ai` flag. Developers could run `create-stacks-app --ai "A contract that splits payments between 3 people"`, hitting an LLM API to generate a basic draft of that Clarity contract directly into their new folder.

---

### Community & Feedback

We believe in building in public. If you have suggestions or want to contribute to any of these roadmap items, please check out our [Contributing Guide](CONTRIBUTING.md) or open an issue on GitHub!
