# CTO Next Stack

A modern Next.js 14 application with TypeScript, Tailwind CSS, and comprehensive development tooling.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📦 Installation

```bash
# Install dependencies
pnpm install

# or
npm install
```

## 🛠️ Development

```bash
# Start development server
pnpm dev

# Start production server
pnpm start
```

## 🧪 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests (placeholder)

## 🔧 Code Quality

### Linting & Formatting

The project uses ESLint and Prettier for code quality:

- ESLint configuration extends Next.js recommended rules
- Prettier handles code formatting with consistent style
- Both tools run automatically on pre-commit hooks via Husky

### Git Hooks

Husky is configured to run lint-staged on pre-commit:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

### Import Aliases

TypeScript path aliases are configured for cleaner imports:

```typescript
import Component from '@/components/Component';
import utils from '@/utils/helpers';
```

Available aliases:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/styles/*` → `./src/styles/*`
- `@/types/*` → `./src/types/*`
- `@/utils/*` → `./src/utils/*`

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable React components
├── lib/             # Utility libraries
├── styles/          # Global styles
│   └── globals.css  # Tailwind CSS imports
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## 🎨 Styling

The project uses Tailwind CSS for styling:

- Tailwind CSS v3.4+ with PostCSS
- Custom theme extensions in `tailwind.config.js`
- Global styles in `src/styles/globals.css`

## 🚀 Deployment

The application is ready for deployment on Vercel or any Node.js hosting platform.

### Build Process

```bash
# Build for production
pnpm build

# The build output will be in the .next directory
```

## 🔍 Development Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Git

## 📝 License

This project is private.
