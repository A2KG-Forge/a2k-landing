# CI/CD Setup Documentation

This project includes a comprehensive CI/CD setup with GitHub Actions and Husky git hooks.

## Git Hooks (Husky)

### Pre-commit Hook
Runs automatically before each commit:
- **Linting**: Checks TypeScript and Astro files for errors
- **Format Check**: Ensures code follows Prettier formatting rules

### Pre-push Hook  
Runs automatically before pushing to remote:
- **Type Check**: Validates TypeScript types across the project
- **Build Test**: Ensures the project builds successfully

### Manual Commands
```bash
npm run pre-commit   # Run pre-commit checks manually
npm run pre-push     # Run pre-push checks manually
npm run lint         # Run Astro check
npm run format       # Format code with Prettier
npm run format:check # Check if code is properly formatted
```

## GitHub Actions Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)
**Triggers**: Push to `main`/`develop`, Pull Requests
**Jobs**:
- **Lint and Format Check**: Code quality validation
- **Build and Test**: Project compilation and testing
- **Lighthouse CI**: Performance testing (PR only)

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
**Triggers**: Push to `main`, Manual trigger
**Jobs**:
- **Deploy**: Production deployment with pre-deploy checks
- Includes examples for Netlify and Vercel deployment

### 3. Security Workflow (`.github/workflows/security.yml`)
**Triggers**: Push, PR, Weekly schedule (Sundays 2 AM UTC)
**Jobs**:
- **Security Audit**: npm audit for vulnerabilities
- **Dependency Review**: Check for risky dependencies (PR only)
- **CodeQL Analysis**: Static code analysis for security issues

### 4. PR Quality Check (`.github/workflows/pr-quality.yml`)
**Triggers**: Pull Request events
**Jobs**:
- **Quality Gate**: Comprehensive quality checks
- **PR Labeler**: Automatic labeling based on changed files

## Configuration Files

### Prettier (`.prettierrc.json`)
Code formatting configuration:
- Single quotes, semicolons, 2-space tabs
- 100 character line length
- Special handling for `.astro` and `.md` files

### Lighthouse CI (`.lighthouserc.js`)
Performance testing configuration:
- Tests homepage, blog, and about pages
- Performance, accessibility, and SEO thresholds
- Warns on performance < 90%, errors on accessibility < 90%

### PR Labeler (`.github/labeler.yml`)
Automatic labeling rules:
- Labels based on file paths (components, styles, config, etc.)
- Branch-based labels (bug, feature)
- Asset and dependency detection

## Setup Instructions

1. **Install dependencies** (already done):
   ```bash
   npm install --save-dev prettier @lhci/cli husky
   ```

2. **Initialize Husky** (already done):
   ```bash
   npm run prepare
   ```

3. **Configure GitHub repository**:
   - Enable Actions in repository settings
   - Set up deployment secrets if using Netlify/Vercel
   - Configure branch protection rules for `main`

## Branch Protection Recommendations

Configure these rules for the `main` branch:
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
  - `lint-and-format`
  - `build-and-test`
  - `quality-gate`
- ✅ Require branches to be up to date before merging
- ✅ Require conversation resolution before merging

## Deployment Setup

### Netlify
1. Set `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets
2. Uncomment Netlify deployment section in `deploy.yml`

### Vercel
1. Set `VERCEL_TOKEN`, `ORG_ID`, and `PROJECT_ID` secrets
2. Uncomment Vercel deployment section in `deploy.yml`

## Troubleshooting

### Common Issues
- **Husky hooks not running**: Run `npx husky install`
- **Prettier conflicts**: Check `.prettierrc.json` configuration
- **Build failures**: Ensure all TypeScript errors are resolved
- **Lighthouse failures**: Check performance budgets in `.lighthouserc.js`

### Bypassing Hooks (Emergency Only)
```bash
git commit --no-verify   # Skip pre-commit
git push --no-verify     # Skip pre-push
```
