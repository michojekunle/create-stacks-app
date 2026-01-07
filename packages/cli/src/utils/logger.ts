import chalk from 'chalk';
import type { ProjectConfig } from '../types/index.js';

export function showIntro(): void {
  console.log();
  console.log(chalk.cyan.bold('  Create Stacks App'));
  console.log(chalk.gray('  Scaffold full-stack Stacks blockchain applications'));
  console.log();
}

export function showSuccess(config: ProjectConfig): void {
  const { projectName, packageManager } = config;

  const runCmd = packageManager === 'npm' ? 'npm run' : packageManager;

  console.log();
  console.log(chalk.green('✓') + ' Success! Created ' + chalk.bold(projectName));
  console.log();
  console.log(chalk.bold('Next steps:'));
  console.log();
  console.log(chalk.cyan('  1.') + ` cd ${projectName}`);
  console.log(chalk.cyan('  2.') + ` ${runCmd} dev`);
  console.log();
  console.log(chalk.bold('Available commands:'));
  console.log();
  console.log(chalk.cyan(`  ${runCmd} dev`));
  console.log('    Start development server with Clarinet devnet');
  console.log();
  console.log(chalk.cyan(`  ${runCmd} test`));
  console.log('    Run contract tests');
  console.log();
  console.log(chalk.cyan(`  ${runCmd} build`));
  console.log('    Build frontend for production');
  console.log();
  console.log(chalk.cyan(`  ${runCmd} deploy:testnet`));
  console.log('    Deploy contracts to testnet');
  console.log();
  console.log(chalk.yellow('Happy building! 🚀'));
  console.log();
}

export function logStep(message: string): void {
  console.log(chalk.cyan('○') + ' ' + message);
}

export function logError(message: string): void {
  console.error(chalk.red('✖') + ' ' + message);
}

export function logWarning(message: string): void {
  console.warn(chalk.yellow('⚠') + ' ' + message);
}
