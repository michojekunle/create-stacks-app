import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
export async function createProjectStructure(config) {
    const spinner = ora('Creating project structure...').start();
    try {
        const { projectPath } = config;
        // Check if directory exists
        if (await fs.pathExists(projectPath)) {
            spinner.fail(`Directory ${config.projectName} already exists`);
            throw new Error(`Directory ${config.projectName} already exists`);
        }
        // Create main directories
        await fs.ensureDir(projectPath);
        await fs.ensureDir(path.join(projectPath, 'contracts'));
        await fs.ensureDir(path.join(projectPath, 'tests'));
        await fs.ensureDir(path.join(projectPath, 'frontend'));
        await fs.ensureDir(path.join(projectPath, 'scripts'));
        spinner.succeed('Project structure created');
    }
    catch (error) {
        spinner.fail('Failed to create project structure');
        throw error;
    }
}
export async function copyBaseFiles(projectPath, config, templatesDir) {
    const spinner = ora('Copying base files...').start();
    try {
        const baseTemplatePath = path.join(templatesDir, 'base');
        // Copy .gitignore
        if (await fs.pathExists(path.join(baseTemplatePath, 'gitignore'))) {
            await fs.copy(path.join(baseTemplatePath, 'gitignore'), path.join(projectPath, '.gitignore'));
        }
        // Copy .editorconfig
        if (await fs.pathExists(path.join(baseTemplatePath, 'editorconfig'))) {
            await fs.copy(path.join(baseTemplatePath, 'editorconfig'), path.join(projectPath, '.editorconfig'));
        }
        // Copy .prettierrc
        if (await fs.pathExists(path.join(baseTemplatePath, 'prettierrc'))) {
            await fs.copy(path.join(baseTemplatePath, 'prettierrc'), path.join(projectPath, '.prettierrc'));
        }
        // Generate README
        await generateReadme(projectPath, config);
        // Create root package.json
        await createRootPackageJson(projectPath, config);
        spinner.succeed('Base files copied');
    }
    catch (error) {
        spinner.fail('Failed to copy base files');
        throw error;
    }
}
async function generateReadme(projectPath, config) {
    const { projectName, packageManager } = config;
    const runCmd = packageManager === 'npm' ? 'npm run' : packageManager;
    const readme = `# ${projectName}

A full-stack Stacks blockchain application built with Create-Stacks-App.

## Getting Started

### Prerequisites

- Node.js 18+ and ${packageManager}
- [Clarinet](https://github.com/hirosystems/clarinet) installed

### Development

Start the development server:

\`\`\`bash
${runCmd} dev
\`\`\`

This will:
- Start the Clarinet devnet
- Launch the frontend development server
- Enable hot-reload for both contracts and frontend

The app will be available at http://localhost:3000

### Testing

Run contract tests:

\`\`\`bash
${runCmd} test
\`\`\`

### Building

Build the frontend for production:

\`\`\`bash
${runCmd} build
\`\`\`

### Deployment

Deploy contracts to testnet:

\`\`\`bash
${runCmd} deploy:testnet
\`\`\`

Deploy contracts to mainnet:

\`\`\`bash
${runCmd} deploy:mainnet
\`\`\`

## Project Structure

\`\`\`
${projectName}/
├── contracts/          # Clarity smart contracts
├── tests/              # Contract tests
├── frontend/           # Frontend application
├── scripts/            # Utility scripts
└── Clarinet.toml       # Clarinet configuration
\`\`\`

## Learn More

- [Stacks Documentation](https://docs.stacks.co)
- [Clarity Language](https://docs.stacks.co/clarity)
- [Stacks.js](https://github.com/hirosystems/stacks.js)
- [Clarinet](https://github.com/hirosystems/clarinet)

## License

MIT
`;
    await fs.writeFile(path.join(projectPath, 'README.md'), readme);
}
async function createRootPackageJson(projectPath, config) {
    const { projectName, packageManager } = config;
    const packageJson = {
        name: projectName,
        version: '0.1.0',
        private: true,
        scripts: {
            dev: 'concurrently "npm run dev:clarinet" "npm run dev:frontend"',
            'dev:clarinet': 'clarinet devnet start',
            'dev:frontend': 'cd frontend && npm run dev',
            test: 'clarinet test',
            'test:frontend': 'cd frontend && npm run test',
            build: 'cd frontend && npm run build',
            'deploy:testnet': 'node scripts/deploy-testnet.js',
            'deploy:mainnet': 'node scripts/deploy-mainnet.js',
        },
        devDependencies: {
            concurrently: '^8.2.2',
        },
    };
    await fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));
}
//# sourceMappingURL=filesystem.js.map