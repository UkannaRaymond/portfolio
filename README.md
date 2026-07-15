# Portfolio

A production-ready portfolio built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, shadcn/ui-style components, Framer Motion, and next-themes.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace the placeholders

All content lives in `lib/data/` so you never have to touch component code
to update it:

- `lib/data/metadata.ts` — your name, title, description, site URL, email
- `lib/data/projects.ts` — real projects, screenshots, links, and case-study copy
- `lib/data/skills.ts` — your actual stack, grouped by category
- `lib/data/experience.ts` — real work history for the timeline
- `lib/data/socials.ts` — GitHub / LinkedIn / X / email links
- `public/projects/*.svg` — swap these gradient placeholders for real project screenshots
- `public/resume.pdf` — add your résumé (the hero's "Download résumé" button links here)
- `public/og-image.png` — add a real Open Graph image and update `ogImage` in `metadata.ts`

## Contact form

The contact form uses EmailJS directly in the browser. In EmailJS, make sure
the active template has these variables: `name`, `email`, `title`, and
`message`.

1. Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`,
   and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` to `.env.local` (see `.env.example`).
2. Add the same variables in Vercel's Environment Variables settings, then
   redeploy.
3. In EmailJS, restrict the service to your portfolio's deployed URL and turn
   on its reCAPTCHA/spam-protection option if available.

## Tech stack

Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes ·
React Hook Form · Zod · Radix UI primitives (shadcn/ui pattern) · Lucide React

## Notes

- Dark mode is the default theme (`defaultTheme="dark"` in `app/layout.tsx`);
  light mode is fully supported via the theme toggle.
- Brand icons (GitHub/LinkedIn/X) are hand-drawn SVGs in `components/icons.tsx`
  since lucide-react no longer ships brand marks — swap these out if you'd
  prefer a different icon set.
- `next build` and `next start` have been verified to run cleanly.
