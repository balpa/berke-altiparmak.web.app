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
          <div
            style={{
              border: `1px solid ${ink}`,
              aspectRatio: '16/9',
              marginBottom: 8,
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 2.5px)',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 12,
            }}
            role="img"
            aria-label={lang === 'tr' ? 'Sahne görüntüsü' : 'Stage photo'}
          >
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.15em', background: paper, padding: '3px 8px' }}>
              {lang === 'tr' ? 'SAHNE GÖRÜNTÜSÜ — ARŞİV' : 'STAGE PHOTO — ARCHIVE'}
            </div>
          </div>
          <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9.5, opacity: 0.65, marginBottom: 18 }}>
            {lang === 'tr' ? 'Ankara — sahne ışıkları altında bir prova akşamı.' : 'Ankara — a rehearsal night under stage lights.'}
          </div>

          <div style={{ columnCount: 2, columnGap: 22, fontSize: 14, lineHeight: 1.65, textAlign: 'justify', hyphens: 'auto' }}>
            <p className="drop-cap" style={{ margin: 0 }}>{c.music.lines[0] || ''}</p>
            {c.music.lines.slice(1).map((l, i) => (
              <p key={i} style={{ marginTop: 10 }}>{l}</p>
            ))}
            <p style={{ marginTop: 10 }}>
              {lang === 'tr'
                ? "ABB sahnesinden Siemens'e, sivil derneklere uzanan repertuvar, klasik Türk müziğinin ritim ve makam çatısı üzerine kurulu. Aynı çatı, mobil uygulamadaki renk teorisini de bilgilendiren çatı."
                : 'From the ABB stage to Siemens to civic associations, the repertoire is built on the rhythm-and-makam frame of classical Turkish music. The same frame informs the color theory in the mobile app.'}
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { v: 'ABB', l: lang === 'tr' ? 'Çok uluslu' : 'Multinational' },
              { v: 'SIEMENS', l: lang === 'tr' ? 'Kurumsal salon' : 'Corporate hall' },
              { v: lang === 'tr' ? 'DERNEKLER' : 'ASSOC.', l: lang === 'tr' ? 'Sivil oluşumlar' : 'Civic groups' },
            ].map((s, i) => (
              <div key={i} style={{ border: `1px solid ${ink}`, padding: 10 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 16 }}>{s.v}</div>
                <div style={{ fontSize: 11, fontStyle: 'italic' }}>{s.l}</div>
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
