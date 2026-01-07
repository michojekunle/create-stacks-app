import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
import Handlebars from 'handlebars';
export async function installFrontendTemplate(config, templatesDir) {
    const spinner = ora('Installing frontend template...').start();
    try {
        const { projectPath, template, typescript } = config;
        const frontendPath = path.join(projectPath, 'frontend');
        // Determine template path
        const templateName = `${template}-${typescript ? 'typescript' : 'javascript'}`;
        const templatePath = path.join(templatesDir, 'frontends', templateName, 'template');
        if (!(await fs.pathExists(templatePath))) {
            // Fallback to just the template name if typescript/javascript variant doesn't exist
            const fallbackPath = path.join(templatesDir, 'frontends', template, 'template');
            if (await fs.pathExists(fallbackPath)) {
                await fs.copy(fallbackPath, frontendPath);
            }
            else {
                throw new Error(`Template not found: ${templateName}`);
            }
        }
        else {
            await fs.copy(templatePath, frontendPath);
        }
        // Process template variables
        await processTemplateVariables(frontendPath, config);
        spinner.succeed('Frontend template installed');
    }
    catch (error) {
        spinner.fail('Failed to install frontend template');
        throw error;
    }
}
export async function installContracts(config, templatesDir) {
    const spinner = ora('Installing smart contracts...').start();
    try {
        const { projectPath, contracts } = config;
        const contractsPath = path.join(projectPath, 'contracts');
        const testsPath = path.join(projectPath, 'tests');
        for (const contract of contracts) {
            const contractTemplatePath = path.join(templatesDir, 'contracts', contract);
            // Copy contract file
            const contractFile = path.join(contractTemplatePath, `${contract}.clar`);
            if (await fs.pathExists(contractFile)) {
                await fs.copy(contractFile, path.join(contractsPath, `${contract}.clar`));
            }
            // Copy test file
            const testFile = path.join(contractTemplatePath, `${contract}.test.ts`);
            if (await fs.pathExists(testFile)) {
                await fs.copy(testFile, path.join(testsPath, `${contract}.test.ts`));
            }
        }
        spinner.succeed('Smart contracts installed');
    }
    catch (error) {
        spinner.fail('Failed to install smart contracts');
        throw error;
    }
}
async function processTemplateVariables(frontendPath, config) {
    const files = await getAllFiles(frontendPath);
    // Register Handlebars helpers
    Handlebars.registerHelper('includes', (array, value) => {
        return array.includes(value);
    });
    for (const file of files) {
        if (file.endsWith('.hbs') || file.endsWith('.template')) {
            const content = await fs.readFile(file, 'utf-8');
            const template = Handlebars.compile(content);
            const result = template({
                projectName: config.projectName,
                contracts: config.contracts,
                typescript: config.typescript,
                tailwind: config.tailwind,
            });
            const newPath = file.replace('.hbs', '').replace('.template', '');
            await fs.writeFile(newPath, result);
            await fs.remove(file);
        }
    }
}
async function getAllFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(entries.map((entry) => {
        const fullPath = path.join(dir, entry.name);
        return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
    }));
    return files.flat();
}
//# sourceMappingURL=installer.js.map