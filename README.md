# Andrew Ma's Personal Portfolio & Resume Website

This repository contains the source code for my personal portfolio and resume website, powered by [Eleventy (v3)](https://www.11ty.dev/). 

It features two custom-designed, self-contained versions of my resume rendered from shared JavaScript data sources:
1. **Modern Glassmorphism Design** (`src/index.njk`) — A clean, interactive design with a dynamic animated mesh gradient background.
2. **Retro Super Mario Bros NES Theme** (`src/mario/index.njk`) — An interactive 8-bit themed layout with retro aesthetics and animations.

---

## 🛠️ Stack & Architecture

- **Core Static Site Generator:** Eleventy v3
- **Templating Engine:** Nunjucks (`.njk`)
- **Shared Data Sources:**
  - [src/_data/resume.js](file:///src/_data/resume.js) — Career history, roles, stats, education, and patents.
  - [src/_data/projects.js](file:///src/_data/projects.js) — Side projects and Chrome web store links.
- **Logos Integration:** On build, the site automatically fetches and downloads company logos defined in the resume data to `_site/images/logos/`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v20+ recommended).

### Setup & Installation

Install the dependencies:
```bash
npm install
```

### Local Development

Run the local development server with hot reload:
```bash
npm run serve
```
Open your browser and navigate to `http://localhost:8080/`. You can view the Mario-themed version at `http://localhost:8080/mario/`.

### Production Build

Build the static site output to the `_site/` directory:
```bash
npm run build
```

---

## 🚢 Deployment

The site is automatically built and deployed to GitHub Pages via GitHub Actions on every push to the `main` branch. 
See the workflow definition in [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml).
