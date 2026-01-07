import path from 'path';
import { fileURLToPath } from 'url';
import type { CreateOptions, ProjectConfig } from '../types/index.js';
import { validateProjectName, validateProjectPath } from '../utils/validation.js';
import { showIntro, showSuccess, logError } from '../utils/logger.js';
import { runPrompts, getDefaultConfig } from '../prompts/project.js';
import {
  createProjectStructure,
  copyBaseFiles,
} from '../utils/filesystem.js';
import { initializeGit } from '../utils/git.js';

import { initializeClarinet, updateClarinetConfig } from '../utils/clarinet.js';
import { installFrontendTemplate, installContracts } from '../templates/installer.js';
import { installDependencies } from '../utils/package-manager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createCommand(
  projectName?: string,
  options?: CreateOptions
): Promise<void> {
  try {
    showIntro();

    // Get project configuration
    const config: ProjectConfig = await getProjectConfig(projectName, options);

    // Validate project name
    validateProjectName(config.projectName);

    // Validate project path
    await validateProjectPath(config.projectPath);

    // Get templates directory
    const templatesDir = path.join(__dirname, '..', '..', 'templates');

    // Create project structure
    await createProjectStructure(config);

    // Copy base files
    await copyBaseFiles(config.projectPath, config, templatesDir);

    // Initialize Clarinet
    await initializeClarinet(config);

    // Install contracts
    await installContracts(config, templatesDir);

    // Update Clarinet config with contracts
    await updateClarinetConfig(config.projectPath, config.contracts);

    // Install frontend template
    await installFrontendTemplate(config, templatesDir);

    // Install dependencies
    if (!config.skipInstall) {
      await installDependencies(config.projectPath, config.packageManager);
    }

    // Initialize Git
    if (config.git) {
      await initializeGit(config.projectPath);
    }

    // Show success message
    showSuccess(config);
  } catch (error) {
    if (error instanceof Error) {
      logError(error.message);
    } else {
      logError('An unexpected error occurred');
    }
    process.exit(1);
  }
}

async function getProjectConfig(
  projectName?: string,
  options?: CreateOptions
): Promise<ProjectConfig> {
  if (options?.yes) {
    return getDefaultConfig(projectName || 'my-stacks-app', options);
  }
  return runPrompts(projectName, options);
}
