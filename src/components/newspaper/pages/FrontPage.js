import React from 'react'
import SectionLabel from '../SectionLabel'

function FrontPage({ p, c, lang, accent, paper, ink }) {
  return (
    <article>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 28 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: accent, fontWeight: 700, marginBottom: 6 }}>
            {p.kicker}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 46,
              lineHeight: 1.04,
              margin: '0 0 10px',
              fontWeight: 900,
              letterSpacing: '-0.01em',
            }}
          >
            {p.headline}
          </h1>
          <h2
            style={{
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.35,
              margin: '0 0 14px',
              color: 'rgba(0,0,0,0.65)',
            }}
          >
            {p.subhead}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '0.12em', marginBottom: 14 }}>
            <span style={{ background: ink, color: paper, padding: '3px 8px' }}>{p.byline}</span>
            <span style={{ opacity: 0.55, fontStyle: 'italic' }}>
              {lang === 'tr' ? 'Bursa Muhabiri · 2200 sözcük · 9 dakikalık okuma' : 'Bursa correspondent · 2,200 words · 9 min read'}
            </span>
          </div>

          <div style={{ columnCount: 2, columnGap: 24, fontSize: 14, lineHeight: 1.65, textAlign: 'justify', hyphens: 'auto' }}>
            <p className="drop-cap" style={{ margin: 0 }}>{p.lead}</p>
            <p style={{ marginTop: 12 }}>{p.lead2}</p>
          </div>

          <div
            style={{
              borderTop: `1px solid ${ink}`,
              borderBottom: `1px solid ${ink}`,
              padding: '16px 0',
              margin: '20px 0',
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontStyle: 'italic',
              lineHeight: 1.3,
              textAlign: 'center',
            }}
          >
            {p.pullquote}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div>
              <div
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  borderTop: `2px solid ${ink}`,
                  paddingTop: 8,
                }}
              >
                {p.secondary.title}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 8 }}>{p.secondary.body}</p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  borderTop: `2px solid ${ink}`,
                  paddingTop: 8,
                }}
              >
                {lang === 'tr' ? 'DENEYİM ZAMAN ÇİZGİSİ' : 'EXPERIENCE TIMELINE'}
              </div>
              {c.experience.map((e, i) => (
                <div key={i} style={{ marginTop: 8, paddingBottom: 6, borderBottom: i === 0 ? `1px dashed ${ink}` : 'none' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 14 }}>{e.company}</div>
                  <div style={{ fontStyle: 'italic', fontSize: 12 }}>{e.role}</div>
                  <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9.5, opacity: 0.6, letterSpacing: '0.1em' }}>
                    {e.date} · {e.place}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ borderLeft: `1px solid ${ink}`, paddingLeft: 22 }}>
          <div
            style={{
              border: `1px solid ${ink}`,
              aspectRatio: '3/4',
              backgroundImage: "url('/berke-portrait.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              marginBottom: 6,
            }}
            role="img"
            aria-label={c.name}
          />
          <div
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: 9.5,
              letterSpacing: '0.04em',
              lineHeight: 1.4,
              borderBottom: `1px solid ${ink}`,
              paddingBottom: 8,
              marginBottom: 22,
            }}
          >
            <span style={{ fontWeight: 700 }}>BERKE ALTIPARMAK</span>{' '}
            {lang === 'tr' ? 'İstanbul kıyısında, geçen yaz. Times arşivi.' : 'on the Istanbul shore, last summer. Times archive.'}
          </div>

          <div
            style={{
              border: `1px solid ${ink}`,
              padding: 14,
              marginBottom: 22,
              background: ink,
              color: paper,
            }}
          >
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.2em', marginBottom: 10, color: accent }}>
              ▎{lang === 'tr' ? 'FİŞ' : 'AT A GLANCE'}
            </div>
            {p.sidebar.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '78px 1fr',
                  fontSize: 11,
                  padding: '5px 0',
                  borderTop: i === 0 ? 'none' : '1px dashed rgba(255,255,255,0.25)',
                  fontFamily: "'Special Elite', monospace",
                  letterSpacing: '0.05em',
                }}
              >
                <div style={{ color: accent }}>{s.label}</div>
                <div>{s.value}</div>
              </div>
            ))}
          </div>

          <SectionLabel small ink={ink}>{lang === 'tr' ? 'MESAİ DIŞI' : 'OFF THE CLOCK'}</SectionLabel>
          <div style={{ fontSize: 13, lineHeight: 1.55, marginBottom: 22 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>♪</div>
            {c.music.lines.slice(0, 2).map((l, i) => (
              <p key={i} style={{ margin: '0 0 6px' }}>{l}</p>
            ))}
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.15em', color: accent, marginTop: 6 }}>
              {lang === 'tr' ? "→ ARTS & CULTURE'a geçin (sayfa C1)" : '→ See ARTS & CULTURE (page C1)'}
            </div>
          </div>

          <div style={{ borderTop: `2px solid ${ink}`, paddingTop: 8, fontSize: 11.5, lineHeight: 1.55 }}>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.2em', marginBottom: 8 }}>
              {lang === 'tr' ? 'BU SAYIDA' : 'INSIDE TODAY'}
            </div>
            {[
              ['B1', lang === 'tr' ? 'Teknoloji' : 'Technology', lang === 'tr' ? "macOS menü çubuğundan ritim çalıştırıcısına: beş seçme proje." : 'macOS menu bar to rhythm trainer: five selected projects.'],
              ['C1', lang === 'tr' ? 'Sanat ve Kültür' : 'Arts & Culture', lang === 'tr' ? "ABB'den Siemens'e: bir musıkişinâs muhabbeti." : "From ABB to Siemens: a musician's quiet round."],
              ['D1', lang === 'tr' ? 'Eğitim & İlanlar' : 'Academia', lang === 'tr' ? 'İki üniversite, bir AWS Game Day birinciliği.' : 'Two universities and an AWS Game Day win.'],
            ].map(([pg, sec, line]) => (
              <div key={pg} style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: 8, paddingTop: 6, marginTop: 6, borderTop: `1px dotted ${ink}` }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 14 }}>{pg}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 13 }}>{sec}</div>
                  <div style={{ fontStyle: 'italic', fontSize: 11.5, lineHeight: 1.4 }}>{line}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </article>
  )
}

export default FrontPage
