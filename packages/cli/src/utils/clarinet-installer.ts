import { exec, spawn } from "child_process";
import { promisify } from "util";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { logger } from "./logger.js";

const execAsync = promisify(exec);

type Platform = "darwin" | "win32" | "linux";

interface InstallMethod {
  name: string;
  command: string;
  check?: string;
  description: string;
}

const CLARINET_INSTALL_METHODS: Record<Platform, InstallMethod[]> = {
  darwin: [
    {
      name: "Homebrew",
      command: "brew install clarinet",
      check: "brew --version",
      description: "Install via Homebrew (recommended)",
    },
    {
      name: "Manual",
      command: "",
      description: "Download binary manually from GitHub",
    },
  ],
  win32: [
    {
      name: "Winget",
      command: "winget install -e --id HiroSystems.Clarinet",
      check: "winget --version",
      description: "Install via Windows Package Manager (recommended)",
    },
    {
      name: "Manual",
      command: "",
      description: "Download MSI installer from GitHub",
    },
  ],
  linux: [
    {
      name: "Script",
      command:
        "curl -sL https://raw.githubusercontent.com/hirosystems/clarinet/main/scripts/install.sh | bash",
      description: "Install via official script (recommended)",
    },
    {
      name: "Manual",
      command: "",
      description: "Download binary manually from GitHub",
    },
  ],
};

const CLARINET_RELEASES_URL =
  "https://github.com/hirosystems/clarinet/releases/latest";

/**
 * Check if Clarinet is installed on the system
 */
export async function isClarinetInstalled(): Promise<boolean> {
  try {
    await execAsync("clarinet --version");
    return true;
  } catch {
    return false;
  }
}

/**
 * Get the installed Clarinet version
 */
export async function getClarinetVersion(): Promise<string | null> {
  try {
    const { stdout } = await execAsync("clarinet --version");
    return stdout.trim();
  } catch {
    return null;
  }
}

/**
 * Check if a package manager is available
 */
async function isPackageManagerAvailable(
  checkCommand: string,
): Promise<boolean> {
  try {
    await execAsync(checkCommand);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get the current platform
 */
function getPlatform(): Platform {
  const platform = process.platform;
  if (platform === "darwin" || platform === "win32" || platform === "linux") {
    return platform;
  }
  // Default to linux for other Unix-like systems
  return "linux";
}

/**
 * Get platform display name
 */
function getPlatformName(platform: Platform): string {
  const names: Record<Platform, string> = {
    darwin: "macOS",
    win32: "Windows",
    linux: "Linux",
  };
  return names[platform];
}

/**
 * Execute installation command with real-time output
 */
async function executeInstall(command: string): Promise<boolean> {
  return new Promise((resolve) => {
    const isWindows = process.platform === "win32";
    const shell = isWindows ? "cmd.exe" : "/bin/sh";
    const shellFlag = isWindows ? "/c" : "-c";

    const child = spawn(shell, [shellFlag, command], {
      stdio: "inherit",
      env: { ...process.env, FORCE_COLOR: "1" },
    });

    child.on("close", (code) => {
      resolve(code === 0);
    });

    child.on("error", () => {
      resolve(false);
    });
  });
}

/**
 * Prompt user to install Clarinet with platform-specific options
 */
export async function promptClarinetInstall(): Promise<boolean> {
  const platform = getPlatform();
  const platformName = getPlatformName(platform);
  const methods = CLARINET_INSTALL_METHODS[platform];

  console.log("");
  logger.warning("Clarinet is required but not installed on your system.");
  console.log("");
  console.log(
    chalk.dim(
      `  Clarinet is a Clarity smart contract development tool that provides`,
    ),
  );
  console.log(
    chalk.dim(
      `  testing, debugging, and deployment capabilities for Stacks blockchain.`,
    ),
  );
  console.log("");

  // Check which package managers are available
  const availableMethods: (InstallMethod & { available: boolean })[] = [];

  for (const method of methods) {
    if (method.check) {
      const available = await isPackageManagerAvailable(method.check);
      availableMethods.push({ ...method, available });
    } else {
      availableMethods.push({ ...method, available: true });
    }
  }

  const choices = [
    ...availableMethods
      .filter((m) => m.available && m.command)
      .map((m) => ({
        name: `${m.name}: ${m.description}`,
        value: m.command,
      })),
    {
      name: "Open GitHub releases page (manual download)",
      value: "open-github",
    },
    {
      name: "Skip for now (some features will be unavailable)",
      value: "skip",
    },
  ];

  const { action } = await inquirer.prompt<{ action: string }>([
    {
      type: "list",
      name: "action",
      message: `How would you like to install Clarinet on ${platformName}?`,
      choices,
    },
  ]);

  if (action === "skip") {
    console.log("");
    logger.info(
      "Skipping Clarinet installation. You can install it later from:",
    );
    console.log(chalk.cyan(`  ${CLARINET_RELEASES_URL}`));
    console.log("");
    return false;
  }

  if (action === "open-github") {
    console.log("");
    logger.info("Opening Clarinet releases page...");
    console.log(chalk.cyan(`  ${CLARINET_RELEASES_URL}`));
    console.log("");

    // Try to open the URL in the default browser
    const openCommand =
      platform === "darwin"
        ? "open"
        : platform === "win32"
          ? "start"
          : "xdg-open";

    try {
      await execAsync(`${openCommand} ${CLARINET_RELEASES_URL}`);
    } catch {
      // Silently fail if we can't open the browser
    }

    const { installed } = await inquirer.prompt<{ installed: boolean }>([
      {
        type: "confirm",
        name: "installed",
        message: "Have you finished installing Clarinet?",
        default: false,
      },
    ]);

    if (installed) {
      return await isClarinetInstalled();
    }
    return false;
  }

  // Execute the installation command
  console.log("");
  console.log(chalk.dim(`  Running: ${action}`));
  console.log("");

  const spinner = ora("Installing Clarinet...").start();
  spinner.stop();

  const success = await executeInstall(action);

  if (success) {
    // Verify installation
    const installed = await isClarinetInstalled();
    if (installed) {
      const version = await getClarinetVersion();
      console.log("");
      logger.success(
        `Clarinet installed successfully! ${chalk.dim(version || "")}`,
      );
      console.log("");
      return true;
    }
  }

  console.log("");
  logger.error("Failed to install Clarinet automatically.");
  console.log(
    chalk.dim(`  Please install manually from: ${CLARINET_RELEASES_URL}`),
  );
  console.log("");

  return false;
}

/**
 * Ensure Clarinet is installed, prompting for installation if needed
 */
export async function ensureClarinetInstalled(): Promise<boolean> {
  const installed = await isClarinetInstalled();

  if (installed) {
    const version = await getClarinetVersion();
    logger.info(
      `Clarinet detected: ${chalk.dim(version || "unknown version")}`,
    );
    return true;
  }

  return await promptClarinetInstall();
}
