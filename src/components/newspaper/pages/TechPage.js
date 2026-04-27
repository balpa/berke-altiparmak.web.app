import React from 'react'
import SectionLabel from '../SectionLabel'

const STATS_EN = [
  ['Singapore Airlines team', '3 years'],
  ['Annual fliers reached', '20M+'],
  ['Customer meetings led', '100+'],
  ['Months @ Success rating', '36 / 36'],
  ['AWS Game Day 2026', '1st place'],
]

const STATS_TR = [
  ['Singapore Airlines ekibi', '3 yıl'],
  ['Yıllık ulaşılan yolcu', '20M+'],
  ['Müşteri toplantısı', '100+'],
  ['"Success" değerlendirmesi', '36 / 36'],
  ['AWS Game Day 2026', 'Birincilik'],
]

function TechPage({ p, c, lang, accent, paper, ink }) {
  const stats = lang === 'tr' ? STATS_TR : STATS_EN
  return (
    <article>
      <div style={{ fontSize: 11, letterSpacing: '0.2em', color: accent, fontWeight: 700, marginBottom: 6 }}>{p.kicker}</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 1.05, margin: '0 0 10px', fontWeight: 900 }}>{p.headline}</h1>
      <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 17, lineHeight: 1.35, margin: '0 0 18px', color: 'rgba(0,0,0,0.65)' }}>{p.subhead}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 28 }}>
        <div>
          <SectionLabel ink={ink}>{lang === 'tr' ? 'DOSYA: PROJELER' : 'DOSSIER: PROJECTS'}</SectionLabel>
          {c.projects.map((proj, i) => (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${ink}`,
                padding: '12px 0',
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: 14,
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: accent, lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}>{proj.name}</div>
                <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10.5, letterSpacing: '0.08em', color: 'rgba(0,0,0,0.55)', marginTop: 2 }}>{proj.stack}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 6 }}>{proj.desc}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 24, border: `1px solid ${ink}`, padding: 14 }}>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10.5, letterSpacing: '0.18em', marginBottom: 10 }}>
              {lang === 'tr' ? 'FİGÜR 1 — INSIDER ONE, RAKAMLARLA' : 'FIG. 1 — INSIDER ONE, BY THE NUMBERS'}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.7 }}>
              {stats.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: 12,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderBottom: `1px dotted ${ink}`,
                  }}
                >
                  <span>{label}</span>
                  <span style={{ color: accent, fontWeight: 700 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ borderLeft: `1px solid ${ink}`, paddingLeft: 22 }}>
          <SectionLabel small ink={ink}>STACK</SectionLabel>
          <div style={{ fontSize: 12, lineHeight: 1.55, marginBottom: 18 }}>
            {Object.entries(c.skills).map(([k, vs]) => (
              <div key={k} style={{ marginBottom: 6 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 13 }}>{k}</div>
                <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 11 }}>{vs.join(' · ')}</div>
              </div>
            ))}
          </div>

          <div style={{ border: `2px solid ${ink}`, padding: 12, marginBottom: 18, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9, letterSpacing: '0.2em', marginBottom: 6 }}>
              — {lang === 'tr' ? 'İLAN' : 'ADVERTISEMENT'} —
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, lineHeight: 1.05, marginBottom: 4 }}>MAITRICS</div>
            <div style={{ fontStyle: 'italic', fontSize: 11, marginBottom: 8 }}>
              {lang === 'tr' ? 'Claude Code kullanımını cebinize sığdırın.' : 'Claude Code usage in your menu bar.'}
            </div>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.15em', color: accent }}>★ SWIFT · macOS · OAUTH ★</div>
          </div>

          <div style={{ border: `2px solid ${ink}`, padding: 12, marginBottom: 18, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9, letterSpacing: '0.2em', marginBottom: 6 }}>
              — {lang === 'tr' ? 'İLAN' : 'ADVERTISEMENT'} —
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 18, lineHeight: 1.05, marginBottom: 4 }}>
              GOD TIER REVIEWER
            </div>
            <div style={{ fontStyle: 'italic', fontSize: 11, marginBottom: 6 }}>
              {lang === 'tr' ? "Gemini destekli VS Code code review'ı." : 'Gemini-powered VS Code code review.'}
            </div>
          </div>

          <SectionLabel small ink={ink}>{lang === 'tr' ? 'NOT DEFTERİ' : 'FIELD NOTES'}</SectionLabel>
          <div style={{ fontSize: 12, lineHeight: 1.6, fontStyle: 'italic' }}>
            {lang === 'tr'
              ? '“Bir araç yazıyorsan, kendin için yaz; bir ürün yazıyorsan, müşterin için yaz; her ikisini de aynı anda yapmak en zor olanı.”'
              : '“If you are writing a tool, write it for yourself. If you are writing a product, write it for the customer. Doing both at once is the hardest part.”'}
          </div>
        </aside>
      </div>
    </article>
  )
}

export default TechPage
