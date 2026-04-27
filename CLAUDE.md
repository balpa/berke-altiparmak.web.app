# CLAUDE.md

Guidance for Claude Code working in this repository.

## Rules

- **Commit messages must never credit Claude.** No `Co-Authored-By: Claude`, no "Generated with Claude Code" footer, no AI attribution of any kind. Author all commits as the user only. This applies to PR descriptions too.

## Project

Personal portfolio for Berke Altıparmak, redesigned as **The Balpa Times** — a vintage broadsheet newspaper with a 4-page page-flip metaphor (Front, Tech, Arts, Academia) on desktop and a single-column NYT-mobile-style feed on mobile. Deployed to Firebase Hosting at https://berke-altiparmak.web.app.

**Note:** Firebase is used **only for hosting**. There is no Firebase SDK in the code. The `.web.app` domain is just a Firebase Hosting subdomain.

## Tech stack

- **React 18** (Create React App, `react-scripts@5.0.0`)
- **react-router-dom v6** — single `/` route + legacy redirects + 404
- No animation libraries, no icon libraries, no particle libraries (all removed in the newspaper redesign — bundle dropped from ~156 kB to ~64 kB gzipped JS).
- **Playwright** (devDep) for visual-regression screenshots against the design reference.

## Commands

```bash
npm start                          # dev server on :3000 (HMR)
npm run build                      # prod build to ./build (sourcemaps off)
npx serve -s build -l 5000         # smoke-test prod build locally
firebase deploy --only hosting     # publish to https://berke-altiparmak.web.app
```

Firebase account: `balpatv@gmail.com`. Project ID: `berke-altiparmak`.

## Folder structure

```
src/
├── App.css / App.js / index.js / index.css
├── components/
│   ├── ErrorBoundary.js              # class boundary, wraps <App/>
│   └── newspaper/
│       ├── Newspaper.js              # desktop shell — masthead, INSIDE nav, prev/next, footer
│       ├── MobileNewspaper.js        # mobile feed (single column, sticky top bar)
│       ├── SectionLabel.js           # shared label rule (typewriter caps, double border)
│       └── pages/
│           ├── FrontPage.js          # 2-col lead with drop cap + portrait sidebar
│           ├── TechPage.js           # project dossier + model bar chart + ads sidebar
│           ├── ArtsPage.js           # music/repertoire + classifieds sidebar
│           └── AcademiaPage.js       # education timeline + coursework + classifieds
├── data/
│   ├── content.js                    # BERKE_CONTENT (TR + EN — name, experience, projects, skills, education, music, certs)
│   └── news.js                       # NEWS_CONTENT (TR + EN — masthead, motto, vol, pages array with kicker/headline/subhead/lead/pullquote/sidebar)
├── hooks/
│   └── useMediaQuery.js              # matchMedia subscription with SSR-safe init
└── pages/
    ├── Home.js                       # picks Newspaper (≥1024px) or MobileNewspaper
    └── NotFound.js                   # newspaper-styled 404 ("PAGE NOT FOUND" classified)
```

Other top-level files of note:
- `scripts/screenshot.js` — Playwright visual-check script (`--ref` for reference, no flag for implementation).
- `scripts/debug-clicks.js`, `scripts/debug-state.js` — diagnostic helpers, kept around for future debugging.
- `design_handoff_altiparmak_times/` — gitignored design source (preview.html + jsx prototypes). Treat as read-only reference; never copy code from it directly without porting (no `window.*` globals, ESM only).

## Conventions

- **All page-level chrome goes through `Newspaper.js` / `MobileNewspaper.js`.** Don't add layout chrome to individual page renderers — they should only render the section content (kicker / h1 / subhead / body grid). The shell handles masthead, INSIDE nav, footer.
- **Tokens are hard-coded constants** at the top of `Newspaper.js` / `MobileNewspaper.js`: `PAPER = '#f4ead2'`, `INK = '#1a1a1a'`, `ACCENT = '#a31621'`, font families. The design handoff has a tweaks panel — we don't ship it. If you need to tweak, change the constants.
- **Page changes are instant** — no animation. Earlier versions had a 3D page-flip overlay; it was removed because it felt janky. Don't reintroduce without explicit ask.
- **Drop cap** uses CSS `::first-letter` via the `.drop-cap` class in `App.css` — accessible (screen reader reads the full word), no DOM slicing.
- **Static data** lives in `src/data/`. `content.js` and `news.js` are bilingual dictionaries keyed by `'en'` / `'tr'` — keep both in sync when adding fields.
- **Routing:** `/` is the only real route (renders Home, which switches between desktop and mobile). `/home`, `/about`, `/projects`, `/more` are 301 (`<Navigate replace>`) redirects to `/` for backwards compatibility with the previous portfolio's URLs. `*` → `NotFound`.
- **Accessibility:** all icon-only buttons need `aria-label`; decorative elements use `aria-hidden="true"`; nav containers carry `aria-label="Inside" / "İçindekiler"`; current page button gets `aria-current="page"`; kbd shortcuts (← / →) for page-flip.

## Visual regression workflow

The design source lives in `design_handoff_altiparmak_times/preview.html`. Run `/visual-check` to:
1. Serve the reference (port 5001) and the implementation (port 5000).
2. Take Playwright screenshots into `screenshots/`.
3. Read pairs (`ref-*.png` vs `impl-*.png`) side-by-side.

The Playwright context uses `waitForFunction` on the headline text after each navigation — without it, screenshots race against the React commit and capture the previous page's content.

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` → `Newspaper` (desktop) / `MobileNewspaper` (mobile) | The whole site |
| `/home`, `/about`, `/projects`, `/more` | `<Navigate to="/" replace />` | Legacy redirects from the previous portfolio |
| `*` | `NotFound` | Newspaper-styled 404 |

Firebase Hosting rewrites all unknown paths to `/index.html`, so client-side routing works on hard refresh.

## SEO / metadata

- Title and description in `public/index.html` (Open Graph + Twitter Card).
- `public/manifest.json` — short_name "Balpa Times", theme_color paper, background_color dark.
- `public/berke-portrait.png` — used by the FrontPage portrait + Mobile lead. To swap the photo, replace this file (no code change needed).
- **Icons array in manifest is empty** — `favicon.ico` and `logo*.png` files don't exist. Add to `public/` and populate when ready.
- No `og:image` yet (no graphic available); add a 1200×630 PNG to `public/` and reference from `index.html` when ready.

## Known issues / tech debt

- **`react-scripts@5.0.0` is unmaintained.** `npm audit` reports vulnerabilities (mostly transitive in build tooling). Future migration to **Vite** is recommended; until then, audit fixes are limited.
- No tests — `@testing-library/*` is installed but unused.
- Bundle is not code-split. Currently small (~64 kB gzip JS) so this is fine; revisit if it grows.
- Newspaper component carries a lot of inline styles. If style maintenance becomes painful, extract into CSS modules per component — but the inline approach matches the design handoff one-to-one and was deliberately preserved during the port.

## Environment variables

| Var | Purpose |
|---|---|
| `GENERATE_SOURCEMAP=false` | Set in `.env.production`, disables prod sourcemaps |

`.env` and `.env.local` are git-ignored. `.env.production` is committed.

## Deploy checklist

1. `npm run build` (must compile cleanly — zero warnings).
2. Run `/visual-check` to confirm screenshots still match the reference.
3. `npx serve -s build -l 5000` and click through Front / Tech / Arts / Academia / 404 / TR.
4. `firebase deploy --only hosting`.
5. Verify https://berke-altiparmak.web.app/ live, including hard-refresh on `/about` (legacy URL → should redirect to `/`).
