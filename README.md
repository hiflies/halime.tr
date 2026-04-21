# Portfolio — Halime Uçar Türk

Personal portfolio website built with React, TypeScript, and Vite. Features a typewriter hero section, about/tech stack, experience, projects, and contact sections, with light/dark theme support.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (dev server & bundler)
- **CSS** (custom styles per section, no UI framework)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/        # Shared components (SectionHeader)
├── hooks/             # Custom hooks (useDetectColorScheme)
├── sections/          # Page sections
│   ├── HeroSection/
│   ├── NavigationMenu/
│   ├── AboutSection/
│   ├── ExperienceSection/
│   ├── ProjectsSection/
│   └── ContactSection/
└── styles.css         # Global styles
```

## Live

[halime.tr](https://halime.tr) · [Blog](https://blog.halime.tr)
