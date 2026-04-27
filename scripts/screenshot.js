// Take screenshots of a URL at desktop and mobile viewports.
//
// Usage:
//   node scripts/screenshot.js <baseUrl> <outPrefix> [--ref]
//
// For the design reference (preview.html) pass --ref so the script clicks the
// DESKTOP / MOBILE toolbar buttons and the EN/TR language toggle, and walks
// through all four pages. For the implementation, the script takes screenshots
// at specific URLs / viewports.

const { chromium } = require('playwright')
const path = require('path')

async function shoot(page, file, fullPage = true) {
  const out = path.join('screenshots', file)
  await page.screenshot({ path: out, fullPage })
  console.log('  →', out)
}

async function refMode(baseUrl) {
  const browser = await chromium.launch()

  // Desktop view of the reference. preview.html has a fixed 1280×1900 desktop
  // frame, so use a viewport big enough to fit it plus the toolbar.
  {
    const ctx = await browser.newContext({ viewport: { width: 1340, height: 2000 } })
    const page = await ctx.newPage()
    await page.goto(baseUrl + '/preview.html', { waitUntil: 'networkidle' })
    await page.click('#btn-desktop')
    await page.waitForTimeout(800)

    // EN, page 0
    await shoot(page, 'ref-desktop-en-0-front.png')

    // EN, page 1 — click ‹›: next button is the second of the two abs buttons
    // Use INSIDE nav instead — click the "TECHNOLOGY" entry
    const nextSel = 'button[aria-label="next page"]'
    await page.click(nextSel); await page.waitForTimeout(1000)
    await shoot(page, 'ref-desktop-en-1-tech.png')
    await page.click(nextSel); await page.waitForTimeout(1000)
    await shoot(page, 'ref-desktop-en-2-arts.png')
    await page.click(nextSel); await page.waitForTimeout(1000)
    await shoot(page, 'ref-desktop-en-3-academia.png')

    // Switch to TR (top-right toggle on the toolbar above the paper)
    // Toggle: the small button "TR" / "EN" in the top toolbar bar
    await page.evaluate(() => {
      const btns = document.querySelectorAll('button')
      for (const b of btns) {
        if ((b.textContent || '').trim() === 'TR' || (b.textContent || '').trim() === 'EN') {
          b.click()
          return
        }
      }
    })
    await page.waitForTimeout(300)
    // Page idx persisted as 3 — go back to 0 by clicking prev 3x
    const prevSel = 'button[aria-label="previous page"]'
    for (let i = 0; i < 3; i++) { await page.click(prevSel); await page.waitForTimeout(1000) }
    await shoot(page, 'ref-desktop-tr-0-front.png')
    await ctx.close()
  }

  // Mobile view — preview.html shows iOS frame; we screenshot just the mobile
  // viewport too via a separate context with a mobile viewport.
  {
    const ctx = await browser.newContext({ viewport: { width: 1340, height: 1100 } })
    const page = await ctx.newPage()
    await page.goto(baseUrl + '/preview.html', { waitUntil: 'networkidle' })
    await page.click('#btn-mobile')
    await page.waitForTimeout(800)
    await shoot(page, 'ref-mobile-en.png', true)
    await ctx.close()
  }

  await browser.close()
}

async function implMode(baseUrl) {
  const browser = await chromium.launch()

  // Desktop, reducedMotion to skip the page-flip overlay so screenshots are deterministic
  {
    const ctx = await browser.newContext({
      viewport: { width: 1340, height: 1000 },
      reducedMotion: 'reduce',
    })
    const page = await ctx.newPage()
    await page.goto(baseUrl + '/', { waitUntil: 'networkidle' })
    await page.waitForTimeout(500)
    await shoot(page, 'impl-desktop-en-0-front.png')

    async function jumpInsideNav(idx) {
      await page.evaluate((i) => {
        const nav = document.querySelector('nav[aria-label="Inside"]') || document.querySelector('nav[aria-label="İçindekiler"]')
        const btns = nav ? Array.from(nav.querySelectorAll('button')) : []
        if (btns[i]) btns[i].click()
      }, idx)
    }
    async function logHead(tag) {
      const text = await page.evaluate(() => document.querySelector('h1')?.innerText.slice(0, 50))
      console.log('  state @', tag, '→', text)
    }
    await jumpInsideNav(1)
    await page.waitForFunction(() => /FIVE PROJECTS|BEŞ PROJE/.test(document.querySelector('h1')?.innerText || ''), null, { timeout: 5000 })
    await logHead('tech')
    await shoot(page, 'impl-desktop-en-1-tech.png')

    await jumpInsideNav(2)
    await page.waitForFunction(() => /OFF THE CLOCK|MESAİ DIŞI/.test(document.querySelector('h1')?.innerText || ''), null, { timeout: 5000 })
    await logHead('arts')
    await shoot(page, 'impl-desktop-en-2-arts.png')

    await jumpInsideNav(3)
    await page.waitForFunction(() => /TWO UNIVERSITIES|İKİ ÜNİVERSİTE/.test(document.querySelector('h1')?.innerText || ''), null, { timeout: 5000 })
    await logHead('academia')
    await shoot(page, 'impl-desktop-en-3-academia.png')

    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'))
      const t = btns.find((b) => /^(TR|EN)$/.test((b.textContent || '').trim()))
      if (t) t.click()
    })
    await page.waitForFunction(() => /İçindekiler/.test(document.body.innerText), null, { timeout: 5000 })
    await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="İçindekiler"]') || document.querySelector('nav[aria-label="Inside"]')
      const btns = nav ? Array.from(nav.querySelectorAll('button')) : []
      btns[0]?.click()
    })
    await page.waitForFunction(() => /GÜNDÜZ KOD YAZAR/.test(document.querySelector('h1')?.innerText || ''), null, { timeout: 5000 })
    await shoot(page, 'impl-desktop-tr-0-front.png')
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 402, height: 874 } })
    const page = await ctx.newPage()
    await page.goto(baseUrl + '/', { waitUntil: 'networkidle' })
    await page.waitForTimeout(500)
    await shoot(page, 'impl-mobile-en.png', true)
    await ctx.close()
  }

  await browser.close()
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length < 1) {
    console.error('usage: node scripts/screenshot.js <baseUrl> [--ref]')
    process.exit(1)
  }
  const baseUrl = args[0].replace(/\/$/, '')
  const isRef = args.includes('--ref')

  console.log((isRef ? 'REF  ' : 'IMPL ') + baseUrl)
  if (isRef) await refMode(baseUrl)
  else await implMode(baseUrl)
}

main().catch((e) => { console.error(e); process.exit(1) })
