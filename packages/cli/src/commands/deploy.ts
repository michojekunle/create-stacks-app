import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import inquirer from 'inquirer';

const execAsync = promisify(exec);

interface DeployOptions {
  network?: string;
  privateKey?: string;
}

export async function deployCommand(
  network: string,
  options?: DeployOptions
): Promise<void> {
  const projectPath = process.cwd();

  // Verify we're in a stacks project
  if (!(await fs.pathExists(path.join(projectPath, 'Clarinet.toml')))) {
    console.error(chalk.red('Error: Not in a create-stacks-app project directory.'));
    process.exit(1);
  }

  // Warn for mainnet deployments
  if (network === 'mainnet') {
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: chalk.yellow('⚠️  You are about to deploy to MAINNET. This is irreversible. Continue?'),
        default: false,
      },
    ]);

    if (!confirm) {
      console.log('Deployment cancelled.');
      process.exit(0);
    }
  }

  const spinner = ora(`Deploying contracts to ${network}...`).start();

  try {
    // Check if Clarinet is installed
    try {
      await execAsync('clarinet --version');
    } catch {
      spinner.fail('Clarinet is not installed');
      console.error('Please install Clarinet: https://github.com/hirosystems/clarinet');
      process.exit(1);
    }

    // Get contracts from Clarinet.toml
    const contracts = await getContractsFromConfig(projectPath);
    
    if (contracts.length === 0) {
      spinner.fail('No contracts found in Clarinet.toml');
      process.exit(1);
    }

    spinner.text = `Found ${contracts.length} contract(s) to deploy`;

    // Create deployment plan
    const deploymentPlan = await createDeploymentPlan(projectPath, network, contracts);

    spinner.succeed(`Deployment plan created`);
    console.log();
    console.log(chalk.bold('Contracts to deploy:'));
    contracts.forEach((c, i) => console.log(`  ${i + 1}. ${chalk.cyan(c)}`));
    console.log();

    // Confirm deployment
    const { proceed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: `Deploy ${contracts.length} contract(s) to ${network}?`,
        default: true,
      },
    ]);

    if (!proceed) {
      console.log('Deployment cancelled.');
      process.exit(0);
    }

    // Execute deployment
    const deploySpinner = ora('Deploying contracts...').start();

    try {
      const result = await execAsync(`clarinet deployments apply -p ${deploymentPlan}`, {
        cwd: projectPath,
      });
      
      deploySpinner.succeed('Contracts deployed successfully!');
      console.log();
      console.log(chalk.green('✓ Deployment complete'));
      console.log();
      console.log(chalk.bold('Next steps:'));
      console.log(`  1. Update ${chalk.cyan('NEXT_PUBLIC_CONTRACT_ADDRESS')} in your frontend .env`);
      console.log(`  2. Verify contracts on explorer: ${getExplorerUrl(network)}`);
      console.log(`  3. Test your dApp at ${chalk.cyan('http://localhost:3000')}`);
    } catch (error: any) {
      deploySpinner.fail('Deployment failed');
      console.error(chalk.red(error.message));
      
      // Provide helpful error messages
      if (error.message.includes('insufficient funds')) {
        console.log();
        console.log(chalk.yellow('Tip: Make sure you have enough STX for deployment fees.'));
        if (network === 'testnet') {
          console.log(`Get testnet STX from the faucet: ${chalk.cyan('https://explorer.stacks.co/sandbox/faucet?chain=testnet')}`);
        }
      }
      
      process.exit(1);
    }
  } catch (error: any) {
    spinner.fail('Deployment failed');
    console.error(error.message);
    process.exit(1);
  }
}

async function getContractsFromConfig(projectPath: string): Promise<string[]> {
  const tomlPath = path.join(projectPath, 'Clarinet.toml');
  const content = await fs.readFile(tomlPath, 'utf-8');
  
  const contracts: string[] = [];
  const regex = /\[contracts\.(\w+)\]/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    contracts.push(match[1]);
  }
  
  return contracts;
}

async function createDeploymentPlan(
  projectPath: string,
  network: string,
  contracts: string[]
): Promise<string> {
  const deploymentsPath = path.join(projectPath, 'deployments');
  await fs.ensureDir(deploymentsPath);

  const planPath = path.join(deploymentsPath, `${network}.yaml`);

  // Read project name from Clarinet.toml
  const tomlContent = await fs.readFile(path.join(projectPath, 'Clarinet.toml'), 'utf-8');
  const nameMatch = tomlContent.match(/name\s*=\s*"([^"]+)"/);
  const projectName = nameMatch ? nameMatch[1] : 'stacks-app';

  const plan = `---
id: 0
name: ${projectName} Deployment
network: ${network}
stacks-node: "${getStacksNode(network)}"
bitcoin-node: "${getBitcoinNode(network)}"
plan:
  batches:
    - id: 0
      transactions:
${contracts.map((c, i) => `        - contract-publish:
            contract-name: ${c}
            expected-sender: \$DEPLOYER
            cost: 10000
            path: contracts/${c}.clar
            anchor-block-only: true
            clarity-version: 2`).join('\n')}
`;

  await fs.writeFile(planPath, plan);
  return planPath;
}

function getStacksNode(network: string): string {
  return network === 'mainnet'
    ? 'https://api.mainnet.hiro.so'
    : 'https://api.testnet.hiro.so';
}

function getBitcoinNode(network: string): string {
  return network === 'mainnet'
    ? 'https://api.mainnet.hiro.so'
    : 'https://api.testnet.hiro.so';
}

function getExplorerUrl(network: string): string {
  return network === 'mainnet'
    ? 'https://explorer.stacks.co'
    : 'https://explorer.stacks.co/?chain=testnet';
}
