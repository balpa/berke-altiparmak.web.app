import React from 'react'
import { useNavigate } from 'react-router-dom'

const PAPER = '#f4ead2'
const INK = '#1a1a1a'
const ACCENT = '#a31621'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: PAPER,
        color: INK,
        fontFamily: "'Lora', Georgia, serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: 480,
          width: '100%',
          border: `3px double ${INK}`,
          padding: '28px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 10, letterSpacing: '0.25em', marginBottom: 8 }}>
          ── CLASSIFIED ──
        </div>
        <div
          style={{
            fontFamily: "'Cloister Black', 'UnifrakturMaguntia', serif",
            fontSize: 56,
            lineHeight: 1,
            margin: '6px 0 12px',
          }}
        >
          Berke Altıparmak
        </div>
        <div style={{ height: 1, background: INK, margin: '8px 0 18px' }} />
        <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 11, letterSpacing: '0.2em', color: ACCENT, marginBottom: 10 }}>
          ★ MISSING ★
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, margin: '0 0 8px', lineHeight: 1.05 }}>
          PAGE NOT FOUND
        </h1>
        <p style={{ fontStyle: 'italic', fontSize: 14, color: 'rgba(0,0,0,0.7)', margin: '0 0 20px' }}>
          The story you are looking for has gone to press elsewhere.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="Return to front page"
          style={{
            background: INK,
            color: PAPER,
            border: `1px solid ${INK}`,
            padding: '8px 18px',
            fontFamily: "'Special Elite', monospace",
            fontSize: 11,
            letterSpacing: '0.2em',
            cursor: 'pointer',
          }}
        >
          ← FRONT PAGE
        </button>
      </div>
    </div>
  )
}

export default NotFound
