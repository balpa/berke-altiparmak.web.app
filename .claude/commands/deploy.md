---
description: Build and deploy this site to Firebase Hosting (berke-altiparmak project).
---

Deploy the current local source to Firebase Hosting at https://berke-altiparmak.web.app.

1. Verify Firebase login: `firebase login:list`. If not logged in, ask the user to run `! firebase login` (login is interactive — Claude cannot do it).
2. Confirm the active project: read `.firebaserc` (should be `berke-altiparmak`). If it differs, stop and ask the user.
3. Warn the user that this is a production deploy that will overwrite the live site, and ask for explicit confirmation before continuing.
4. Build:
   - `npm run build` — must finish with **zero warnings** and "Compiled successfully". If warnings appear, fix them first (do not deploy a warning-y build).
5. Smoke-test the build locally:
   - Run `npx serve -s build -l 5000` in the background.
   - Curl `/` and at least one deep route (`/projects`) — both should return HTTP 200.
   - Stop the serve task once verified.
6. Deploy: `firebase deploy --only hosting`.
7. Report the live URL (`https://berke-altiparmak.web.app`) and the new release/version ID from the deploy output.
8. Suggest the user hard-refresh a deep route (e.g. `/projects`) to confirm SPA rewrites work.

Never run `firebase deploy` without an explicit confirmation in the current turn — even if the user has approved deploys before.
