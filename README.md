# Andrew Ma | Personal Website

A simple, elegant personal website built with React, TypeScript, and Vite.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

The static assets will be generated in the `dist/` directory.

## Deployment to GitHub Pages

1. Create a GitHub repository and push this code.
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add the following scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run the deploy script:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, set the source for GitHub Pages to the `gh-pages` branch.
