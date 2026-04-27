const { chromium } = require('playwright')

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1340, height: 1000 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  page.on('console', (msg) => console.log('[browser]', msg.type(), msg.text()))

  await page.goto('http://localhost:5000/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)

  async function status() {
    return await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.innerText || ''
      const footer = document.body.innerText.match(/PAGE\s+(\d+)\/(\d+)/)?.[0] || ''
      const kicker = document.querySelector('article > div')?.innerText || ''
      return { h1: h1.slice(0, 50), footer, kicker: kicker.slice(0, 30) }
    })
  }

  console.log('initial', await status())

  await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Inside"]')
    const btns = nav ? Array.from(nav.querySelectorAll('button')) : []
    btns[1]?.click()
  })
  await page.waitForTimeout(800)
  console.log('after jumping to tech (idx=1)', await status())

  await page.screenshot({ path: 'screenshots/debug-after-jump.png', fullPage: true })
  console.log('screenshot saved')

  // verify state right after screenshot
  console.log('after screenshot', await status())

  await ctx.close()
  await browser.close()
}

main().catch((e) => { console.error(e); process.exit(1) })
