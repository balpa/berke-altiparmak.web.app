import React, { useState } from 'react'
import content from '../../data/content'
import news from '../../data/news'

const PAPER = '#f4ead2'
const INK = '#1a1a1a'
const ACCENT = '#a31621'

function SectionRule({ children }) {
  return (
    <div
      style={{
        borderTop: `2px solid ${INK}`,
        paddingTop: 6,
        marginBottom: 4,
        fontFamily: "'Special Elite', monospace",
        fontSize: 10,
        letterSpacing: '0.2em',
      }}
    >
      {children}
    </div>
  )
}

function MobileNewspaper() {
  const [lang, setLang] = useState('en')
  const c = content[lang]
  const n = news[lang]
  const front = n.pages[0]

  const today = new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: PAPER,
        color: INK,
        fontFamily: "'Lora', Georgia, serif",
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: PAPER,
          borderBottom: `1px solid ${INK}`,
          padding: '8px 16px 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          type="button"
          onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
          aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
          style={{
            background: 'transparent',
            border: `1px solid ${INK}`,
            color: INK,
            padding: '3px 8px',
            fontSize: 10,
            fontFamily: "'Special Elite', monospace",
            letterSpacing: '0.15em',
            cursor: 'pointer',
          }}
        >
          {lang === 'tr' ? 'EN' : 'TR'}
        </button>
        <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9, letterSpacing: '0.18em', opacity: 0.65 }}>
          {lang === 'tr' ? 'DİJİTAL BASKI' : 'DIGITAL EDITION'}
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ textAlign: 'center', padding: '14px 14px 6px' }}>
        <div style={{ height: 1, background: INK, marginBottom: 6 }} />
        <div
          style={{
            fontFamily: "'Cloister Black', 'UnifrakturMaguntia', serif",
            fontSize: 46,
            lineHeight: 1,
            letterSpacing: '0.005em',
            whiteSpace: 'nowrap',
          }}
        >
          Berke Altıparmak
        </div>
        <div style={{ height: 1, background: INK, marginTop: 6 }} />
        <div style={{ fontStyle: 'italic', fontSize: 11, padding: '6px 0 4px', letterSpacing: '0.02em' }}>{n.motto}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'Lora', serif",
            fontSize: 9.5,
            padding: '5px 0',
            borderTop: `1px solid ${INK}`,
            borderBottom: `3px double ${INK}`,
            fontVariant: 'small-caps',
            letterSpacing: '0.04em',
          }}
        >
          <span>{n.vol}</span>
          <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{today}</span>
        </div>
      </div>

      <div
        style={{
          margin: '0 14px',
          padding: '6px 0',
          borderBottom: `1px solid ${INK}`,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontWeight: 700, letterSpacing: '0.15em' }}>{lang === 'tr' ? 'ENDEKS' : 'INDEX'}</span>
        {n.market.slice(0, 3).map((m, i) => (
          <span key={i}>
            <span style={{ fontWeight: 700 }}>{m[0]}</span>
            <span style={{ color: ACCENT, marginLeft: 4 }}>{m[1]}</span>
          </span>
        ))}
      </div>

      <article style={{ padding: '16px 14px 0' }}>
        <div style={{ fontSize: 9.5, letterSpacing: '0.2em', color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{front.kicker}</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            lineHeight: 1.06,
            margin: '0 0 10px',
            fontWeight: 900,
            letterSpacing: '-0.01em',
          }}
        >
          {front.headline}
        </h1>
        <h2
          style={{
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.4,
            margin: '0 0 12px',
            color: 'rgba(0,0,0,0.65)',
          }}
        >
          {front.subhead}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9, letterSpacing: '0.1em', marginBottom: 14 }}>
          <span style={{ background: INK, color: PAPER, padding: '2px 6px' }}>{front.byline}</span>
          <span style={{ opacity: 0.55, fontStyle: 'italic', fontSize: 9.5 }}>{lang === 'tr' ? '9 dk okuma' : '9 min read'}</span>
        </div>

        <div style={{ marginBottom: 4 }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '4/3',
              backgroundImage: "url('/berke-portrait.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 18%',
              border: `1px solid ${INK}`,
            }}
            role="img"
            aria-label={c.name}
          />
          <div
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: 9,
              padding: '4px 0 14px',
              borderBottom: `1px solid ${INK}`,
              lineHeight: 1.4,
            }}
          >
            <span style={{ fontWeight: 700 }}>BERKE ALTIPARMAK</span>{' '}
            {lang === 'tr' ? 'İstanbul kıyısında. Times arşivi.' : 'on the Istanbul shore. Times archive.'}
          </div>
        </div>

        <p className="drop-cap" style={{ fontSize: 14.5, lineHeight: 1.6, margin: '14px 0 0', textAlign: 'justify', hyphens: 'auto' }}>
          {front.lead}
        </p>

        <p style={{ fontSize: 14.5, lineHeight: 1.6, marginTop: 12, textAlign: 'justify', hyphens: 'auto' }}>{front.lead2}</p>

        <div
          style={{
            borderTop: `1px solid ${INK}`,
            borderBottom: `1px solid ${INK}`,
            padding: '14px 0',
            margin: '20px 0',
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            fontStyle: 'italic',
            lineHeight: 1.3,
            textAlign: 'center',
          }}
        >
          {front.pullquote}
        </div>

        <div style={{ background: INK, color: PAPER, padding: 14, marginTop: 8, marginBottom: 22 }}>
          <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9.5, letterSpacing: '0.2em', marginBottom: 8, color: ACCENT }}>
            ▎{lang === 'tr' ? 'FİŞ' : 'AT A GLANCE'}
          </div>
          {front.sidebar.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '78px 1fr',
                fontSize: 11,
                padding: '5px 0',
                borderTop: i === 0 ? 'none' : '1px dashed rgba(255,255,255,0.25)',
                fontFamily: "'Special Elite', monospace",
                letterSpacing: '0.04em',
                lineHeight: 1.4,
              }}
            >
              <div style={{ color: ACCENT }}>{s.label}</div>
              <div>{s.value}</div>
            </div>
          ))}
        </div>

        <SectionRule>{lang === 'tr' ? 'DENEYİM' : 'EXPERIENCE'}</SectionRule>
        {c.experience.slice(0, 3).map((e, i) => (
          <div key={i} style={{ paddingTop: 8, paddingBottom: 8, borderBottom: `1px dashed ${INK}` }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 15 }}>{e.company}</div>
            <div style={{ fontStyle: 'italic', fontSize: 12.5 }}>{e.role}</div>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9.5, opacity: 0.6, letterSpacing: '0.08em' }}>
              {e.date} · {e.place}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 24 }}>
          <SectionRule>{lang === 'tr' ? 'MESAİ DIŞI' : 'OFF THE CLOCK'}</SectionRule>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, lineHeight: 1, margin: '10px 0 8px' }}>♪</div>
          {c.music.lines.slice(0, 2).map((l, i) => (
            <p key={i} style={{ fontSize: 13, lineHeight: 1.55, margin: '0 0 8px' }}>
              {l}
            </p>
          ))}
          <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, color: ACCENT, letterSpacing: '0.1em', marginTop: 4 }}>
            {lang === 'tr' ? '→ ARTS & CULTURE (sayfa C1)' : '→ See ARTS & CULTURE (page C1)'}
          </div>
        </div>

        <div style={{ marginTop: 26 }}>
          <SectionRule>{lang === 'tr' ? 'BU SAYIDA' : 'INSIDE TODAY'}</SectionRule>
          {[
            ['B1', lang === 'tr' ? 'Teknoloji' : 'Technology', lang === 'tr' ? "macOS menü çubuğundan ritim çalıştırıcısına: beş seçme proje." : 'macOS menu bar to rhythm trainer: five selected projects.'],
            ['C1', lang === 'tr' ? 'Sanat ve Kültür' : 'Arts & Culture', lang === 'tr' ? "ABB'den Siemens'e: bir musıkişinâs muhabbeti." : "From ABB to Siemens: a musician's quiet round."],
            ['D1', lang === 'tr' ? 'Akademi' : 'Academia', lang === 'tr' ? 'İki üniversite, bir AWS Game Day birinciliği.' : 'Two universities, an AWS Game Day win.'],
          ].map(([pg, sec, line]) => (
            <div
              key={pg}
              style={{
                display: 'grid',
                gridTemplateColumns: '30px 1fr',
                gap: 10,
                paddingTop: 8,
                marginTop: 8,
                borderTop: `1px dotted ${INK}`,
                fontSize: 12.5,
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 16 }}>{pg}</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 14 }}>{sec}</div>
                <div style={{ fontStyle: 'italic', fontSize: 12, lineHeight: 1.4 }}>{line}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            paddingTop: 12,
            borderTop: `3px double ${INK}`,
            fontFamily: "'Special Elite', monospace",
            fontSize: 9,
            letterSpacing: '0.12em',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>github.com/balpa</span>
          <span>©{new Date().getFullYear()} B. ALTIPARMAK</span>
        </div>
      </article>
    </div>
  )
}

export default MobileNewspaper
