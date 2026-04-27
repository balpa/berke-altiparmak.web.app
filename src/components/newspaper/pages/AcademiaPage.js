import React from 'react'
import SectionLabel from '../SectionLabel'

const SMALL_ADS_EN = [
  { t: 'INSTRUMENT LESSONS', b: 'Patient, keeps tempo, teaches makams. Weekends available.' },
  { t: 'MENTORSHIP', b: 'Frontend & full-stack mentorship. Hourly.' },
  { t: 'SMALL COMMISSIONS', b: 'Bespoke landing pages and micro-tools for orgs.' },
]

const SMALL_ADS_TR = [
  { t: 'ENSTRÜMANTAL DERS', b: 'Sabırlı, ölçü tutan, makam öğretir. Hafta sonu uygundur.' },
  { t: 'MENTORLUK', b: 'Frontend & full-stack rehberliği. Saatlik.' },
  { t: 'UFAK PROJELER', b: 'Kurumlar için özel landing page ve mikro araçlar.' },
]

const COURSEWORK_GRAD = [
  'Machine Learning',
  'Artificial Intelligence Techniques',
  'Natural Language Processing',
  'Computer Graphics',
  'Software Engineering Fundamentals',
]

const COURSEWORK_UNDERGRAD = [
  'Data Structures & Algorithm Design',
  'Object-Oriented Programming',
  'Security of Computer Systems',
  'Automata Theory & Formal Languages',
  'Embedded System Design',
  'Computer Organization',
  'System Analysis & Design',
]

function AcademiaPage({ p, c, lang, accent, paper, ink }) {
  const smallAds = lang === 'tr' ? SMALL_ADS_TR : SMALL_ADS_EN

  return (
    <article>
      <div style={{ fontSize: 11, letterSpacing: '0.2em', color: accent, fontWeight: 700, marginBottom: 6 }}>{p.kicker}</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 1.05, margin: '0 0 10px', fontWeight: 900 }}>{p.headline}</h1>
      <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 17, lineHeight: 1.35, margin: '0 0 18px', color: 'rgba(0,0,0,0.65)' }}>{p.subhead}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 28 }}>
        <div>
          <SectionLabel ink={ink}>{lang === 'tr' ? 'EĞİTİM TARİHÇESİ' : 'ACADEMIC HISTORY'}</SectionLabel>
          {c.education.map((e, i) => (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${ink}`,
                padding: '12px 0',
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: 16,
              }}
            >
              <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 11, letterSpacing: '0.08em' }}>
                <div>{e.date}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900 }}>{e.school}</div>
                <div style={{ fontStyle: 'italic', fontSize: 13.5, color: 'rgba(0,0,0,0.7)' }}>{e.degree}</div>
              </div>
            </div>
          ))}

          <SectionLabel ink={ink}>{lang === 'tr' ? 'DERS LİSTESİ' : 'COURSEWORK'}</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontSize: 12 }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 14, marginBottom: 4 }}>
                {lang === 'tr' ? 'Yüksek Lisans' : 'Graduate'}
              </div>
              <ul style={{ paddingLeft: 16, margin: 0, lineHeight: 1.55 }}>
                {COURSEWORK_GRAD.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 14, marginBottom: 4 }}>
                {lang === 'tr' ? 'Lisans' : 'Undergraduate'}
              </div>
              <ul style={{ paddingLeft: 16, margin: 0, lineHeight: 1.55 }}>
                {COURSEWORK_UNDERGRAD.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside style={{ borderLeft: `1px solid ${ink}`, paddingLeft: 22 }}>
          <SectionLabel small ink={ink}>{lang === 'tr' ? 'İLANLAR' : 'CLASSIFIEDS'}</SectionLabel>

          <div style={{ border: `3px double ${ink}`, padding: 14, marginBottom: 14 }}>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 9, letterSpacing: '0.2em', textAlign: 'center', marginBottom: 6 }}>
              ★ {lang === 'tr' ? 'İŞ İLANI' : 'POSITION SOUGHT'} ★
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 18, lineHeight: 1.1, textAlign: 'center', marginBottom: 6 }}>
              {lang === 'tr' ? 'İLERİ FULL-STACK POZİSYONU' : 'SENIOR FULL-STACK ROLE'}
            </div>
            <div style={{ fontSize: 11.5, lineHeight: 1.55, textAlign: 'justify' }}>
              {lang === 'tr'
                ? "İstanbul ve uzaktan çalışmaya açık. JS · Go · PHP · Vue · React · Kubernetes ekosistemi. Kurumsal SaaS'ta 3+ yıl, partner-facing ürünlerde tecrübeli. Uygun teklifler için iletişim:"
                : 'Open to Istanbul and remote. Full-stack: JS · Go · PHP · Vue · React · Kubernetes. 3+ years shipping enterprise SaaS. Suitable offers welcome:'}
            </div>
            <div
              style={{
                fontFamily: "'Special Elite', monospace",
                fontSize: 12,
                marginTop: 8,
                padding: '6px 8px',
                background: ink,
                color: paper,
                textAlign: 'center',
                letterSpacing: '0.05em',
              }}
            >
              ✉{' '}
              <a href={`mailto:${c.email}`} style={{ color: accent, textDecoration: 'none' }}>
                {c.email}
              </a>
            </div>
          </div>

          {smallAds.map((a, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${ink}`,
                padding: 10,
                marginBottom: 8,
                fontSize: 11.5,
                lineHeight: 1.5,
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 13 }}>{a.t}</div>
              <div style={{ fontStyle: 'italic' }}>{a.b}</div>
              <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, color: accent, marginTop: 4 }}>↳ {c.email}</div>
            </div>
          ))}

          <div style={{ marginTop: 14, padding: 12, background: ink, color: paper, fontFamily: "'Special Elite', monospace", fontSize: 11, lineHeight: 1.7 }}>
            <div style={{ color: accent, letterSpacing: '0.2em', marginBottom: 6 }}>▎{lang === 'tr' ? 'İRTİBAT' : 'DIRECT'}</div>
            <div>✉ {c.email}</div>
            <div>☏ {c.phone}</div>
            <div>⌘ {c.links.github}</div>
            <div>⌘ {c.links.linkedin}</div>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default AcademiaPage
