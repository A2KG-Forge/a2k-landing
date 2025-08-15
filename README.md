# Reforge A2K Landing Page

A modern, performant landing page built with Astro, featuring a blog system,
news panels, and optimized for collaboration. This project serves as the main
website for Reforge A2K with integrated content management and CI/CD workflows.

## ✨ Features

- 🚀 **Astro 5** - Modern static site generator with optimal performance
- 📝 **Content Collections** - Type-safe blog and news content management
- ⚡ **React Components** - Interactive components with TypeScript
- 🎨 **Tailwind CSS 4** - Modern utility-first styling
- 📱 **Responsive Design** - Mobile-first responsive layouts
- 🔍 **SEO Optimized** - Canonical URLs, OpenGraph, and sitemap support
- 📊 **Lighthouse CI** - Automated performance monitoring
- 🔧 **Type Safety** - Full TypeScript support with strict type checking
- 🎯 **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks
- 🚀 **GitHub Actions** - Automated CI/CD pipeline
- 📰 **RSS Feed** - Automatic RSS feed generation

## 🚀 Project Structure

```text
reforge-a2k/
├── .github/                 # GitHub workflows and configurations
│   └── workflows/           # CI/CD automation
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   ├── assets/             # Optimized images and media
│   ├── components/         # Reusable Astro & React components
│   │   ├── Header.astro    # Site navigation
│   │   ├── Hero.astro      # Homepage hero section
│   │   ├── HeroSlider.tsx  # Interactive hero slider
│   │   └── NewsPanel.astro # News/blog content display
│   ├── content/           # Content collections
│   │   └── blog/          # Blog posts (Markdown/MDX)
│   ├── layouts/           # Page layouts
│   │   ├── Layout.astro   # Base layout
│   │   └── BlogPost.astro # Blog post layout
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   └── blog/          # Blog pages
│   └── styles/            # Global CSS styles
├── .lighthouserc.cjs      # Lighthouse CI configuration
├── .prettierrc.json       # Code formatting rules
├── astro.config.ts        # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** (comes with Node.js)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd reforge-a2k
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** Navigate to `http://localhost:4321`

## 📋 Available Commands

| Command                | Action                                             |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Start development server at `localhost:4321`       |
| `npm run build`        | Build production site to `./dist/`                 |
| `npm run preview`      | Preview production build locally                   |
| `npm run format`       | Format code with Prettier                          |
| `npm run format:check` | Check code formatting                              |
| `npm run type-check`   | Run TypeScript type checking                       |
| `npm run lint`         | Run ESLint on all files                            |
| `npm run lint:fix`     | Run ESLint and automatically fix issues            |
| `npm run lint:astro`   | Run Astro-specific type checking                   |
| `npm run pre-commit`   | Run pre-commit checks (format + lint + type check) |
| `npm run pre-push`     | Run pre-push checks (includes build)               |
| `npm test`             | Run tests (placeholder for future implementation)  |

## 👥 Collaboration Guidelines

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/update-description` - Documentation updates
- `style/style-changes` - Styling updates
- `refactor/refactor-description` - Code refactoring

### Development Workflow

1. **Create a new branch** from `main`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit regularly

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Run quality checks** before pushing

   ```bash
   npm run pre-commit
   ```

4. **Push your branch** and create a Pull Request
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

Use conventional commits for clear history:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📝 Content Collections Guide

### Blog Posts

Blog posts are stored in `src/content/blog/` and use the following frontmatter
schema:

```markdown
---
title: 'Your Post Title' # Required: Post title
description: 'Brief description' # Required: Meta description
pubDate: '2024-01-15' # Required: Publication date (YYYY-MM-DD)
updatedDate: '2024-01-20' # Optional: Last update date
heroImage: '../../assets/hero.jpg' # Optional: Featured image
---

Your content goes here...
```

### Content Guidelines

#### Writing Style

- Use clear, concise language
- Write engaging headlines
- Include relevant images with alt text
- Use proper markdown formatting

#### Image Optimization

- Store images in `src/assets/` for optimization
- Use descriptive filenames
- Prefer WebP format when possible
- Include alt text for accessibility

#### SEO Best Practices

- Write descriptive titles (50-60 characters)
- Create compelling descriptions (150-160 characters)
- Use heading hierarchy (H1 → H2 → H3)
- Include internal and external links

### Creating New Blog Posts

1. **Create a new file** in `src/content/blog/`

   ```bash
   touch src/content/blog/my-new-post.md
   ```

2. **Add frontmatter** with required fields
3. **Write your content** using Markdown or MDX
4. **Test locally** before committing

## 🎨 Code Formatting with Prettier

### Prettier Configuration

The project uses Prettier with these settings (`.prettierrc.json`):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "useTabs": false,
  "endOfLine": "lf",
  "arrowParens": "avoid"
}
```

### Special Rules

- **Astro files**: Auto-formatted with `prettier-plugin-astro`
- **Markdown files**: 80 character line width with prose wrapping
- **TypeScript/JavaScript**: 100 character line width

### Formatting Commands

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check

