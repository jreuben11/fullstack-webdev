# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is an **Nx monorepo for advanced web development experiments and learning**. This is a hands-on learning environment where experiments are organized, documented, and preserved for future reference.

### Current Focus Areas
- **WebGPU** - GPU-accelerated graphics and compute
- **Three.js & react-three-fiber** - 3D graphics in React
- **Future explorations**: WebAssembly (WASM), WebTransport, and other cutting-edge web APIs

### Philosophy
- **Compartmentalized experiments** - Each experiment lives in its own app or lib project
- **Learning-focused** - Show commands before executing, explain what they do
- **Discoverable** - Main pages link to experiments for easy browsing
- **Teaching mode** - When edits are needed, provide NeoVim guidance rather than direct edits
- **Latest versions** - Always use the latest stable versions of packages

## Workspace Structure

```
apps/
├── react_classic/          # React 19 + Webpack + styled-components
│   └── src/app/           # Experiments as separate components
├── node_classic/          # Node.js/Express backend experiments
├── tanstack-start/        # Full-stack SSR with TanStack ecosystem
│   └── src/routes/        # File-based routing for experiments
└── *-e2e/                 # E2E test projects

packages/
└── util/                  # Shared TypeScript utilities
```

### Key Technologies
- **Nx 21.4.1** - Monorepo management and build orchestration
- **React 19** - Modern React with concurrent features
- **TypeScript 5.8** - Strict mode for type safety
- **Vite** (tanstack-start) and **Webpack** (react_classic)
- **TanStack Start** - SSR/SSG framework
- **Tailwind CSS v4** + **shadcn/ui** (tanstack-start)

## Working with Nx

### Discovery Commands

Before doing anything, show the user these commands to understand the workspace:

```bash
# View all projects in the workspace
npx nx show projects

# See available targets for a project
npx nx show project <project-name>
npx nx show project @fullstack-webdev/react_classic

# Visualize the project dependency graph
npx nx graph

# List installed Nx plugins
npx nx list
```

### Running Applications

**Always show the command first**, explain what it does, then execute:

```bash
# React Classic - Webpack dev server on port 4200
npx nx serve react_classic

# Node Classic - Express server (builds first, then runs)
npx nx serve node_classic

# TanStack Start - Full-stack SSR on port 3000
# Note: This is a standalone project with its own package.json
cd apps/tanstack-start
npm run dev
```

### Building Projects

```bash
# Build a specific project
npx nx build <project-name>

# Build all affected projects (based on git changes)
npx nx affected -t build

# Build with verbose output to see what's happening
npx nx build <project-name> --verbose
```

### Testing

```bash
# Run tests for a project
npx nx test <project-name>

# Run e2e tests
npx nx e2e <project-name>-e2e

# Test only what changed
npx nx affected -t test

# For tanstack-start (uses vitest)
cd apps/tanstack-start
npm test
```

### Linting and Type Checking

```bash
# Lint a project
npx nx lint <project-name>

# Type check
npx nx typecheck <project-name>

# Run on affected projects
npx nx affected -t lint
npx nx affected -t typecheck
```

## Creating New Experiments

### Adding a New App

Show these commands and explain the options:

```bash
# Interactive generator (recommended for learning)
npx nx g @nx/react:app

# With specific options (explain each flag)
npx nx g @nx/react:app my-webgpu-app \
  --bundler=webpack \
  --style=styled-components \
  --routing=true

# For Vite-based app
npx nx g @nx/react:app my-threejs-app \
  --bundler=vite \
  --style=css
```

### Adding a Library

```bash
# Shared utilities or components
npx nx g @nx/react:lib my-lib

# Non-React library
npx nx g @nx/js:lib my-utils
```

### Adding Components to Existing Apps

```bash
# Generate a component in react_classic
npx nx g @nx/react:component my-experiment \
  --project=react_classic \
  --directory=src/app
```

## NeoVim Editing Guidance

When the user needs to edit files, **provide NeoVim instructions** rather than direct edits:

### Navigation
- `gg` - Go to top of file
- `G` - Go to bottom of file
- `:<line-number>` - Jump to specific line (e.g., `:42`)
- `/pattern` - Search forward, `n` next match, `N` previous
- `?pattern` - Search backward
- `Ctrl+o` - Jump back, `Ctrl+i` - Jump forward

### Editing
- `i` - Insert mode before cursor
- `a` - Insert mode after cursor
- `o` - Open new line below, `O` - Open new line above
- `ciw` - Change inner word
- `ci"` or `ci'` - Change inside quotes
- `dd` - Delete line
- `yy` - Copy line, `p` - Paste after cursor

### File Operations
- `:w` - Save file
- `:wq` or `ZZ` - Save and quit
- `:q!` - Quit without saving
- `:e <file>` - Edit another file
- `:split` or `:sp` - Horizontal split
- `:vsplit` or `:vsp` - Vertical split
- `Ctrl+w w` - Switch between splits

### Example Editing Instruction

Instead of: "Let me edit this file..."

