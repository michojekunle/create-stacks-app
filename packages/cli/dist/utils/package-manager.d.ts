import type { PackageManager } from '../types/index.js';
export declare function detectPackageManager(): Promise<PackageManager>;
export declare function installDependencies(projectPath: string, pm: PackageManager): Promise<void>;
export declare function getRunCommand(pm: PackageManager, script: string): string;
//# sourceMappingURL=package-manager.d.ts.map