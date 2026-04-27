# berke-altiparmak.web.app

Personal portfolio site for **Berke Altıparmak** — developer and musician.

🌐 **Live:** https://berke-altiparmak.web.app

## Tech stack

- React 18 (Create React App)
- React Router v6
- Framer Motion (animations)
- react-tsparticles (animated backgrounds)
- typewriter-effect
- Firebase Hosting (deploy target only — no Firebase SDK in the app)

## Getting started

```bash
git clone https://github.com/balpa/berke-altiparmak.web.app
cd berke-altiparmak.web.app
npm install
npm start
```

Dev server runs at http://localhost:3000 with hot module reloading.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with HMR on port 3000 |
| `npm run build` | Production build to `./build` (sourcemaps disabled) |
| `npm test` | Test runner (no tests yet) |
| `npx serve -s build -l 5000` | Serve the production build locally on port 5000 |

## Project structure

```
src/
├── components/
│   ├── ErrorBoundary.js
│   ├── ParticlesBackground.js
│   ├── ProjectCard.js
│   ├── TypeInfo.js / TypeName.js
│   └── layout/
│       ├── PageLayout.js
│       └── SocialLinks.js
├── config/particles.js          # particle option factories
├── data/projects.js             # portfolio project list
└── pages/
    ├── Home.js
    ├── About.js
    ├── Projects.js
    ├── More.js
    └── NotFound.js
```

## Routes

- `/` and `/home` → Home
- `/about` → About
- `/projects` → Projects
- `/more` → More
- `*` → 404

Firebase Hosting rewrites are configured for SPA routing (`firebase.json`), so deep links work on hard refresh.

## Environment

Optional variables (see `.env.example`):

| Var | Purpose |
|---|---|
| `REACT_APP_WEATHER_API` | OpenWeatherMap key (currently unused — Weather component removed) |

`GENERATE_SOURCEMAP=false` is set in `.env.production` to keep production sourcemaps out of the bundle.

## Deploy

The site is deployed to Firebase Hosting. Configuration lives in `firebase.json` and `.firebaserc` (project ID: `berke-altiparmak`).

```bash
firebase login                     # one-time
npm run build
firebase deploy --only hosting
```

After deploy, verify a deep route (e.g. `/projects`) on hard refresh to confirm SPA rewrites are working.

## Contributing

Conventions and architectural notes for contributors (and AI assistants) live in [`CLAUDE.md`](./CLAUDE.md).

## License

Beerware — see header in `src/App.js`. If you find this stuff worth it, you can buy Berke a beer.
