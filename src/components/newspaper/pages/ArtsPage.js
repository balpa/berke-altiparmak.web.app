import React from 'react'
import SectionLabel from '../SectionLabel'

function ArtsPage({ p, c, lang, accent, paper, ink }) {
  return (
    <article>
      <div style={{ fontSize: 11, letterSpacing: '0.2em', color: accent, fontWeight: 700, marginBottom: 6 }}>{p.kicker}</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 1.05, margin: '0 0 10px', fontWeight: 900 }}>{p.headline}</h1>
      <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 17, lineHeight: 1.35, margin: '0 0 18px', color: 'rgba(0,0,0,0.65)' }}>{p.subhead}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28 }}>
        <div>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <div
              style={{
                border: `1px solid ${ink}`,
                aspectRatio: '4/3',
                backgroundImage: "url('/berke-stage.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                filter: 'grayscale(100%) sepia(0.55) contrast(0.92) brightness(1.18)',
                position: 'relative',
                overflow: 'hidden',
              }}
              role="img"
              aria-label={lang === 'tr' ? 'Sahne görüntüsü' : 'Stage photo'}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: paper,
                  mixBlendMode: 'soft-light',
                  opacity: 0.5,
                  pointerEvents: 'none',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'radial-gradient(rgba(0,0,0,0.7) 1px, transparent 1.6px)',
                  backgroundSize: '4px 4px',
                  mixBlendMode: 'multiply',
                  opacity: 0.7,
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                fontFamily: "'Special Elite', monospace",
                fontSize: 10,
                letterSpacing: '0.15em',
                background: paper,
                padding: '3px 8px',
              }}
            >
              {lang === 'tr' ? 'SAHNE GÖRÜNTÜSÜ — ARŞİV' : 'STAGE PHOTO — ARCHIVE'}
            </div>
          </div>
          <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9.5, opacity: 0.65, marginBottom: 18 }}>
            {lang === 'tr' ? 'İstanbul — sahne ışıkları altında bir prova akşamı.' : 'Istanbul — a rehearsal night under stage lights.'}
          </div>

          <div style={{ columnCount: 2, columnGap: 22, fontSize: 14, lineHeight: 1.65, textAlign: 'justify', hyphens: 'auto' }}>
            <p className="drop-cap" style={{ margin: 0 }}>{c.music.lines[0] || ''}</p>
            {c.music.lines.slice(1).map((l, i) => (
              <p key={i} style={{ marginTop: 10 }}>{l}</p>
            ))}
            <p style={{ marginTop: 10 }}>
              {lang === 'tr'
                ? "Repertuvar, ABB ve Siemens gibi kurumsal sahnelerden İstanbul'un kültür merkezlerine — Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey ve daha fazlası — sivil ve sosyal derneklere uzanıyor. Hepsinin altında yatan çatı aynı: klasik Türk müziğinin ritim ve makam yapısı; aynı yapı mobil uygulamadaki renk teorisini de bilgilendiriyor."
                : "The repertoire stretches from corporate stages such as ABB and Siemens, through Istanbul's cultural centers — Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey and others — to civic and social associations. The frame underneath stays the same: the rhythm-and-makam structure of classical Turkish music, the same structure that informs the color theory in the mobile app."}
            </p>
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
            {lang === 'tr'
              ? '“Ritim, kodun da en pahalı parçasıdır — ölçemediğin sürece.”'
              : '“Rhythm is also the most expensive part of code — until you can measure it.”'}
          </div>

          <SectionLabel ink={ink}>{lang === 'tr' ? 'SAHNELER' : 'STAGES'}</SectionLabel>
          <div style={{ border: `1px solid ${ink}` }}>
            {[
              {
                cat: lang === 'tr' ? 'KURUMSAL' : 'CORPORATE',
                venues: 'ABB · Siemens',
              },
              {
                cat: lang === 'tr' ? "İSTANBUL KÜLTÜR MERKEZLERİ" : 'ISTANBUL CULTURAL CENTERS',
                venues:
                  lang === 'tr'
                    ? 'Kartal Bülent Ecevit Kültür Merkezi · Akatlar Kültür Merkezi · Cemal Reşit Rey Konser Salonu · ve diğerleri'
                    : 'Kartal Bülent Ecevit · Akatlar · Cemal Reşit Rey Concert Hall · and others',
              },
              {
                cat: lang === 'tr' ? 'SİVİL & SOSYAL' : 'CIVIC & SOCIAL',
                venues:
                  lang === 'tr'
                    ? 'Çeşitli dernek ve sosyal oluşumlar'
                    : 'Various civic & social associations',
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: 14,
                  padding: '10px 12px',
                  borderTop: i === 0 ? 'none' : `1px dashed ${ink}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: 10.5,
                    letterSpacing: '0.15em',
                    color: accent,
                    alignSelf: 'center',
                  }}
                >
                  {row.cat}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13.5,
                    lineHeight: 1.4,
                  }}
                >
                  {row.venues}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside style={{ borderLeft: `1px solid ${ink}`, paddingLeft: 22 }}>
          <SectionLabel small ink={ink}>{lang === 'tr' ? 'MADALYALAR' : 'ACCOLADES'}</SectionLabel>
          <ul style={{ fontSize: 12, lineHeight: 1.55, paddingLeft: 18, margin: '0 0 18px' }}>
            {c.certificates.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <SectionLabel small ink={ink}>{lang === 'tr' ? 'OKUMA LİSTESİ' : 'READING LIST'}</SectionLabel>
          <ul style={{ fontSize: 12, lineHeight: 1.55, paddingLeft: 18, margin: '0 0 18px' }}>
            <li>{lang === 'tr' ? 'Fizik & kozmoloji' : 'Physics & cosmology'}</li>
            <li>{lang === 'tr' ? 'Kuantum mekaniği' : 'Quantum mechanics'}</li>
            <li>{lang === 'tr' ? 'Genel bilimsel gelişmeler' : 'General scientific developments'}</li>
          </ul>

          <div style={{ border: `2px solid ${ink}`, padding: 12, fontSize: 11.5, lineHeight: 1.55, fontFamily: "'Special Elite', monospace" }}>
            <div style={{ letterSpacing: '0.2em', textAlign: 'center', marginBottom: 6 }}>
              ── {lang === 'tr' ? 'İLAN: SAHNE TALEBİ' : 'CLASSIFIED: BOOKING'} ──
            </div>
            <div style={{ marginBottom: 4 }}>
              {lang === 'tr'
                ? 'Korumalı bir akşam, doğru bir izleyici ve uygun bir akustik için sahne alacak enstrümantalist.'
                : 'Instrumentalist available for a curated evening, the right audience, suitable acoustics.'}
            </div>
            <div style={{ color: accent }}>
              {lang === 'tr' ? 'BAŞVURU →' : 'INQUIRE →'} {c.email}
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default ArtsPage
