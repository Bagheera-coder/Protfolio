# Abhishek Kumar — Developer Portfolio

Personal portfolio website showcasing projects, skills, education, internship experience, and certifications.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## Getting Started

```bash
npm install
npm run dev
```

## Production Scripts

```bash
# Lint code with Oxlint
npm run lint

# Build production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This project is pre-configured for zero-config static deployment:

- **Vercel:** Configured via `vercel.json` (SPA rewrites, security headers, asset caching). Import the repository on Vercel and deploy with the Vite preset.
- **Netlify / Cloudflare Pages:** Configured via `public/_redirects` and `public/_headers`. Build command: `npm run build`, output directory: `dist`.
