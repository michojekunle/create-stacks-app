# Contributing to Create Stacks App

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm 8+
- Clarinet (for testing generated projects)

### Getting Started

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/create-stacks-app.git
   cd create-stacks-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the project:
   ```bash
   pnpm build
   ```

4. Test the CLI locally:
   ```bash
   node packages/cli/dist/index.js test-project -y --skip-install
   ```

## Project Structure

```
create-stacks-app/
├── packages/
│   └── cli/                    # Main CLI package
│       ├── src/
│       │   ├── commands/       # CLI commands
│       │   ├── prompts/        # Interactive prompts
│       │   ├── templates/      # Template installer
│       │   ├── types/          # TypeScript types
│       │   └── utils/          # Utilities
│       └── templates/          # Project templates
│           ├── base/           # Shared base files
│           ├── contracts/      # Smart contract templates
│           └── frontends/      # Frontend templates
├── .github/                    # GitHub Actions and templates
└── docs/                       # Documentation
```

## Adding New Features

### Adding a New Contract Template

1. Create a new directory in `packages/cli/templates/contracts/`:
   ```
   packages/cli/templates/contracts/your-contract/
   ├── your-contract.clar
   └── your-contract.test.ts
   ```

2. Follow existing templates for structure and style.

3. Update the CLI to recognize the new template if needed.

### Adding a New Frontend Template

1. Create a new directory in `packages/cli/templates/frontends/`:
   ```
   packages/cli/templates/frontends/your-framework/
   └── template/
       ├── package.json
       └── ... (complete template)
   ```

2. Update the prompt choices in `src/prompts/project.ts`.

3. Ensure Stacks.js integration works correctly.

## Code Style

- Use TypeScript for all source code
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Run `pnpm lint` before committing

## Testing

### Running Tests

```bash
pnpm test
```

### Manual Testing

Always test the CLI manually:

```bash
# Build
pnpm build

# Test project creation
node packages/cli/dist/index.js test-project -y --skip-install --no-git

# Verify structure
ls -la test-project
cat test-project/Clarinet.toml

# Cleanup
rm -rf test-project
```

## Submitting Changes

### Pull Request Process

1. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes and commit:
   ```bash
   git commit -m "feat: add new feature"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/my-feature
   ```

4. Open a Pull Request against the `main` branch.

### Commit Message Format

We use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `test:` - Adding tests

### PR Checklist

- [ ] Code builds without errors (`pnpm build`)
- [ ] Tests pass (`pnpm test`)
- [ ] CLI works manually
- [ ] Documentation updated if needed
- [ ] Commit messages follow convention

## Getting Help

- Open an issue for bugs or feature requests
- Ask in [Stacks Discord](https://discord.gg/stacks)
- Check existing issues and PRs

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
