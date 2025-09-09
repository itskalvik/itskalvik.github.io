# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Hugo-based personal website for Kalvik Jakkala with research as the landing page and poetry accessible through navigation. The site uses TailwindCSS for styling and supports both light/dark modes. It's deployed to GitHub Pages and Netlify.

## Development Commands

### Setup
```bash
npm ci                 # Install dependencies (preferred over npm install)
```

### Development
```bash
npm run start         # Start development server at localhost:1313
npm run stage         # Start staging server with staging environment config
npm run server        # Alternative development server command
```

### Building
```bash
npm run build         # Production build with TailwindCSS compilation and search indexing
npm run build:preview # Build with drafts and future content
npm run tw:build      # Compile TailwindCSS only
```

### Maintenance
```bash
npm run clean         # Remove public/ and resources/ directories
npm run create        # Create new Hugo content using archetypes
```

## Architecture

### Hugo Configuration
- **Multi-environment setup**: Uses `config/_default/`, `config/production/`, and `config/staging/` for different deployment contexts
- **Content structure**: Research content is at root level (publications, projects, blog) with `/poetry` and `/experience` as separate pages
- **Custom layouts**: Specialized templates in `layouts/` for research pages, poetry pages, and interactive visualizations

### Styling System
- **TailwindCSS**: Main styling framework with custom color schemes and typography
- **Custom CSS**: Additional styles in `assets/main.css` and `assets/style.css`
- **Theme switching**: Supports light/dark mode toggle
- **Typography**: Uses Libre Baskerville for serif and Inter for sans-serif fonts

### Content Management
- **Authors**: Centralized author information in `content/authors/`
- **Publications**: Academic papers in `content/publication/` with BibTeX citations
- **Projects**: Research projects in `content/project/`
- **Blog posts**: Research blog in `content/blog/`
- **Experience**: Career history in `content/experience.md`
- **Poetry**: Creative writing content in `content/poetry.md`

### Interactive Elements
- **Mathematical content**: KaTeX support enabled for equations
- **Search**: Pagefind integration for site-wide search
- **Visualizations**: Custom HTML partials for interactive Gaussian distributions and research demos

### Deployment
- **GitHub Actions**: Automated deployment to GitHub Pages using Hugo 0.126.3
- **Netlify**: Alternative deployment with environment-specific builds
- **Build process**: Includes TailwindCSS compilation and search index generation

## Key Files Structure

- `config/`: Hugo configuration split by environment
- `content/`: All markdown content organized by section
- `layouts/`: Custom Hugo templates and partials
- `assets/`: Source CSS and JavaScript files
- `static/`: Static assets (images, fonts, external libraries)
- `data/`: YAML/TOML data files for Hugo
- `i18n/`: Internationalization files (currently English-focused)

## Development Notes

- Hugo version is pinned to 0.125.4 in package.json and 0.126.3 in GitHub Actions
- TailwindCSS watches for changes in `content/**/*.md` and `layouts/**/*.html`
- Custom JavaScript modules in `assets/js/` handle theme switching, navigation, and code copying
- Research content forms the homepage with navigation to Poetry and Experience pages
- Each section (research, poetry, experience) has specialized layouts and templates