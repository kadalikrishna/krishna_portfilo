# Kadali Portfolio

A modern personal portfolio for a senior software engineer built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and lucide-react.

## Install

```bash
npm install
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/
  components/
  data/portfolio.json
  hooks/usePortfolio.ts
  types/portfolio.ts
  App.tsx
  main.tsx
  styles.css
```

## Editing Content

All portfolio content lives in `src/data/portfolio.json`.

Update profile, skills, experience, projects, education, and testimonials there. Components read typed data through `src/hooks/usePortfolio.ts`, so profile/project/testimonial content is not hardcoded in the components.

For projects:
- Set `"highlight": true` to sort a project before non-highlighted work.
- Leave `"link": ""` to hide the Live Project button.
- Leave `"image": ""` to use the dark placeholder with title overlay.