Say: "To add the WebGPU experiment link to the main page:
1. Open `apps/react_classic/src/app/app.tsx` in NeoVim
2. Navigate to the links section (search with `/Link`)
3. Press `o` to open a new line below
4. Press `i` to enter insert mode
5. Add: `<Link to='/webgpu'>WebGPU Experiment</Link>`
6. Press `Esc` then `:w` to save"

## Project-Specific Notes

### react_classic
- Webpack bundler with Babel
- Styled-components for CSS-in-JS
- Main entry: `src/main.tsx`, dev server: port 4200
- Add experiments as components in `src/app/`, update `app.tsx` with links

### tanstack-start
- **Standalone Vite project** (separate dependency management)
- File-based routing: add routes in `src/routes/`
- Auto-generated route tree: `src/routeTree.gen.ts` (don't edit manually)
- For shadcn components: `pnpx shadcn@latest add <component>`
- TanStack Query for data fetching with SSR support
- Tailwind CSS v4 for styling

### node_classic
- Express backend with esbuild
- Platform: node, format: CommonJS
- Good for API experiments, WebSocket servers, etc.

### util package
- Shared TypeScript utilities
- ESM format with conditional exports
- Import in other projects via `@fullstack-webdev/util`

## Experiment Organization Pattern

For each new experiment in an app:

1. **Create the experiment component/route**
   - react_classic: New component in `src/app/experiment-name.tsx`
   - tanstack-start: New route in `src/routes/experiment-name.tsx`

2. **Update the main page** with a link
   - react_classic: Edit `src/app/app.tsx`, add Link
   - tanstack-start: Edit `src/routes/index.tsx`, add Link

3. **Document the experiment**
   - Add comments explaining the concept
   - Include links to relevant docs/tutorials

4. **Test it works**
   ```bash
   npx nx serve <app-name>
   # Navigate to the experiment in browser
   ```

## TypeScript Configuration

- Workspace uses strict TypeScript: `strict`, `noUnusedLocals`, `noImplicitReturns`
- Base config: `tsconfig.base.json`
- Module resolution: `bundler` mode
- Target: ES2022
- Each project extends base with `tsconfig.app.json`, `tsconfig.spec.json`

## Testing

- React apps: Jest + @testing-library/react
- tanstack-start: Vitest
- E2E: Playwright for web apps, Jest for node apps
- Create tests alongside experiments: `<name>.spec.tsx`

## Package Management

### Always Use Latest Versions

When adding packages, **always install the latest stable version**:

```bash
# Check latest version before installing
npm view <package> version

# Install latest (default behavior)
npm install <package>@latest

# For workspace-level dependencies
npm install <package>@latest --workspace=@fullstack-webdev/source

# For tanstack-start (standalone)
cd apps/tanstack-start
npm install <package>@latest
```

### Updating Existing Packages

```bash
# Check for outdated packages
npm outdated

# Update specific package to latest
npm update <package>@latest

# Update all packages (be cautious with major versions)
npm update

# For Nx and plugins
npx nx migrate latest
npx nx migrate --run-migrations
```

### Common Packages for Experiments

Show version check commands before installing:

```bash
# WebGPU
npm view @webgpu/types version
npm install @webgpu/types@latest --save-dev

# Three.js ecosystem
npm view three version
npm install three@latest
npm install @types/three@latest --save-dev
npm install @react-three/fiber@latest @react-three/drei@latest

# WebAssembly tools
npm view @assemblyscript/loader version
npm install assemblyscript@latest --save-dev
```

## Git Workflow

Show git commands before executing:

```bash
# Check status before committing
git status

# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "add: WebGPU triangle experiment to react_classic"

# View recent commits
git log --oneline -5
```

## Nx Cache and Performance

```bash
# Clear Nx cache if needed
npx nx reset

# Run without cache (for debugging)
npx nx build <project> --skip-nx-cache

# See what would be affected by current changes
npx nx affected:graph
```

## Common Patterns for Web Experiments

### Adding WebGPU
- Install latest `@webgpu/types` for TypeScript support
- Feature detection in component
- Fallback UI for unsupported browsers

### Adding Three.js/react-three-fiber
- Install latest: `three`, `@react-three/fiber`, `@react-three/drei`
- Create canvas component with scene setup
- Organize 3D experiments in separate components

### Adding WebAssembly
- Create `.wasm` files or use Rust/AssemblyScript
- Configure webpack/vite to handle `.wasm` imports
- Add async loading logic

## Resources

- Nx Documentation: https://nx.dev
- React 19: https://react.dev
- TanStack: https://tanstack.com
- WebGPU: https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
- Three.js: https://threejs.org
- react-three-fiber: https://docs.pmnd.rs/react-three-fiber
- I have neovim open in another pane [Image #1] as we go, always guide me on what to do there when necessary, with clear concise explanaition and specific keys to use
- default to using bun instead of npm
- workflow:
- always start on a new git branch
- before commit: all tests must pass. project readme must be updated to reflect new feature, with nx command to test