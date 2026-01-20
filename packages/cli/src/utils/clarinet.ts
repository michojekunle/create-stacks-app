import { exec } from "child_process";
import { promisify } from "util";
import ora from "ora";
import path from "path";
import fs from "fs-extra";
import type { ProjectConfig } from "../types/index.js";

const execAsync = promisify(exec);

export async function checkClarinetInstallation(): Promise<boolean> {
  try {
    await execAsync("clarinet --version");
    return true;
  } catch {
    return false;
  }
}

export async function initializeClarinet(config: ProjectConfig): Promise<void> {
  const spinner = ora("Initializing Clarinet...").start();

  try {
    const { projectPath, projectName } = config;

    // Create a temporary directory for Clarinet initialization
    const tempDir = path.join(projectPath, ".temp_clarinet");
    await fs.ensureDir(tempDir);

    // Run clarinet new in temp directory
    try {
      await execAsync(`cd "${tempDir}" && clarinet new "${projectName}"`);
    } catch (e) {
      // If clarinet new fails, it might be because of directory structure
      // specific error handling could be added here
      throw new Error(
        `Clarinet initialization failed: ${(e as Error).message}`,
      );
    }

    const sourceDir = path.join(tempDir, projectName);

    // Copy generated Clarinet.toml
    if (await fs.pathExists(path.join(sourceDir, "Clarinet.toml"))) {
      await fs.copy(
        path.join(sourceDir, "Clarinet.toml"),
        path.join(projectPath, "Clarinet.toml"),
      );
    }

    // Copy settings directory (Devnet.toml)
    if (await fs.pathExists(path.join(sourceDir, "settings"))) {
      await fs.copy(
        path.join(sourceDir, "settings"),
        path.join(projectPath, "settings"),
      );
    }

    // Cleanup temp directory
    await fs.remove(tempDir);

    spinner.succeed("Clarinet initialized");
  } catch (error) {
    spinner.fail("Failed to initialize Clarinet");
    throw error;
  }
}

export async function updateClarinetConfig(
  projectPath: string,
  contracts: string[],
): Promise<void> {
  const clarinetTomlPath = path.join(projectPath, "Clarinet.toml");

  let tomlContent = await fs.readFile(clarinetTomlPath, "utf-8");

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
