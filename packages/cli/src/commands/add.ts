import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface AddOptions {
  sip010?: boolean;
  sip009?: boolean;
  template?: string;
}

export async function addCommand(
  type: string,
  name: string,
  options?: AddOptions
): Promise<void> {
  const projectPath = process.cwd();

  // Verify we're in a create-stacks-app project
  if (!(await isStacksProject(projectPath))) {
    console.error(chalk.red('Error: Not in a create-stacks-app project directory.'));
    console.error('Please run this command from the root of your project.');
    process.exit(1);
  }

  switch (type) {
    case 'contract':
      await addContract(projectPath, name, options);
      break;
    case 'component':
      await addComponent(projectPath, name);
      break;
    default:
      console.error(chalk.red(`Unknown type: ${type}`));
      console.error('Valid types are: contract, component');
      process.exit(1);
  }
}

async function isStacksProject(projectPath: string): Promise<boolean> {
  const clarinetToml = path.join(projectPath, 'Clarinet.toml');
  return fs.pathExists(clarinetToml);
}

async function addContract(
  projectPath: string,
  name: string,
  options?: AddOptions
): Promise<void> {
  const spinner = ora(`Adding contract: ${name}`).start();

  try {
    const contractsPath = path.join(projectPath, 'contracts');
    const testsPath = path.join(projectPath, 'tests');
    const templatesDir = path.join(__dirname, '..', '..', 'templates', 'contracts');

    // Determine which template to use
    let templateName = options?.template || name;
    if (options?.sip010) templateName = 'token';
    if (options?.sip009) templateName = 'nft';

    const templatePath = path.join(templatesDir, templateName);
    const templateExists = await fs.pathExists(templatePath);

    if (templateExists) {
      // Copy all files from template
      const files = await fs.readdir(templatePath);
      
      for (const file of files) {
        if (file.endsWith('.clar')) {
          // If file matches template name, rename to requested name
          // e.g. marketplace.clar -> my-market.clar
          // e.g. nft-trait.clar -> nft-trait.clar (keep)
          const isMainMock = file === `${templateName}.clar`;
          const targetName = isMainMock ? `${name}.clar` : file;
          const targetPath = path.join(contractsPath, targetName);
          
          if (await fs.pathExists(targetPath)) {
            // Skip if exists
            continue;
          }
          
          await fs.copy(path.join(templatePath, file), targetPath);
          await updateClarinetToml(projectPath, targetName.replace('.clar', ''));
        }
        
        if (file.endsWith('.test.ts')) {
          // Only copy the main test file for now
          if (file === `${templateName}.test.ts`) {
             let testContent = await fs.readFile(
              path.join(templatePath, file),
              'utf-8'
            );
            testContent = testContent.replace(new RegExp(templateName, 'g'), name);
            await fs.writeFile(path.join(testsPath, `${name}.test.ts`), testContent);
          }
        }
      }
    } else {
       // If basic contract (no template found)
       // But if user explicitly requested a non-existent template, error out
       if (options?.template) {
         throw new Error(`Template '${options.template}' not found.`);
       }

      // Create a basic contract template
      const basicContract = `;; ${name} Contract
;; Add your contract logic here

;; Data variables
(define-data-var owner principal tx-sender)

;; Error codes
(define-constant ERR-NOT-OWNER (err u403))

;; Public functions

;; Read-only functions
(define-read-only (get-owner)
  (ok (var-get owner)))
`;
      await fs.writeFile(path.join(contractsPath, `${name}.clar`), basicContract);

      // Create basic test
      const basicTest = `import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;

describe("${name} Contract", () => {
  it("should have deployer as owner", () => {
    const result = simnet.callReadOnlyFn(
      "${name}",
      "get-owner",
      [],
      deployer
    );
    expect(result.result).toBeOk(Cl.principal(deployer));
  });
});
`;
      await fs.writeFile(path.join(testsPath, `${name}.test.ts`), basicTest);
      await updateClarinetToml(projectPath, name);
    }

    spinner.succeed(`Contract ${chalk.cyan(name)} added successfully`);
    console.log();
    console.log('Next steps:');
    console.log(`  1. Edit ${chalk.cyan(`contracts/${name}.clar`)}`);
    console.log(`  2. Update tests in ${chalk.cyan(`tests/${name}.test.ts`)}`);
    console.log(`  3. Run ${chalk.cyan('npm run test')} to verify`);
  } catch (error) {
    spinner.fail('Failed to add contract');
    throw error;
  }
}

async function updateClarinetToml(projectPath: string, contractName: string): Promise<void> {
  const tomlPath = path.join(projectPath, 'Clarinet.toml');
  let content = await fs.readFile(tomlPath, 'utf-8');

  // Check if contract already exists
  if (content.includes(`[contracts.${contractName}]`)) {
    return;
  }

  content += `
[contracts.${contractName}]
path = "contracts/${contractName}.clar"
clarity_version = 2
epoch = 2.5
`;

  await fs.writeFile(tomlPath, content);
}

async function addComponent(projectPath: string, name: string): Promise<void> {
  const spinner = ora(`Adding component: ${name}`).start();

  try {
    // Detect frontend type
    const frontendPath = path.join(projectPath, 'frontend');
    const isNextjs = await fs.pathExists(path.join(frontendPath, 'next.config.js'));
    const isVite = await fs.pathExists(path.join(frontendPath, 'vite.config.ts'));

    let componentsPath: string;
    if (isNextjs) {
      componentsPath = path.join(frontendPath, 'components');
    } else if (isVite) {
      componentsPath = path.join(frontendPath, 'src', 'components');
    } else {
      spinner.fail('Could not detect frontend framework');
      return;
    }

    await fs.ensureDir(componentsPath);

    // Generate component based on name
    const componentContent = generateComponent(name, isNextjs);
    const fileName = isNextjs ? `${name}.tsx` : `${name}.vue`;

    await fs.writeFile(path.join(componentsPath, fileName), componentContent);

    spinner.succeed(`Component ${chalk.cyan(name)} added successfully`);
    console.log();
    console.log(`Component created at ${chalk.cyan(`frontend/components/${fileName}`)}`);
  } catch (error) {
    spinner.fail('Failed to add component');
    throw error;
  }
}

function generateComponent(name: string, isReact: boolean): string {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);

  if (isReact) {
    return `'use client';

interface ${componentName}Props {
  // Add your props here
}

export function ${componentName}({ }: ${componentName}Props) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">${componentName}</h2>
      <p className="text-gray-400">
        Edit this component in components/${name}.tsx
      </p>
    </div>
  );
}
`;
  }

  // Vue component
  return `<script setup lang="ts">
// Add your props and logic here
</script>

<template>
  <div class="card">
    <h2 class="text-2xl font-bold mb-4">${componentName}</h2>
    <p class="text-gray-400">
      Edit this component in components/${name}.vue
    </p>
  </div>
</template>
`;
}
