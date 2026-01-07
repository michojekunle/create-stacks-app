import { z } from 'zod';
import fs from 'fs-extra';
import path from 'path';

const projectNameSchema = z
  .string()
  .min(1, 'Project name is required')
  .max(50, 'Project name must be less than 50 characters')
  .regex(
    /^[a-z0-9-]+$/,
    'Project name must contain only lowercase letters, numbers, and hyphens'
  )
  .refine(
    (name) => !name.startsWith('-') && !name.endsWith('-'),
    'Project name cannot start or end with a hyphen'
  );

export function validateProjectName(name: string): void {
  const result = projectNameSchema.safeParse(name);
  if (!result.success) {
    throw new Error(result.error.errors[0].message);
  }
}

export async function validateProjectPath(projectPath: string): Promise<void> {
  if (await fs.pathExists(projectPath)) {
    throw new Error(
      `Directory already exists at ${projectPath}. Please choose a different name or remove the existing directory.`
    );
  }

  const parentDir = path.dirname(projectPath);
  try {
    await fs.access(parentDir, fs.constants.W_OK);
  } catch {
    throw new Error(
      `No write permission in directory ${parentDir}. Please check your permissions.`
    );
  }
}

export function validatePackageManager(pm: string): void {
  const validPMs = ['npm', 'pnpm', 'yarn'];
  if (!validPMs.includes(pm)) {
    throw new Error(
      `Invalid package manager: ${pm}. Must be one of: ${validPMs.join(', ')}`
    );
  }
}

export function validateContracts(contracts: string[]): void {
  const validContracts = ['counter', 'token', 'nft'];
  const invalid = contracts.filter((c) => !validContracts.includes(c));

  if (invalid.length > 0) {
    throw new Error(
      `Invalid contracts: ${invalid.join(', ')}. Valid options are: ${validContracts.join(', ')}`
    );
  }
}
