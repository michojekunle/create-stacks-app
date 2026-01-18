#!/usr/bin/env node
import { Command } from 'commander';
import { createCommand } from './commands/create.js';
import { addCommand } from './commands/add.js';
import { deployCommand } from './commands/deploy.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
const program = new Command();
program
    .name('create-stacks-app')
    .description('Scaffold full-stack Stacks blockchain applications')
    .version(packageJson.version);
// Main create command (default)
program
    .argument('[project-name]', 'Name of the project')
    .option('-t, --template <name>', 'Template to use (nextjs, react, vue)', 'nextjs')
    .option('-c, --contracts <list>', 'Contracts to include (counter,token,nft)')
    .option('--typescript', 'Use TypeScript', true)
    .option('--no-typescript', 'Use JavaScript')
    .option('--tailwind', 'Include Tailwind CSS', true)
    .option('--no-tailwind', 'Skip Tailwind CSS')
    .option('--no-git', 'Skip Git initialization')
    .option('--package-manager <pm>', 'Package manager (npm, pnpm, yarn)', 'pnpm')
    .option('--skip-install', 'Skip dependency installation')
    .option('-y, --yes', 'Skip prompts, use defaults')
    .action(createCommand);
// Add command for contracts and components
program
    .command('add <type> <name>')
    .description('Add a contract or component to existing project')
    .option('--sip010', 'Create a SIP-010 fungible token contract')
    .option('--sip009', 'Create a SIP-009 NFT contract')
    .option('-t, --template <name>', 'Use a specific template (e.g. marketplace, defi)')
    .action(addCommand);
// Deploy command
program
    .command('deploy <network>')
    .description('Deploy contracts to testnet or mainnet')
    .option('--private-key <key>', 'Private key for deployment (or use env var)')
    .action(deployCommand);
program.parse();
//# sourceMappingURL=index.js.map