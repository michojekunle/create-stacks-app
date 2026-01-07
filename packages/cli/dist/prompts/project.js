import inquirer from 'inquirer';
import path from 'path';
export async function runPrompts(projectName, options) {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Project name:',
            default: projectName || 'my-stacks-app',
            when: !projectName,
            validate: (input) => {
                if (!input.trim())
                    return 'Project name is required';
                if (!/^[a-z0-9-]+$/.test(input)) {
                    return 'Project name must contain only lowercase letters, numbers, and hyphens';
                }
                if (input.startsWith('-') || input.endsWith('-')) {
                    return 'Project name cannot start or end with a hyphen';
                }
                return true;
            },
        },
        {
            type: 'list',
            name: 'template',
            message: 'Select a frontend framework:',
            choices: [
                { name: 'Next.js (Recommended)', value: 'nextjs' },
                { name: 'React', value: 'react' },
                { name: 'Vue', value: 'vue' },
            ],
            default: 'nextjs',
            when: !options?.template,
        },
        {
            type: 'confirm',
            name: 'typescript',
            message: 'Use TypeScript?',
            default: true,
            when: options?.typescript === undefined,
        },
        {
            type: 'checkbox',
            name: 'contracts',
            message: 'Select smart contracts to include:',
            choices: [
                {
                    name: 'Counter (Simple state management example)',
                    value: 'counter',
                    checked: true,
                },
                {
                    name: 'Token (SIP-010 fungible token)',
                    value: 'token',
                    checked: false,
                },
                {
                    name: 'NFT (SIP-009 non-fungible token)',
                    value: 'nft',
                    checked: false,
                },
            ],
            when: !options?.contracts,
        },
        {
            type: 'confirm',
            name: 'tailwind',
            message: 'Include Tailwind CSS?',
            default: true,
            when: options?.tailwind === undefined,
        },
        {
            type: 'confirm',
            name: 'git',
            message: 'Initialize Git repository?',
            default: true,
            when: options?.git !== false,
        },
        {
            type: 'list',
            name: 'packageManager',
            message: 'Package manager:',
            choices: [
                { name: 'pnpm (Recommended)', value: 'pnpm' },
                { name: 'npm', value: 'npm' },
                { name: 'yarn', value: 'yarn' },
            ],
            default: 'pnpm',
            when: !options?.packageManager,
        },
    ]);
    const finalProjectName = answers.projectName || projectName || 'my-stacks-app';
    return {
        projectName: finalProjectName,
        projectPath: path.resolve(process.cwd(), finalProjectName),
        template: answers.template || options?.template || 'nextjs',
        typescript: answers.typescript ?? options?.typescript ?? true,
        contracts: answers.contracts || options?.contracts?.split(',') || ['counter'],
        tailwind: answers.tailwind ?? options?.tailwind ?? true,
        git: answers.git ?? options?.git !== false,
        packageManager: (answers.packageManager || options?.packageManager || 'pnpm'),
        skipInstall: options?.skipInstall || false,
    };
}
export function getDefaultConfig(projectName, options) {
    return {
        projectName,
        projectPath: path.resolve(process.cwd(), projectName),
        template: options?.template || 'nextjs',
        typescript: options?.typescript ?? true,
        contracts: options?.contracts?.split(',') || ['counter'],
        tailwind: options?.tailwind ?? true,
        git: options?.git !== false,
        packageManager: options?.packageManager || 'pnpm',
        skipInstall: options?.skipInstall || false,
    };
}
//# sourceMappingURL=project.js.map