# Format specific file
npx prettier --write src/components/Header.astro
```

### VS Code Integration

1. Install the **Prettier extension**
2. Enable **"Format on Save"** in settings
3. Set Prettier as default formatter

### Pre-commit Formatting Workflow

To avoid formatting-related commit failures, follow this workflow:

1. **Format before committing**:

   ```bash
   npm run format
   git add .
   git commit -m "feat: your changes"
   ```

2. **Or use the integrated workflow**:

   ```bash
   # This checks formatting and types before committing
   npm run pre-commit

   # If it passes, commit your changes
   git commit -m "feat: your changes"
   ```

**Note**: The pre-commit hook uses `format:check` (not `format`) to avoid the
issue where Prettier modifies files during the commit process without re-staging
them. Always format your code before committing!

## 🔍 Code Quality with ESLint

### ESLint Configuration

The project uses ESLint with a comprehensive configuration that includes:

- **TypeScript support** with `typescript-eslint`
- **React rules** for JSX components
- **Astro-specific rules** for `.astro` files
- **Accessibility rules** with `jsx-a11y`
- **React Hooks rules** for proper hook usage

### ESLint Rules Overview

#### Core Rules

- No unused variables (with underscore prefix exception)
- Prefer const over let
- No var declarations
- Object shorthand syntax
- Template literals over string concatenation

#### React Rules

- No React import needed (React 17+)
- Proper hook usage and dependencies
- JSX accessibility checks

#### TypeScript Rules

- Warn on explicit `any` usage
- Strict unused variable checking
- Type-safe coding patterns

### Linting Commands

```bash
# Lint all files
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Lint specific file
npx eslint src/components/Header.astro

# Lint with specific file extensions
npx eslint . --ext .js,.ts,.tsx,.astro
```

### VS Code ESLint Integration

1. Install the **ESLint extension**
2. Enable auto-fix on save:
   ```json
   {
     "eslint.validate": ["astro", "typescript", "typescriptreact"],
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

### Common ESLint Fixes

```bash
# Fix accessibility issues (empty href attributes)
# Replace href="#" with href="/actual-link" or use <button>

# Fix unused variables
# Add underscore prefix: const _unusedVar = value;

# Fix object shorthand
# Replace { name: name } with { name }
```

### Prettier Issues on Windows

**Problem**: Prettier keeps failing even after formatting **Root Cause**: Line
ending conflicts between Windows (CRLF) and Unix (LF)

**Solutions Applied**:

1. ✅ **Updated Prettier config**: Changed `"endOfLine": "lf"` to
   `"endOfLine": "auto"`
2. ✅ **Fixed Git config**: Set `core.autocrlf=false` to prevent automatic line
   ending conversion
3. ✅ **Added .gitattributes**: Ensures consistent line endings across team
   members
4. ✅ **VS Code settings**: Auto-format on save with consistent line endings

**Quick Fix Commands**:

```bash
# Fix line ending issues
git config core.autocrlf false
npm run format

# If still having issues, normalize line endings
git add --renormalize .
git commit -m "Normalize line endings"
```

## 🔧 Troubleshooting & Error Handling

### Common Issues and Solutions

#### 1. Pre-commit Hook Failures

**Error**: `husky - pre-commit script failed (code 1)`

**Solutions**:

```bash
# The pre-commit hook now automatically formats code,
# but may fail on type checking issues

# Check for type errors
npm run type-check

# Run full pre-commit check (includes auto-formatting)
npm run pre-commit

# Manual formatting (if needed)
npm run format
```

#### 2. TypeScript Errors

**Error**: Type checking failures

**Solutions**:

```bash
# Run type checking
npm run type-check

# Check Astro files specifically
npx astro check

# Fix common issues:
# - Add missing type imports
# - Update component prop types
# - Check frontmatter schema in content collections
```

#### 3. Build Failures

**Error**: Build process fails

**Debugging steps**:

```bash
# Clean build and reinstall
rm -rf dist/ node_modules/
npm install
npm run build

# Check for missing dependencies
npm audit

# Verify all imports are correct
npm run type-check
```

#### 4. Content Collection Errors

**Error**: Content schema validation failures

**Solutions**:

- Check frontmatter matches schema in `src/content.config.ts`
- Ensure required fields are present
- Validate date formats (`YYYY-MM-DD` or `MMM DD YYYY`)
- Check image paths are correct

#### 5. Lighthouse CI Issues

**Error**: Lighthouse CI configuration problems

**Solutions**:

- Ensure `.lighthouserc.cjs` exists (not `.js`)
- Check server starts correctly for preview
- Verify all URLs are accessible
- Install Chrome/Chromium if running locally

### Development Tips

#### Performance Optimization

- Use Astro's built-in image optimization
- Minimize client-side JavaScript
- Leverage static site generation
- Monitor Core Web Vitals

#### Debugging Tools

```bash
# Astro development server with debug info
DEBUG=astro:* npm run dev

# TypeScript compiler with verbose output
npx tsc --noEmit --verbose

# Build analysis
npm run build -- --verbose
```

#### Git Workflow Tips

```bash
# Stash changes before switching branches
git stash
git checkout main
git stash pop

# Interactive commit for partial changes
git add -p

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

## 🚀 Deployment

The project uses GitHub Actions for automated deployment:

1. **Push to `main`** triggers production deployment
2. **Pull Requests** run quality checks and Lighthouse CI
3. **Build artifacts** are automatically generated and stored

For manual deployment:

```bash
npm run build
# Deploy contents of dist/ folder
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run quality checks**
5. **Submit a Pull Request**

Please ensure:

- [ ] Code follows project formatting standards
- [ ] TypeScript types are properly defined
- [ ] Tests pass (when implemented)
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional format

## 📄 License

This project is licensed under the MIT License.

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
