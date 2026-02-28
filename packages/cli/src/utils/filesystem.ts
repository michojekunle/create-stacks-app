import fs from "fs-extra";
import path from "path";
import ora from "ora";
import type { ProjectConfig } from "../types/index.js";

export async function createProjectStructure(
  config: ProjectConfig,
): Promise<void> {
  const spinner = ora("Creating project structure...").start();

  try {
    const { projectPath } = config;

    // Check if directory exists
    if (await fs.pathExists(projectPath)) {
      spinner.fail(`Directory ${config.projectName} already exists`);
      throw new Error(`Directory ${config.projectName} already exists`);
    }

    // Create main directories
    await fs.ensureDir(projectPath);
    await fs.ensureDir(path.join(projectPath, "contracts"));
    await fs.ensureDir(path.join(projectPath, "tests"));
    await fs.ensureDir(path.join(projectPath, "frontend"));
    await fs.ensureDir(path.join(projectPath, "scripts"));

    spinner.succeed("Project structure created");
  } catch (error) {
    spinner.fail("Failed to create project structure");
    throw error;
  }
}

export async function copyBaseFiles(
  projectPath: string,
  config: ProjectConfig,
  templatesDir: string,
): Promise<void> {
  const spinner = ora("Copying base files...").start();

  try {
    const baseTemplatePath = path.join(templatesDir, "base");

    // Copy .gitignore
    if (await fs.pathExists(path.join(baseTemplatePath, "gitignore"))) {
      await fs.copy(
        path.join(baseTemplatePath, "gitignore"),
        path.join(projectPath, ".gitignore"),
      );
    }

    // Copy .editorconfig
    if (await fs.pathExists(path.join(baseTemplatePath, "editorconfig"))) {
      await fs.copy(
        path.join(baseTemplatePath, "editorconfig"),
        path.join(projectPath, ".editorconfig"),
      );
    }

    // Copy .prettierrc
    if (await fs.pathExists(path.join(baseTemplatePath, "prettierrc"))) {
      await fs.copy(
        path.join(baseTemplatePath, "prettierrc"),
        path.join(projectPath, ".prettierrc"),
      );
    }

    // Generate README
    await generateReadme(projectPath, config);

    // Create root package.json
    await createRootPackageJson(projectPath, config);

    // Generate Vitest config for contract testing
    await generateVitestConfig(projectPath);

    // Generate deployment scripts
    await generateDeployScripts(projectPath, config);

    // Generate contract guide
    await generateContractGuide(projectPath, config);

    spinner.succeed("Base files copied");
  } catch (error) {
    spinner.fail("Failed to copy base files");
    throw error;
  }
}

async function generateVitestConfig(projectPath: string): Promise<void> {
  const content = `/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { vitestSetupFilePath, getClarinetVitestsArgv } from "@stacks/clarinet-sdk/vitest";

export default defineConfig({
  test: {
    environment: "clarinet",
    setupFiles: [
      vitestSetupFilePath,
    ],
    environmentOptions: {
      clarinet: {
        ...getClarinetVitestsArgv(),
      },
    },
  },
});
`;

  await fs.writeFile(path.join(projectPath, "vitest.config.ts"), content);
}

async function generateDeployScripts(
  projectPath: string,
  config: ProjectConfig,
): Promise<void> {
  const scriptsDir = path.join(projectPath, "scripts");

  const testnetContent = `// Deployment script for testnet
/**
 * Ready to deploy to Testnet!
 * 
 * For detailed instructions on how to use deployment plans or automated scripts,
 * please refer to the CONTRACT_GUIDE.md in your project root.
 */
console.log("Ready to deploy to Testnet!");
console.log("See CONTRACT_GUIDE.md for deployment instructions.");
`;

  const mainnetContent = `// Deployment script for mainnet
/**
 * Ready to deploy to Mainnet!
 * 
 * For detailed instructions on how to use deployment plans or automated scripts,
 * please refer to the CONTRACT_GUIDE.md in your project root.
 */
console.log("Ready to deploy to Mainnet!");
console.log("See CONTRACT_GUIDE.md for deployment instructions.");
`;

  await fs.writeFile(
    path.join(scriptsDir, "deploy-testnet.js"),
    testnetContent,
  );
  await fs.writeFile(
    path.join(scriptsDir, "deploy-mainnet.js"),
    mainnetContent,
  );
}

