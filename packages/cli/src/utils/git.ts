import ora from 'ora';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function initializeGit(projectPath: string): Promise<void> {
  const spinner = ora('Initializing Git repository...').start();

  try {
    await execAsync('git init', { cwd: projectPath });
    await execAsync('git add -A', { cwd: projectPath });
    await execAsync('git commit -m "Initial commit from create-stacks-app"', {
      cwd: projectPath,
    });

    spinner.succeed('Git repository initialized');
  } catch (error) {
    spinner.fail('Failed to initialize Git repository');
    // Non-fatal error, just warn
    console.warn('Git initialization failed. You can initialize it manually.');
  }
}
