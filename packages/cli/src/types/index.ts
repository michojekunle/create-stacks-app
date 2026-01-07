export type PackageManager = 'npm' | 'pnpm' | 'yarn';

export interface CreateOptions {
  template?: string;
  contracts?: string;
  typescript?: boolean;
  tailwind?: boolean;
  git?: boolean;
  packageManager?: PackageManager;
  skipInstall?: boolean;
  yes?: boolean;
}

export interface ProjectConfig {
  projectName: string;
  projectPath: string;
  template: 'nextjs' | 'react' | 'vue';
  typescript: boolean;
  contracts: string[];
  tailwind: boolean;
  git: boolean;
  packageManager: PackageManager;
  skipInstall: boolean;
}

export interface ContractTemplate {
  name: string;
  description: string;
  files: {
    contract: string;
    test: string;
  };
}

export interface FrontendTemplate {
  name: string;
  description: string;
  path: string;
  supports: {
    typescript: boolean;
    javascript: boolean;
  };
}
