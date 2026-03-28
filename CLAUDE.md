# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

General trading company website built with Next.js 15 (App Router), Tailwind CSS 3, and next-intl for i18n. Supports three locales: English (en), Arabic (ar, RTL), and French (fr).

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run Next.js linting
```

## Architecture

- **Routing**: All pages under `src/app/[locale]/` — middleware at `src/middleware.ts` redirects `/` to default locale `/en`
- **i18n**: `next-intl` with routing config in `src/i18n/routing.ts` and request config in `src/i18n/request.ts`. Translation files in `messages/{en,ar,fr}.json`
- **Fonts**: DM Sans (Latin/French/English) + Cairo (Arabic) — loaded via `next/font/google`, switched by locale in `[locale]/layout.tsx`
- **RTL**: Arabic locale sets `dir="rtl"` on `<html>`. Use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`) and Tailwind `rtl:` prefix for directional styles
- **Root layout**: `src/app/layout.tsx` is a pass-through; actual `<html>`/`<body>` is in `src/app/[locale]/layout.tsx`
- **Components**: All in `src/components/` — client components using `'use client'` with `useTranslations` hook

## Design System

- **Primary red**: `#E63946` (Tailwind: `primary`)
- **Dark navy**: `#1D1D2C` (Tailwind: `navy`)
- **Light surface**: `#F5F5F7` (Tailwind: `surface`)
- **Section subtitle pattern**: uppercase tracking-wide text + red accent line (`w-8 h-[2px] bg-primary`)
- **Buttons**: Rounded-full (`rounded-full`) with diagonal arrow icon (↗)
- **Header**: Fixed pill-shaped glassmorphic navbar with backdrop blur

## Adding a New Locale

1. Add locale code to `src/i18n/routing.ts` locales array
2. Create `messages/{locale}.json` with all translation keys
3. Update middleware matcher in `src/middleware.ts`
4. If RTL, add locale check in `[locale]/layout.tsx` dir logic
