import React, { useState, useCallback, useEffect } from 'react'
import content from '../../data/content'
import news from '../../data/news'
import FrontPage from './pages/FrontPage'
import TechPage from './pages/TechPage'
import ArtsPage from './pages/ArtsPage'
import AcademiaPage from './pages/AcademiaPage'

const PAPER = '#f4ead2'
const INK = '#1a1a1a'
const ACCENT = '#a31621'
const FONT_BODY = "'Lora', Georgia, serif"
const FONT_TYPEWRITER = "'Special Elite', monospace"

const RENDERERS = { front: FrontPage, tech: TechPage, arts: ArtsPage, academia: AcademiaPage }

function shiftLight(hex, delta) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  const f = (v) => Math.max(0, Math.min(255, Math.round(v + delta)))
  return '#' + [f(r), f(g), f(b)].map((v) => v.toString(16).padStart(2, '0')).join('')
}
const lighten = (hex, pct) => shiftLight(hex, Math.round((255 * pct) / 100))
const darken = (hex, pct) => shiftLight(hex, -Math.round((255 * pct) / 100))

function Newspaper() {
  const [lang, setLang] = useState('en')
  const [pageIdx, setPageIdx] = useState(0)

  const c = content[lang]
  const n = news[lang]
  const pages = n.pages

  const today = new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const turnPage = useCallback(
    (dir) => {
      setPageIdx((i) => {
        if (dir === 'next') return Math.min(i + 1, pages.length - 1)
        return Math.max(i - 1, 0)
      })
    },
    [pages.length]
  )

  const jumpTo = useCallback((i) => setPageIdx(i), [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') turnPage('prev')
      else if (e.key === 'ArrowRight') turnPage('next')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [turnPage])

  const currentPage = pages[pageIdx]
  const Renderer = RENDERERS[currentPage.kind]

  const stainsBg = `radial-gradient(circle at 12% 18%, rgba(120,80,30,0.05) 0, transparent 80px),
    radial-gradient(circle at 88% 12%, rgba(120,80,30,0.04) 0, transparent 110px),
    radial-gradient(circle at 70% 90%, rgba(80,60,20,0.05) 0, transparent 130px)`

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: PAPER,
        backgroundImage: `radial-gradient(ellipse at top, ${lighten(PAPER, 4)} 0%, ${PAPER} 60%, ${darken(PAPER, 4)} 100%)`,
        padding: '20px 16px 60px',
        fontFamily: FONT_BODY,
        color: INK,
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 14,
            color: INK,
            fontSize: 11,
            letterSpacing: '0.18em',
            fontFamily: FONT_TYPEWRITER,
          }}
        >
          <span style={{ opacity: 0.6 }}>◆ BALPA NEWSPAPER · DIGITAL EDITION</span>
          <span style={{ flex: 1 }} />
          <button
            type="button"
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
            style={{
              background: 'transparent',
              border: `1px solid ${INK}`,
              color: INK,
              fontFamily: 'inherit',
              fontSize: 10,
              padding: '4px 9px',
              letterSpacing: '0.2em',
              cursor: 'pointer',
              marginLeft: 8,
            }}
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: PAPER,
              backgroundImage: stainsBg,
              color: INK,
              boxShadow: '0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.08)',
              padding: '30px 40px 60px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(80,60,20,0.012) 0 1px, transparent 1px 3px)',
                mixBlendMode: 'multiply',
              }}
            />

            {pageIdx === 0 ? (
              <div style={{ position: 'relative', zIndex: 1, paddingTop: 6 }}>
                <div style={{ height: 1, background: INK, marginBottom: 8 }} />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    gap: 16,
                    padding: '4px 4px 8px',
                  }}
                >
                  <div style={{ fontFamily: FONT_BODY, fontSize: 11, lineHeight: 1.4, textAlign: 'left' }}>
                    <div style={{ fontVariant: 'small-caps', fontWeight: 700, letterSpacing: '0.05em', fontSize: 12 }}>
                      {lang === 'tr' ? 'Geç Baskı' : 'Late Edition'}
                    </div>
                    <div style={{ fontStyle: 'italic', marginTop: 2 }}>
                      {lang === 'tr' ? 'Bugün' : 'Today'}, {n.weather.cond.toLowerCase()}, {n.weather.temp}.
                    </div>
                    <div style={{ fontStyle: 'italic', marginTop: 1, fontSize: 10.5, opacity: 0.85 }}>
                      {lang === 'tr' ? 'Yarın' : 'Tomorrow'}, {lang === 'tr' ? 'parçalı bulutlu' : 'partly cloudy'}.
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', padding: '0 8px' }}>
                    <div
                      style={{
                        fontFamily: "'UnifrakturCook', 'UnifrakturMaguntia', serif",
                        fontWeight: 700,
                        fontSize: 58,
                        lineHeight: 0.95,
                        letterSpacing: '0.005em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {n.masthead}
                    </div>
                  </div>

                  <div style={{ fontFamily: FONT_BODY, fontSize: 11, lineHeight: 1.4, textAlign: 'right' }}>
                    <div style={{ fontVariant: 'small-caps', fontWeight: 700, letterSpacing: '0.05em', fontSize: 12 }}>
                      {lang === 'tr' ? "Web'de" : 'On the Web'}
                    </div>
                    <div style={{ fontStyle: 'italic', marginTop: 2 }}>berke-altiparmak.web.app</div>
                    <div style={{ fontStyle: 'italic', marginTop: 1, fontSize: 10.5, opacity: 0.85 }}>
                      {lang === 'tr' ? 'İstanbul baskısı' : 'Istanbul edition'}
                    </div>
                  </div>
                </div>

                <div style={{ height: 1, background: INK, marginTop: 2 }} />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontFamily: FONT_BODY,
                    fontSize: 11,
                    padding: '5px 4px',
                    borderBottom: `1px solid ${INK}`,
                  }}
                >
                  <span style={{ fontVariant: 'small-caps', letterSpacing: '0.04em' }}>{n.vol}</span>
                  <span style={{ fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: 11.5 }}>{today}</span>
                  <span style={{ fontVariant: 'small-caps', letterSpacing: '0.04em' }}>{lang === 'tr' ? 'Fiyat: Bedava' : 'Price: Free'}</span>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    padding: '8px 0 4px',
                    fontFamily: FONT_BODY,
                    fontStyle: 'italic',
                    fontSize: 12,
                    letterSpacing: '0.02em',
                    borderBottom: `3px double ${INK}`,
                  }}
                >
                  {n.motto}
                </div>
              </div>
            ) : (
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '10px 0 8px',
                    borderBottom: `1px solid ${INK}`,
                  }}
                >
                  <div style={{ fontFamily: "'UnifrakturCook', serif", fontWeight: 700, fontSize: 28, lineHeight: 1 }}>{n.masthead}</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontStyle: 'italic' }}>
                    {today} · {currentPage.slug} — {currentPage.title}
                  </div>
                </div>
                <div style={{ height: 1, background: INK, marginTop: 2 }} />
              </div>
            )}

            <nav
              aria-label={lang === 'tr' ? 'İçindekiler' : 'Inside'}
              style={{
                fontFamily: FONT_BODY,
                fontSize: 11.5,
                padding: '6px 0',
                borderBottom: `1px solid ${INK}`,
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0 14px',
                alignItems: 'baseline',
              }}
            >
              <span style={{ fontVariant: 'small-caps', fontWeight: 700, letterSpacing: '0.05em', fontSize: 11 }}>
                {lang === 'tr' ? 'İçindekiler:' : 'Inside:'}
              </span>
              {pages.map((pp, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-current={i === pageIdx ? 'page' : undefined}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'inherit',
                    fontSize: 11.5,
                    fontStyle: 'italic',
                    color: INK,
                    textDecoration: i === pageIdx ? 'underline' : 'none',
                    textUnderlineOffset: 3,
                    fontWeight: i === pageIdx ? 700 : 400,
                    cursor: 'pointer',
                  }}
                >
                  {pp.title} <span style={{ fontStyle: 'normal', opacity: 0.6, fontFamily: FONT_BODY }}>{pp.slug}</span>
                  {i < pages.length - 1 && <span style={{ marginLeft: 14, opacity: 0.4 }}>·</span>}
                </button>
              ))}
            </nav>

            {pageIdx === 0 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  marginTop: 12,
                  marginBottom: 18,
                  padding: '8px 0',
                  borderBottom: `1px solid ${INK}`,
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: FONT_TYPEWRITER,
                  fontSize: 10.5,
                }}
              >
                <span style={{ letterSpacing: '0.2em', fontSize: 9.5, fontWeight: 700 }}>{lang === 'tr' ? 'ENDEKS' : 'INDEX'}</span>
                <div style={{ display: 'flex', gap: 18, flex: 1, flexWrap: 'wrap' }}>
                  {n.market.map((m, i) => (
                    <span key={i}>
                      <span style={{ fontWeight: 700 }}>{m[0]}</span>
                      <span style={{ color: ACCENT, marginLeft: 6 }}>{m[1]}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ position: 'relative', zIndex: 1, marginTop: pageIdx === 0 ? 0 : 18 }}>
              <Renderer p={currentPage} c={c} lang={lang} accent={ACCENT} paper={PAPER} ink={INK} />
            </div>

            <div
              style={{
                marginTop: 40,
                paddingTop: 12,
                borderTop: `3px double ${INK}`,
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: FONT_TYPEWRITER,
                fontSize: 10,
                letterSpacing: '0.15em',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <span>{lang === 'tr' ? 'İLETİŞİM · github.com/balpa' : 'CONTACT · github.com/balpa'}</span>
              <span>
                — {currentPage.slug} ·{' '}
                {lang === 'tr' ? `SAYFA ${pageIdx + 1}/${pages.length}` : `PAGE ${pageIdx + 1}/${pages.length}`} —
              </span>
              <span>©{new Date().getFullYear()} B. ALTIPARMAK</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => turnPage('prev')}
            disabled={pageIdx === 0}
            aria-label="previous page"
            style={{
              position: 'absolute',
              left: -52,
              top: '45%',
              width: 44,
              height: 64,
              border: `1px solid ${INK}`,
              background: pageIdx === 0 ? 'transparent' : INK,
              color: pageIdx === 0 ? darken(PAPER, 20) : PAPER,
              fontSize: 22,
              cursor: pageIdx === 0 ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: pageIdx === 0 ? 0.3 : 1,
            }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => turnPage('next')}
            disabled={pageIdx === pages.length - 1}
            aria-label="next page"
            style={{
              position: 'absolute',
              right: -52,
              top: '45%',
              width: 44,
              height: 64,
              border: `1px solid ${INK}`,
              background: pageIdx === pages.length - 1 ? 'transparent' : INK,
              color: pageIdx === pages.length - 1 ? darken(PAPER, 20) : PAPER,
              fontSize: 22,
              cursor: pageIdx === pages.length - 1 ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: pageIdx === pages.length - 1 ? 0.3 : 1,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newspaper
