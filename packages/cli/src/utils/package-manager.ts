import { exec } from 'child_process';
import { promisify } from 'util';
import ora from 'ora';
import type { PackageManager } from '../types/index.js';

const execAsync = promisify(exec);

export async function detectPackageManager(): Promise<PackageManager> {
  const checks: Array<{ pm: PackageManager; command: string }> = [
    { pm: 'pnpm', command: 'pnpm --version' },
    { pm: 'yarn', command: 'yarn --version' },
    { pm: 'npm', command: 'npm --version' },
  ];

  for (const { pm, command } of checks) {
    try {
      await execAsync(command);
      return pm;
    } catch {
      continue;
    }
  }

  return 'npm'; // fallback
}

export async function installDependencies(
  projectPath: string,
  pm: PackageManager
): Promise<void> {
  const spinner = ora('Installing dependencies...').start();

  try {
    const commands: Record<PackageManager, string> = {
      npm: 'npm install',
      pnpm: 'pnpm install',
      yarn: 'yarn install',
    };

    // Install root dependencies
    await execAsync(commands[pm], { cwd: projectPath });

    // Install frontend dependencies
    await execAsync(commands[pm], { cwd: `${projectPath}/frontend` });

    spinner.succeed('Dependencies installed');
  } catch (error) {
    spinner.fail('Failed to install dependencies');
    throw error;
  }
}

export function getRunCommand(pm: PackageManager, script: string): string {
  const commands: Record<PackageManager, string> = {
    npm: `npm run ${script}`,
    pnpm: `pnpm ${script}`,
    yarn: `yarn ${script}`,
  };

  return commands[pm];
}
