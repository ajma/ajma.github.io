# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run build` — build the site with Eleventy (output: `_site/`)
- `npm run serve` — local dev server with hot reload

## Architecture

Personal portfolio site (andrewma.com) built with Eleventy v3. Two themed versions of the same resume data:

- `src/index.njk` — glassmorphic design (all HTML/CSS/templating in one file)
- `src/mario/index.njk` — Super Mario Bros NES theme (all HTML/CSS/JS/templating in one file)

Both templates are self-contained (no layouts or includes) and render data from shared YAML sources:

- `src/_data/resume.yaml` — companies, roles, bullets, education, stats (yearsExperience, yearsLeadership)
- `src/_data/projects.yaml` — personal projects with emoji, links, summaries

## Key Conventions

- Resume text with markdown links (e.g. `[Portal](https://...)`) is converted via the `mdlinks` Nunjucks filter defined in `.eleventy.js`
- The `upper` filter is used in the Mario template for company names
- Company `id` fields are used for CSS styling hooks (`data-company` attributes) and alt text
- Stats are stored as plain numbers in YAML; templates append the `+` suffix
- `src/CNAME` is passthrough-copied for GitHub Pages custom domain

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages. Requires repo Settings > Pages > Source set to "GitHub Actions".
