# CLAUDE.md

Guidance for Claude Code working in this repository.

## Rules

- **Commit messages must never credit Claude.** No `Co-Authored-By: Claude`, no "Generated with Claude Code" footer, no AI attribution of any kind. Author all commits as the user only. This applies to PR descriptions too.

## Project

Personal portfolio site for Berke Altıparmak — single-page React app deployed to Firebase Hosting at https://berke-altiparmak.web.app.

**Note:** Firebase is used **only for hosting**. There is no Firebase SDK in the code (no auth, Firestore, storage). The `.web.app` domain is just a Firebase Hosting subdomain.

## Tech stack

- **React 18** (Create React App, `react-scripts@5.0.0`)
- **react-router-dom v6** for client-side routing
- **framer-motion** for animations
- **react-tsparticles** for animated backgrounds (yellow on Home/About/More, red on Projects)
- **typewriter-effect** for the typing intro on Home
- **react-icons** for social/UI icons
- **@mui/icons-material** (used sparingly — `MdDeveloperMode`, `FaMusic`)

## Commands

```bash
npm start                          # dev server on :3000 (HMR)
npm run build                      # prod build to ./build (sourcemaps off)
npx serve -s build -l 5000         # smoke-test prod build locally
firebase deploy --only hosting     # publish to https://berke-altiparmak.web.app
```

Logged-in Firebase account: `balpatv@gmail.com`. Project ID: `berke-altiparmak`.

## Folder structure

```
src/
├── App.css / App.js / index.js / index.css
├── components/
│   ├── ErrorBoundary.js          # class boundary, wraps <App/>
│   ├── ParticlesBackground.js    # memoized wrapper around <Particles>
│   ├── ProjectCard.js            # animated card for /projects
│   ├── TypeInfo.js / TypeName.js # typewriter effects on Home
│   └── layout/
│       ├── PageLayout.js         # common shell: particles + top header + pagename
│       └── SocialLinks.js        # GitHub/IG/LinkedIn/YouTube
├── config/
│   └── particles.js              # yellow + red particle option factories
├── data/
│   └── projects.js               # static array of portfolio projects
└── pages/
    ├── Home.js / About.js / Projects.js / More.js
    └── NotFound.js               # catch-all `*` route
```

## Conventions

- **All pages render through `PageLayout`** — never embed `<Particles>` or the page-name span directly in a page. Pass `particlesVariant` (`'yellow'` | `'red'`) and optional `particlesSpeed` for variations.
- **Particle options must be memoized** — `ParticlesBackground` already does this with `useMemo` keyed on variant/speed. If adding a new particle config, add it as a factory in `src/config/particles.js`.
- **Animation sequences with framer-motion** wrap the async function in `useCallback` and list it in the `useEffect` dep array. See `Home.js` and `ProjectCard.js`.
- **Static data** (project list, page text) lives in `src/data/` or as module-level `const` above the component — never inline inside the component body (avoids re-creation on every render).
- **No Clock/Weather components.** They were removed in the cleanup; `REACT_APP_WEATHER_API` in `.env.example` is leftover documentation if weather is reintroduced.
- **Accessibility:** every icon-only link/button needs an `aria-label`. Decorative elements (`#pagenamespan`, `#empty-line`, the project card divider) use `aria-hidden="true"`. Buttons have `type="button"`.

## Styling

- Single global `App.css` (~310 lines) — most layout lives here keyed by id (`#about-button`, `#motion-home-div`, `#project-card-main-container`, etc.) rather than CSS modules.
- Brand color: `--mainyellow: #f9dc0b` (defined at `:root` in `App.css`).
- Font: `Righteous` from Google Fonts (preconnected in `index.html`).
- Mobile breakpoint: `@media screen and (max-width: 600px)`.

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` and `/home` | `Home` | Both serve Home (legacy compatibility) |
| `/about` | `About` | |
| `/projects` | `Projects` | Renders first 4 entries from `data/projects.js` |
| `/more` | `More` | No nav link to it from UI; reachable only by URL |
| `*` | `NotFound` | 404 fallback inside React Router |

Firebase Hosting rewrites all unknown paths to `/index.html` (see `firebase.json`), so client-side routing works on hard refresh.

## SEO / metadata

- Title and description live in `public/index.html` (Open Graph + Twitter Card included).
- `public/manifest.json` has `short_name`/`name`/`theme_color`. **Icons array is empty** — there are no `favicon.ico` or `logo*.png` files yet. Add them to `public/` and populate `manifest.json` `icons` when available.
- No `og:image` yet (no graphic available); add a 1200×630 PNG to `public/` and reference from `index.html` when ready.

## Known issues / tech debt

- **`react-scripts@5.0.0` is unmaintained.** `npm audit` reports ~76 vulnerabilities (5 critical, 37 high) — mostly transitive in build tooling. A future migration to **Vite** is recommended; until then, audit fixes are limited.
- **`react-tsparticles` is deprecated** in favor of `@tsparticles/react`. Migration not done yet — would change imports and possibly some option keys.
- Bundle is not code-split (all pages in one chunk). For now bundle is small (~156 kB gzip JS) so this is fine; revisit if it grows.
- No tests — `@testing-library/*` is installed but unused.

## Environment variables

| Var | Used? | Purpose |
|---|---|---|
| `REACT_APP_WEATHER_API` | No (component removed) | OpenWeatherMap key — kept in `.env.example` for future re-introduction |
| `GENERATE_SOURCEMAP` | Build-time | Set to `false` in `.env.production` to disable sourcemaps in prod |

`.env` and `.env.local` are git-ignored. `.env.production` is committed (only contains the sourcemap toggle).

## Deploy checklist

1. `npm run build` (must compile cleanly — zero warnings)
2. `npx serve -s build -l 5000` and click through Home / About / Projects / 404
3. `firebase deploy --only hosting`
4. Verify https://berke-altiparmak.web.app/ live, including hard-refresh on a deep route (e.g. `/projects`) to confirm SPA rewrites work.
