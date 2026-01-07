import { exec } from 'child_process';
import { promisify } from 'util';
import ora from 'ora';
import path from 'path';
import fs from 'fs-extra';
import type { ProjectConfig } from '../types/index.js';

const execAsync = promisify(exec);

export async function checkClarinetInstallation(): Promise<boolean> {
  try {
    await execAsync('clarinet --version');
    return true;
  } catch {
    return false;
  }
}

export async function initializeClarinet(config: ProjectConfig): Promise<void> {
  const spinner = ora('Initializing Clarinet...').start();

  try {
    const { projectPath, projectName } = config;

    // Create Clarinet.toml manually instead of using clarinet new
    const clarinetToml = `[project]
name = "${projectName}"
description = ""
authors = []
telemetry = false
cache_dir = "./.cache"

[contracts]
`;

    await fs.writeFile(path.join(projectPath, 'Clarinet.toml'), clarinetToml);

    // Create settings directory
    await fs.ensureDir(path.join(projectPath, 'settings'));

    // Create Devnet.toml
    const devnetToml = `[network]
name = "devnet"
deployment_fee_rate = 10

[accounts.deployer]
mnemonic = "twice particular affair smile push picture miss direct toss brass expose better"
balance = 10_000_000_000_000_000

[accounts.wallet_1]
mnemonic = "sell invite acquire kitten believe struggle find damp current debris convince key"
balance = 10_000_000_000_000_000

[accounts.wallet_2]
mnemonic = "hold excess usual excess ring elephant install account glad dry display sauce"
balance = 10_000_000_000_000_000
`;

    await fs.writeFile(path.join(projectPath, 'settings', 'Devnet.toml'), devnetToml);

    spinner.succeed('Clarinet initialized');
  } catch (error) {
    spinner.fail('Failed to initialize Clarinet');
    throw error;
  }
}

export async function updateClarinetConfig(
  projectPath: string,
  contracts: string[]
): Promise<void> {
  const clarinetTomlPath = path.join(projectPath, 'Clarinet.toml');

  let tomlContent = await fs.readFile(clarinetTomlPath, 'utf-8');

  // Add contracts based on selection
  for (const contract of contracts) {
    tomlContent += `
[contracts.${contract}]
path = "contracts/${contract}.clar"
clarity_version = 2
epoch = 2.5
`;
  }

  await fs.writeFile(clarinetTomlPath, tomlContent);
}
