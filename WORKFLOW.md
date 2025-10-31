# Development Workflow

This document describes the development workflow and git hooks setup for this monorepo.

## Git Workflow

### 1. Always Start on a New Branch

Before starting any new feature or fix:

```bash
# Create and switch to a new branch
git checkout -b feature/my-new-feature

# Or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Your Changes

Develop your feature, making commits as you go. The pre-commit hook will automatically:
- ✅ Lint and format staged files
- ✅ Run fast checks on changed code

### 3. Before Committing

The **pre-commit hook** runs automatically and will:
- Run `lint-staged` on staged files
- Fix linting issues automatically where possible
- Format code with Prettier via `nx format:write`

If checks fail, fix the issues and try committing again.

### 4. Before Pushing

The **pre-push hook** runs automatically and will:
- ✅ Run tests on all affected projects (`nx affected -t test`)
- ✅ Run linting on all affected projects (`nx affected -t lint`)

**All tests must pass before you can push!**

If tests fail:
1. Fix the failing tests
2. Run tests locally: `npx nx affected -t test`
3. Try pushing again

### 5. Update Project README

Before pushing, ensure the project-specific README is updated:

**For threejs_explorations:**
```bash
# Edit the README
vim apps/threejs_explorations/README.md

# Add your feature to the Features section
# Update the Future Experiments section if applicable
# Add test command examples if you added new tests
```

**Example README update:**
```markdown
## ✨ Features

- **New Feature** - Description of what you added
  - Test with: `npx nx test threejs_explorations`
```

## Git Hooks Setup

### Pre-commit Hook

**Location:** `.husky/pre-commit`

**What it does:**
- Runs `lint-staged` on staged files only (fast!)
- Fixes linting issues automatically
- Formats code with Prettier

**Configured in:** `package.json` → `lint-staged`

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "npx nx affected:lint --fix --files",
      "npx nx format:write --files"
    ]
  }
}
```

### Pre-push Hook

**Location:** `.husky/pre-push`

**What it does:**
- Runs tests on affected projects
- Runs linting on affected projects
- Prevents push if any checks fail

**Why this approach?**
- ⚡ **Fast commits** - Only checks staged files
- 🧪 **Comprehensive testing** - Full test suite before sharing code
- 🎯 **Smart** - Only tests what changed (via `nx affected`)
- 🚀 **Efficient** - Parallel execution with `--parallel=3`

## Manual Commands

### Run Tests Manually

```bash
# Test all affected projects
npx nx affected -t test

# Test specific project
npx nx test threejs_explorations

# Test with watch mode
npx nx test threejs_explorations --watch

# Test all projects
npx nx run-many -t test
```

### Run Linting Manually

```bash
# Lint affected projects
npx nx affected -t lint

# Lint and fix
npx nx affected:lint --fix

# Lint specific project
npx nx lint threejs_explorations
```

### Format Code Manually

```bash
# Format affected files
npx nx format:write

# Check formatting without writing
npx nx format:check

# Format specific files
npx nx format:write --files=apps/threejs_explorations/src/app/app.tsx
```

### Type Check Manually

```bash
# Type check affected projects
npx nx affected -t typecheck

# Type check specific project
npx nx typecheck threejs_explorations
```

## Bypassing Hooks (Emergency Only!)

⚠️ **Use with caution!** Only bypass hooks when absolutely necessary.

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip pre-push hook
git push --no-verify
```

## Troubleshooting

### Hook Not Running

```bash
# Reinstall hooks
bun run prepare

# Or manually
bunx husky
```

### Permission Issues

```bash
# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

### lint-staged Issues

```bash
# Run lint-staged manually
bunx lint-staged

# Debug mode
bunx lint-staged --debug
```

### Tests Failing in pre-push

```bash
# Run affected tests to see failures
npx nx affected -t test

# Run specific project tests
npx nx test threejs_explorations

# Check what's affected
npx nx affected:graph
```

## Best Practices

1. **Commit often** - Small, focused commits are easier to review
2. **Write descriptive commit messages** - Follow conventional commits format
3. **Keep branches short-lived** - Merge frequently to avoid conflicts
4. **Run tests locally** - Don't rely solely on hooks
5. **Update documentation** - Keep READMEs in sync with code changes
6. **Review your changes** - Use `git diff` before committing

## Example Workflow

```bash
# 1. Start new feature branch
git checkout -b feature/add-particle-system

# 2. Make changes
vim apps/threejs_explorations/src/app/particle-system.tsx

# 3. Stage and commit (pre-commit hook runs)
git add .
git commit -m "feat: add particle system to threejs explorations"
# → lint-staged runs automatically

# 4. Update README
vim apps/threejs_explorations/README.md
git add apps/threejs_explorations/README.md
git commit -m "docs: update README with particle system feature"

# 5. Run tests locally to verify
npx nx test threejs_explorations

# 6. Push (pre-push hook runs)
git push origin feature/add-particle-system
# → nx affected -t test runs automatically
# → nx affected -t lint runs automatically

# 7. Create pull request
# Use GitHub UI or gh CLI
```

## Configuration Files

- **`.husky/pre-commit`** - Pre-commit hook script
- **`.husky/pre-push`** - Pre-push hook script
- **`package.json`** - Contains `lint-staged` configuration and `prepare` script
- **`nx.json`** - Nx configuration with affected command settings

## Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [Nx Affected Commands](https://nx.dev/nx-api/nx/documents/affected)
- [Conventional Commits](https://www.conventionalcommits.org/)
