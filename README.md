# Full-Stack Web Development Experiments

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

**An Nx monorepo for advanced web development experiments and learning.**

This is a hands-on learning environment where cutting-edge web technologies are explored, organized, and preserved for future reference. Each experiment lives in its own isolated app or library project, making it easy to discover, run, and learn from.

## 🎯 Current Focus Areas

- **WebGPU** - GPU-accelerated graphics and compute
- **Three.js & react-three-fiber** - 3D graphics in React
- **Future explorations**: WebAssembly (WASM), WebTransport, and other cutting-edge web APIs

## 📁 Workspace Structure

```
apps/
├── react_classic/          # React 19 + Webpack + styled-components
├── node_classic/           # Node.js/Express backend experiments
├── tanstack-start/         # Full-stack SSR with TanStack Start
└── threejs_explorations/   # Three.js + React Three Fiber (Vite)
    └── Bento box grid layout with interactive 3D scenes

packages/
└── util/                   # Shared TypeScript utilities
```

## 🚀 Technologies

- **Nx 21.4.1** - Monorepo management and build orchestration
- **React 19** - Modern React with concurrent features
- **TypeScript 5.8** - Strict mode for type safety
- **Three.js & React Three Fiber** - 3D graphics and WebGL
- **TanStack Start** - SSR/SSG framework
- **Tailwind CSS v4** + **shadcn/ui** - Modern styling
- **Vitest** - Unit testing
- **Playwright MCP** - Browser automation for visual testing

## 🏃 Quick Start

### View All Projects
```bash
npx nx show projects
npx nx graph  # Visualize project dependencies
```

### Run Applications

**Three.js Explorations** (Vite, port 4200)
```bash
npx nx serve threejs_explorations
```

**React Classic** (Webpack, port 4200)
```bash
npx nx serve react_classic
```

**Node Classic** (Express backend)
```bash
npx nx serve node_classic
```

**TanStack Start** (SSR, port 3000)
```bash
cd apps/tanstack-start
npm run dev
```

### Testing & Linting

```bash
# Run tests for a project
npx nx test threejs_explorations

# Run linting
npx nx lint threejs_explorations

# Run tests for all affected projects
npx nx affected -t test

# Type check
npx nx typecheck threejs_explorations
```

### Build Projects

```bash
# Build a specific project
npx nx build threejs_explorations

# Build all affected projects
npx nx affected -t build
```

## 🎨 Featured Project: Three.js Explorations

A showcase of interactive 3D graphics built with React Three Fiber, featuring:
- **Bento box grid layout** with shadcn/ui components
- **Graphite dark theme** from tweakcn.com
- **Interactive 3D scenes**: Rotating cube, wireframe sphere, torus knot
- **OrbitControls** for mouse/touch interaction
- **Unit tests** with ResizeObserver polyfill for Three.js
- **Playwright MCP** integration for automated visual testing

## 🆕 Adding New Experiments

### Generate a New React App (Vite)
```bash
npx nx g @nx/react:app my-webgpu-app \
  --bundler=vite \
  --style=css \
  --routing=true
```

### Generate a New React App (Webpack)
```bash
npx nx g @nx/react:app my-app \
  --bundler=webpack \
  --style=styled-components \
  --routing=true
```

### Generate a Library
```bash
npx nx g @nx/react:lib my-lib          # React library
npx nx g @nx/js:lib my-utils           # Non-React library
```

### Add Components to Existing Apps
```bash
npx nx g @nx/react:component my-experiment \
  --project=threejs_explorations \
  --directory=src/app
```

### List Available Plugins
```bash
npx nx list                    # See all installed plugins
npx nx list @nx/react          # See React plugin capabilities
```

## 🔌 MCP Servers

This workspace uses Model Context Protocol (MCP) servers for enhanced development workflows:

### Playwright MCP
Browser automation for visual testing and screenshot capture.

**Setup:**
```bash
claude mcp add playwright -- npx -y @playwright/mcp@latest
```

**Verify:**
```bash
claude mcp list
```

After setup, you can use Claude Code to automate browser interactions, take screenshots of your experiments, and perform visual testing.

## 🎓 Philosophy

- **Compartmentalized experiments** - Each experiment is isolated and independent
- **Learning-focused** - Document and explain what you're learning
- **Discoverable** - Main pages link to experiments for easy browsing
- **Latest versions** - Always use the latest stable versions of packages
- **Type-safe** - Strict TypeScript configuration throughout

## 📚 Resources

**Project-Specific:**
- [Nx Documentation](https://nx.dev)
- [React 19](https://react.dev)
- [Three.js](https://threejs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [TanStack Start](https://tanstack.com/start)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)

**Tools:**
- [Nx Console](https://nx.dev/getting-started/editor-setup) - Editor extension for VSCode/IntelliJ
- [tweakcn](https://tweakcn.com) - Theme editor for shadcn/ui
