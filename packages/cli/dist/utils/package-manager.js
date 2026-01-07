import { exec } from 'child_process';
import { promisify } from 'util';
import ora from 'ora';
const execAsync = promisify(exec);
export async function detectPackageManager() {
    const checks = [
        { pm: 'pnpm', command: 'pnpm --version' },
        { pm: 'yarn', command: 'yarn --version' },
        { pm: 'npm', command: 'npm --version' },
    ];
    for (const { pm, command } of checks) {
        try {
            await execAsync(command);
            return pm;
        }
        catch {
            continue;
        }
    }
    return 'npm'; // fallback
}
export async function installDependencies(projectPath, pm) {
    const spinner = ora('Installing dependencies...').start();
    try {
        const commands = {
            npm: 'npm install',
            pnpm: 'pnpm install',
            yarn: 'yarn install',
        };
        // Install root dependencies
        await execAsync(commands[pm], { cwd: projectPath });
        // Install frontend dependencies
        await execAsync(commands[pm], { cwd: `${projectPath}/frontend` });
        spinner.succeed('Dependencies installed');
    }
    catch (error) {
        spinner.fail('Failed to install dependencies');
        throw error;
    }
}
export function getRunCommand(pm, script) {
    const commands = {
        npm: `npm run ${script}`,
        pnpm: `pnpm ${script}`,
        yarn: `yarn ${script}`,
    };
    return commands[pm];
}
//# sourceMappingURL=package-manager.js.map