const { chromium } = require('playwright')

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1340, height: 1000 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  page.on('console', (msg) => console.log('[browser]', msg.type(), msg.text()))
  page.on('pageerror', (err) => console.log('[error]', err.message))

  await page.goto('http://localhost:5000/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)

  async function readPageNum() {
    const text = await page.evaluate(() => {
      const all = document.body.innerText
      const m = all.match(/PAGE\s+(\d+)\/(\d+)/) || all.match(/SAYFA\s+(\d+)\/(\d+)/)
      return m ? `${m[1]}/${m[2]}` : '?'
    })
    return text
  }

  const nextSel = 'button[aria-label="next page"]'
  console.log('initial', await readPageNum())
  for (let i = 0; i < 4; i++) {
    const visible = await page.isVisible(nextSel)
    const enabled = !(await page.evaluate((sel) => !!document.querySelector(sel)?.disabled, nextSel))
    console.log(`click ${i + 1}: visible=${visible}, enabled=${enabled}`)
    await page.click(nextSel).catch((e) => console.log('  click error:', e.message))
    await page.waitForTimeout(500)
    console.log('  after click', await readPageNum())
  }

  await ctx.close()
  await browser.close()
}

main().catch((e) => { console.error(e); process.exit(1) })
