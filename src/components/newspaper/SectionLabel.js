import React from 'react'

function SectionLabel({ children, small, ink }) {
  return (
    <div
      style={{
        fontFamily: "'Special Elite', monospace",
        fontSize: small ? 10 : 11,
        letterSpacing: '0.25em',
        borderTop: `3px double ${ink}`,
        borderBottom: `1px solid ${ink}`,
        padding: '6px 0',
        margin: small ? '16px 0 8px' : '26px 0 14px',
        textAlign: 'center',
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  )
}

export default SectionLabel
