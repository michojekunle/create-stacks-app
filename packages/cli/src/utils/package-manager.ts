import { spawn } from "child_process";
import { exec } from "child_process";
import { promisify } from "util";
import type { PackageManager } from "../types/index.js";

const execAsync = promisify(exec);

export async function detectPackageManager(): Promise<PackageManager> {
  const checks: Array<{ pm: PackageManager; command: string }> = [
    { pm: "pnpm", command: "pnpm --version" },
    { pm: "yarn", command: "yarn --version" },
    { pm: "npm", command: "npm --version" },
  ];

  for (const { pm, command } of checks) {
    try {
      await execAsync(command);
      return pm;
    } catch {
      continue;
    }
  }

  return "npm"; // fallback
}

export async function installDependencies(
  projectPath: string,
  pm: PackageManager,
): Promise<void> {
  console.log("Installing dependencies...");

  try {
    // Install root dependencies
    await runCommand(pm, ["install"], projectPath);

    // Install frontend dependencies
    // For frontend, we want to respect the package manager choice
    await runCommand(pm, ["install"], `${projectPath}/frontend`);

    console.log("Dependencies installed");
  } catch (error) {
    console.error("Failed to install dependencies");
    throw error;
  }
}

export async function installShadcn(projectPath: string): Promise<void> {
  console.log("Initializing shadcn/ui...");

  try {
    await runCommand(
      "npx",
      ["shadcn@latest", "init", "-d"],
      `${projectPath}/frontend`,
    );
    console.log("shadcn/ui initialized properly");
  } catch (error) {
    console.error("Failed to initialize shadcn/ui");
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

export function runCommand(
  command: string,
  args: string[],
  cwd: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command ${command} ${args.join(" ")} failed`));
      } else {
        resolve();
      }
    });

    child.on("error", (err) => {
      reject(err);
    });
  });
}
