# berke-altiparmak.web.app

**The Balpa Times** — a vintage-broadsheet portfolio for Berke Altıparmak, developer and musician.

🌐 **Live:** https://berke-altiparmak.web.app

A four-page newspaper (Front / Tech / Arts / Academia) with page-flip nav on desktop and a single-column NYT-mobile-style feed on mobile. Bilingual (TR / EN) toggle. Built with React 18 + Create React App, deployed to Firebase Hosting.

## Tech stack

- React 18 (Create React App)
- React Router v6 — single route + legacy redirects
- Firebase Hosting (deploy target only — no Firebase SDK in the app)
- Playwright (devDep) for visual-regression screenshots

## Getting started

```bash
git clone https://github.com/balpa/berke-altiparmak.web.app
cd berke-altiparmak.web.app
npm install
npm start
```

Dev server runs at http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with HMR on port 3000 |
| `npm run build` | Production build to `./build` (sourcemaps off) |
| `npx serve -s build -l 5000` | Serve the production build locally on port 5000 |
| `node scripts/screenshot.js http://localhost:5000` | Take Playwright screenshots of the impl into `screenshots/` |

## Project structure

```
src/
├── components/
│   ├── ErrorBoundary.js
│   └── newspaper/
│       ├── Newspaper.js              # desktop shell
│       ├── MobileNewspaper.js        # mobile feed
│       ├── PageFlipOverlay.js
│       ├── SectionLabel.js
│       └── pages/
│           ├── FrontPage.js
│           ├── TechPage.js
│           ├── ArtsPage.js
│           └── AcademiaPage.js
├── data/
│   ├── content.js                    # CV data, TR + EN
│   └── news.js                       # editorial wrapper, TR + EN
├── hooks/
│   └── useMediaQuery.js
└── pages/
    ├── Home.js                       # viewport-switching shell
    └── NotFound.js
```

## Routes

- `/` → Home (Newspaper desktop or MobileNewspaper)
- `/home`, `/about`, `/projects`, `/more` → redirect to `/` (legacy URLs)
- `*` → 404

Firebase Hosting rewrites are configured for SPA routing so deep links work on hard refresh.

## Design

The newspaper aesthetic is high-fidelity to a design handoff (vintage 1920s–1960s broadsheet — blackletter nameplate, halftone portrait, drop caps, pull quotes, justified columns, paper grain). The handoff source is gitignored under `design_handoff_altiparmak_times/`. To compare implementation against design:

```bash
npx serve design_handoff_altiparmak_times -l 5001       # reference
npx serve -s build -l 5000                              # impl
node scripts/screenshot.js http://localhost:5001 --ref  # take ref shots
node scripts/screenshot.js http://localhost:5000        # take impl shots
```

Output lands in `screenshots/` (also gitignored).

## Deploy

The site is deployed to Firebase Hosting. Configuration lives in `firebase.json` and `.firebaserc` (project ID: `berke-altiparmak`).

```bash
firebase login                     # one-time
npm run build
firebase deploy --only hosting
```

After deploy, verify a deep route on hard refresh to confirm SPA rewrites are working.

## Contributing

Conventions and architectural notes for contributors (and AI assistants) live in [`CLAUDE.md`](./CLAUDE.md).

## License

Beerware — see header in past versions of `src/App.js`. If you find this stuff worth it, you can buy Berke a beer.
