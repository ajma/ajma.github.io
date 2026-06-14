# Andrew Ma's Personal Portfolio & Resume Website

This repository contains the source code for my personal portfolio and resume website, powered by [Eleventy (v3)](https://www.11ty.dev/). 

It features three custom-designed, self-contained versions of my resume rendered from shared JavaScript data sources:
1. **Executive Editorial Design** (`src/index.njk`) — The default landing page. A highly professional split-column theme featuring premium typography, structured sections, and a built-in print stylesheet that is fully ATS (Applicant Tracking System) compatible.
2. **Glassmorphism Design** (`src/glass/index.njk`) — A clean, vibrant light theme featuring glassy elements and dynamic animated mesh gradient blobs.
3. **Retro Super Mario Bros NES Theme** (`src/mario/index.njk`) — An interactive, 8-bit game-inspired layout with retro animations, custom graphics, and a mini playable platformer easter egg.

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
Open your browser and navigate to `http://localhost:8080/`. You can view the other designs at `http://localhost:8080/glass/` (Glassmorphism) and `http://localhost:8080/mario/` (Mario NES Theme).

### Production Build

Build the static site output to the `_site/` directory:
```bash
npm run build
```

---

## 🚢 Deployment

The site is automatically built and deployed to GitHub Pages via GitHub Actions on every push to the `main` branch. 
See the workflow definition in [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml).