async function generateContractGuide(
  projectPath: string,
  config: ProjectConfig,
): Promise<void> {
  const content = `# 🛠️ Stacks Contract Development & Deployment Guide

This guide covers the full lifecycle of Stacks smart contracts in your new project.

## 1. Local Development (Devnet)

Devnet is your local, ephemeral blockchain environment. 

### 🚀 Starting Devnet
\`\`\`bash
${config.packageManager === "npm" ? "npm run" : config.packageManager} dev
\`\`\`
- **Stacks API**: http://localhost:3999
- **Stacks Explorer**: http://localhost:8000

## 2. Testing Contracts

We use the **Clarinet SDK** integrated with **Vitest** for robust testing.

### 🧪 Running Tests
\`\`\`bash
${config.packageManager === "npm" ? "npm run" : config.packageManager} test
\`\`\`

## 3. Public Networks (Testnet & Mainnet)

### 🚢 Deployment Strategies

#### Option A: Clarinet Deployment Plans (Recommended)
1. Generate a plan: \`clarinet deployment generate --testnet\`
2. Apply the plan: \`clarinet deployment apply --testnet\`

#### Option B: Scripted Broadcasts
Update the files in \`scripts/\` using \`@stacks/transactions\` to automate custom deployment logic.

---

Built with ⚡ [Create Stacks App](https://github.com/michojekunle/create-stacks-app)
`;

  await fs.writeFile(path.join(projectPath, "CONTRACT_GUIDE.md"), content);
}

async function generateReadme(
  projectPath: string,
  config: ProjectConfig,
): Promise<void> {
  const { projectName, packageManager } = config;
  const runCmd = packageManager === "npm" ? "npm run" : packageManager;

  const readme = `# ${projectName}

A premium full-stack Stacks blockchain application built with **Create Stacks App**.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Clarinet**: [Install Clarinet](https://github.com/hirosystems/clarinet)
- **PNPM/NPM/Yarn**: Your preferred package manager

### 🛠️ Development

To start the local development environment, run:

\`\`\`bash
${runCmd} dev
\`\`\`

This will launch a **concurrent** session that:
1. Starts the **Clarinet Devnet** (local blockchain and API on \`http://localhost:3999\`)
2. Starts the **Frontend Dev Server**
3. Watches for changes in both Clarity contracts and React/Next.js code

By default, your scaffolded frontend connects to the **Testnet** or **Mainnet**. To properly interact with your local contracts via Devnet:

1. Create a \`.env\` file in your \`frontend/\` directory.
2. Set your environment variable to point to devnet:
   \`\`\`env
   # For Next.js projects
   NEXT_PUBLIC_NETWORK=devnet

   # For React (Vite) projects
   VITE_NETWORK=devnet
   \`\`\`
3. Restart your frontend server. 
4. Your \`stacks.ts\` and \`@stacks/connect\` configuration will automatically hook into your local Clarinet simulation and properly handle local transactions!
5. **Note**: Ensure you have the [Stacks Wallet](https://www.hiro.so/wallet) installed and switched to the **Devnet** network to interact with local contracts.

### 🧪 Testing

Run smart contract tests using the Clarinet SDK:

\`\`\`bash
${runCmd} test
\`\`\`

### 📦 Building

To build the frontend for production:

\`\`\`bash
${runCmd} build
\`\`\`

### 🚢 Deployment

Deploy contracts to the **Stacks Testnet**:

\`\`\`bash
${runCmd} deploy:testnet
\`\`\`

---

## 📂 Project Structure

\`\`\`
├── contracts/          # Clarity smart contracts
├── tests/              # Contract tests
├── frontend/           # Next.js or React application
├── scripts/            # Deployment and utility scripts
├── Clarinet.toml       # Clarinet configuration
└── package.json        # Workspace management
\`\`\`

## 📚 Learn More

- [Stacks Documentation](https://docs.stacks.co)
- [Clarity Reference](https://docs.stacks.co/clarity)
- [Hiro Systems](https://hiro.so)

---

Built with ⚡ [Create Stacks App](https://github.com/michojekunle/create-stacks-app)
`;

  await fs.writeFile(path.join(projectPath, "README.md"), readme);
}

async function createRootPackageJson(
  projectPath: string,
  config: ProjectConfig,
): Promise<void> {
  const { projectName, packageManager } = config;
  const runCmd = packageManager === "npm" ? "npm run" : packageManager;

  const packageJson = {
    name: projectName,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: `concurrently "${runCmd} dev:clarinet" "${runCmd} dev:frontend"`,
      "dev:clarinet": "clarinet devnet start",
      "dev:frontend": `cd frontend && ${runCmd} dev`,
      test: "vitest run --sequence.setupFiles=always",
      "test:frontend": `cd frontend && ${runCmd} test`,
      build: `cd frontend && ${runCmd} build`,
      "deploy:testnet": "node scripts/deploy-testnet.js",
      "deploy:mainnet": "node scripts/deploy-mainnet.js",
    },
    devDependencies: {
      concurrently: "^8.2.2",
      vitest: "^1.6.1",
      "@stacks/clarinet-sdk": "^3.14.0",
      "@stacks/transactions": "^7.3.1",
    },
  };

  await fs.writeFile(
    path.join(projectPath, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );
}
