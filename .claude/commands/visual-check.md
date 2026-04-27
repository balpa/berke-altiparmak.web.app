---
description: Take Playwright screenshots of the live build and compare against the design reference.
---

Visual-regression check for The Balpa Times redesign. The reference is `design_handoff_altiparmak_times/preview.html` (gitignored, design-team source). The implementation is the production build.

1. Verify Playwright + chromium are installed: `npx playwright --version`. If missing, run `npx playwright install chromium`.
2. Build the implementation: `npm run build` (must compile with **zero warnings**).
3. Start two static servers in the background:
   - Reference: `npx serve design_handoff_altiparmak_times -l 5001`
   - Implementation: `npx serve -s build -l 5000`
4. Wait until both respond `200` on a HEAD/GET to `/`.
5. Take reference screenshots once (only if `screenshots/ref-*.png` are missing or stale): `node scripts/screenshot.js http://localhost:5001 --ref`.
6. Take implementation screenshots: `node scripts/screenshot.js http://localhost:5000`. The script jumps via the INSIDE nav and uses `waitForFunction` to confirm DOM committed before each screenshot.
7. Read each pair side-by-side via the Read tool:
   - `screenshots/ref-desktop-en-0-front.png` vs `screenshots/impl-desktop-en-0-front.png`
   - same for `1-tech`, `2-arts`, `3-academia`, `tr-0-front`, and `mobile-en`
8. Note any layout / typography / color differences and decide whether they're cosmetic noise (font kerning, AA differences) or real bugs.
9. Stop the static servers via `TaskStop`.

Don't deploy or push from inside this command — that's `/push` and `/deploy`.
